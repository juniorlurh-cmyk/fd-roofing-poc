import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { SITE, tel, wa, mailto } from '../data/site';
import { SERVICES } from '../data/services';
import { Icon } from './Icons';
import ChatWidget from './ChatWidget';
import EmergencyBanner from './EmergencyBanner';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" to="/" aria-label="FD Roofing home">
          <span className="brand-mark">FD</span>
          <span className="brand-name">
            FD ROOFING
            <small>PTY LTD · PRETORIA</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav
          className={`nav-links ${open ? 'open' : ''}`}
          aria-label="Main navigation"
          onClick={(e) => { if (e.target.closest('a')) setOpen(false); }}
        >
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/work">Our Work</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/insights">Insights</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <a className="btn" href={wa('Hi FD Roofing — I would like a quote.')} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" /> Free quote
        </a>
      </div>
    </header>
  );
}

const YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" to="/">
              <span className="brand-mark">FD</span>
              <span className="brand-name">
                FD ROOFING
                <small>PTY LTD · PRETORIA</small>
              </span>
            </Link>
            <p>
              Roofing and waterproofing specialists in Pretoria — {SITE.years}
              years' experience, guaranteed workmanship, rated {SITE.rating} on
              Google.
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <div className="flinks">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/work">Our work</Link>
              <Link to="/insights">Insights</Link>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <div className="flinks">
              {SERVICES.map((s) => (
                <Link key={s.id} to={`/services#${s.id}`}>{s.name}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <div className="flinks">
              <a href={tel()}>{SITE.phoneDisplay}</a>
              <a href={mailto('Roofing enquiry — FD Roofing')}>{SITE.email}</a>
              <span>{SITE.address}</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {YEAR} {SITE.name} · All rights reserved</span>
          <span>Redesign concept — facts verified against public listings and fdroofing.co.za</span>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <EmergencyBanner />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
