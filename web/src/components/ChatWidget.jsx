import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { aiChat, hasKey } from '../ai/provider';
import { SITE, wa } from '../data/site';
import { SERVICES } from '../data/services';
import { Icon } from './Icons';

const SUGGESTIONS = [
  'My roof is leaking — help',
  'Do you do waterproofing?',
  'Thatch to Harvey tiles?',
  'How do I get a quote?',
];

const FAQ = [
  {
    match: /leak|leaking|drip|water.*(in|into)|storm|urgent|emergency/i,
    answer: `A leaking roof gets worse every rain — WhatsApp ${SITE.phoneDisplay} photos of the leak and the ceiling marks and we'll arrange an inspection. ${SITE.hours}.`,
    link: { to: '/services#repairs', label: 'Roof repairs' },
  },
  {
    match: /waterproof|flat roof|concrete roof|membrane|damp/i,
    answer: 'Waterproofing is one of our signature lines — flat concrete, steel and tiled roofs, torch-on and coating systems, parapets and flashings. All work is guaranteed.',
    link: { to: '/services#waterproofing', label: 'Waterproofing' },
  },
  {
    match: /thatch|harvey|convers/i,
    answer: 'Yes — we convert thatch roofs to Harvey tiles: full structural assessment, then the conversion. It solves the insurance, maintenance and fire issues that come with thatch.',
    link: { to: '/services#thatch', label: 'Thatch conversions' },
  },
  {
    match: /service|what.*do|offer|gutter|ceiling|paint|erect|rafter|chromadek/i,
    answer: `Six lines: ${SERVICES.map((s) => s.name).join(', ')} — across slate, concrete tiled, steel and flat concrete roofs, residential and commercial.`,
    link: { to: '/services', label: 'All services' },
  },
  {
    match: /quote|price|cost|rate|estimate|how much/i,
    answer: `Every roof is quoted after a proper inspection — WhatsApp ${SITE.phoneDisplay} or email ${SITE.email}. Quotes are free and itemised.`,
    link: { to: '/contact', label: 'Request a quote' },
  },
  {
    match: /where|based|located|address|area|kilner/i,
    answer: `We're at ${SITE.address}. We cover Kilner Park, East Lynne, Queenswood, Gezina, Montana, Pretoria North, Centurion, Pretoria East and wider Gauteng.`,
    link: { to: '/contact', label: 'Contact & map' },
  },
  {
    match: /review|rating|trust|reliable|good|guarantee|warrant/i,
    answer: `Rated ${SITE.rating}/5 on Google from ${SITE.reviewCount} reviews — clients mention our rescue work when another contractor left a job half-done. All work is guaranteed, and a letter of good standing is provided on request.`,
    link: { to: '/about', label: 'About us' },
  },
];

const FALLBACK = `I can help with services, leaks, waterproofing, thatch conversions and quotes. For anything else, WhatsApp ${SITE.phoneDisplay} or email ${SITE.email}.`;

const SYSTEM = `You are the website assistant for ${SITE.name}, a roofing and waterproofing contractor in Kilner Park, Pretoria.
Facts: address ${SITE.address}; phone/WhatsApp ${SITE.phoneDisplay}; email ${SITE.email}; hours ${SITE.hours}; Google rating ${SITE.rating}/5 from ${SITE.reviewCount} reviews; company states ${SITE.years} years' experience and guaranteed workmanship.
Services: roof erection (timber rafter roofs, Chromadek/Pro-Lok), roof repairs, waterproofing, thatch-to-Harvey-tile conversions, gutters & ceilings, roof painting. Roof types: slate, concrete tile, steel/IBR, flat concrete.
Keep answers short, plain and honest — never invent prices, projects or people. Leaks are urgent: push to WhatsApp ${SITE.phoneDisplay}.`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [input, setInput] = useState('');
  const [msgs, setMsgs] = useState([
    { from: 'bot', text: `Hi — I'm the ${SITE.short} assistant. Leaking roof? Ask me anything, or WhatsApp ${SITE.phoneDisplay} directly.` },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, open]);

  const send = async (text) => {
    const q = (text || input).trim();
    if (!q || busy) return;
    setInput('');
    setMsgs((m) => [...m, { from: 'user', text: q }]);
    setBusy(true);
    const faq = FAQ.find((f) => f.match.test(q));
    let reply = null;
    if (hasKey()) {
      try {
        reply = await aiChat([
          { role: 'system', content: SYSTEM },
          { role: 'user', content: q },
        ]);
      } catch { reply = null; }
    }
    if (!reply) reply = faq ? faq.answer : FALLBACK;
    setMsgs((m) => [...m, { from: 'bot', text: reply, link: faq?.link }]);
    setBusy(false);
  };

  return (
    <>
      <button
        className="chat-fab"
        aria-label={open ? 'Close assistant' : 'Chat with the FD Roofing assistant'}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name={open ? 'close' : 'sparkles'} />
      </button>
      {open && (
        <div className="chat-panel" role="dialog" aria-label="FD Roofing assistant">
          <div className="chat-head">
            <b>FD Roofing assistant</b>
            <span>{hasKey() ? 'AI-powered' : 'Quick answers'}</span>
          </div>
          <div className="chat-body">
            {msgs.map((m, i) => (
              <div key={i} className={`chat-msg ${m.from}`}>
                <p>{m.text}</p>
                {m.link && (
                  <Link className="chat-link" to={m.link.to}>{m.link.label} →</Link>
                )}
              </div>
            ))}
            {busy && <div className="chat-msg bot"><p className="chat-typing">Thinking…</p></div>}
            <div ref={bottomRef} />
          </div>
          <div className="chat-sugg">
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => send(s)} disabled={busy}>{s}</button>
            ))}
          </div>
          <form className="chat-input" onSubmit={(e) => { e.preventDefault(); send(); }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about leaks, quotes…"
              aria-label="Message"
            />
            <button type="submit" aria-label="Send" disabled={busy}>
              <Icon name="arrowRight" />
            </button>
          </form>
          <a className="chat-mail" href={wa()}>
            Prefer WhatsApp? {SITE.phoneDisplay}
          </a>
        </div>
      )}
    </>
  );
}
