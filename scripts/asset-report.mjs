#!/usr/bin/env node
import { spawn } from 'node:child_process';
import net from 'node:net';

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function findFreePort(start = 4010) {
  return new Promise(resolve => {
    const tryPort = p => {
      const server = net.createServer();
      server.unref();
      server.on('error', () => {
        server.close();
        tryPort(p + 1);
      });
      server.listen(p, () => {
        const a = server.address();
        server.close(() => resolve(a.port || p));
      });
    };
    tryPort(start);
  });
}

async function waitUntilReady(base, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(base + '/');
      if (res.ok) return true;
    } catch {}
    await wait(300);
  }
  return false;
}

async function withServer(fn) {
  const port = await findFreePort(Number(process.env.PORT || 4010));
  const base = `http://localhost:${port}`;
  const nextBin = './node_modules/next/dist/bin/next';
  const srv = spawn('node', [nextBin, 'start', '-p', String(port)], {
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, PORT: String(port), CONTACT_DISABLE_EMAIL: '1' },
  });
  srv.stdout.on('data', d => process.stdout.write(`[next] ${d}`));
  srv.stderr.on('data', d => process.stderr.write(`[next:err] ${d}`));
  const ready = await waitUntilReady(base);
  if (!ready) {
    srv.kill('SIGTERM');
    throw new Error('Server not ready');
  }
  try {
    return await fn(base);
  } finally {
    srv.kill('SIGTERM');
  }
}

async function reportAssets(base) {
  const { default: puppeteer } = await import('puppeteer');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  const pages = ['/', '/about', '/services', '/playbooks', '/faq', '/training'];
  const totals = {
    images: 0,
    bytes: 0,
    requests: 0,
    sprite: 0,
    svg: 0,
    png: 0,
  };
  const perPage = [];

  for (const path of pages) {
    const stats = {
      path,
      images: 0,
      bytes: 0,
      requests: 0,
      sprite: 0,
      svg: 0,
      png: 0,
    };
    const top = [];
    const seen = new Set();
    page.removeAllListeners('response');
    page.on('response', async res => {
      try {
        const req = res.request();
        const url = new URL(res.url());
        if (url.origin !== new URL(base).origin) return;
        const type = req.resourceType();
        const pathname = url.pathname;
        stats.requests++;
        if (pathname.endsWith('/icons-sprite.svg')) stats.sprite++;
        if (pathname.includes('/icons-svg/')) stats.svg++;
        if (pathname.includes('/icons/') && pathname.endsWith('.png'))
          stats.png++;
        if (type === 'image' || pathname.match(/\.(svg|png)$/)) {
          if (seen.has(pathname)) return; // avoid double-counting
          seen.add(pathname);
          stats.images++;
          let len = Number(res.headers()['content-length'] || 0);
          if (!len) {
            try {
              const buf = await res.buffer();
              len = buf.length;
            } catch {}
          }
          const size = len || 0;
          stats.bytes += size;
          top.push({ url: pathname, size });
        }
      } catch {}
    });
    await page.goto(base + path, { waitUntil: 'networkidle0' });
    top.sort((a, b) => b.size - a.size);
    stats.top = top.slice(0, 5);
    perPage.push(stats);
    totals.images += stats.images;
    totals.bytes += stats.bytes;
    totals.requests += stats.requests;
    totals.sprite += stats.sprite;
    totals.svg += stats.svg;
    totals.png += stats.png;
  }

  await browser.close();
  return { totals, perPage };
}

async function main() {
  const { totals, perPage } = await withServer(base => reportAssets(base));
  const kb = n => (n / 1024).toFixed(1) + 'kB';
  console.log('\nAsset summary (images only):');
  for (const s of perPage) {
    console.log(
      `${s.path.padEnd(12)}  images:${String(s.images).padStart(3)}  bytes:${kb(s.bytes).padStart(8)}  requests:${String(s.requests).padStart(3)}  sprite:${s.sprite} svg:${s.svg} png:${s.png}`
    );
    for (const t of s.top || []) {
      console.log(
        `  - ${(t.url + '').slice(0, 120)}`.padEnd(68) + ` ${kb(t.size)}`
      );
    }
  }
  console.log(
    `TOTAL          images:${String(totals.images).padStart(3)}  bytes:${kb(totals.bytes).padStart(8)}  requests:${String(totals.requests).padStart(3)}  sprite:${totals.sprite} svg:${totals.svg} png:${totals.png}`
  );
}

main().catch(err => {
  console.error('[asset-report] Failed:', err);
  process.exit(1);
});
