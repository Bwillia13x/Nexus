#!/usr/bin/env node
import { spawn } from 'node:child_process';
import process from 'node:process';

const PORT = process.env.PORT || '4000';
const BASE = `http://localhost:${PORT}`;

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function waitUntilReady(timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(BASE + '/');
      if (res.ok) return true;
    } catch {}
    await wait(500);
  }
  return false;
}

async function run() {
  console.log(`[smoke] Starting Next.js server on :${PORT} ...`);
  const nextBin = './node_modules/next/dist/bin/next';
  const srv = spawn('node', [nextBin, 'start', '-p', PORT], {
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, PORT, CONTACT_DISABLE_EMAIL: '1' },
  });

  srv.stdout.on('data', d => process.stdout.write(`[next] ${d}`));
  srv.stderr.on('data', d => process.stderr.write(`[next:err] ${d}`));

  let ready = await waitUntilReady();
  if (!ready) {
    console.error('[smoke] Server did not become ready in time');
    srv.kill('SIGTERM');
    process.exit(1);
  }

  let ok = true;
  const results = [];
  async function check(name, fn) {
    try {
      await fn();
      results.push({ name, ok: true });
    } catch (e) {
      ok = false;
      results.push({ name, ok: false, error: e?.message || String(e) });
    }
  }

  const get200 = async path => {
    const res = await fetch(BASE + path, { redirect: 'manual' });
    if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  };

  // Discover additional routes from sitemap for broader coverage
  const discoverSitemapPaths = async () => {
    const tried = [];
    const candidates = ['/sitemap.xml', '/sitemap-0.xml'];
    for (const p of candidates) {
      try {
        const res = await fetch(BASE + p);
        tried.push(`${p}:${res.status}`);
        if (!res.ok) continue;
        const xml = await res.text();
        const locs = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(m => m[1]);
        const paths = [];
        for (const loc of locs) {
          try {
            const url = new URL(loc);
            // Only include same-origin paths
            if (url.origin === new URL(BASE).origin) paths.push(url.pathname);
          } catch {
            // If it's already a path
            if (loc.startsWith('/')) paths.push(loc);
          }
        }
        // Deduplicate and sort stable
        return Array.from(new Set(paths)).sort();
      } catch {}
    }
    console.warn(`[smoke] Could not parse sitemap; tried: ${tried.join(', ')}`);
    return [];
  };

  await check('GET /', () => get200('/'));
  await check('GET /about', () => get200('/about'));
  await check('GET /services', () => get200('/services'));
  await check('GET /contact', () => get200('/contact'));
  await check('GET /cases', () => get200('/cases'));
  await check('GET /cases/ai-assistant-calgary-retail', () =>
    get200('/cases/ai-assistant-calgary-retail')
  );
  await check('GET /cases/automation-pilot-ops', () =>
    get200('/cases/automation-pilot-ops')
  );
  await check('GET /book', () => get200('/book'));
  await check('GET /thank-you', () => get200('/thank-you'));

  // Auto-discovered routes from sitemap
  const discovered = await discoverSitemapPaths();
  const seeded = new Set([
    '/',
    '/about',
    '/services',
    '/contact',
    '/cases',
    '/cases/ai-assistant-calgary-retail',
    '/cases/automation-pilot-ops',
    '/book',
    '/thank-you',
  ]);
  for (const p of discovered) {
    if (!seeded.has(p)) {
      await check(`GET ${p}`, () => get200(p));
    }
  }

  await check('POST /api/contact (honeypot)', async () => {
    const res = await fetch(BASE + '/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hp: 'bot' }),
    });
    if (!res.ok) throw new Error(`/api/contact honeypot -> ${res.status}`);
    const json = await res.json();
    if (!json?.ok) throw new Error('honeypot did not return ok');
  });

  await check('POST /api/contact (valid)', async () => {
    const res = await fetch(BASE + '/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Smoke Tester',
        email: 'smoke@example.com',
        company: 'Nexus',
        message: 'This is a smoke test message with sufficient length.',
      }),
    });
    if (!res.ok) throw new Error(`/api/contact valid -> ${res.status}`);
    const json = await res.json();
    if (!json?.ok) throw new Error('valid submission did not return ok');
  });

  // Optional automated accessibility checks (axe-core via Puppeteer)
  // Dynamically import dependencies so the script still works if they are not installed yet.
  let puppeteerMod = null;
  let axeMod = null;
  let axeCoreMod = null;
  try {
    puppeteerMod = await import('puppeteer');
    axeMod = await import('@axe-core/puppeteer');
    try {
      axeCoreMod = await import('axe-core');
    } catch (e) {
      console.warn(
        '[smoke] axe-core direct import failed; will rely on puppeteer helper'
      );
    }
  } catch (e) {
    console.log('[smoke] a11y deps not installed; skipping axe-core checks');
  }

  if (puppeteerMod && axeMod) {
    const puppeteer = puppeteerMod.default || puppeteerMod;
    const AxePuppeteer = axeMod.AxePuppeteer;
    const AxeBuilderDefault = axeMod.default; // fallback API in some versions
    const axeSource =
      (axeCoreMod && (axeCoreMod.source || axeCoreMod.default?.source)) ||
      undefined;

    const scanPage = async path => {
      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      try {
        const page = await browser.newPage();
        const clientErrors = [];
        page.on('console', msg => {
          if (msg.type() === 'error') clientErrors.push(`console: ${msg.text()}`);
        });
        page.on('requestfailed', req => {
          const f = req.failure();
          clientErrors.push(`requestfailed: ${req.url()} :: ${f?.errorText || 'failed'}`);
        });
        page.on('response', res => {
          const status = res.status();
          if (status >= 400) clientErrors.push(`response: ${res.url()} :: ${status}`);
        });
        await page.goto(BASE + path, { waitUntil: 'networkidle2' });
        let results;
        try {
          if (AxePuppeteer) {
            const builder = new AxePuppeteer(page, axeSource);
            results = await builder
              .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
              .analyze();
          } else if (AxeBuilderDefault) {
            // Some builds export a default AxeBuilder({ page, axeSource }) API
            const builder = new AxeBuilderDefault({ page, axeSource });
            results = await builder
              .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
              .analyze();
          } else if (axeSource) {
            // Fallback: inject axe-core directly and run in the page context
            await page.addScriptTag({ content: axeSource });
            results = await page.evaluate(async () => {
              // eslint-disable-next-line no-undef
              return await axe.run(document, {
                runOnly: {
                  type: 'tag',
                  values: ['wcag2a', 'wcag2aa', 'wcag21aa'],
                },
              });
            });
          } else {
            throw new Error('No compatible axe-core builder and no axe source');
          }
        } catch (e) {
          if (axeSource) {
            // Last-resort fallback in case the builder path failed above
            try {
              await page.addScriptTag({ content: axeSource });
              results = await page.evaluate(async () => {
                // eslint-disable-next-line no-undef
                return await axe.run(document, {
                  runOnly: {
                    type: 'tag',
                    values: ['wcag2a', 'wcag2aa', 'wcag21aa'],
                  },
                });
              });
            } catch (inner) {
              throw new Error(
                `axe analyze failed on ${path}: ${e?.message || e} // fallback failed: ${
                  inner?.message || inner
                }`
              );
            }
          } else {
            throw new Error(
              `axe analyze failed on ${path}: ${e?.message || e}`
            );
          }
        }

        if (results.violations?.length) {
          const summary = results.violations
            .map(v => `${v.id}(${v.impact || 'n/a'}): ${v.nodes?.length || 0}`)
            .join('; ');
          // Extra logging for color-contrast details to help debugging
          const cc = results.violations.filter(v => v.id === 'color-contrast');
          if (cc.length) {
            console.error(`[a11y] ${path} color-contrast details:`);
            for (const v of cc) {
              for (const n of v.nodes || []) {
                const target = Array.isArray(n.target)
                  ? n.target.join(' ')
                  : String(n.target || '');
                const summaryLine = n.failureSummary || '';
                console.error(`  - target: ${target} :: ${summaryLine}`);
              }
            }
          }
          throw new Error(
            `${path} has ${results.violations.length} a11y violation(s): ${summary}`
          );
        }

        // Warn for client-side console errors (non-fatal)
        if (clientErrors.length) {
          console.warn(`[a11y] ${path} had ${clientErrors.length} client error(s).`);
          console.warn(`       First: ${clientErrors[0]}`);
        }
      } finally {
        await browser.close();
      }
    };

    await check('A11y scan /', () => scanPage('/'));
    await check('A11y scan /about', () => scanPage('/about'));
    await check('A11y scan /services', () => scanPage('/services'));
    await check('A11y scan /contact', () => scanPage('/contact'));
    await check('A11y scan /cases', () => scanPage('/cases'));
    await check('A11y scan /cases/ai-assistant-calgary-retail', () =>
      scanPage('/cases/ai-assistant-calgary-retail')
    );
    await check('A11y scan /cases/automation-pilot-ops', () =>
      scanPage('/cases/automation-pilot-ops')
    );
    await check('A11y scan /book', () => scanPage('/book'));
    await check('A11y scan /thank-you', () => scanPage('/thank-you'));

    // Auto-discovered a11y scans for any remaining sitemap paths
    for (const p of discovered) {
      if (!seeded.has(p)) {
        await check(`A11y scan ${p}`, () => scanPage(p));
      }
    }
  }

  console.log('\n[smoke] Results:');
  for (const r of results) {
    console.log(
      ` - ${r.ok ? '✅' : '❌'} ${r.name}${r.ok ? '' : ' :: ' + r.error}`
    );
  }

  srv.kill('SIGTERM');
  await wait(500);

  if (!ok) {
    console.error('[smoke] Failures detected');
    process.exit(1);
  }
  console.log('[smoke] All checks passed');
}

run().catch(e => {
  console.error('[smoke] Uncaught error', e);
  process.exit(1);
});
