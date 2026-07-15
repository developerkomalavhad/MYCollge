import { useState } from 'react';
import { gallery } from '../../data/siteData.js';
import SectionHead from '../shared/SectionHead.jsx';
import './Gallery.css';

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const visibleGallery = showAll ? gallery : gallery.slice(0, 4);

  return (
    <section className="section-pad" id="gallery">
      <div className="container">
        <SectionHead center eyebrow="Gallery & Campus Life" title="Moments from Dhorjagaon-ne campus" text="From academic events to cultural celebrations - a look at the dynamic spirit of our students and campus." />
        <div className="gallery-grid">
          {visibleGallery.map(([caption, src, alt]) => (
            <div className="gallery-item" data-reveal data-caption={caption} key={caption}>
              <img src={src} alt={alt} loading="lazy" />
            </div>
          ))}
        </div>
        {!showAll && <div className="gallery-actions"><button className="btn btn-outline" onClick={() => setShowAll(true)}>Load More</button></div>}
      </div>
    </section>
  );
}
