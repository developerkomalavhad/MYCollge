import { admissionSteps } from '../../data/siteData.js';
import './Admission.css';

export default function Admission() {
  return (
    <section className="section-pad admission-section" id="admission">
      <div className="container admission-grid">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Admission Desk</span>
          <h2>Simple, guided admission support for every student</h2>
          <p>Get counselling for the right course, understand eligibility, and complete your enquiry through the college office or online contact form.</p>
          <div className="admission-actions">
            <a href="#contact" className="btn btn-primary">Send Enquiry</a>
            <a href="#programs" className="btn btn-outline">View Courses</a>
          </div>
        </div>
        <div className="admission-steps" data-reveal>
          {admissionSteps.map(([title, text], index) => (
            <div className="admission-step" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
