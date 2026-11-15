import { SITE, tel, wa } from '../data/site';
import { Icon } from './Icons';

// A slim, always-visible urgency banner — the single highest-value CTA for
// a roofing site: a visitor with an active leak needs one obvious action.
export default function EmergencyBanner() {
  return (
    <div className="emergency-bar">
      <div className="container emergency-row">
        <span>
          <Icon name="shield" /> Roof leaking right now? Don't wait for the next storm.
        </span>
        <div className="emergency-actions">
          <a href={tel()}>
            <Icon name="phone" /> Call {SITE.phoneDisplay}
          </a>
          <a href={wa('URGENT — my roof is leaking and I need help.')} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" /> WhatsApp now
          </a>
        </div>
      </div>
    </div>
  );
}
