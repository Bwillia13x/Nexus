export function getBrandName() {
  return process.env.NEXT_PUBLIC_BUSINESS_NAME || 'Prairie Signal';
}

// Returns a path or absolute URL suitable for next/image `src`.
// - If NEXT_PUBLIC_BUSINESS_LOGO is a full URL, return it as-is.
// - If it's a filename like "logo.png", prefix with "/images/".
// - If it's a path not starting with "/", prefix "/".
// - If nothing set, default to our bundled logo.
export function getLogoSrc(): string {
  const raw = (process.env.NEXT_PUBLIC_BUSINESS_LOGO || '').trim();
  const defaultPath = '/images/slate_prairiesignal_logo(notext).png';
  if (!raw) return defaultPath;
  if (/^https?:\/\//i.test(raw)) return raw; // absolute remote URL
  // Validate it looks like an image filename
  const hasImageExt = /\.(png|jpe?g|webp|svg|avif)$/i.test(raw);
  if (!hasImageExt) return defaultPath;
  let p = raw.startsWith('/') ? raw : `/${raw}`;
  // If it's just a single segment like "/logo.png", put it under /images
  if (!p.slice(1).includes('/')) p = `/images${p}`;
  return p;
}

// Build an absolute URL for JSON-LD: if `src` is absolute already, return it; otherwise prefix with site origin.
export function getAbsoluteLogoUrl(siteOrigin: string): string {
  const src = getLogoSrc();
  if (/^https?:\/\//i.test(src)) return src;
  const base = siteOrigin.replace(/\/$/, '');
  return `${base}${src}`;
}
