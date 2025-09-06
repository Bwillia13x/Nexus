#!/usr/bin/env node
import { spawn } from 'node:child_process';
import process from 'node:process';
import net from 'node:net';

// Will be set at runtime after selecting a free port
let PORT = '';
let BASE = '';

async function findFreePort(start) {
  return new Promise(resolve => {
    const tryPort = p => {
      const server = net.createServer();
      server.unref();
      server.on('error', err => {
        if (err && err.code === 'EADDRINUSE') {
          server.close();
          tryPort(p + 1);
        } else {
          // On unexpected error, try next port
          tryPort(p + 1);
        }
      });
      // Use unspecified host to cover both IPv6 '::' and IPv4
      server.listen(p, () => {
        const addr = server.address();
        const found = typeof addr === 'object' && addr ? addr.port : p;
        server.close(() => resolve(found));
      });
    };
    tryPort(Number(start) || 4000);
  });
}

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
  // Preflight: pick a free port starting at env PORT or 4000
  let p = await findFreePort(Number(process.env.PORT || '4000'));
  PORT = String(p);
  BASE = `http://localhost:${PORT}`;

  const nextBin = './node_modules/next/dist/bin/next';
  let srv;
  let started = false;
  for (let attempt = 0; attempt < 10 && !started; attempt++) {
    console.log(`[smoke] Starting Next.js server on :${PORT} ...`);
    srv = spawn('node', [nextBin, 'start', '-p', PORT], {
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, PORT, CONTACT_DISABLE_EMAIL: '1' },
    });

    let sawInUse = false;
    srv.stdout.on('data', d => process.stdout.write(`[next] ${d}`));
    srv.stderr.on('data', d => {
      const s = String(d);
      if (s.includes('EADDRINUSE')) sawInUse = true;
      process.stderr.write(`[next:err] ${d}`);
    });

    const ready = await waitUntilReady();
    if (!ready) {
      if (sawInUse) {
        console.warn(`[smoke] Port ${PORT} in use; retrying on :${p + 1}`);
        srv.kill('SIGTERM');
        await wait(500);
        p = p + 1;
        PORT = String(p);
        BASE = `http://localhost:${PORT}`;
        continue;
      }
      console.error('[smoke] Server did not become ready in time');
      srv.kill('SIGTERM');
      process.exit(1);
    }
    started = true;
  }

  if (!started) {
    console.error('[smoke] Could not start Next.js server on any port');
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
        const locs = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(
          m => m[1]
        );
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
  // /book is canonical and should render OK
  await check('GET /book', async () => {
    const res = await fetch(BASE + '/book', { redirect: 'manual' });
    if (!res.ok) throw new Error(`/book -> ${res.status}`);
  });
  // Legacy /schedule should redirect to /book
  await check('GET /schedule redirects', async () => {
    const res = await fetch(BASE + '/schedule', { redirect: 'manual' });
    if (res.status < 300 || res.status >= 400) {
      throw new Error(`/schedule did not redirect (${res.status})`);
    }
    const loc =
      res.headers.get('location') || res.headers.get('Location') || '';
    if (!loc.endsWith('/book')) throw new Error(`/schedule redirect -> ${loc}`);
  });
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
    '/schedule',
  ]);
  for (const p of discovered) {
    if (!seeded.has(p)) {
      await check(`GET ${p}`, () => get200(p));
    }
  }

  // Security headers present on root
  await check('Security headers on /', async () => {
    const res = await fetch(BASE + '/', { redirect: 'manual' });
    const header = name =>
      res.headers.get(name) || res.headers.get(name.toLowerCase());
    const csp = header('content-security-policy');
    if (!csp || !/default-src 'self'/.test(csp)) {
      throw new Error('CSP missing or default-src \u0027self\u0027 not found');
    }
    const corp = header('cross-origin-resource-policy');
    if (!corp) throw new Error('Cross-Origin-Resource-Policy missing');
    const xfo = header('x-frame-options');
    if (!xfo) throw new Error('X-Frame-Options missing');
  });

  // API CORS present and not wildcard
  await check('API CORS headers on /api/contact', async () => {
    let res;
    try {
      res = await fetch(BASE + '/api/contact', { method: 'OPTIONS' });
    } catch {
      res = await fetch(BASE + '/api/contact');
    }
    const header = name =>
      res.headers.get(name) || res.headers.get(name.toLowerCase());
    const acao = header('access-control-allow-origin');
    if (!acao) throw new Error('Access-Control-Allow-Origin missing');
    if (acao.trim() === '*')
      throw new Error('Access-Control-Allow-Origin must not be *');
  });

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
        company: 'PrairieSignal',
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
          if (msg.type() === 'error')
            clientErrors.push(`console: ${msg.text()}`);
        });
        page.on('requestfailed', req => {
          const f = req.failure();
          clientErrors.push(
            `requestfailed: ${req.url()} :: ${f?.errorText || 'failed'}`
          );
        });
        page.on('response', res => {
          const status = res.status();
          if (status >= 400)
            clientErrors.push(`response: ${res.url()} :: ${status}`);
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
          console.warn(
            `[a11y] ${path} had ${clientErrors.length} client error(s).`
          );
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
