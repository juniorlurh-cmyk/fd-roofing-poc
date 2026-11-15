// Service lines from the company's own service page (fdroofing.co.za) plus
// public Facebook posts (thatch conversions, Chromadek/Pro-Lok work).

export const SERVICES = [
  {
    id: 'erection',
    name: 'Roof Erection',
    tag: 'New structures',
    icon: 'building',
    desc: 'New roof structures and timber rafter roofs — engineered, erected and sheeted for homes and commercial buildings.',
    points: ['Timber rafter roofs', 'Chromadek & Pro-Lok sheeting', 'Balcony & patio roofing'],
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'repairs',
    name: 'Roof Repairs',
    tag: 'Most requested',
    icon: 'check',
    desc: 'Leaks, storm damage, broken tiles, sagging sections and flashings — diagnosed properly, repaired once.',
    points: ['Leak tracing & repair', 'Tile & sheeting replacement', 'Storm damage'],
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512a92?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'waterproofing',
    name: 'Waterproofing',
    tag: 'Signature work',
    icon: 'shield',
    desc: 'Membrane and coating waterproofing on flat concrete, steel and tiled roofs — the work Gauteng weather tests hardest.',
    points: ['Flat concrete roofs', 'Torch-on & coating systems', 'Parapets, flashings & joints'],
    image: 'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'thatch',
    name: 'Thatch Conversions',
    tag: 'Speciality',
    icon: 'network',
    desc: 'Thatch roof conversions to Harvey tiles — a long-term fix for thatch insurance, maintenance and fire concerns.',
    points: ['Thatch to Harvey tiles', 'Structural assessment', 'Full conversion projects'],
    image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'gutters',
    name: 'Gutters & Ceilings',
    tag: 'Finishing',
    icon: 'arrowDown',
    desc: 'Gutters, flashings and ceilings — the finishing details that decide whether a roof actually keeps water out.',
    points: ['Gutters & downpipes', 'Flashings & valleys', 'Ceiling installation & repair'],
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'painting',
    name: 'Roof Painting',
    tag: 'Protection',
    icon: 'sparkles',
    desc: 'Roof cleaning, priming and painting — sealing tiles and sheeting while restoring the roofline properly.',
    points: ['High-pressure cleaning', 'Primers & roof coatings', 'Colour restoration'],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=80',
  },
];

export const ROOF_TYPES = [
  'Slate tiled', 'Concrete tiled', 'Steel / IBR', 'Flat concrete', 'Thatch (conversions)',
];

export const PROCESS = [
  { n: '01', t: 'Inspection', d: 'We get on the roof and look properly — photos of what we find, not guesses.' },
  { n: '02', t: 'Written quote', d: 'Itemised quote with photos of the problem areas. Free, no obligation.' },
  { n: '03', t: 'Repair & update', d: 'Work proceeds with client updates throughout — good news or bad.' },
  { n: '04', t: 'Guaranteed handover', d: 'Cleanup included, workmanship guaranteed, letter of good standing on request.' },
];

export const SERVICE_AREAS = [
  'Kilner Park', 'East Lynne', 'Queenswood', 'Riviera', 'Gezina',
  'Montana', 'Pretoria North', 'Centurion', 'Pretoria East', 'Wider Gauteng',
];
