document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------------------------------ */
  /* 1. Reading progress bar                                              */
  /* ------------------------------------------------------------------ */

  var progressBar = document.getElementById('reading-progress');

  if (progressBar) {
    window.addEventListener('scroll', function () {
      var scrollTop    = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollHeight = document.documentElement.scrollHeight;
      var clientHeight = document.documentElement.clientHeight;
      var total        = scrollHeight - clientHeight;
      progressBar.style.width = (total > 0 ? (scrollTop / total) * 100 : 0) + '%';
    }, { passive: true });
  }

  /* ------------------------------------------------------------------ */
  /* 2. Mobile nav toggle (dropdown)                                      */
  /* ------------------------------------------------------------------ */

  var hamburger = document.getElementById('nav-hamburger');
  var navLinks  = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open', !expanded);
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 3. Category filter (homepage only)                                   */
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
  /* 4. External links open in new tab                                    */
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
