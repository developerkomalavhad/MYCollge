import { college } from '../../data/siteData.js';
import './Principal.css';

export default function Principal() {
  return (
    <section className="section-pad principal-section" id="principal">
      <div className="container">
        <div className="founder-panel" data-reveal>
          <div className="founder-photo">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&h=900&fit=crop&auto=format" alt={`${college.principal}, Principal of Trimurti Arts, Commerce and Science College`} loading="lazy" />
          </div>
          <div className="founder-text">
            <span className="eyebrow">From the Principal's Desk</span>
            <h2>{college.principal}</h2>
            <blockquote>"At {college.name}, Dhorjagaon-ne, our focus is to provide disciplined, student-centered education that builds knowledge, confidence, values and career readiness."</blockquote>
            <div className="founder-sign"><strong>{college.principal}</strong><span>Principal, {college.name}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
