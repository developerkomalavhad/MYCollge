import { useState } from 'react';
import { news } from '../../data/siteData.js';
import Icon from '../shared/Icon.jsx';
import SectionHead from '../shared/SectionHead.jsx';
import './News.css';

export default function News() {
  const [showAll, setShowAll] = useState(false);
  const visibleNews = showAll ? news : news.slice(0, 3);

  return (
    <section className="section-pad bg-sand" id="news">
      <div className="container">
        <SectionHead eyebrow="Latest Blog & News" title="What's happening on campus" text="Academic milestones, cultural celebrations, and sporting achievements from across the Trimurti College community." />
        <div className="news-grid">
          {visibleNews.map(([tag, date, title, text, src, alt]) => (
            <article className="news-card" data-reveal key={title}>
              <div className="news-thumb"><img src={src} alt={alt} loading="lazy" /></div>
              <div className="news-body">
                <div className="news-meta"><span className="tag">{tag}</span><span>{date}</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#news" className="news-link">Read more <Icon name="arrow" /></a>
              </div>
            </article>
          ))}
        </div>
        {!showAll && <div className="gallery-actions"><button className="btn btn-outline" onClick={() => setShowAll(true)}>Load More</button></div>}
      </div>
    </section>
  );
}
