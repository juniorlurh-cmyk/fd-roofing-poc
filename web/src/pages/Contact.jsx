import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import { PageHero } from '../components/Shared';
import { Icon } from '../components/Icons';
import { SITE, tel, wa, mailto } from '../data/site';
import { SERVICES, SERVICE_AREAS } from '../data/services';

export default function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', service: '', message: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const text = [
      `Hi FD Roofing — I'm ${form.name}.`,
      `Service: ${form.service || 'General'}`,
      form.message,
      `(Reach me on: ${form.contact})`,
    ].join('\n');
    window.open(wa(text), '_blank', 'noopener');
  };

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        title={<>Let's look at <em>your roof.</em></>}
        lead="Call, WhatsApp or send the form — inspections and written quotes are free."
      />
      <section className="section white">
        <div className="container contact-layout">
          <FadeIn>
            <div>
              <div className="panel">
                <h3>Direct contact</h3>
                <div className="kv">
                  <div className="kv-row"><Icon name="phone" /><span><b>Phone / WhatsApp</b><a href={tel()}>{SITE.phoneDisplay}</a></span></div>
                  <div className="kv-row"><Icon name="mail" /><span><b>Email</b><a href={mailto('Roofing enquiry — FD Roofing')}>{SITE.email}</a></span></div>
                  <div className="kv-row"><Icon name="pin" /><span><b>Address</b>{SITE.address}</span></div>
                  <div className="kv-row"><Icon name="clock" /><span><b>Hours</b>{SITE.hours}</span></div>
                </div>
              </div>
              <div className="panel">
                <h3>Service areas</h3>
                <div className="chip-row" style={{ marginTop: 0 }}>
                  {SERVICE_AREAS.map((a) => <span className="chip" key={a}>{a}</span>)}
                </div>
              </div>
              <p className="note" style={{ marginTop: 16 }}>
                The form sends your message via WhatsApp — nothing is stored or
                sent to third parties.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <form className="contact-form" onSubmit={submit}>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="c-name">Your name</label>
                  <input id="c-name" required value={form.name} onChange={set('name')} placeholder="Full name" />
                </div>
                <div className="field">
                  <label htmlFor="c-contact">Phone or email</label>
                  <input id="c-contact" required value={form.contact} onChange={set('contact')} placeholder="How we reach you" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="c-svc">Service needed</label>
                <select id="c-svc" value={form.service} onChange={set('service')}>
                  <option value="">General enquiry</option>
                  {SERVICES.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="c-msg">Tell us about the roof</label>
                <textarea id="c-msg" required value={form.message} onChange={set('message')} placeholder="Roof type, suburb, and what's wrong — or what you're building" />
              </div>
              <button className="btn" type="submit">
                <Icon name="whatsapp" /> Send via WhatsApp
              </button>
              <p className="form-note">Opens WhatsApp with your message pre-written to {SITE.phoneDisplay}.</p>
            </form>
          </FadeIn>
        </div>
        <FadeIn>
          <div className="map-wrap">
            <iframe
              src={SITE.mapsEmbed}
              title="FD Roofing — 107 Carica Street, Kilner Park, Pretoria"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-bar">
              <div>
                <b>{SITE.address}</b>
                <span style={{ display: 'block' }}>{SITE.hours}</span>
              </div>
              <a className="btn dark" href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="pin" /> Open in Maps
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
