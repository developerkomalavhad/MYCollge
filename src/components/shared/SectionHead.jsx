export default function SectionHead({ eyebrow, title, text, center }) {
  return (
    <div className={`section-head ${center ? 'center' : ''}`} data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
