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

  await check('GET /', () => get200('/'));
  await check('GET /about', () => get200('/about'));
  await check('GET /services', () => get200('/services'));
  await check('GET /contact', () => get200('/contact'));

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
