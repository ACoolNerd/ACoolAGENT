/* ===========================
   ACoolAgent — app.js
   =========================== */

// Animated counters
function animateCounter(el, target, duration = 1800, suffix = '') {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.floor(start) + suffix;
    if (start >= target) clearInterval(timer);
  }, 16);
}

document.addEventListener('DOMContentLoaded', () => {
  // Scroll-triggered counter animation
  const counters = document.querySelectorAll('[id^="counter-"]');
  const targets = {
    'counter-agents':  6,
    'counter-pillars': 6,
    'counter-uptime':  99
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const suffix = id === 'counter-uptime' ? '' : '';
        animateCounter(entry.target, targets[id], 1800, id === 'counter-uptime' ? '' : '+');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(c => observer.observe(c));

  // Scroll reveal for cards
  const revealEls = document.querySelectorAll('.feature-card, .agent-card, .status-card');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    revealObserver.observe(el);
  });

  // Navbar scroll shadow
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 20
      ? '0 4px 32px rgba(0,0,0,0.5)'
      : 'none';
  }, { passive: true });
});
