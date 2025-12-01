// Project 2 interactivity: init AOS, VanillaTilt, mobile menu logic
document.addEventListener('DOMContentLoaded', () => {
  // AOS
  if (window.AOS) AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

  // VanillaTilt init: all elements with data-tilt
  if (window.VanillaTilt) {
    const tiltNodes = document.querySelectorAll('[data-tilt]');
    VanillaTilt.init(tiltNodes, {
      max: 18,
      speed: 400,
      glare: true,
      'max-glare': 0.15,
      scale: 1.03,
      gyroscope: true
    });
  }

  // Mobile panel open/close
  const menuBtn = document.getElementById('menu-btn-2');
  const mobilePanel = document.getElementById('mobile-panel');
  const closeMobile = document.getElementById('close-mobile');

  if (menuBtn && mobilePanel) {
    menuBtn.addEventListener('click', () => {
      mobilePanel.classList.toggle('hidden');
    });
  }
  if (closeMobile) closeMobile.addEventListener('click', () => mobilePanel.classList.add('hidden'));

  // Small UX: hide mobile panel on nav click
  mobilePanel?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobilePanel.classList.add('hidden')));

  // lightweight accessibility: ESC closes panel
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') mobilePanel?.classList.add('hidden');
  });

  // remove preloader once visible
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) loader.style.display = 'none';
  });
});

