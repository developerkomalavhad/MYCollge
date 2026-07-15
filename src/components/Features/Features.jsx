import { features } from '../../data/siteData.js';
import Icon from '../shared/Icon.jsx';
import SectionHead from '../shared/SectionHead.jsx';
import './Features.css';

export default function Features() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHead center eyebrow="What Makes Us Different" title="Beyond academics - a well-rounded education" text="Experienced faculty, modern infrastructure, career guidance, and a focus on research and extracurricular activities come together to prepare every student for their chosen field." />
        <div className="feature-grid">
          {features.map(([title, text, icon]) => (
            <div className="feature-card" data-reveal key={title}>
              <div className="feature-icon"><Icon name={icon} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
