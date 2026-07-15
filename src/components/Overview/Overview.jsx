import { overview } from '../../data/siteData.js';
import Icon from '../shared/Icon.jsx';
import './Overview.css';

export default function Overview() {
  return (
    <section className="overview-band" id="overview" aria-label="College quick information">
      <div className="container overview-grid">
        {overview.map((item) => (
          <div className="overview-card" data-reveal key={item.title}>
            <span className="overview-icon"><Icon name={item.icon} /></span>
            <div><strong>{item.title}</strong><span>{item.text}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}
