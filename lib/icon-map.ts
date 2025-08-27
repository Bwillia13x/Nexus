import type { IconName } from '@/components/ui/MaybeIcon';

// Map emojis to specific SVG icon component names from `components/icons/index.ts`
// TODO: Fill these with your desired mappings, e.g. '🔒': 'Icon_XXXXXXXX...'
export const emojiToIconName: Partial<Record<string, IconName>> = {
  // '🔒': 'Icon_...',
  // '🛡️': 'Icon_...',
  // '☁️': 'Icon_...',
  // '📧': 'Icon_...',
  // '💼': 'Icon_...',
  // '📊': 'Icon_...',
  // '🛒': 'Icon_...',
  // '💳': 'Icon_...',
  // '📱': 'Icon_...',
  // '💬': 'Icon_...',
  // '👥': 'Icon_...',
  // '🎯': 'Icon_...',
  // '🔗': 'Icon_...',
  // '🤖': 'Icon_...',
  // '⚙️': 'Icon_...',
  // '⚠️': 'Icon_...',
  // '📅': 'Icon_...',
  '✓': 'Icon_875B71797Cf94Fad885997F495C11A91', // performance-verified
  '📄': 'Icon_0Bcafb062E924582Acd18A98Ffe8608A', // profile-document
  '🤖': 'Icon_65E625722Ad547DcAeb7C6Efdb5D47C0', // assistant-bot
  '⚙️': 'Icon_765F311E193E45968De74D3E8F4659B0', // automation-gearflow
  '📊': 'Icon_233425DdFfe34252A8Aa3418B9227019', // analytics-bars
  '📅': 'Icon_2642A004E3C94337BfdcC4A264Dc7A20', // integration-launch-calendar
  '🔗': 'Icon_722C926CF646430792823C5A866C7F2A', // plug-connect
  '⏱️': 'Icon_806Efc602Df9439E8B900043Feb95402', // time-clock
  '💰': 'Icon_2F73B0135B0B4C6498BcC7702860C3A5', // currency-coins
  '✗': 'Icon_41E311FcE18240AcBe4A1Daaa1Ead99E', // no-black-box
  '⚠️': 'Icon_3251Cc6A14D64FfcB48B240118B6B99C', // security-shield-fanout-bolt
  '🔒': 'Icon_0F4Cda311Eef42578B800635C31Fbe79', // security-shield-fanout
  '🛡️': 'Icon_5745Ce7BB374442EB9E61Ce630C95Fad', // security-shield-canada
  '☁️': 'Icon_13D0Dd33B6C84841Ac97F1Db4Eea7D9C', // database-verified
  '📧': 'Icon_8040Fdca6Faa47938Fa239F7387D802D', // email-send
  '👥': 'Icon_004Bcbb4B5A1460381D8215F86936642', // team-analytics
  '🛠️': 'Icon_48B7Cd7221614E958Ce8Aa44592Dd7A9', // toolbox
  '🔄': 'Icon_784Ef77D8Ff248B2B87DC3B16700Df4C', // devops-tooling
  '📋': 'Icon_0Bcafb062E924582Acd18A98Ffe8608A', // profile-document
};

// Map canonical icon names (kebab-case) to SVG icon component names from `components/icons/index.ts`
export const canonicalToIconName: Partial<Record<string, IconName>> = {
  'team-analytics': 'Icon_004Bcbb4B5A1460381D8215F86936642',
  'profile-document': 'Icon_0Bcafb062E924582Acd18A98Ffe8608A',
  'quality-assurance': 'Icon_0Bd5Efa3Ae0D40B381D34A916714D8F6',
  'security-shield-fanout': 'Icon_0F4Cda311Eef42578B800635C31Fbe79',
  'database-verified': 'Icon_13D0Dd33B6C84841Ac97F1Db4Eea7D9C',
  'voice-spotlight': 'Icon_1E0F6B6EEb8E4D38A8714D8Ca72Fc687',
  'analytics-bars': 'Icon_233425DdFfe34252A8Aa3418B9227019',
  'integration-launch-calendar': 'Icon_2642A004E3C94337BfdcC4A264Dc7A20',
  'currency-coins': 'Icon_2F73B0135B0B4C6498BcC7702860C3A5',
  'security-shield-fanout-bolt': 'Icon_3251Cc6A14D64FfcB48B240118B6B99C',
  'no-black-box': 'Icon_41E311FcE18240AcBe4A1Daaa1Ead99E',
  toolbox: 'Icon_48B7Cd7221614E958Ce8Aa44592Dd7A9',
  'security-shield-canada': 'Icon_5745Ce7BB374442EB9E61Ce630C95Fad',
  'assistant-bot': 'Icon_65E625722Ad547DcAeb7C6Efdb5D47C0',
  'map-route-pin': 'Icon_71E828DfB2Dd41DfA4Ad971Fa5D3B85D',
  'automation-gearflow': 'Icon_765F311E193E45968De74D3E8F4659B0',
  'handoff-upload': 'Icon_679A490EEbd44Bd29C901A459866132A',
  'inbox-download': 'Icon_69Cb01161Bb2468A941A0B9F093C2B52',
  'plug-connect': 'Icon_722C926CF646430792823C5A866C7F2A',
  'monthly-billing': 'Icon_7488997405764125898EAadd2B638988',
  'devops-tooling': 'Icon_784Ef77D8Ff248B2B87DC3B16700Df4C',
  'email-send': 'Icon_8040Fdca6Faa47938Fa239F7387D802D',
  'time-clock': 'Icon_806Efc602Df9439E8B900043Feb95402',
  'performance-verified': 'Icon_875B71797Cf94Fad885997F495C11A91',
};

