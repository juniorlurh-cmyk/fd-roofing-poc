import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { Callout, Heading } from '../components/Shared';
import { Icon } from '../components/Icons';
import { SITE, REVIEWS, STATED, wa } from '../data/site';
import { SERVICES, PROCESS, ROOF_TYPES, SERVICE_AREAS } from '../data/services';

function Hero() {
  return (
    <section className="hero" style={{
      background: `linear-gradient(90deg, rgba(14,19,24,0.94) 0%, rgba(14,19,24,0.8) 55%, rgba(14,19,24,0.45) 100%), url('https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=2000&q=85') center/cover`,
    }}>
      <div className="container">
        <div className="eyebrow">Roofing · Waterproofing · Pretoria</div>
        <h1>
          Your roof is<br />
          <em>our problem now.</em>
        </h1>
        <p className="hero-copy">
          {SITE.years} years of roof erection, repairs and waterproofing across
          Gauteng — guaranteed work, honest updates, and a crew that shows up.
          Rated {SITE.rating} on Google.
        </p>
        <div className="hero-actions">
          <a className="btn" href={wa('Hi FD Roofing — I have a roof problem and need a quote.')} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" /> Get a free quote
          </a>
          <a className="btn outline-light" href={wa('URGENT — my roof is leaking.')} target="_blank" rel="noopener noreferrer">
            <Icon name="arrowRight" /> Leaking roof? It's urgent
          </a>
        </div>
        <div className="hero-note">
          <span><b>{SITE.rating}★</b> · {SITE.reviewCount} Google reviews</span>
          <span><b>{SITE.years} yrs</b> experience</span>
          <span><b>Guaranteed</b> workmanship</span>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section white" id="services">
        <div className="container">
          <FadeIn>
            <Heading
              eyebrow="What we do"
              title={<>Every roof type.<br /><em>One standard.</em></>}
              aside="Slate tiled, concrete tiled, steel and flat concrete roofs — residential and commercial. All work guaranteed."
            />
          </FadeIn>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.id} delay={(i % 3) * 70}>
                <Link className="svc" to={`/services#${s.id}`} style={{ color: 'inherit' }}>
                  <div className="svc-ico"><Icon name={s.icon} /></div>
                  <small>{s.tag}</small>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}><Icon name="check" /> {p}</li>
                    ))}
                  </ul>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="chip-row">
              {ROOF_TYPES.map((r) => <span className="chip" key={r}>{r}</span>)}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <FadeIn>
            <Heading
              eyebrow="How we work"
              title={<>Inspected properly.<br /><em>Quoted in writing.</em></>}
              aside="No ballparks over the phone — we get on the roof first."
            />
          </FadeIn>
          <FadeIn>
            <div className="process">
              {PROCESS.map((p) => (
                <div className="process-step" key={p.n}>
                  <b>{p.n}</b>
                  <h4>{p.t}</h4>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn>
            <ul className="checklist" style={{ marginTop: 30 }}>
              {STATED.map((s) => (
                <li key={s} style={{ color: 'rgba(255,255,255,0.85)' }}><Icon name="shield" /> {s}</li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <FadeIn>
            <Heading
              eyebrow="Public record"
              title={<>The reviews <em>speak.</em></>}
              aside="Actual excerpts from our public Google reviews — including a rescue job where we finished what another contractor abandoned."
            />
          </FadeIn>
          <div className="review-band" style={{ background: 'var(--navy)', borderRadius: 'var(--radius)', padding: '34px' }}>
            <div className="rating-big">
              <b>{SITE.rating}</b>
              <div className="stars">★★★★★</div>
              <span>{SITE.reviewCount} Google reviews</span>
            </div>
            <div className="quotes" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {REVIEWS.map((r, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="quote">
                    <p>"{r.quote}"</p>
                    <span>{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)} · {r.author} — {r.place}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <FadeIn>
            <Heading
              eyebrow="Service area"
              title={<>Pretoria North to <em>Pretoria East.</em></>}
              aside="Based in Kilner Park — central to our busiest corridors."
            />
          </FadeIn>
          <FadeIn>
            <div className="chip-row" style={{ marginTop: 0 }}>
              {SERVICE_AREAS.map((a) => <span className="chip" key={a}>{a}</span>)}
            </div>
          </FadeIn>
        </div>
      </section>

      <Callout
        title={<>Roof trouble? <em>Don't wait.</em></>}
        lead="Water finds every weakness — send us photos now and get a written quote."
      />
    </>
  );
}
