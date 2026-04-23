// Otto Audio — shared page init. Used by simpler pages; larger interactive pages keep their own inline logic.
(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var nav = document.querySelector('.site-nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) {
    if (reduceMotion) el.classList.add('visible');
    else revealObserver.observe(el);
  });
})();
