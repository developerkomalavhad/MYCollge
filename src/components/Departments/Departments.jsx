import { departments } from '../../data/siteData.js';
import SectionHead from '../shared/SectionHead.jsx';
import './Departments.css';

export default function Departments() {
  return (
    <section className="section-pad" id="departments">
      <div className="container">
        <SectionHead center eyebrow="Departments" title="Learning across four faculties" text="Every department is built around focused mentorship, practical exposure, and a curriculum aligned to Savitribai Phule Pune University." />
        <div className="dept-grid">
          {departments.map(([title, src, alt]) => (
            <div className="dept-card" data-reveal key={title}>
              <img src={src} alt={alt} loading="lazy" />
              <div className="dept-overlay"><div><span>Faculty</span><h3>{title}</h3></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
