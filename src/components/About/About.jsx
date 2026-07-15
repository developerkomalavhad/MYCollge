import Icon from '../shared/Icon.jsx';
import { college } from '../../data/siteData.js';
import './About.css';

export default function About() {
  return (
    <section className="section-pad" id="about">
      <div className="container about-grid">
        <div className="about-visual" data-reveal>
          <div className="about-img-main">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop&auto=format" alt="Trimurti College main academic building" loading="lazy" />
          </div>
          <div className="about-quote">"Education is not just about knowledge; it is about shaping responsible individuals."</div>
        </div>
        <div className="about-body" data-reveal>
          <span className="eyebrow">About the College</span>
          <h2>A premier institution rooted in Dhorjagaon-ne</h2>
          <p>{college.name} is dedicated to academic excellence and holistic development. Established with a vision to provide quality education, the college nurtures young minds with the knowledge, skills, and values that prepare them for a successful future.</p>
          <p>The college name carries the idea at its heart: three forms, one purpose. Arts, Commerce, and Science stand together here, each supported by experienced faculty, modern classrooms, and a campus culture built around student growth.</p>
          <div className="vm-cards" id="vision-mission">
            <VisionCard title="Our Vision" text="To be a center of excellence in education by fostering innovation, research, and holistic development - shaping socially responsible individuals." />
            <VisionCard title="Our Mission" text="To provide quality, student-centric education through modern infrastructure and experienced faculty, preparing students for global challenges." />
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionCard({ title, text }) {
  return (
    <div className="vm-card">
      <Icon name="map" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
