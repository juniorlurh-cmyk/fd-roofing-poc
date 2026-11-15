import FadeIn from '../components/FadeIn';
import { PageHero, Callout } from '../components/Shared';
import { Icon } from '../components/Icons';
import { SITE, STATED, REVIEWS } from '../data/site';

export default function About() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        title={<>Fourteen years <em>on the roof.</em></>}
        lead="FD Roofing (Pty) Ltd is a Kilner Park-based roofing and waterproofing specialist serving Pretoria and Gauteng — residential and commercial."
        image="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="section white">
        <div className="container content-grid">
          <FadeIn>
            <div className="copy">
              <div className="eyebrow dark">Who we are</div>
              <h2>Guaranteed work, <em>honest updates.</em></h2>
              <p>
                The company's stated goal is to be Gauteng's preferred roof
                repairs and waterproofing company — and the way reviews read,
                that ambition shows up in how the team communicates: clients
                are kept updated throughout, whether the news is good or bad.
              </p>
              <p>
                {SITE.years} years' experience across roof erection, repairs,
                waterproofing and painting — on slate tiled, concrete tiled,
                steel and flat concrete roofs, for homes and businesses alike.
              </p>
              <ul className="checklist">
                {STATED.map((s) => (
                  <li key={s}><Icon name="shield" /> {s}</li>
                ))}
              </ul>
              <p className="note">
                Credentials listed are company-stated per its public material;
                documentation is provided with formal quotes.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div>
              <div className="panel">
                <h3>Company details</h3>
                <div className="kv">
                  <div className="kv-row"><Icon name="pin" /><span><b>Address</b>{SITE.address}</span></div>
                  <div className="kv-row"><Icon name="phone" /><span><b>Phone / WhatsApp</b><a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></span></div>
                  <div className="kv-row"><Icon name="mail" /><span><b>Email</b>{SITE.email}</span></div>
                  <div className="kv-row"><Icon name="clock" /><span><b>Hours</b>{SITE.hours}</span></div>
                  <div className="kv-row"><Icon name="star" /><span><b>Public rating</b>{SITE.rating} / 5 · {SITE.reviewCount} Google reviews</span></div>
                  <div className="kv-row"><Icon name="external" /><span><b>Social</b><a href={SITE.facebook} target="_blank" rel="noopener noreferrer">Facebook page</a></span></div>
                </div>
              </div>
              <div className="panel">
                <h3>From public reviews</h3>
                <p style={{ fontStyle: 'italic' }}>"{REVIEWS[0].quote}"</p>
                <p style={{ fontSize: 11, color: 'var(--muted)' }}>— {REVIEWS[0].author}, {REVIEWS[0].place}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <Callout
        title={<>Talk it through <em>first.</em></>}
        lead="Call or WhatsApp — tell us what the roof needs and we'll tell you what it takes."
      />
    </>
  );
}
