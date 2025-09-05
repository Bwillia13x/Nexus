#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, 'png icons');

function normalizeFileName(name) {
  // Remove accidental trailing ' .png' and duplicate extensions, trim spaces
  let n = name.replace(/\s+\.png$/i, '.png');
  // If name ends with .png.png, collapse to .png
  n = n.replace(/\.png\.png$/i, '.png');
  // Trim stray spaces in name segments
  n = n.replace(/\s+/g, ' ').trim();
  return n;
}

function colonPathToFs(name) {
  // Expect names beginning with 'public:icons:...'
  const parts = name.split(':');
  if (parts[0] !== 'public') return null;
  const rel = path.join(...parts.slice(1)); // icons/.../file.png
  return path.join('public', rel);
}

async function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`Source directory not found: ${SRC_DIR}`);
    process.exit(1);
  }

  const entries = await fs.promises.readdir(SRC_DIR, { withFileTypes: true });
  const finalDirs = entries.filter(e => e.isDirectory() && e.name.startsWith('final_'));

  let copied = 0;
  for (const dir of finalDirs) {
    const dirPath = path.join(SRC_DIR, dir.name);
    const files = await fs.promises.readdir(dirPath, { withFileTypes: true });
    for (const f of files) {
      if (!f.isFile()) continue;
      if (!/\.png$/i.test(f.name)) continue;

      const normalized = normalizeFileName(f.name);
      const destRel = colonPathToFs(normalized);
      if (!destRel) {
        console.warn(`Skipping non-public target: ${f.name}`);
        continue;
      }

      const destPath = path.join(ROOT, destRel);
      const destDir = path.dirname(destPath);
      await fs.promises.mkdir(destDir, { recursive: true });

      const srcPath = path.join(dirPath, f.name);
      await fs.promises.copyFile(srcPath, destPath);
      copied++;
      console.log(`Copied: ${path.relative(ROOT, srcPath)} -> ${destRel}`);
    }
  }

  console.log(`\nDone. Copied ${copied} PNGs into public/…`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

