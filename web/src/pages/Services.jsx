import FadeIn from '../components/FadeIn';
import { PageHero, Callout } from '../components/Shared';
import { Icon } from '../components/Icons';
import { SERVICES, ROOF_TYPES } from '../data/services';
import { wa } from '../data/site';

export default function Services() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        title={<>Every roof <em>covered.</em></>}
        lead="Six service lines across slate, concrete tiled, steel and flat concrete roofs — residential and commercial. All work guaranteed."
        image="https://images.unsplash.com/photo-1635424710928-0544e8512a92?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="section white">
        <div className="container">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.id}>
              <div
                className="split"
                id={s.id}
                style={{ marginBottom: i < SERVICES.length - 1 ? 64 : 0, direction: i % 2 ? 'rtl' : 'ltr' }}
              >
                <img src={s.image} alt={s.name} loading="lazy" style={{ direction: 'ltr' }} />
                <div className="copy" style={{ direction: 'ltr' }}>
                  <div className="eyebrow dark">{s.tag}</div>
                  <h2>{s.name}</h2>
                  <p>{s.desc}</p>
                  <ul className="checklist">
                    {s.points.map((p) => (
                      <li key={p}><Icon name="check" /> {p}</li>
                    ))}
                  </ul>
                  <p style={{ marginTop: 20 }}>
                    <a className="btn ghost" href={wa(`Hi FD Roofing — I'd like to discuss ${s.name.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer">
                      <Icon name="whatsapp" /> Ask about this
                    </a>
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
          <FadeIn>
            <div className="chip-row">
              {ROOF_TYPES.map((r) => <span className="chip" key={r}>{r}</span>)}
            </div>
          </FadeIn>
          <p className="note">
            Every job starts with a proper inspection and an itemised written
            quote — free and without obligation.
          </p>
        </div>
      </section>
      <Callout
        title={<>Tell us what's <em>up there.</em></>}
        lead="Describe the roof — or send photos — and we'll tell you what it needs."
      />
    </>
  );
}
