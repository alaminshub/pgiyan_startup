import { StartupModule, PremiumMode } from "./types";

export const STARTUP_MODULES: StartupModule[] = [
  {
    id: "idea-generator",
    title: "Business Idea Generator",
    description: "Formulate highly lucrative, innovative startup opportunities aligned with your personal background, available capital, and regional geography.",
    category: "ideation",
    icon: "Lightbulb",
    params: ["interests", "skills", "location", "capital"],
    paramLabels: {
      interests: { label: "Your Interests & Passions", placeholder: "e.g. Wellness, education, green tech, fashion", type: "text" },
      skills: { label: "Your Skills & Assets", placeholder: "e.g. Coding, marketing, hospitality, teaching", type: "text" },
      location: { label: "Target City / Country", placeholder: "e.g. Dhaka, Bangladesh or Berlin, Germany", type: "text" },
      capital: { label: "Available Injection Capital ($)", placeholder: "e.g. 1500", type: "number" }
    }
  },
  {
    id: "market-research",
    title: "Market Research Engine",
    description: "Examine market spaces, chart competitor strengths, map target demographics, and assess regional threat indicators.",
    category: "ideation",
    icon: "SearchCode",
    params: ["niche", "location", "competitors", "budget"],
    paramLabels: {
      niche: { label: "Target Industry / Niche", placeholder: "e.g. Electric micro-mobility rental", type: "text" },
      location: { label: "Geographical Territory", placeholder: "e.g. Austin, Texas or London, UK", type: "text" },
      competitors: { label: "Known Competitors (optional)", placeholder: "e.g. Bird, Lime, local transit", type: "text" },
      budget: { label: "Research Budget Allocation ($)", placeholder: "e.g. 50 (or 0 for bootstrapping)", type: "number" }
    }
  },
  {
    id: "financial-planner",
    title: "Financial Planner & Calculator",
    description: "Determine launch CapEx, recurring overheads, calculate cash-flow models, project break-even points, and forecast initial ROI timelines.",
    category: "financial",
    icon: "DollarSign",
    params: ["concept", "launchCapital", "monthlyExpenses", "location"],
    paramLabels: {
      concept: { label: "Business Concept Name", placeholder: "e.g. Specialized Matcha Tea Lounge", type: "text" },
      launchCapital: { label: "Total Startup Capital ($)", placeholder: "e.g. 10000", type: "number" },
      monthlyExpenses: { label: "Est. Monthly Overhead Costs ($)", placeholder: "e.g. 1200", type: "number" },
      location: { label: "Base Country of Operation", placeholder: "e.g. Bangladesh", type: "text" }
    }
  },
  {
    id: "business-plan",
    title: "Business Plan Builder",
    description: "Structure exhaustive, export-ready business blueprints including Executive Summaries, company overviews, and roadmap plans of scale.",
    category: "ideation",
    icon: "FileText",
    params: ["companyName", "industry", "products", "location", "budget"],
    paramLabels: {
      companyName: { label: "Company / Project Name", placeholder: "e.g. PGIYAN Logistics Tech", type: "text" },
      industry: { label: "Industry Sector", placeholder: "e.g. Third-party logistics & cargo tech", type: "text" },
      products: { label: "Products & Services Description", placeholder: "e.g. AI-powered route planning for urban courier fleets", type: "textarea" },
      location: { label: "HQ Location", placeholder: "e.g. Dhaka, Bangladesh", type: "text" },
      budget: { label: "Startup Budget ($)", placeholder: "e.g. 5000", type: "number" }
    }
  },
  {
    id: "branding-studio",
    title: "Branding Studio",
    description: "Synthesize smart brand naming conventions, slogans, palettes, narratives, and generate customized, high-precision vector SVG logo concepts.",
    category: "marketing",
    icon: "Palette",
    params: ["ideas", "vibe", "accentColor"],
    paramLabels: {
      ideas: { label: "Brand Objective / Vision", placeholder: "e.g. Premium handcrafted organic leather alternatives", type: "text" },
      vibe: { label: "Target Brand Persona / MoodSelection", placeholder: "Minimalist, Avant-Garde, Premium Tech, Warm & Wholesome", type: "select", options: ["Minimalist Slate", "Classic Premium Theme", "Futuristic Jet-Mono", "Warm & Organic", "Bold Brutalist"] },
      accentColor: { label: "Color Tone Preferences", placeholder: "e.g. Royal Indigo and Light Sand, or Sage on Charcoal", type: "text" }
    }
  },
  {
    id: "website-builder",
    title: "Website Builder & SEO Suite",
    description: "Assemble responsive landing page outlines, produce highly engaging sales copy structures, specify keywords, and compile production HTML previewers.",
    category: "marketing",
    icon: "Globe",
    params: ["companyName", "description", "theme", "intent"],
    paramLabels: {
      companyName: { label: "Startup / Company Name", placeholder: "e.g. Apex Health", type: "text" },
      description: { label: "Product / Offer Statement", placeholder: "e.g. Automated calendar reminders for medical schedules", type: "textarea" },
      theme: { label: "Visual Color Theme", placeholder: "e.g. Deep Ocean Blue & Teal / Elegant Off-White & Dark Mint", type: "text" },
      intent: { label: "Core Web Intent", placeholder: "e.g. Leads booking, Product pre-sales, portfolio display", type: "select", options: ["Lead Capture Form", "Product Pre-Sales (E-Commerce)", "Appointment Booking", "Professional Interactive Portfolio"] }
    }
  },
  {
    id: "social-manager",
    title: "Social Media Manager",
    description: "Construct 30-day multi-platform post calendars, design high-converting paid social ad templates, and build community response strategies.",
    category: "marketing",
    icon: "Megaphone",
    params: ["campaignTheme", "networks", "tone"],
    paramLabels: {
      campaignTheme: { label: "Campaign Focus / Launch Highlight", placeholder: "e.g. Summer special discounts on recycled activewear", type: "text" },
      networks: { label: "Primary Channels", placeholder: "e.g. Facebook, Instagram, TikTok, LinkedIn", type: "text" },
      tone: { label: "Core Social Tone", placeholder: "e.g. High Energy, Creative, Serious Professional, Witty", type: "text" }
    }
  },
  {
    id: "growth-dashboard",
    title: "Growth Dashboard & Analytics",
    description: "Map current operational conversion indices, execute automated growth-hacking checklists, and run structural projections.",
    category: "financial",
    icon: "TrendingUp",
    params: ["revenue", "customers", "traffic", "conversion", "channel", "marketingSpend"],
    paramLabels: {
      revenue: { label: "Monthly Gross Revenue ($)", placeholder: "e.g. 2300", type: "number" },
      customers: { label: "Active Customer Count", placeholder: "e.g. 140", type: "number" },
      traffic: { label: "Monthly Web/Store Traffic", placeholder: "e.g. 5000", type: "number" },
      conversion: { label: "Store Conversion Rate (%)", placeholder: "e.g. 2.4", type: "number" },
      channel: { label: "Main Customer Source", placeholder: "e.g. Google Maps, Referrals, Organic Meta Ads", type: "text" },
      marketingSpend: { label: "Monthly Ad/Marketing Spend ($)", placeholder: "e.g. 250", type: "number" }
    }
  },
  {
    id: "ai-coach",
    title: "AI Business Coach",
    description: "Engage in highly specialized strategic problem-solving with 24/7 access to enterprise frameworks to solve bottlenecks.",
    category: "operations",
    icon: "UserCheck",
    params: ["industry", "stage", "budget", "question"],
    paramLabels: {
      industry: { label: "Startup Sector", placeholder: "e.g. Organic Food Distribution", type: "text" },
      stage: { label: "Current Business Phase", placeholder: "e.g. Pre-revenue Ideation / Launch / Early Scaling", type: "text" },
      budget: { label: "Available Runway Budget ($)", placeholder: "e.g. 5000", type: "number" },
      question: { label: "Your Business Question / Friction Point", placeholder: "e.g. How do I pitch local supermarkets to stock my items?", type: "textarea" }
    }
  },
  {
    id: "team-builder",
    title: "Team Builder & HR Studio",
    description: "Compose technical job specifications, create exhaustive interview diagnostics, map organizational scales, and set HR playbooks.",
    category: "operations",
    icon: "Users",
    params: ["businessModel", "currentTeam", "targetRole", "monthlySalary"],
    paramLabels: {
      businessModel: { label: "Business Model Essence", placeholder: "e.g. On-demand laundry mobile service", type: "text" },
      currentTeam: { label: "Current Team Member Count", placeholder: "e.g. 2 (Co-founders)", type: "number" },
      targetRole: { label: "Target Candidate Role Name", placeholder: "e.g. Lead Mobile React Native Developer", type: "text" },
      monthlySalary: { label: "Budgeted Monthly Salary ($)", placeholder: "e.g. 1800", type: "number" }
    }
  },
  {
    id: "ecommerce-toolkit",
    title: "E-commerce Merchandiser",
    description: "Produce conversion-optimized listings, map precise spec blocks, draft client service responses, and trigger inventory protocols.",
    category: "operations",
    icon: "ShoppingCart",
    params: ["productName", "features", "audience", "price"],
    paramLabels: {
      productName: { label: "Product Name / Line", placeholder: "e.g. Smart Ergonomic Sit-Stand Laptop Desk", type: "text" },
      features: { label: "Key Features & USPs", placeholder: "e.g. Bamboo panel, wireless charger slot, magnetic accessories", type: "textarea" },
      audience: { label: "Target Audience Demographics", placeholder: "e.g. Remote software developers with back strain", type: "text" },
      price: { label: "Sale Price per Unit ($)", placeholder: "e.g. 89", type: "number" }
    }
  },
  {
    id: "legal-assistant",
    title: "Legal & Policy Assistant",
    description: "Access step-by-step registration roadmaps and draft standard terms, privacy clauses, and return matrices.",
    category: "legal",
    icon: "Scale",
    params: ["businessName", "jurisdiction", "userActions"],
    paramLabels: {
      businessName: { label: "Proposed Business Name", placeholder: "e.g. PGIYAN Global Agency", type: "text" },
      jurisdiction: { label: "Jurisdiction & Country", placeholder: "e.g. Dhaka, Bangladesh", type: "text" },
      userActions: { label: "What will users do on your app/site?", placeholder: "e.g. Purchase design consultations and download custom assets", type: "text" }
    }
  },
  {
    id: "funding-assistant",
    title: "Funding & Pitch Assistant",
    description: "Develop comprehensive slide frameworks, calculate valuation multiples, compose investor outreach sequences, and design launch frameworks.",
    category: "funding",
    icon: "Handshake",
    params: ["concept", "traction", "targetFunding", "fundingType"],
    paramLabels: {
      concept: { label: "Core Enterprise Pitch", placeholder: "e.g. AI-driven medical record transcription app", type: "text" },
      traction: { label: "Current KPI & Traction Details", placeholder: "e.g. Closed alpha with 10 medical clinics, $4000 MRR potential", type: "text" },
      targetFunding: { label: "Funding Investment Target ($)", placeholder: "e.g. 75000", type: "number" },
      fundingType: { label: "Desired Funding Type Option", placeholder: "Angel Capital, Venture Seed, Bank Loan, Crowdfunding campaign", type: "select", options: ["Angel Investment Series", "Venture Capital Seed", "Government/Tech Grant", "Public Rewards Crowdfunding"] }
    }
  }
];

