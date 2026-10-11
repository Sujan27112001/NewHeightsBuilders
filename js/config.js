/**
 * New Heights Builders - Centralized Business Configuration
 * Edit this file to update contact details, Google Business Profile links,
 * services, or form destinations across the entire website.
 */
const CONFIG = {
  company: {
    name: "New Heights Builders",
    tagline: "Build Your Dream Home with Confidence",
    category: "Construction Company",
    cityRegion: "Coimbatore & Narasimhanaickenpalayam, Tamil Nadu",
    phoneDisplay: "+91 86107 06708",
    phoneRaw: "918610706708",
    phoneTel: "tel:+918610706708",
    // Configurable email for quotation drafts and direct contact
    email: "info@newheightsbuilders.in",
    address: {
      line1: "T2, 5th St, Thendral Nagar",
      line2: "Narasimhanaickenpalayam",
      city: "Coimbatore",
      state: "Tamil Nadu",
      postalCode: "641031",
      country: "India",
      full: "T2, 5th St, Thendral Nagar, Narasimhanaickenpalayam, Tamil Nadu 641031, India"
    }
  },

  // Google Business Profile Information
  googleProfile: {
    rating: "5.0",
    maxRating: "5",
    reviewCount: 54,
    // Configurable direct link to Google Business Profile or Reviews
    url: "https://maps.google.com/?q=New+Heights+Builders+Narasimhanaickenpalayam+Coimbatore",
    // Pre-calculated Google Maps Directions URL using the verified physical address
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=T2,+5th+St,+Thendral+Nagar,+Narasimhanaickenpalayam,+Tamil+Nadu+641031,+India"
  },

  // WhatsApp Messaging
  whatsapp: {
    number: "918610706708",
    defaultMessage: "Hello New Heights Builders, I would like to discuss a construction project.",
    getLink: function(customText) {
      const text = customText || this.defaultMessage;
      return `https://wa.me/${this.number}?text=${encodeURIComponent(text)}`;
    }
  },

  // Third-party form service endpoint (optional; leave null to use client-side mailto draft)
  forms: {
    endpoint: null // Set to your endpoint (e.g., Formspree, Web3Forms, etc.) when ready
  },

  // Confirmed Services Only (Strictly from Google Business Profile)
  services: [
    {
      id: "building-construction",
      title: "Building Construction",
      shortDesc: "End-to-end structural and comprehensive building construction executed with precise planning and disciplined quality control.",
      fullDesc: "Complete building construction for custom residential properties in Coimbatore and surrounding areas. We manage every phase from foundation to roofing with stringent safety measures and structural integrity.",
      scope: ["Civil structural execution", "Brickwork & masonry", "Plastering & finishing", "Quality material testing"]
    },
    {
      id: "residential-construction",
      title: "Residential Construction",
      shortDesc: "Tailored independent homes, duplexes, and villas built to match your family's lifestyle, architectural aspirations, and local site conditions.",
      fullDesc: "Specialized residential house construction tailored for contemporary living in Tamil Nadu. We focus on natural ventilation, robust load-bearing structures, and refined architectural aesthetics.",
      scope: ["Custom independent houses", "Modern duplex villas", "Multi-floor residential units", "Terrace & compound wall construction"]
    },
    {
      id: "interior-structural-repairs",
      title: "Interior Structural Repairs",
      shortDesc: "Expert assessment and precision reinforcement of interior structural elements, crack retrofitting, and beam stabilization.",
      fullDesc: "Targeted remedial and strengthening works for residential interiors. We address concrete distress, wall cracking, load redistribution, and structural modifications safely.",
      scope: ["Structural crack repair", "Lintel & beam reinforcement", "Dampness rectification & waterproofing", "Interior structural alterations"]
    },
    {
      id: "demolition",
      title: "Demolition",
      shortDesc: "Safe, methodical partial or total structural dismantling with complete debris clearance and neighborhood protection.",
      fullDesc: "Controlled dismantling of aging structures, outbuildings, or designated interior partitions. Executed with strict adherence to neighborhood safety protocols.",
      scope: ["Controlled structural demolition", "Selective wall removals", "Debris clearing & site leveling", "Adjacent property protective shoring"]
    },
    {
      id: "accessory-building-construction",
      title: "Accessory Building Construction",
      shortDesc: "Construction of auxiliary structures including porticos, security cabins, covered car parks, storage units, and utility rooms.",
      fullDesc: "High-quality supplementary constructions designed to harmonize seamlessly with the main residential structure in materials and architectural styling.",
      scope: ["Covered vehicle parking porches", "Utility rooms & pump houses", "Outdoor garden pavilions", "Rooftop terrace rooms"]
    },
    {
      id: "concrete-construction",
      title: "Concrete Construction",
      shortDesc: "Durable reinforced cement concrete (RCC) works, deep footings, columns, grade slabs, and suspended structural slabs.",
      fullDesc: "Heavy-duty concrete works following standard civil engineering practices. Proper water-cement ratios, steel placement, and adequate curing regimens.",
      scope: ["RCC footings & foundations", "Framed columns & tie-beams", "Roof & floor slabs", "Retaining & boundary walls"]
    },
    {
      id: "concrete-work",
      title: "Concrete Work",
      shortDesc: "Specialized on-site concrete casting, pathways, ramp construction, compound wall copings, and decorative flatwork.",
      fullDesc: "Precision concrete placement for driveways, ramps, rainwater drains, septic tank capping, and site hardscaping built for long-term endurance.",
      scope: ["Driveway paving & ramps", "Water sump & septic tank RCC covers", "Compound coping & steps", "Leveling concrete sub-bases"]
    },
    {
      id: "construction-management",
      title: "Construction Management",
      shortDesc: "Hands-on site supervision, material procurement verification, schedule coordination, and progress reporting.",
      fullDesc: "Professional project oversight ensuring your build proceeds smoothly on schedule, within budget allocations, and to rigorous quality benchmarks.",
      scope: ["Daily on-site supervision", "Material quality verification", "Trade contractor coordination", "Milestone progress tracking"]
    },
    {
      id: "construction-site-excavation",
      title: "Construction Site Excavation",
      shortDesc: "Trenching, foundation pit digging, site clearing, soil leveling, and backfilling prepared for structural footings.",
      fullDesc: "Systematic earthmoving and trench excavation suited to local soil strata in the Coimbatore region, ensuring solid foundation bearing capacity.",
      scope: ["Column footing excavation", "Trenching for boundary walls", "Soil strata inspection & clearing", "Compacted backfilling"]
    }
  ]
};

// Freeze CONFIG to prevent accidental modifications at runtime
Object.freeze(CONFIG);
