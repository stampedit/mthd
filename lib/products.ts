export type ProductStatus =
  | "available"
  | "beta"
  | "live beta"
  | "prototype"
  | "in development"
  | "early access"
  | "playable"
  | "testable"
  | "coming soon";

export type ProductCategory = "business" | "lab";

export interface ProductStep {
  step: string;
  title: string;
  description: string;
}

export interface ProductFAQ {
  q: string;
  a: string;
}

export interface ProductCTA {
  label: string;
  href: string;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface WorkflowVisual {
  /** Section label, e.g. "HOW PROFITPILOT WORKS" or "PRODUCT VISION" */
  label: string;
  /** Optional status note chip, e.g. "On the roadmap" */
  note?: string;
  steps: string[];
}

export interface Product {
  name: string;
  slug: string;
  category: ProductCategory;
  /** false = inactive/future concept: kept for direct routes, hidden from public listings */
  listed: boolean;
  status: ProductStatus;
  releaseStatus: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  /** Lab kind label, e.g. "Game", "Kids / Learning Game", "Fitness" */
  kind?: string;
  /** Lab primary CTA label, e.g. "Play Now", "Try App" */
  launchLabel?: string;
  /** External launch URL for Lab products. Intentionally optional — no fake links. */
  liveUrl?: string;
  /** URL of a safe public demo/prototype version, if one exists. */
  demoUrl?: string;
  /** True when a working interactive demo/prototype exists (gates Try CTAs). */
  hasInteractiveDemo?: boolean;
  features?: string[];
  /** Roadmap items shown separately so unfinished scope isn't claimed as working. */
  plannedFeatures?: string[];
  logo?: string; // plain-text or monogram
  screenshots?: ProductImage[];
  /** Explanatory flow diagram for products without a safe public demo — rendered as a diagram, never as fake UI. */
  workflowVisual?: WorkflowVisual;
  demoVideo?: string;
  origin?: string;
  problem?: string;
  explanation?: string;
  howItWorks?: ProductStep[];
  whoFor?: string[];
  benefits?: string[];
  faq?: ProductFAQ[];
  before?: string[];
  after?: string[];
  CTA?: ProductCTA;
  /** Optional second lead CTA, e.g. StockFlow's "Request Demo" */
  altCTA?: ProductCTA;
  secondaryCTA?: ProductCTA;
  accent: string; // tailwind color identifier, e.g. "teal-400"
}

export const products: Product[] = [
  // -------------------------
  // BUSINESS SOFTWARE
  // -------------------------
  {
    name: "ProfitPilot",
    slug: "profitpilot",
    category: "business",
    listed: true,
    status: "beta",
    releaseStatus: "BETA",
    kind: "Business Operations",
    tagline: "Know what's actually making your business money.",
    shortDescription:
      "An operations platform for service businesses — clients, jobs, scheduling, payroll visibility, invoicing, and job profitability in one place.",
    longDescription:
      "ProfitPilot brings the moving parts of a service business into one system: clients, jobs, recurring work, employee scheduling, assignments, payroll visibility, invoicing, expenses, revenue, and job profitability — with dashboards that show how the operation is actually doing.",
    features: [
      "Client management",
      "Job and work order tracking",
      "Recurring work",
      "Employee scheduling and assignments",
      "Payroll visibility",
      "Invoicing",
      "Expense tracking",
      "Revenue tracking",
      "Job profitability",
      "Operational dashboards",
    ],
    logo: "ProfitPilot",
    workflowVisual: {
      label: "How ProfitPilot works",
      steps: [
        "Clients",
        "Schedule",
        "Cleaners",
        "Job Completion",
        "Invoicing",
        "Profit Visibility",
      ],
    },
    origin:
      "ProfitPilot started inside a real service business — built while trying to understand scheduling, payroll, profitability, and day-to-day operations.",
    problem:
      "Revenue, payroll, expenses, scheduling, and job data live in different places, so it's hard to know which jobs or customers are actually profitable — or even what's happening day to day.",
    explanation:
      "ProfitPilot connects your operational and financial data in one place so you can run the work and see what is making money and what is not.",
    howItWorks: [
      {
        step: "01",
        title: "Connect the pieces",
        description:
          "Clients, jobs, employees, schedules, revenue, and expenses live in one view.",
      },
      {
        step: "02",
        title: "Run the work",
        description:
          "Recurring work, assignments, invoicing, and payroll stay tied to the jobs they support.",
      },
      {
        step: "03",
        title: "See what works",
        description:
          "Dashboards make profitability visible by job, customer, and team.",
      },
    ],
    whoFor: [
      "Service business owners tracking job profitability",
      "Operations teams managing jobs, schedules, and work orders",
      "Companies outgrowing disconnected spreadsheets",
    ],
    benefits: [
      "Clearer picture of job and customer profitability",
      "Scheduling, invoicing, and payroll visibility in one place",
      "Fewer disconnected tools and manual reports",
      "Better decisions based on actual numbers",
    ],
    faq: [
      {
        q: "When will ProfitPilot be available?",
        a: "ProfitPilot is in beta and still in development. Request access and we'll reach out as it opens up.",
      },
      {
        q: "Will it integrate with accounting software?",
        a: "Integrations are part of the roadmap. Tell us what tools you use when you request access.",
      },
      {
        q: "Is this just a reporting tool?",
        a: "No. ProfitPilot covers day-to-day operations — clients, jobs, scheduling, invoicing, and expenses — not just reports about them.",
      },
    ],
    CTA: {
      label: "Join the Beta",
      href: "/access?product=profitpilot&intent=beta",
    },
    secondaryCTA: { label: "Learn More", href: "/products/profitpilot" },
    accent: "teal-400",
  },
  {
    name: "CrewCheck",
    slug: "crewcheck",
    category: "business",
    listed: true,
    status: "beta",
    releaseStatus: "BETA",
    kind: "Team Operations",
    tagline: "One checklist the whole crew can work from.",
    shortDescription:
      "A collaborative job checklist for teams working together in the field — create a job, share a code, and let the crew claim and complete tasks together.",
    longDescription:
      "CrewCheck gives field teams a shared job checklist. Create the job, share the job code, and the crew joins, claims tasks, and completes them — everyone can see what's done, what's left, and who's working on what.",
    features: [
      "Job codes — the crew joins with a shared code",
      "Task claiming — everyone sees who's doing what",
      "Live progress — done, left, and in progress at a glance",
      "Built for crews working the same job at the same time",
    ],
    logo: "CrewCheck",
    workflowVisual: {
      label: "How CrewCheck works",
      steps: [
        "Create Job",
        "Share Code",
        "Crew Joins",
        "Claim Tasks",
        "Complete Work",
        "Live Progress",
      ],
    },
    origin:
      "CrewCheck came from a real post-construction cleaning job where multiple people needed to work from the same checklist without constantly asking each other what had already been completed.",
    problem:
      "When a crew works from the same checklist — on paper, in a text thread, or in someone's head — tasks get duplicated, missed, or constantly re-asked.",
    explanation:
      "CrewCheck puts the job checklist in one shared place so the whole crew sees what needs to be done, what's already done, and who is working on what.",
    howItWorks: [
      {
        step: "STEP 1",
        title: "Create the job",
        description: "Set up the job and the tasks that need to be completed.",
      },
      {
        step: "STEP 2",
        title: "Share the job code",
        description: "Crew members join the job with a shared code.",
      },
      {
        step: "STEP 3",
        title: "Crew joins",
        description: "Everyone on the job works from the same live checklist.",
      },
      {
        step: "STEP 4",
        title: "Claim tasks",
        description: "Crew members claim the tasks they're taking.",
      },
      {
        step: "STEP 5",
        title: "Complete tasks",
        description: "Finished work is checked off for the whole crew to see.",
      },
      {
        step: "STEP 6",
        title: "Track progress together",
        description: "Everyone can see what's done, what's left, and who's on it.",
      },
    ],
    whoFor: [
      "Crews working the same job at the same time",
      "Cleaning and field service teams",
      "Teams tired of asking \"what's already done?\"",
    ],
    benefits: [
      "No more duplicated or missed tasks",
      "Progress visible to the whole crew in real time",
      "One shared checklist instead of texts and paper",
    ],
    faq: [
      {
        q: "Is CrewCheck available?",
        a: "CrewCheck is in beta. Join the beta and we'll get you set up.",
      },
      {
        q: "Does the crew need to create accounts?",
        a: "The workflow is built around job codes — create the job, share the code, and the crew joins.",
      },
    ],
    CTA: {
      label: "Join the Beta",
      href: "/access?product=crewcheck&intent=beta",
    },
    secondaryCTA: { label: "Learn More", href: "/products/crewcheck" },
    accent: "teal-400",
  },
  {
    name: "StockFlow Pro",
    slug: "stockflow-pro",
    category: "business",
    listed: true,
    status: "prototype",
    releaseStatus: "PROTOTYPE",
    kind: "Inventory Operations",
    tagline: "Inventory counts, discrepancies, and field workflow — in one process.",
    shortDescription:
      "An inventory counting and discrepancy-review workflow: jobs are assigned, physical counts are captured, sources are compared, and recounts are managed to a final approved count.",
    longDescription:
      "StockFlow Pro manages the full counting workflow: a program manager creates and assigns the job, an implementation specialist performs the physical count, the system compares inventory sources against the counts, discrepancies are reviewed and targeted recounts are requested, and the final count is approved — with operational visibility for construction managers and job-level communication between roles.",
    features: [
      "Job creation and role-based assignment",
      "Physical inventory counting in the field",
      "Automated comparison across inventory sources",
      "Discrepancy review and targeted recount requests",
      "Final count approval",
      "Job-level communication between roles",
      "Operational visibility for management",
    ],
    logo: "StockFlow Pro",
    screenshots: [
      {
        src: "/products/stockflow/dashboard.webp",
        alt: "StockFlow Pro dashboard — jobs, discrepancies, and demo workflow",
      },
      {
        src: "/products/stockflow/jobs.webp",
        alt: "StockFlow Pro jobs management with progress and assignments",
      },
      {
        src: "/products/stockflow/review.webp",
        alt: "StockFlow Pro review queue flagging count discrepancies",
      },
      {
        src: "/products/stockflow/map.webp",
        alt: "StockFlow Pro job locations map with status markers",
      },
    ],
    origin:
      "StockFlow Pro is an independent MTHD prototype inspired by real inventory and field workflow problems.",
    problem:
      "Physical inventory counts involve multiple roles, multiple data sources, and a lot of back-and-forth — discrepancies get resolved over calls and messages, and recounts are hard to target and track.",
    explanation:
      "StockFlow Pro turns the count into a defined workflow: assign, count, compare, review, recount, approve — with communication attached to the job itself.",
    howItWorks: [
      {
        step: "01",
        title: "Job created and assigned",
        description:
          "The program manager creates the job and assigns it to an implementation specialist.",
      },
      {
        step: "02",
        title: "Physical count performed",
        description:
          "The specialist performs the on-site physical inventory count.",
      },
      {
        step: "03",
        title: "Sources compared",
        description:
          "StockFlow compares inventory sources against the physical counts.",
      },
      {
        step: "04",
        title: "Discrepancies reviewed",
        description:
          "The program manager reviews discrepancies and requests targeted recounts where needed.",
      },
      {
        step: "05",
        title: "Final count approved",
        description: "The program manager approves the final count.",
      },
      {
        step: "06",
        title: "Visibility for operations",
        description:
          "Construction managers get operational visibility, with job-level communication between roles.",
      },
    ],
    whoFor: [
      "Teams running physical inventory counts",
      "Operations with field staff and program managers",
      "Organizations reconciling inventory across systems",
    ],
    benefits: [
      "A defined process instead of ad-hoc counting",
      "Discrepancies reviewed in one place",
      "Recounts targeted instead of repeated",
      "Communication tied to the job",
    ],
    faq: [
      {
        q: "Is StockFlow Pro available?",
        a: "StockFlow Pro is a working prototype. Request a demo to see the workflow and discuss fit.",
      },
      {
        q: "Is StockFlow Pro an official product of another company?",
        a: "No. StockFlow Pro is an independent MTHD prototype inspired by real inventory and field workflow problems.",
      },
    ],
    demoUrl: "https://stockflow-pro-bice.vercel.app",
    hasInteractiveDemo: true,
    launchLabel: "Try Interactive Demo",
    CTA: {
      label: "Request Access",
      href: "/access?product=stockflow-pro&intent=access",
    },
    altCTA: {
      label: "Request Demo",
      href: "/access?product=stockflow-pro&intent=demo",
    },
    secondaryCTA: { label: "Learn More", href: "/products/stockflow-pro" },
    accent: "teal-400",
  },

  // -------------------------
  // MTHD LAB
  // -------------------------
  {
    name: "Neon Bricks",
    slug: "neon-bricks",
    category: "lab",
    listed: true,
    status: "playable",
    releaseStatus: "PLAYABLE",
    tagline: "Stack it. Don't drop it.",
    shortDescription:
      "A stacking game from the MTHD Lab — time your drops, build combos, and collect power-ups. Plays on desktop and mobile.",
    longDescription:
      "Neon Bricks is a fast arcade stacking game built in the MTHD Lab. Drop blocks on the stack, chain combos, collect power-ups, unlock themes, and chase the high score — on desktop or touch.",
    kind: "Game",
    launchLabel: "Play Now",
    hasInteractiveDemo: true,
    liveUrl: "https://neon-bricks-self.vercel.app",
    logo: "Neon Bricks",
    screenshots: [
      {
        src: "/products/neon-bricks/title.webp",
        alt: "Neon Bricks title screen with play, settings, and high scores",
      },
      {
        src: "/products/neon-bricks/gameplay.webp",
        alt: "Neon Bricks stacking gameplay with score and falling blocks",
      },
    ],
    accent: "teal-400",
  },
  {
    name: "Brain Quest",
    slug: "brain-quest",
    category: "lab",
    listed: true,
    status: "playable",
    releaseStatus: "PLAYABLE",
    tagline: "Fun learning for kids.",
    shortDescription:
      "A kids' learning adventure from the MTHD Lab — three worlds covering counting, math, and letters, with stars, levels, and speed modes.",
    longDescription:
      "Brain Quest (BrainQuest Adventure) is a kids' learning game from the MTHD Lab. Pick a world — Jungle, Space, or Castle — answer questions, earn stars, and unlock levels across Learn, Speed, and Mixed modes.",
    kind: "Kids / Learning Game",
    launchLabel: "Play Now",
    hasInteractiveDemo: true,
    liveUrl: "https://brain-quest-ruddy.vercel.app",
    logo: "Brain Quest",
    screenshots: [
      {
        src: "/products/brain-quest/home.webp",
        alt: "Brain Quest title screen with Start Adventure button",
      },
      {
        src: "/products/brain-quest/worlds.webp",
        alt: "Brain Quest world selection — Jungle, Space, and Castle worlds",
      },
      {
        src: "/products/brain-quest/question.webp",
        alt: "Brain Quest learning question gameplay in Jungle World",
      },
      {
        src: "/products/brain-quest/progress.webp",
        alt: "Brain Quest progress screen with stars, levels, and world unlocks",
      },
    ],
    accent: "teal-400",
  },
  {
    name: "GymFlow",
    slug: "gymflow",
    category: "lab",
    listed: true,
    status: "prototype",
    releaseStatus: "PROTOTYPE",
    tagline: "A fitness project from the MTHD Lab.",
    shortDescription:
      "A fitness app from the MTHD Lab — generate workouts by goal, equipment, and time, then track progress, meals, and hydration. Runs entirely on your device.",
    longDescription:
      "GymFlow is a fitness app built in the MTHD Lab. It generates workouts from your goal, equipment, and available time, includes exercise guides, meal plans, progress charts, streaks, and a water tracker — all stored locally on your device.",
    kind: "Fitness",
    launchLabel: "Try GymFlow",
    hasInteractiveDemo: true,
    liveUrl: "https://gymflow-lac-six.vercel.app",
    logo: "GymFlow",
    screenshots: [
      {
        src: "/products/gymflow/dashboard.webp",
        alt: "GymFlow dashboard with today's workout and progress rings",
      },
      {
        src: "/products/gymflow/generator.webp",
        alt: "GymFlow workout generator — goal, equipment, and time selection",
      },
      {
        src: "/products/gymflow/workout.webp",
        alt: "GymFlow generated workout with exercises, sets, and calories",
      },
      {
        src: "/products/gymflow/meals.webp",
        alt: "GymFlow generated meal plan with macros and daily meals",
      },
    ],
    accent: "teal-400",
  },

  {
    name: "FluxOne",
    slug: "fluxone",
    category: "business",
    listed: true,
    status: "in development",
    releaseStatus: "IN DEVELOPMENT",
    kind: "Business Operations / CRM",
    shortDescription:
      "A CRM-plus platform in development: lead discovery, customer communication, and sales pipeline — growing toward quotes, invoicing, and the operational side of the business.",
    longDescription:
      "FluxOne is being built to turn finding leads into a repeatable system — and beyond that, to connect the sales side of the business with the operational side. The vision starts with lead discovery, CRM, and pipeline management, and grows toward quotes, scheduling, invoicing, payroll, employee operations, customer onboarding, contracts, and workflow automation.",
    tagline: "Turn finding leads into a system.",
    features: [
      "Prospect discovery",
      "Lead organization and scoring",
      "Pipeline management",
      "Outreach tracking and reminders",
      "Sales consistency tools",
    ],
    plannedFeatures: [
      "Customer communication",
      "Quotes",
      "Scheduling",
      "Invoicing",
      "Payroll",
      "Employee operations",
      "Customer onboarding",
      "Contracts",
      "Workflow automation",
    ],
    logo: "FluxOne",
    workflowVisual: {
      label: "Product vision",
      note: "On the roadmap",
      steps: [
        "Lead",
        "Pipeline",
        "Quote",
        "Schedule",
        "Invoice",
        "Follow-Up",
      ],
    },
    CTA: {
      label: "Join the Waitlist",
      href: "/access?product=fluxone&intent=waitlist",
    },
    secondaryCTA: { label: "Learn More", href: "/products/fluxone" },
    accent: "teal-400",
    problem:
      "Leads come from everywhere, follow-up is inconsistent, and opportunities slip through the cracks because there is no real system.",
    explanation:
      "FluxOne gives you one place to find prospects, organize opportunities, and keep outreach on track — with room to grow into the rest of the operation.",
    howItWorks: [
      {
        step: "01",
        title: "Find prospects",
        description: "Collect and import leads into one organized system.",
      },
      {
        step: "02",
        title: "Track opportunities",
        description: "Manage the pipeline from first contact to close.",
      },
      {
        step: "03",
        title: "Stay consistent",
        description: "Outreach reminders keep follow-up from falling behind.",
      },
    ],
    whoFor: [
      "Sales-driven service businesses",
      "Owners managing their own pipeline",
      "Teams that need consistent follow-up",
    ],
    benefits: [
      "Fewer missed opportunities",
      "Clearer sales process",
      "Consistent outreach habits",
    ],
    faq: [
      {
        q: "When will FluxOne launch?",
        a: "FluxOne is in development. Join the waitlist to get early access updates.",
      },
      {
        q: "Can it replace a CRM?",
        a: "That's the direction — CRM plus the operational side: quotes, invoicing, scheduling, and more as the build continues.",
      },
      {
        q: "Is everything on the roadmap working today?",
        a: "No — FluxOne is in development. The waitlist is the best way to follow what's ready and what's next.",
      },
    ],
  },
  {
    name: "MTHD Schedule",
    slug: "schedule",
    category: "business",
    listed: true,
    status: "available",
    releaseStatus: "AVAILABLE",
    kind: "Scheduling",
    shortDescription:
      "A scheduling system for service businesses that collects employee availability, organizes jobs, creates assignments, handles manager approval, and sends schedules to employees.",
    longDescription:
      "MTHD Schedule takes the weekly schedule off your plate. Employees submit availability, you enter the jobs that need coverage, and the system helps match people to shifts and routes the result through manager approval before sending it out.",
    tagline: "Stop building the weekly schedule by hand.",
    features: [
      "Employee availability collection",
      "Job and shift organization",
      "Automatic assignment matching",
      "Manager approval workflow",
      "Employee schedule delivery",
      "Mobile-friendly views",
    ],
    logo: "Schedule",
    workflowVisual: {
      label: "How MTHD Schedule works",
      steps: [
        "Employee Availability",
        "Available Jobs",
        "Automated Matching",
        "Owner Review",
        "Schedule Sent",
        "Employee Confirmation",
      ],
    },
    CTA: { label: "Book a Demo", href: "/book" },
    secondaryCTA: { label: "Learn More", href: "/products/schedule" },
    accent: "teal-400",
    problem:
      "Building weekly schedules with texts, group chats, spreadsheets, and individual messages. Changes get missed, coverage gaps happen, and managers lose time.",
    explanation:
      "MTHD Schedule gives you one place to collect availability, list jobs, match assignments, review the result, and send the final schedule to employees.",
    howItWorks: [
      {
        step: "STEP 1",
        title: "Employees submit availability",
        description:
          "Employees share when they can work through a simple interface.",
      },
      {
        step: "STEP 2",
        title: "Jobs are ready for the week",
        description:
          "Managers enter the jobs, shifts, and coverage needs for the week.",
      },
      {
        step: "STEP 3",
        title: "Availability and jobs are matched",
        description:
          "The system suggests assignments based on availability and job requirements.",
      },
      {
        step: "STEP 4",
        title: "Manager reviews the schedule",
        description:
          "Managers approve, adjust, and finalize before it goes out.",
      },
      {
        step: "STEP 5",
        title: "Employees receive their schedules",
        description:
          "Final schedules are sent out so everyone knows where to be.",
      },
    ],
    whoFor: [
      "Service businesses with crews or shifts",
      "Companies scheduling multiple job sites",
      "Managers building weekly schedules by hand",
    ],
    benefits: [
      "Less time spent on manual scheduling",
      "Fewer missed changes and coverage gaps",
      "Clearer weekly process for managers and employees",
      "Availability and jobs in one place",
    ],
    faq: [
      {
        q: "Can MTHD Schedule replace our spreadsheets?",
        a: "Yes. It is designed to replace the mix of spreadsheets, texts, and manual assignments most businesses use today.",
      },
      {
        q: "Do employees need to download an app?",
        a: "Not necessarily. The scheduling view is mobile-friendly and can be accessed from a browser.",
      },
      {
        q: "Can we start with a custom demo?",
        a: "Yes. Book a live demo and we will show you how it could work for your operation.",
      },
    ],
    before: [
      "Texts",
      "Group chats",
      "Spreadsheets",
      "Manual assignments",
      "Individual messages",
      "Missed changes",
    ],
    after: [
      "Availability in one place",
      "Jobs organized",
      "Assignments created",
      "Manager approval",
      "Schedules sent",
      "Clear weekly process",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getBusinessProducts(): Product[] {
  return products.filter((p) => p.category === "business" && p.listed);
}

export function getLabProducts(): Product[] {
  return products.filter((p) => p.category === "lab" && p.listed);
}

export function getListedProducts(): Product[] {
  return products.filter((p) => p.listed);
}

export function getProductStatusLabel(status: ProductStatus): string {
  switch (status) {
    case "available":
      return "AVAILABLE";
    case "beta":
      return "BETA";
    case "live beta":
      return "LIVE BETA";
    case "prototype":
      return "PROTOTYPE";
    case "in development":
      return "IN DEVELOPMENT";
    case "early access":
      return "EARLY ACCESS";
    case "playable":
      return "PLAYABLE";
    case "testable":
      return "TESTABLE";
    case "coming soon":
      return "COMING SOON";
    default:
      return (status as string).toUpperCase();
  }
}
