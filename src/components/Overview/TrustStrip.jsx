import './TrustStrip.css';

export default function TrustStrip() {
  const labels = ['Affiliated to Savitribai Phule Pune University', 'NAAC Accreditation in Process', 'UGC Recognised', 'Est. under Trimurti Pawan Pratishthan', 'Dhorjagaon-ne, Tal. Shevgaon'];

  return (
    <div className="trust-strip">
      <div className="trust-track">
        {[...labels, ...labels].map((label, index) => <span key={`${label}-${index}`}>{label}</span>)}
      </div>
    </div>
  );
}
