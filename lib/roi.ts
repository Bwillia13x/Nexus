export interface RoiPresetLike {
  hours: number;
  rate: number;
  weeks: number;
  price: number;
}

export function buildRoiHref(
  preset: RoiPresetLike,
  options: { pilotId?: string; pathname?: string } = {}
) {
  const params = new URLSearchParams();
  params.set('h', String(preset.hours));
  params.set('r', String(preset.rate));
  params.set('w', String(preset.weeks));
  params.set('p', String(preset.price));
  if (options.pilotId) {
    params.set('pilot', options.pilotId);
  }
  const pathname = options.pathname ?? '/';
  return `${pathname}?${params.toString()}#roi`;
}
