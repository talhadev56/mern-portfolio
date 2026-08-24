export const projects = [
  {
    id: 1,
    slug: 'streampulse',
    number: '01',
    title: 'StreamPulse',
    tagline: 'Streaming platform, rebuilt free of paywalls',
    description:
      'A Django streaming application originally scoped around tiered subscriptions. I removed the premium-access logic end to end — backend permission checks, billing hooks, and the frontend gating UI — so every feature became available without a paywall, without breaking the surrounding app.',
    stack: ['Django', 'Python', 'SQLite', 'HTML/CSS', 'JavaScript'],
    role: 'Full-stack refactor',
    links: { github: '#', live: null },
    featured: true,
    size: 'large',
  },
  {
    id: 2,
    slug: 'all-about-cars',
    number: '02',
    title: 'All About Cars',
    tagline: 'Car catalog and comparison platform',
    description:
      'Built iteratively from a proposal document into a working catalog app: five core models — Manufacturer, Category, Car, Variant, Favorite — plus user auth, side-by-side comparison, a glossary, and advanced search, with the UI refined in Tailwind CSS across several passes.',
    stack: ['Django', 'SQLite', 'Tailwind CSS', 'Python'],
    role: 'Solo build, multi-session',
    links: { github: '#', live: null },
    featured: true,
    size: 'medium',
  },
  {
    id: 3,
    slug: 'seo-niche-portfolio',
    number: '03',
    title: 'SEO Niche Portfolio',
    tagline: 'Client site for an SEO consultant',
    description:
      'A portfolio built for a client in the SEO niche, anchored by an animated SERP mockup as the hero and a no-flash dark mode implementation — theme preference read from localStorage before first paint, so there’s no light-to-dark flicker on load.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    role: 'Client project',
    links: { github: '#', live: null },
    featured: false,
    size: 'small',
  },
  {
    id: 4,
    slug: 'car-rental-management',
    number: '04',
    title: 'Car Rental Management System',
    tagline: 'Desktop-oriented rental workflow',
    description:
      'A full rental management system scoped for Windows deployment — vehicle inventory, booking flow, and return handling — with complete model definitions, views, templates, and a batch setup script so it installs cleanly on a target machine.',
    stack: ['Django', 'SQLite', 'Python'],
    role: 'Solo build',
    links: { github: '#', live: null },
    featured: false,
    size: 'small',
  },
  {
    id: 5,
    slug: 'library-management',
    number: '05',
    title: 'Library Management System',
    tagline: 'Catalog, lending, and returns',
    description:
      'A library system built the same way as the rental project: full models for catalog and lending state, server-rendered views and templates, and a batch script for Windows setup — built to be handed off and run, not just demoed locally.',
    stack: ['Django', 'SQLite', 'Python'],
    role: 'Solo build',
    links: { github: '#', live: null },
    featured: false,
    size: 'small',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
