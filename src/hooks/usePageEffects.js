import { useEffect } from 'react';

export default function usePageEffects() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const toggleNavbar = () => navbar?.classList.toggle('scrolled', window.scrollY > 30);
    toggleNavbar();
    window.addEventListener('scroll', toggleNavbar, { passive: true });
    return () => window.removeEventListener('scroll', toggleNavbar);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}
