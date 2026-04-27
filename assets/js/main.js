/* MBA Guidance — main.js */

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('mobile-menu-toggle');
  var navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // School listing sort
  var grid = document.getElementById('school-grid');
  if (grid) {
    var buttons = document.querySelectorAll('.sort-btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        sortSchools(btn.dataset.sort);
      });
    });
  }
});

function sortSchools(key) {
  var grid = document.getElementById('school-grid');
  if (!grid) return;
  var cards = Array.from(grid.querySelectorAll('.school-card'));

  cards.sort(function (a, b) {
    var aVal = getCardValue(a, key);
    var bVal = getCardValue(b, key);
    if (key === 'salary' || key === 'gmat') {
      return bVal - aVal; // higher is better
    }
    return aVal - bVal; // lower is better for ranking and acceptance
  });

  cards.forEach(function (card) {
    grid.appendChild(card);
  });
}

function getCardValue(card, key) {
  var badge = card.querySelector('.ranking-badge');
  var stats = card.querySelectorAll('.stat-value');

  switch (key) {
    case 'ranking':
      return badge ? parseInt(badge.textContent.replace('#', '')) : 999;
    case 'acceptance':
      return stats[0] ? parseFloat(stats[0].textContent) : 100;
    case 'gmat':
      return stats[1] ? parseInt(stats[1].textContent) : 0;
    case 'salary':
      return stats[2] ? parseInt(stats[2].textContent.replace(/[$K]/g, '')) : 0;
    default:
      return 0;
  }
}

// Newsletter inline signup
function handleNewsletterSignup(e) {
  e.preventDefault();
  var form = e.target;
  var email = form.querySelector('input[type="email"]').value;
  var btn = form.querySelector('button');
  var msg = form.parentElement.querySelector('.nl-msg');
  btn.disabled = true;
  btn.textContent = 'Sending...';
  fetch('https://newsletter-subscribe.rome-workers.workers.dev/subscribe', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email: email, list: 'mbaguidance'})
  }).then(function(res) { return res.json(); })
    .then(function(data) {
      if (data.ok) {
        msg.style.color = '#059669';
        msg.textContent = "You're in. First issue lands next week.";
        form.querySelector('input[type="email"]').value = '';
        if (typeof gtag === 'function') {
          var loc = form.closest('.homepage-nl-preview') ? 'homepage_preview'
            : form.closest('.homepage-headline') ? 'homepage_hero'
            : form.closest('.newsletter-mid-cta') ? 'mid_content'
            : form.closest('.newsletter-inline-cta') ? 'bottom_cta'
            : form.closest('.newsletter-signup') ? 'newsletter_page'
            : form.closest('.section-dark') ? 'homepage_footer'
            : 'unknown';
          gtag('event', 'newsletter_signup', {
            event_category: 'engagement',
            event_label: loc,
            page_path: window.location.pathname
          });
        }
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    }).catch(function(err) {
      msg.style.color = '#DC2626';
      msg.textContent = err.message;
    }).finally(function() {
      btn.disabled = false;
      btn.textContent = 'Subscribe';
    });
}
