#!/usr/bin/env node
import path from 'node:path';
import fs from 'node:fs/promises';
import pngToIco from 'png-to-ico';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const png16 = path.join(publicDir, 'favicon-16x16.png');
const png32 = path.join(publicDir, 'favicon-32x32.png');
const outIco = path.join(publicDir, 'favicon.ico');

async function main() {
  const inputs = [];
  for (const f of [png16, png32]) {
    try {
      await fs.access(f);
      inputs.push(f);
    } catch {}
  }
  if (inputs.length === 0) {
    console.error('[favicon] No PNG sources found. Run icons:from-logo first.');
    process.exit(1);
  }
  const buf = await pngToIco(inputs);
  await fs.writeFile(outIco, buf);
  console.log('[favicon] wrote', path.relative(root, outIco));
}

main().catch(err => {
  console.error('[favicon] Failed:', err);
  process.exit(1);
});
