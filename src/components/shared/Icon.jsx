export default function Icon({ name = 'cap', className }) {
  const paths = {
    cap: <><path d="M12 3 3 8l9 5 9-5-9-5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" stroke="currentColor" strokeWidth="1.6" /></>,
    building: <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
    screen: <><rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" /><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.6" /></>,
    person: <><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" /></>,
    pin: <><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.6" /></>,
    map: <><path d="M4 19V5l8-3 8 3v14l-8 3-8-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" /></>,
    check: <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
