// Indicative internal analytics — editorial demand estimates for internal
// discussion, plus real public signals. Labelled indicative on the page.

export const MARKET_LABELS = [
  'Roof Repairs',
  'Waterproofing',
  'Roof Erection',
  'Thatch Conversions',
  'Gutters & Ceilings',
  'Roof Painting',
  'Kilner Park',
  'Centurion',
  'Montana',
  'Pretoria North',
  'Pretoria East',
];

// Demand signal per service line (0-100 indicative).
export const SERVICE_MIX = [
  { name: 'Roof Repairs', demand: 88, note: 'Highest-volume line — leaks drive urgent inbound demand' },
  { name: 'Waterproofing', demand: 82, note: 'Core specialty; peaks in Gauteng rainy season (Oct–Mar)' },
  { name: 'Gutters & Ceilings', demand: 60, note: 'Attach work that follows repairs and maintenance' },
  { name: 'Roof Painting', demand: 56, note: 'Cyclical — restoration and property-sale driven' },
  { name: 'Roof Erection', demand: 52, note: 'Project-based; follows construction activity' },
  { name: 'Thatch Conversions', demand: 44, note: 'Niche but high-ticket — insurance-driven demand' },
];

// Repair/waterproofing demand signal per area (0-100 indicative).
export const DEMAND = [
  { area: 'Kilner Park', repairs: 80, waterproofing: 76, erection: 50 },
  { area: 'Montana', repairs: 84, waterproofing: 78, erection: 58 },
  { area: 'Pretoria North', repairs: 78, waterproofing: 72, erection: 54 },
  { area: 'Centurion', repairs: 82, waterproofing: 80, erection: 66 },
  { area: 'Pretoria East', repairs: 86, waterproofing: 84, erection: 62 },
];

export const SIGNALS = [
  { label: 'Google rating', value: '4.6 / 5' },
  { label: 'Public reviews', value: '13' },
  { label: 'Experience (co-stated)', value: '14 years' },
  { label: 'Base', value: 'Kilner Park, Pretoria' },
];

export function marketSummary() {
  const mix = SERVICE_MIX.map((s) => `${s.name}: ${s.demand}/100 (${s.note})`).join('; ');
  const areas = DEMAND.map(
    (d) => `${d.area}: repairs ${d.repairs}, waterproofing ${d.waterproofing}, erection ${d.erection}`
  ).join('; ');
  const sig = SIGNALS.map((s) => `${s.label}: ${s.value}`).join('; ');
  return `Service-line demand — ${mix}\nDemand by area — ${areas}\nPublic signals — ${sig}`;
}

export const DEFAULT_SPEC = {
  charts: [
    {
      type: 'hbar',
      title: 'Service-line demand (indicative)',
      items: SERVICE_MIX.map((s) => ({ label: s.name, value: s.demand })),
    },
    {
      type: 'vbar',
      title: 'Repair demand by area',
      items: DEMAND.map((d) => ({ label: d.area, value: d.repairs })),
    },
  ],
};
