/* ==========================================================================
   TRIMURTI COLLEGE — REDESIGN SCRIPT
   Vanilla JS only. Organized by feature, each wrapped in its own init function.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initDropdowns();
  initSmoothScroll();
  initActiveNavOnScroll();
  initScrollReveal();
  initCounters();
  initTestimonialSlider();
  initFaqAccordion();
  initGalleryLoadMore();
  initNewsLoadMore();
  initBackToTop();
  initContactForm();
  initYear();
});

/* -------------------- Navbar background on scroll -------------------- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const toggle = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  };
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
}

/* -------------------- Mobile menu -------------------- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggleBtn.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when a plain link is clicked (not a dropdown parent)
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900 && !link.parentElement.classList.contains('has-dropdown')) {
        navLinks.classList.remove('open');
        toggleBtn.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });
}

/* -------------------- Dropdown menus (tap to open on mobile) -------------------- */
function initDropdowns() {
  const dropdownParents = document.querySelectorAll('.has-dropdown > a');
  dropdownParents.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });
}

/* -------------------- Smooth scrolling for in-page anchors -------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* -------------------- Highlight active nav link based on scroll position -------------------- */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-links > li > a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* -------------------- Scroll reveal animations -------------------- */
function initScrollReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

/* -------------------- Animated counters (Fun Facts) -------------------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1600;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

/* -------------------- Testimonials slider -------------------- */
function initTestimonialSlider() {
  const track = document.querySelector('.testimonial-slides');
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsWrap = document.querySelector('.testimonial-nav');
  const prevBtn = document.querySelector('.testimonial-arrow.prev');
  const nextBtn = document.querySelector('.testimonial-arrow.next');
  if (!track || !slides.length) return;

  let index = 0;
  let autoTimer;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('.dot');

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle('active', di === index));
    resetAuto();
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(index + 1), 6000);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(index - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(index + 1));

  resetAuto();
}

/* -------------------- FAQ accordion -------------------- */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      items.forEach((i) => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* -------------------- Gallery "Load More" (reveals hidden items) -------------------- */
function initGalleryLoadMore() {
  const btn = document.getElementById('galleryLoadMore');
  const hiddenItems = document.querySelectorAll('.gallery-item.hidden-item');
  if (!btn) return;
  if (!hiddenItems.length) {
    btn.textContent = 'End of Content';
    btn.disabled = true;
    return;
  }
  btn.addEventListener('click', () => {
    hiddenItems.forEach((item) => item.classList.remove('hidden-item'));
    btn.textContent = 'End of Content';
    btn.disabled = true;
  }, { once: true });
}

/* -------------------- News "Load More" -------------------- */
function initNewsLoadMore() {
  const btn = document.getElementById('newsLoadMore');
  const hiddenItems = document.querySelectorAll('.news-card.hidden-item');
  if (!btn) return;
  if (!hiddenItems.length) {
    btn.style.display = 'none';
    return;
  }
  btn.addEventListener('click', () => {
    hiddenItems.forEach((item) => item.classList.remove('hidden-item'));
    btn.style.display = 'none';
  }, { once: true });
}

/* -------------------- Back to top button -------------------- */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* -------------------- Contact form (demo — no backend) -------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const successMsg = document.querySelector('.form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    successMsg.classList.add('show');
    form.reset();
    setTimeout(() => successMsg.classList.remove('show'), 5000);
  });
}

/* -------------------- Footer year -------------------- */
function initYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
