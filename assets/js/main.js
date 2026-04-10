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
