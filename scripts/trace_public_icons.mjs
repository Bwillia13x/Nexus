#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import potrace from 'potrace';
import { optimize } from 'svgo';

const { trace } = potrace;

const ROOT = process.cwd();
const SRC_ROOT = path.join(ROOT, 'public', 'icons');
const OUT_ROOT = path.join(ROOT, 'public', 'icons-svg');

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(p);
    } else if (e.isFile() && e.name.toLowerCase().endsWith('.png')) {
      yield p;
    }
  }
}

async function tracePngToSvg(inputPath, outputPath) {
  const prep = await sharp(inputPath)
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .grayscale()
    .normalize()
    .threshold(185)
    .toBuffer();

  const tmp = inputPath + '.tmp.png';
  await fs.writeFile(tmp, prep);

  const svg = await new Promise((resolve, reject) => {
    trace(
      tmp,
      { turdSize: 50, threshold: 185, optTolerance: 0.4, color: '#000000' },
      (err, s) => (err ? reject(err) : resolve(s))
    );
  });

  try {
    await fs.rm(tmp);
  } catch {}

  const { data: min } = optimize(svg, { path: inputPath, multipass: true });
  await ensureDir(path.dirname(outputPath));
  await fs.writeFile(outputPath, min);
}

async function main() {
  await ensureDir(OUT_ROOT);
  let count = 0;
  for await (const pngPath of walk(SRC_ROOT)) {
    const rel = path.relative(SRC_ROOT, pngPath);
    const outPath = path.join(OUT_ROOT, rel.replace(/\.png$/i, '.svg'));
    await tracePngToSvg(pngPath, outPath);
    console.log('✓ svg', path.relative(ROOT, outPath));
    count++;
  }
  console.log(`Done. Generated ${count} SVGs to public/icons-svg`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

