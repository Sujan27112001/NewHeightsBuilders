/**
 * New Heights Builders - Project Portfolio Data & Logic
 * Features real construction projects completed by New Heights Builders.
 */

const PROJECTS = [
  {
    id: "project-01",
    title: "Two-Story Hillside Residence",
    category: "residential",
    categoryLabel: "Residential Construction",
    isVerifiedReal: true,
    badge: "Completed Project",
    location: "Tamil Nadu",
    imageWebp: "assets/images/project-01.webp",
    imageJpg: "assets/images/project-01.jpg",
    alt: "Two-story residential house with terracotta tile gables and custom exterior staircase built by New Heights Builders",
    description: "Custom multi-level residential home featuring traditional terracotta tiled gables combined with contemporary exterior stair architecture, geometric metal railings, and panoramic upper deck living.",
    details: [
      { label: "Type", value: "Independent Villa" },
      { label: "Scope", value: "Civil Structure, Masonry & Finishing" },
      { label: "Location", value: "Tamil Nadu" },
      { label: "Execution", value: "New Heights Builders" }
    ]
  },
  {
    id: "project-02",
    title: "Contemporary Single-Floor Residence",
    category: "residential",
    categoryLabel: "Residential Construction",
    isVerifiedReal: true,
    badge: "Completed Project",
    location: "Coimbatore Region",
    imageWebp: "assets/images/project-02.webp",
    imageJpg: "assets/images/project-02.jpg",
    alt: "Single-story modern house with ochre parapet accents and portico built by New Heights Builders",
    description: "Compact, efficient modern single-floor bungalow featuring crisp architectural parapet detailing, sheltered car portico, reinforced boundary wall, and cross-ventilated interior layout.",
    details: [
      { label: "Type", value: "Single-Floor Residential" },
      { label: "Scope", value: "Foundation, RCC Structure & Compound" },
      { label: "Location", value: "Coimbatore Region" },
      { label: "Execution", value: "New Heights Builders" }
    ]
  },
  {
    id: "project-03",
    title: "Modern Two-Tier Duplex Home",
    category: "residential",
    categoryLabel: "Residential Construction",
    isVerifiedReal: true,
    badge: "Completed Project",
    location: "Coimbatore Region",
    imageWebp: "assets/images/project-03.webp",
    imageJpg: "assets/images/project-03.jpg",
    alt: "Two-tier duplex home with terracotta accents and geometric wall details built by New Heights Builders",
    description: "Modern family home constructed with earthy warm tones, custom geometric exterior wall plastering accents, accessible rooftop terrace staircase, and private gated entry.",
    details: [
      { label: "Type", value: "Duplex Residence" },
      { label: "Scope", value: "Full Structural Build & Exterior Elevation" },
      { label: "Location", value: "Coimbatore Region" },
      { label: "Execution", value: "New Heights Builders" }
    ]
  },
  {
    id: "project-04",
    title: "Bespoke Villa with Courtyard & Timber Gate",
    category: "residential",
    categoryLabel: "Residential Construction",
    isVerifiedReal: true,
    badge: "Completed Project",
    location: "Coimbatore Region",
    imageWebp: "assets/images/project-04.webp",
    imageJpg: "assets/images/project-04.jpg",
    alt: "Bespoke two-story residence with handcrafted timber gate and courtyard garden built by New Heights Builders",
    description: "Two-story home incorporating classic brick-tile styling, steep clay-tiled canopy, private front courtyard with handcrafted wood gating, and sheltered verandah.",
    details: [
      { label: "Type", value: "Custom Two-Story Villa" },
      { label: "Scope", value: "Turnkey Civil & Structural Work" },
      { label: "Location", value: "Coimbatore Region" },
      { label: "Execution", value: "New Heights Builders" }
    ]
  },
  {
    id: "project-05",
    title: "Two-Story Contemporary Villa with Pergola",
    category: "residential",
    categoryLabel: "Residential Construction",
    isVerifiedReal: true,
    badge: "Completed Project",
    location: "Coimbatore Region",
    imageWebp: "assets/images/project-05.webp",
    imageJpg: "assets/images/project-05.jpg",
    alt: "Two-story contemporary house with royal blue pergola accent and bay windows built by New Heights Builders",
    description: "Distinctive two-story residence combining pitched rooflines with a modern blue pergola architectural frame, generous bay windows, secure perimeter boundary, and outdoor staircase access.",
    details: [
      { label: "Type", value: "Modern Two-Story Villa" },
      { label: "Scope", value: "Structural Framework & Masonry" },
      { label: "Location", value: "Coimbatore Region" },
      { label: "Execution", value: "New Heights Builders" }
    ]
  },
  {
    id: "project-06",
    title: "Contemporary Tri-Tone Villa with Glass Balcony",
    category: "residential",
    categoryLabel: "Residential Construction",
    isVerifiedReal: true,
    badge: "Completed Project",
    location: "Coimbatore Region",
    imageWebp: "assets/images/project-06.webp",
    imageJpg: "assets/images/project-06.jpg",
    alt: "Contemporary two-story house with azure blue and yellow elevation accents, glass balcony railing, and timber-finish gate",
    description: "Custom two-story residential home with modern tri-tone elevation styling, toughened glass balcony railing, timber-accented sliding entrance gate, and covered ground-floor portico.",
    details: [
      { label: "Type", value: "Two-Story Residence" },
      { label: "Scope", value: "Turnkey Civil & Elevation" },
      { label: "Location", value: "Coimbatore Region" },
      { label: "Execution", value: "New Heights Builders" }
    ]
  },
  {
    id: "project-07",
    title: "Modernist White & Azure Villa with Mountain Backdrop",
    category: "residential",
    categoryLabel: "Residential Construction",
    isVerifiedReal: true,
    badge: "Completed Project",
    location: "Coimbatore Region",
    imageWebp: "assets/images/project-07.webp",
    imageJpg: "assets/images/project-07.jpg",
    alt: "Modernist white and azure blue villa with cuboid architectural frame, laser-cut screens, and compound wall",
    description: "Striking architectural home featuring crisp white and brand azure blue portal frames, intricate leaf-patterned jali screens, spacious open terrace, and private boundary wall.",
    details: [
      { label: "Type", value: "Modern Duplex Villa" },
      { label: "Scope", value: "RCC Structure, Jali Work & Elevation" },
      { label: "Location", value: "Coimbatore Region" },
      { label: "Execution", value: "New Heights Builders" }
    ]
  },
  {
    id: "project-08",
    title: "Architectural Multi-Tone Residence with Stone Cladding",
    category: "residential",
    categoryLabel: "Residential Construction",
    isVerifiedReal: true,
    badge: "Completed Project",
    location: "Coimbatore Region",
    imageWebp: "assets/images/project-08.webp",
    imageJpg: "assets/images/project-08.jpg",
    alt: "Two-story multi-tone duplex with vertical stone cladding, yellow accent facade, and balcony jali railing",
    description: "Distinctive two-level home pairing rich maroon and bright yellow architectural accents with natural dark stone wall cladding, decorative upper balcony jali railing, and wide car entrance.",
    details: [
      { label: "Type", value: "Custom Duplex Home" },
      { label: "Scope", value: "Civil Build, Stone Cladding & Finishing" },
      { label: "Location", value: "Coimbatore Region" },
      { label: "Execution", value: "New Heights Builders" }
    ]
  },
  {
    id: "project-concrete",
    title: "Reinforced Concrete Frame & Column Construction",
    category: "concrete",
    categoryLabel: "Concrete Work",
    isVerifiedReal: true,
    badge: "Structural Work",
    location: "Coimbatore Region",
    imageWebp: "assets/images/project-concrete.webp",
    imageJpg: "assets/images/project-concrete.jpg",
    alt: "Reinforced concrete columns, beams, and slab formwork on residential building site",
    description: "High-grade RCC structural framework, engineered column shuttering, precision steel reinforcement tie-ins, and controlled concrete placement for residential longevity.",
    details: [
      { label: "Type", value: "Structural RCC Framework" },
      { label: "Scope", value: "Columns, Beams & Slabs" },
      { label: "Location", value: "Coimbatore Region" },
      { label: "Execution", value: "New Heights Builders" }
    ]
  }
];

