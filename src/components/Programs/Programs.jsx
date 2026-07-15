import { programs } from '../../data/siteData.js';
import Icon from '../shared/Icon.jsx';
import SectionHead from '../shared/SectionHead.jsx';
import './Programs.css';

export default function Programs() {
  return (
    <section className="section-pad bg-sand" id="programs">
      <div className="container">
        <SectionHead eyebrow="Our Programs" title="Explore your path to success" text="A diverse range of academic programs designed to equip students with the knowledge and skills needed for a bright future - from undergraduate study to professional development." />
        <div className="programs-grid">
          {programs.map((program) => (
            <div className={`program-card ${program.featured ? 'featured' : ''}`} data-reveal key={program.title}>
              <span className="program-mark">{program.type}</span>
              <h3>{program.title}</h3>
              <ul>
                {program.courses.map((course) => <li key={course}><Icon name="check" /> {course}</li>)}
              </ul>
              <a href="#admission" className={`btn ${program.featured ? 'btn-gold' : 'btn-outline'} btn-sm`}>Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
