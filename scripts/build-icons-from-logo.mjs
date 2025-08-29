#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const src = path.join(
  root,
  'public',
  'images',
  'slate_prairiesignal_logo(notext).png'
);

const outDir = path.join(root, 'public');
const targets = [
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'android-chrome-192x192.png', size: 192 },
  { file: 'android-chrome-512x512.png', size: 512 },
  { file: 'favicon-32x32.png', size: 32 },
  { file: 'favicon-16x16.png', size: 16 },
];

async function main() {
  try {
    await fs.access(src);
  } catch {
    console.error('[icons] Source logo not found:', src);
    process.exit(1);
  }

  await Promise.all(
    targets.map(async t => {
      const out = path.join(outDir, t.file);
      await sharp(src)
        .resize(t.size, t.size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toFile(out);
      console.log('[icons] wrote', path.relative(root, out));
    })
  );
}

main().catch(err => {
  console.error('[icons] Failed:', err);
  process.exit(1);
});