export const PREMIUM_MODES: PremiumMode[] = [
  {
    id: "ai-ceo",
    title: "AI CEO Mode",
    description: "Brings high-altitude enterprise strategist planning to your dashboard, emphasizing risk mitigation, long-term partnerships, and rapid commercial scaling.",
    benefit: "Best for overall corporate layout & operational vision.",
    accentClass: "border-emerald-500/30 text-emerald-400 bg-emerald-950/20",
    icon: "Briefcase"
  },
  {
    id: "ai-marketing",
    title: "AI Marketing Manager",
    description: "Enforces viral hooks, organic brand building, community activation protocols, and ROI-centric campaigns designed for bootstrap ventures.",
    benefit: "Best for user acquisition and building brand traction.",
    accentClass: "border-indigo-500/30 text-indigo-400 bg-indigo-950/20",
    icon: "Target"
  },
  {
    id: "ai-financial",
    title: "AI Financial Advisor",
    description: "Installs deep financial scrutiny on margins, customer acquisition ratios (LTV/CAC), tax optimizations, and capital reserves.",
    benefit: "Best for capital budgeting and unit economic audits.",
    accentClass: "border-amber-500/30 text-amber-400 bg-amber-950/20",
    icon: "Activity"
  },
  {
    id: "ai-sales",
    title: "AI Sales Manager",
    description: "Deploys targeted sales scripts, cold-outreach templates, outbound email drip blueprints, and battle-tested objection closing formulas.",
    benefit: "Best for high-touch customer communication and B2B conversion.",
    accentClass: "border-rose-500/30 text-rose-400 bg-rose-950/20",
    icon: "ShieldAlert"
  }
];
