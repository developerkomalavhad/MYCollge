import { college } from '../../data/siteData.js';
import Icon from '../shared/Icon.jsx';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a href="#top" className="brand">
            <span className="brand-mark">
              <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path d="M16 3 L27 27 H5 Z" stroke="#F4DDB3" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M16 10 L22 24 H10 Z" stroke="#D98E2B" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="brand-text"><strong>{college.shortName}</strong></span>
          </a>
          <p>{college.name} - empowering minds and shaping futures in {college.location}.</p>
          <div className="footer-social">
            <a href="#top" aria-label="Facebook">f</a>
            <a href="#top" aria-label="Instagram">in</a>
            <a href="#top" aria-label="YouTube">yt</a>
          </div>
        </div>
        <FooterCol title="Explore" links={[['About Us', '#about'], ["Principal's Desk", '#principal'], ['Academics', '#programs'], ['Gallery', '#gallery'], ['Blogs & News', '#news']]} />
        <FooterCol title="Student Corner" links={[['Student Portal', 'https://sim.unipune.ac.in/SIM_APP/'], ['Exam Form', 'https://examform.unipune.ac.in/'], ['Online Result', 'https://onlineresults.unipune.ac.in/'], ['Mahaswayam', 'https://www.mahaswayam.gov.in/'], ['Contact Us', '#contact']]} />
        <div className="footer-col footer-newsletter">
          <h4>Stay Updated</h4>
          <p style={{ fontSize: '0.85rem' }}>Get news and event updates from Trimurti College.</p>
          <form onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="footerEmail">Email address</label>
            <input type="email" id="footerEmail" placeholder="Your email" />
            <button type="submit" aria-label="Subscribe"><Icon name="arrow" /></button>
          </form>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} {college.name}. All rights reserved.</span>
        <span>Managed by: <a href="https://www.devculture4you.com/" target="_blank" rel="noopener noreferrer">Dev Culture</a></span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      <ul>
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
