import { useState } from 'react';
import { college, navItems } from '../../data/siteData.js';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');

  const closeMenu = () => {
    setOpen(false);
    setActiveDropdown('');
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    setOpen((current) => {
      document.body.style.overflow = current ? '' : 'hidden';
      return !current;
    });
  };

  return (
    <header className="navbar" id="navbar">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Trimurti College home" onClick={closeMenu}>
          <span className="brand-mark">
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M16 3 L27 27 H5 Z" stroke="#F4DDB3" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M16 10 L22 24 H10 Z" stroke="#D98E2B" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="brand-text">
            <strong>{college.shortName}</strong>
            <span>Arts &middot; Commerce &middot; Science</span>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <ul className={`nav-links ${open ? 'open' : ''}`} id="navLinks">
            {navItems.map((item) => (
              <li key={item.label} className={`${item.children ? 'has-dropdown' : ''} ${activeDropdown === item.label ? 'open' : ''}`}>
                <a
                  href={item.href}
                  className={item.href === '#top' ? 'active' : ''}
                  aria-haspopup={item.children ? 'true' : undefined}
                  onClick={(event) => {
                    if (item.children && window.innerWidth <= 900) {
                      event.preventDefault();
                      setActiveDropdown(activeDropdown === item.label ? '' : item.label);
                      return;
                    }
                    closeMenu();
                  }}
                >
                  {item.label}
                </a>
                {item.children && (
                  <ul className="dropdown">
                    {item.children.map((child) => (
                      <li key={child.href + child.label}>
                        <a href={child.href} onClick={closeMenu}>{child.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <a href="#admission" className="btn btn-gold btn-sm">Apply Now</a>
          <button className={`nav-toggle ${open ? 'open' : ''}`} aria-label="Toggle menu" aria-expanded={open} aria-controls="navLinks" onClick={toggleMenu}>
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
