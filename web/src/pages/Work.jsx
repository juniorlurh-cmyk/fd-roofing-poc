import FadeIn from '../components/FadeIn';
import { PageHero, Callout } from '../components/Shared';
import { SERVICES } from '../data/services';
import { REVIEWS } from '../data/site';

export default function Work() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Our Work' }]}
        title={<>Work that survives <em>Gauteng weather.</em></>}
        lead="The service lines we deliver — and the rescue jobs clients have publicly thanked us for."
        image="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="section white">
        <div className="container">
          <FadeIn>
            <div className="heading">
              <div>
                <div className="eyebrow dark">Service lines</div>
                <h2>What we <em>deliver.</em></h2>
              </div>
              <p>Representative project types — actual job photography is being compiled from the company's archives.</p>
            </div>
          </FadeIn>
          <div className="work-grid">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.id} delay={(i % 3) * 70}>
                <div className="work">
                  <img src={s.image} alt={s.name} loading="lazy" />
                  <div className="work-cap">
                    <small>{s.tag}</small>
                    <b>{s.name}</b>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="note">
            Stock photography shown for layout only — real job photos replace
            these before the site goes public-facing.
          </p>
        </div>
      </section>
      <section className="section dark">
        <div className="container">
          <FadeIn>
            <div className="heading">
              <div>
                <div className="eyebrow">In their words</div>
                <h2 style={{ color: '#fff' }}>The rescue <em>story.</em></h2>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Verbatim from public reviews — the job that best describes how this company works.</p>
            </div>
          </FadeIn>
          <div className="quotes" style={{ gridTemplateColumns: '1fr' }}>
            {REVIEWS.map((r, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="quote" style={{ maxWidth: 720 }}>
                  <p>"{r.quote}"</p>
                  <span>{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)} · {r.author} — {r.place}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <Callout
        title={<>Next job could <em>be yours.</em></>}
        lead="Send the details — inspection and written quote are free."
      />
    </>
  );
}
