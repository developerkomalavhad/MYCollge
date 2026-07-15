import SectionHead from '../shared/SectionHead.jsx';
import './Research.css';

const researchItems = [
  ['Student Projects', 'Guided academic projects that encourage observation, documentation and problem-solving.'],
  ['Faculty Mentoring', 'Subject teachers support research-oriented learning through seminars and internal activities.'],
  ['Innovation Culture', 'Workshops, competitions and practical exposure help students build curiosity beyond textbooks.']
];

export default function Research() {
  return (
    <section className="section-pad research-section" id="research">
      <div className="container research-grid">
        <SectionHead eyebrow="Research & Innovation" title="Curiosity-led learning for a changing world" text="The college promotes project-based learning, academic discussion and innovation-minded activities that prepare students to think independently." />
        <div className="research-list">
          {researchItems.map(([title, text], index) => (
            <article className="research-item" data-reveal key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