// Helper to render project cards HTML
function renderProjectCard(project) {
  return `
    <article class="project-card" data-category="${project.category}" id="${project.id}">
      <div class="project-media">
        <picture>
          <source srcset="${project.imageWebp}" type="image/webp">
          <img src="${project.imageJpg}" alt="${project.alt}" loading="lazy" width="600" height="420">
        </picture>
        <span class="project-badge">${project.badge}</span>
      </div>
      <div class="project-body">
        <div class="project-meta">
          <span class="project-category">${project.categoryLabel}</span>
          <span class="project-loc">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${project.location}
          </span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-specs">
          ${project.details.map(d => `
            <div class="spec-item">
              <span class="spec-label">${d.label}:</span>
              <span class="spec-val">${d.value}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </article>
  `;
}

// Portfolio filter controller
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectGrid = document.getElementById('project-grid');
  const emptyState = document.getElementById('project-empty');

  if (!filterButtons.length || !projectGrid) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      // Update active state
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      // Filter cards
      const cards = projectGrid.querySelectorAll('.project-card');
      let visibleCount = 0;

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('is-hidden');
          card.removeAttribute('hidden');
          visibleCount++;
        } else {
          card.classList.add('is-hidden');
          card.setAttribute('hidden', '');
        }
      });

      // Handle empty state
      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.removeAttribute('hidden');
          emptyState.classList.add('is-visible');
        } else {
          emptyState.setAttribute('hidden', '');
          emptyState.classList.remove('is-visible');
        }
      }
    });
  });
}

// Initialize when DOM is ready if script loaded
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('project-grid');
    if (grid && !grid.children.length) {
      grid.innerHTML = PROJECTS.map(renderProjectCard).join('');
      initProjectFilters();
    } else if (grid) {
      initProjectFilters();
    }
  });
}
