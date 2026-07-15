import { facilities } from '../../data/siteData.js';
import SectionHead from '../shared/SectionHead.jsx';
import './Facilities.css';

export default function Facilities() {
  return (
    <section className="section-pad bg-sand" id="facilities">
      <div className="container">
        <SectionHead eyebrow="Facilities" title="A campus built for hands-on learning" text="From well-stocked labs to open study spaces, the Dhorjagaon-ne campus is designed around practical learning and student use." />
        <div className="bento">
          {facilities.map(([label, src, alt, big]) => (
            <div className={`bento-item ${big ? 'big' : ''}`} data-reveal key={label}>
              <img src={src} alt={alt} loading="lazy" />
              <span className="bento-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
