document.addEventListener('DOMContentLoaded', () => {

  // ----- Menu mobile -----
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (burgerBtn && mobileNav) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      burgerBtn.setAttribute('aria-expanded', String(isOpen));
      burgerBtn.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    // Ferme le menu mobile quand on clique un lien
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerBtn.setAttribute('aria-label', 'Ouvrir le menu');
      });
    });
  }

  // Header : ombre légère au scroll
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  //Révélation des sections au scroll
  const revealTargets = document.querySelectorAll(
    '.step, .price-card, .testimonial'
  );

  if ('IntersectionObserver' in window && revealTargets.length) {
    revealTargets.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealTargets.forEach((el) => observer.observe(el));
  }

  //Année automatique dans le footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
