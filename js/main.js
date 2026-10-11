/**
 * New Heights Builders - Main Application Scripts
 * Mobile menu, sticky navigation, accessible accordions, dynamic config synchronization
 */

document.addEventListener('DOMContentLoaded', () => {
  syncConfigData();
  initNavigation();
  initAccordions();
  initScrollHeader();
  setCurrentYear();
});

/**
 * Synchronize business details from CONFIG into HTML elements
 */
function syncConfigData() {
  if (typeof CONFIG === 'undefined') return;

  // Phone text and tel links
  document.querySelectorAll('[data-config="phone"]').forEach(el => {
    el.textContent = CONFIG.company.phoneDisplay;
  });
  document.querySelectorAll('[data-config="phone-link"]').forEach(el => {
    el.href = CONFIG.company.phoneTel;
  });

  // Address
  document.querySelectorAll('[data-config="address"]').forEach(el => {
    el.textContent = CONFIG.company.address.full;
  });

  // Google Rating & Reviews
  document.querySelectorAll('[data-config="google-rating"]').forEach(el => {
    el.textContent = CONFIG.googleProfile.rating;
  });
  document.querySelectorAll('[data-config="google-reviews"]').forEach(el => {
    el.textContent = CONFIG.googleProfile.reviewCount;
  });
  document.querySelectorAll('[data-config="google-url"]').forEach(el => {
    el.href = CONFIG.googleProfile.url;
  });
  document.querySelectorAll('[data-config="directions-url"]').forEach(el => {
    el.href = CONFIG.googleProfile.directionsUrl;
  });

  // WhatsApp links
  document.querySelectorAll('[data-config="whatsapp-link"]').forEach(el => {
    el.href = CONFIG.whatsapp.getLink();
  });
}

/**
 * Responsive & Accessible Mobile Navigation
 */
function initNavigation() {
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('primary-nav');
  const header = document.querySelector('.site-header');

  if (!toggleBtn || !navMenu) return;

  function openMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.setAttribute('aria-label', 'Close navigation menu');
    navMenu.classList.add('is-open');
    document.body.classList.add('nav-locked');
  }

  function closeMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.setAttribute('aria-label', 'Open navigation menu');
    navMenu.classList.remove('is-open');
    document.body.classList.remove('nav-locked');
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking nav links
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        closeMenu();
      }
    });
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('is-open') &&
        !navMenu.contains(e.target) &&
        !toggleBtn.contains(e.target)) {
      closeMenu();
    }
  });
}

/**
 * Accessible FAQ Accordion
 */
function initAccordions() {
  const accordionButtons = document.querySelectorAll('.accordion-trigger');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const panelId = button.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);

      if (!panel) return;

      // Close other accordions in the same group if requested
      const parentList = button.closest('.accordion-list');
      if (parentList) {
        parentList.querySelectorAll('.accordion-trigger').forEach(otherBtn => {
          if (otherBtn !== button) {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherPanelId = otherBtn.getAttribute('aria-controls');
            const otherPanel = document.getElementById(otherPanelId);
            if (otherPanel) {
              otherPanel.setAttribute('hidden', '');
              otherPanel.classList.remove('is-open');
            }
          }
        });
      }

      // Toggle current accordion
      if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        panel.setAttribute('hidden', '');
        panel.classList.remove('is-open');
      } else {
        button.setAttribute('aria-expanded', 'true');
        panel.removeAttribute('hidden');
        panel.classList.add('is-open');
      }
    });
  });
}

/**
 * Sticky header subtle elevation on scroll
 */
function initScrollHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Set current year in footer copyright
 */
function setCurrentYear() {
  const yearElements = document.querySelectorAll('.current-year');
  const year = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = year;
  });
}