// Canonical tool names we plan to map:
// - 'Google Workspace' (aliases: 'g suite', 'gsuite', 'google apps', 'gmail')
// - 'Microsoft 365' (aliases: 'office 365', 'm365', 'office')
// - 'QuickBooks' (aliases: 'qb', 'intuit quickbooks')
// - 'Shopify'
// - 'Stripe'
// - 'Square' (aliases: 'block square')
// - 'Slack'
// - 'Teams' (aliases: 'microsoft teams')
// - 'HubSpot' (aliases: 'hubspot crm')
// - 'Zapier/Make' (aliases: 'zapier', 'make', 'integromat')

// Map product/tool names to SVG icon component names
export const toolToIconName: Partial<Record<string, IconName>> = {
  // Note: these are generic, brand-agnostic glyphs themed via currentColor
  'Google Workspace': 'Icon_8040Fdca6Faa47938Fa239F7387D802D', // email-send
  'Microsoft 365': 'Icon_0Bcafb062E924582Acd18A98Ffe8608A', // profile-document
  QuickBooks: 'Icon_7488997405764125898EAadd2B638988', // monthly-billing
  Shopify: 'Icon_722C926CF646430792823C5A866C7F2A', // plug-connect
  Stripe: 'Icon_2F73B0135B0B4C6498BcC7702860C3A5', // currency-coins
  Square: 'Icon_2F73B0135B0B4C6498BcC7702860C3A5', // currency-coins
  Slack: 'Icon_65E625722Ad547DcAeb7C6Efdb5D47C0', // assistant-bot
  Teams: 'Icon_004Bcbb4B5A1460381D8215F86936642', // team-analytics
  HubSpot: 'Icon_765F311E193E45968De74D3E8F4659B0', // automation-gearflow
  'Zapier/Make': 'Icon_722C926CF646430792823C5A866C7F2A', // plug-connect
};

function normalizeKey(value: string): string {
  const s = value.toLowerCase().trim();
  return s.replace(/\s+/g, ' ');
}

// Normalize a canonical icon name (accepts spaces/underscores, outputs kebab-case)
function normalizeCanonical(value: string): string {
  const s = value.toLowerCase().trim();
  return s.replace(/[\s_]+/g, '-');
}

// Common aliases for tools mapped to their canonical keys in toolToIconName
const toolAliases: Record<string, string> = {
  // Google Workspace
  'g suite': 'Google Workspace',
  gsuite: 'Google Workspace',
  'google apps': 'Google Workspace',
  gmail: 'Google Workspace',

  // Microsoft 365
  'office 365': 'Microsoft 365',
  m365: 'Microsoft 365',
  office: 'Microsoft 365',
  'microsoft office': 'Microsoft 365',
  'microsoft teams': 'Teams',

  // QuickBooks
  qb: 'QuickBooks',
  'intuit quickbooks': 'QuickBooks',

  // Square
  'block square': 'Square',
  block: 'Square',

  // Zapier/Make
  zapier: 'Zapier/Make',
  make: 'Zapier/Make',
  'make.com': 'Zapier/Make',
  integromat: 'Zapier/Make',
};

export function getIconNameByEmoji(emoji?: string): IconName | undefined {
  if (!emoji) return undefined;
  return emojiToIconName[emoji];
}

export function getIconNameByCanonical(
  canonical?: string
): IconName | undefined {
  if (!canonical) return undefined;
  const normalized = normalizeCanonical(canonical);
  return canonicalToIconName[normalized];
}

export function getIconNameByTool(tool?: string): IconName | undefined {
  if (!tool) return undefined;
  const normalized = normalizeKey(tool);
  const canonical =
    toolAliases[normalized] ||
    // If user already passed canonical name, prefer that
    ([
      'google workspace',
      'microsoft 365',
      'quickbooks',
      'shopify',
      'stripe',
      'square',
      'slack',
      'teams',
      'hubspot',
      'zapier/make',
    ].includes(normalized)
      ? tool
      : undefined);

  if (!canonical) return undefined;
  return toolToIconName[canonical];
}
