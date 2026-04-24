document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------------------------ */
  /* 1. Reading progress bar + 2. Sticky nav — single scroll handler     */
  /* ------------------------------------------------------------------ */

  var progressBar = document.getElementById('reading-progress');
  var siteNav     = document.getElementById('site-nav');

  function onScroll() {
    var scrollTop    = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;

    if (progressBar) {
      var total      = scrollHeight - clientHeight;
      var percentage = total > 0 ? (scrollTop / total) * 100 : 0;
      progressBar.style.width = percentage + '%';
    }

    if (siteNav) {
      if (window.scrollY > 60) {
        siteNav.classList.add('scrolled');
      } else {
        siteNav.classList.remove('scrolled');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ------------------------------------------------------------------ */
  /* 3. Mobile nav toggle                                                 */
  /* ------------------------------------------------------------------ */

  var hamburger  = document.getElementById('nav-hamburger');
  var navOverlay = document.getElementById('nav-overlay');

  function openMenu() {
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger && navOverlay) {
    hamburger.addEventListener('click', function () {
      if (navOverlay.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    var overlayLinks = navOverlay.querySelectorAll('a');
    overlayLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ------------------------------------------------------------------ */
  /* 4. Category filter (homepage only)                                   */
  /* ------------------------------------------------------------------ */

  var filterContainer = document.querySelector('.category-filter');

  if (filterContainer) {
    var pills     = filterContainer.querySelectorAll('[data-filter]');
    var postCards = document.querySelectorAll('[data-category]');

    function applyFilter(filter) {
      pills.forEach(function (pill) {
        pill.classList.remove('active');
      });
      var activePill = filterContainer.querySelector('[data-filter="' + filter + '"]');
      if (activePill) {
        activePill.classList.add('active');
      }
      postCards.forEach(function (card) {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        applyFilter(pill.dataset.filter);
      });
    });

    applyFilter('all');
  }

  /* ------------------------------------------------------------------ */
  /* 5. External links open in new tab                                    */
  /* ------------------------------------------------------------------ */

  var postBodies = document.querySelectorAll('.post-body');

  postBodies.forEach(function (body) {
    var links = body.querySelectorAll('a[href]');
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href.indexOf('http') === 0) {
        try {
          var url = new URL(href);
          if (url.hostname !== location.hostname) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
          }
        } catch (e) {
          // malformed URL, leave untouched
        }
      }
    });
  });

});
