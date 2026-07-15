import { college } from '../../data/siteData.js';
import Icon from '../shared/Icon.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=1800&h=1200&fit=crop&auto=format" alt="" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow">{college.trust}</span>
          <h1><span>Empowering Minds,</span> <em>Building Futures</em></h1>
          <p className="hero-lede">A premium learning environment for Arts, Commerce, Science and Computer Science at Dhorjagaon-ne, shaped by academic discipline, practical exposure and values-led leadership.</p>
          <div className="hero-actions">
            <a href="#programs" className="btn btn-primary">Explore Courses <Icon name="arrow" /></a>
            <a href="#admission" className="btn btn-outline hero-outline">Apply Now</a>
          </div>
        </div>

        <div className="hero-premium-card" data-reveal>
          <span>Admissions Open</span>
          <strong>{college.principal}</strong>
          <p>Principal</p>
        </div>
      </div>

      <div className="container hero-floating-wrap">
        <div className="hero-floating-stats" data-reveal>
          <div><strong>3200+</strong><span>Students</span></div>
          <div><strong>65+</strong><span>Faculty</span></div>
          <div><strong>92%</strong><span>Placement</span></div>
          <div><strong>NAAC</strong><span>In Process</span></div>
        </div>
      </div>

      <a href="#overview" className="scroll-indicator" aria-label="Scroll to college overview"><span></span></a>
    </section>
  );
}
