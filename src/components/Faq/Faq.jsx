import { useState } from 'react';
import { faq } from '../../data/siteData.js';
import SectionHead from '../shared/SectionHead.jsx';
import './Faq.css';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad" id="faq">
      <div className="container">
        <SectionHead center eyebrow="Frequently Asked Questions" title="Have a question about admissions or campus life?" text="Here are answers to what prospective students and families ask us most." />
        <div className="faq-list" data-reveal>
          {faq.map(([question, answer], index) => (
            <div className={`faq-item ${open === index ? 'open' : ''}`} key={question}>
              <button className="faq-question" onClick={() => setOpen(open === index ? -1 : index)}>{question}<span className="faq-icon" /></button>
              <div className="faq-answer"><p>{answer}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
