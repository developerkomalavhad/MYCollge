import { useState } from 'react';
import { testimonials } from '../../data/siteData.js';
import SectionHead from '../shared/SectionHead.jsx';
import './Testimonials.css';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const goTo = (next) => setIndex((next + testimonials.length) % testimonials.length);

  return (
    <section className="section-pad" id="testimonials">
      <div className="container">
        <SectionHead center eyebrow="Alumni Stories" title="Journeys that started here" text="Our alumni make remarkable contributions across fields - their journeys reflect the foundation they built at Trimurti College." />
        <div className="testimonial-slider" data-reveal>
          <button className="testimonial-arrow prev" aria-label="Previous testimonial" onClick={() => goTo(index - 1)}><span aria-hidden="true">‹</span></button>
          <div className="testimonial-track">
            <div className="testimonial-slides" style={{ transform: `translateX(-${index * 100}%)` }}>
              {testimonials.map(([name, degree, quote, src]) => (
                <div className="testimonial-slide" key={name}>
                  <div className="testimonial-card">
                    <svg className="quote-mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 8c-2 0-4 2-4 5s2 5 4 5c1 0 2-1 2-2 0-2-1-2-2-2 0-2 1-4 3-4V8H7Zm10 0c-2 0-4 2-4 5s2 5 4 5c1 0 2-1 2-2 0-2-1-2-2-2 0-2 1-4 3-4V8h-3Z" /></svg>
                    <p>{quote}</p>
                    <div className="testimonial-person"><img src={src} alt={name} /><div><strong>{name}</strong><span>{degree}</span></div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="testimonial-arrow next" aria-label="Next testimonial" onClick={() => goTo(index + 1)}><span aria-hidden="true">›</span></button>
          <div className="testimonial-nav">
            {testimonials.map((item, dotIndex) => <button key={item[0]} className={`dot ${dotIndex === index ? 'active' : ''}`} aria-label={`Go to testimonial ${dotIndex + 1}`} onClick={() => setIndex(dotIndex)} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
