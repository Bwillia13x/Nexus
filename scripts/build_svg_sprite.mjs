#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const SRC_ROOT = path.join(ROOT, 'public', 'icons-svg');
const OUT_FILE = path.join(ROOT, 'public', 'icons-sprite.svg');

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(p);
    } else if (e.isFile() && e.name.toLowerCase().endsWith('.svg')) {
      yield p;
    }
  }
}

function idFromRel(rel) {
  const base = rel.replace(/\.svg$/i, '');
  return 'ps--' + base.split(path.sep).join('--');
}

function extractSvgParts(svg) {
  const viewBoxMatch = svg.match(/viewBox="([^"]+)"/i);
  const widthMatch = svg.match(/\bwidth="([^"]+)"/i);
  const heightMatch = svg.match(/\bheight="([^"]+)"/i);
  const innerMatch = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  const inner = innerMatch ? innerMatch[1] : svg;
  const viewBox = viewBoxMatch
    ? viewBoxMatch[1]
    : widthMatch && heightMatch
      ? `0 0 ${parseFloat(widthMatch[1]) || 24} ${parseFloat(heightMatch[1]) || 24}`
      : '0 0 24 24';
  // Normalize fills to currentColor
  const normalized = inner
    .replace(/fill="#000000"/gi, 'fill="currentColor"')
    .replace(/fill="#000"/gi, 'fill="currentColor"');
  return { viewBox, content: normalized };
}

async function main() {
  const symbols = [];
  for await (const file of walk(SRC_ROOT)) {
    const rel = path.relative(SRC_ROOT, file);
    const id = idFromRel(rel);
    const raw = await fs.readFile(file, 'utf8');
    const { viewBox, content } = extractSvgParts(raw);
    symbols.push(`<symbol id="${id}" viewBox="${viewBox}">${content}</symbol>`);
  }
  const sprite = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n${symbols.join('\n')}\n</svg>\n`;
  await fs.writeFile(OUT_FILE, sprite);
  console.log(`Wrote ${path.relative(ROOT, OUT_FILE)} with ${symbols.length} symbols`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

