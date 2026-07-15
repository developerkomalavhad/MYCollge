import { useMemo, useState } from 'react';
import { college } from '../../data/siteData.js';
import Icon from '../shared/Icon.jsx';
import SectionHead from '../shared/SectionHead.jsx';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const mapSrc = useMemo(() => `https://www.google.com/maps?q=${encodeURIComponent(college.mapQuery)}&output=embed`, []);

  return (
    <section className="section-pad" id="contact">
      <div className="container">
        <SectionHead center eyebrow="Contact Us" title="Admissions, office contact and campus location" text="For course enquiry, admission process, documents or campus visit support, contact the college office or use the form." />
        <div className="contact-grid">
          <div data-reveal>
            <div className="contact-cards">
              <ContactCard icon="pin" title="Campus Address" text={`${college.name}, ${college.location}, Maharashtra`} />
              <ContactCard icon="map" title="Email" link={`mailto:${college.email}`} text={college.email} />
              <ContactCard icon="person" title="Phone" link={`tel:${college.phone.replaceAll(' ', '')}`} text={college.phone} />
            </div>
            <div className="map-embed">
              <iframe src={mapSrc} title={`Map showing Trimurti College location in ${college.location}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="visit-note">
              <strong>Campus Visit</strong>
              <span>Use the map above for directions to {college.location}.</span>
            </div>
          </div>

          <form className="contact-form" data-reveal noValidate onSubmit={(event) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); }}>
            <div className="form-row">
              <FormField id="fname" label="Full Name" placeholder="Your name" />
              <FormField id="fphone" label="Phone Number" placeholder="+91 00000 00000" type="tel" />
            </div>
            <div className="form-row"><FormField id="femail" label="Email Address" placeholder="you@example.com" type="email" full /></div>
            <div className="form-row"><FormField id="fmessage" label="Message" placeholder="Tell us what you'd like to know" textarea full /></div>
            <button type="submit" className="btn btn-primary">Send Enquiry</button>
            <p className="form-note">This is a demo form and does not send data anywhere.</p>
            <div className={`form-success ${sent ? 'show' : ''}`}>Thank you - your enquiry has been noted.</div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, text, link }) {
  const content = link ? <a href={link}>{text}</a> : <span>{text}</span>;
  return <div className="contact-card"><span className="link-icon"><Icon name={icon} /></span><div><strong>{title}</strong>{content}</div></div>;
}

function FormField({ id, label, type = 'text', placeholder, textarea, full }) {
  return (
    <div className={`form-field ${full ? 'full' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {textarea ? <textarea id={id} name={id} placeholder={placeholder} required /> : <input type={type} id={id} name={id} placeholder={placeholder} required />}
    </div>
  );
}
