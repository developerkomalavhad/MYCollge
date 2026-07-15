import SectionHead from '../shared/SectionHead.jsx';
import './Placements.css';

const recruiters = ['TCS', 'Infosys', 'Wipro', 'HDFC Bank', 'ICICI', 'Local Industry'];
const success = [
  ['Placement Support', 'Resume building, interview preparation and career guidance for final-year students.'],
  ['Skill Training', 'Workshops focused on communication, digital literacy and workplace readiness.'],
  ['Industry Connect', 'Regional employer interaction, seminars and recruitment assistance.']
];

export default function Placements() {
  return (
    <section className="section-pad placements-section" id="placements">
      <div className="container">
        <SectionHead eyebrow="Placements" title="Career readiness with a premium academic foundation" text="A focused placement and guidance ecosystem that helps students move confidently from classroom learning to professional opportunity." />

        <div className="placement-layout">
          <div className="placement-stat-panel" data-reveal>
            <span>Placement Preparation</span>
            <strong>92%</strong>
            <p>students receive structured career guidance and skill support through college initiatives.</p>
          </div>

          <div className="placement-cards">
            {success.map(([title, text]) => (
              <article className="placement-card" data-reveal key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="recruiter-strip" data-reveal>
          {recruiters.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}
