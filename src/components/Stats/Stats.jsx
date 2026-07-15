import SectionHead from '../shared/SectionHead.jsx';
import './Stats.css';

const stats = ['3200+ Alumni', '65+ Faculty Members', '92% Exam Result Rate', '600+ Annual Intake'];

export default function Stats() {
  return (
    <section className="section-pad bg-ink">
      <div className="container">
        <SectionHead center eyebrow="Highlights of Our Institution" title="Trimurti College by the numbers" />
        <div className="stats-grid">
          {stats.map((item) => {
            const [num, ...label] = item.split(' ');
            return <div className="stat-card" data-reveal key={item}><span className="stat-num">{num}</span><span className="stat-label">{label.join(' ')}</span></div>;
          })}
        </div>
      </div>
    </section>
  );
}
