import { importantLinks } from '../../data/siteData.js';
import Icon from '../shared/Icon.jsx';
import SectionHead from '../shared/SectionHead.jsx';
import './ImportantLinks.css';

export default function ImportantLinks() {
  return (
    <section className="section-pad bg-sand">
      <div className="container">
        <SectionHead center eyebrow="Important Links" title="Everything you need, in one place" text="Admissions, exam forms, scholarships, and university updates - quick access to the resources students use most." />
        <div className="links-grid">
          {importantLinks.map(([title, text, href]) => (
            <a className="link-card" href={href} target="_blank" rel="noopener noreferrer" data-reveal key={title}>
              <span className="link-icon"><Icon name="map" /></span>
              <strong>{title}</strong><span>{text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
