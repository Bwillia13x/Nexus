import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import potrace from 'potrace';
import { optimize } from 'svgo';

const { trace } = potrace;

const SRC = 'icons/png';
const OUT = 'icons/svg';
await fs.mkdir(OUT, { recursive: true });

const files = (await fs.readdir(SRC)).filter(f =>
  f.toLowerCase().endsWith('.png')
);

for (const f of files) {
  const input = path.join(SRC, f);
  const tmp = path.join(SRC, `.__pre_${f}`);

  // 1) Preprocess: flatten alpha, grayscale, normalize, threshold (reduces glow/soft edges)
  const buf = await sharp(input)
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .grayscale()
    .normalize()
    .threshold(185)
    .toBuffer();
  await fs.writeFile(tmp, buf);

  // 2) Trace to SVG paths (filled), not strokes (quick but acceptable)
  const svg = await new Promise((resolve, reject) => {
    trace(
      tmp,
      { turdSize: 50, threshold: 185, optTolerance: 0.4, color: '#000000' },
      (err, s) => (err ? reject(err) : resolve(s))
    );
  });

  // 3) Optimize with SVGO
  const { data: min } = optimize(svg, { path: input, multipass: true });

  const out = path.join(OUT, f.replace(/\.png$/i, '.svg'));
  await fs.writeFile(out, min);
  await fs.rm(tmp);
  console.log('✓', out);
}
