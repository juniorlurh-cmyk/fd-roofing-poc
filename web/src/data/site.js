// Verified public facts — Google Maps listing, company website, directories.
// Company-stated claims (14 years, guarantees, certifications) are marked
// as such rather than presented as independently verified.

export const SITE = {
  name: 'FD Roofing (Pty) Ltd',
  short: 'FD Roofing',
  city: 'Kilner Park, Pretoria',
  address: '107 Carica Street, Kilner Park, Pretoria 0186',
  phoneDisplay: '063 178 1159',
  phoneTel: '+27631781159',
  email: 'sales@fdroofing.co.za',
  hours: 'Mon–Fri · 07:00–18:00 · Sat 08:00–13:00',
  rating: '4.6',
  reviewCount: '13',
  years: '14', // company-stated experience, per fdroofing.co.za
  facebook: 'https://facebook.com/114202323782873',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=FD+Roofing+107+Carica+Street+Kilner+Park+Pretoria',
  mapsEmbed:
    'https://maps.google.com/maps?q=107+Carica+Street,+Kilner+Park,+Pretoria+0186&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

// Real review excerpts from public listings.
export const REVIEWS = [
  {
    quote:
      'FD Roofing had to recover and complete a structure left halfway by another company — Francois and his team came to the rescue and did an excellent job.',
    author: 'Tania & Werner',
    place: 'Lavender Lane Country Estate',
    stars: 5,
  },
  {
    quote:
      'His roofing crew is professional and always on time. Excellent customer service with fast response — you will never regret using FD Roofing.',
    author: 'Tania & Werner',
    place: 'Public review',
    stars: 5,
  },
];

// Company-stated credentials, per their own about page.
export const STATED = [
  'All staff trained for the work quoted',
  'Working-at-heights & medicals up to date',
  'Letter of good standing provided on request',
  'All work guaranteed and above standard',
];

export function tel() {
  return `tel:${SITE.phoneTel}`;
}
export function wa(text) {
  return `https://wa.me/27631781159?text=${encodeURIComponent(text || 'Hi FD Roofing — I would like a quote.')}`;
}
export function mailto(subject, body) {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${SITE.email}?${params.join('&')}`;
}
