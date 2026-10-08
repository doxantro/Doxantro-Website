// Single source of site copy. Two content variants are built from the same code:
//   lean         — capability and process only; no unverified results.
//   illustrative — adds example engagements, each labelled as a scenario, not a client result.
// Select with NEXT_PUBLIC_CONTENT_VARIANT=lean | illustrative (default: lean).

export type ContentVariant = 'lean' | 'illustrative';

export const contentVariant: ContentVariant =
  process.env.NEXT_PUBLIC_CONTENT_VARIANT === 'illustrative' ? 'illustrative' : 'lean';

export const company = {
  name: 'Doxantro',
  legalName: 'Doxantro Technologies Limited',
  mantra: 'Think, build and solve.',
  email: 'hello@doxantro.com',
  summary:
    'An engineering partner for software builds, AI integration, data and infrastructure.',
};

export const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'How we work', href: '/#process' },
  { name: 'Industries', href: '/#industries' },
  { name: 'About', href: '/about' },
];

export const hero = {
  title: ['Software, data and AI', 'built to run your business.'],
  body:
    'Doxantro designs, builds and runs the systems an operation depends on: production software, dependable data infrastructure and AI that fits the way your teams already work.',
  primary: { label: 'Start a project', href: '/contact' },
  secondary: { label: 'How we work', href: '#process' },
  facts: ['Planning starts within 1–2 weeks', 'Startups to enterprise', 'You own the code'],
};

export type Service = {
  id: string;
  name: string;
  summary: string;
  deliverables: string[];
  preview: {
    file: string;
    lines: { text: string; tone?: 'muted' | 'accent' | 'ok' }[];
  };
};

export const services: Service[] = [
  {
    id: 'software',
    name: 'Software builds',
    summary:
      'Web platforms, mobile apps, internal tools and APIs, designed with your team and shipped in small, working increments.',
    deliverables: ['Web and mobile products', 'Internal tools and dashboards', 'APIs and integrations', 'Legacy modernisation'],
    preview: {
      file: 'release.log',
      lines: [
        { text: '$ deploy --env production', tone: 'muted' },
        { text: '✓ 214 tests passed', tone: 'ok' },
        { text: '✓ migrations applied (3)', tone: 'ok' },
        { text: '✓ health checks green', tone: 'ok' },
        { text: '→ v1.8.0 live for all users', tone: 'accent' },
      ],
    },
  },
  {
    id: 'ai',
    name: 'AI integration',
    summary:
      'Language models and machine learning wired into real workflows, grounded in your own data, with evaluation and human review built in.',
    deliverables: ['Assistants over private documents', 'Workflow and document automation', 'Classification and forecasting models', 'Evaluation and guardrails'],
    preview: {
      file: 'eval/report.md',
      lines: [
        { text: '## Invoice extraction — eval run', tone: 'muted' },
        { text: 'dataset      held-out, labelled by your team' },
        { text: 'checks       totals · dates · vendor · VAT' },
        { text: 'low confidence → routed to reviewer', tone: 'accent' },
        { text: 'status       ready for pilot', tone: 'ok' },
      ],
    },
  },
  {
    id: 'data',
    name: 'Data engineering',
    summary:
      'Pipelines, warehouses and reporting that turn scattered exports into one trusted source your teams and models can use.',
    deliverables: ['Ingestion and ETL pipelines', 'Warehouse and data modelling', 'Reporting and analytics', 'Data quality monitoring'],
    preview: {
      file: 'pipelines/orders.yml',
      lines: [
        { text: 'source:  pos, erp, payments', tone: 'muted' },
        { text: 'schedule: every 15 minutes' },
        { text: 'tests:   not_null · unique · fresh < 1h' },
        { text: 'target:  warehouse.analytics.orders', tone: 'accent' },
        { text: 'last run 09:45  ✓ 0 failures', tone: 'ok' },
      ],
    },
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    summary:
      'Cloud architecture, CI/CD and observability so releases are routine, incidents are visible and costs stay predictable.',
    deliverables: ['Cloud architecture and migration', 'CI/CD and release automation', 'Monitoring, logging and alerting', 'Security hardening and cost review'],
    preview: {
      file: 'infra/main.tf',
      lines: [
        { text: 'module "api" {', tone: 'muted' },
        { text: '  replicas   = 3' },
        { text: '  autoscale  = { min = 2, max = 10 }' },
        { text: '  alerts     = ["p95 > 400ms", "5xx > 1%"]', tone: 'accent' },
        { text: '}', tone: 'muted' },
      ],
    },
  },
];

// Before → after pairs for the dark "How we build" section.
export const transformation = {
  title: 'Most systems are not broken. They are scattered.',
  body:
    'Work lives in spreadsheets, scripts nobody owns and a model demo that never left a notebook. We connect it into something a team can run.',
  rows: [
    { before: 'Weekly reports rebuilt by hand from CSV exports', after: 'One pipeline feeding a dashboard that updates itself' },
    { before: 'A cron job on one laptop that nobody owns', after: 'Scheduled, monitored jobs with alerts and an owner' },
    { before: 'An AI demo that only works on the demo data', after: 'A model evaluated on your data, with review for edge cases' },
    { before: 'Releases on Friday night, fingers crossed', after: 'Automated tests and deploys you can run any afternoon' },
  ],
};

export const engagementSteps = [
  {
    step: 'Discover',
    time: 'Starts within 1–2 weeks',
    body: 'We map your systems, data and goals, then agree on a written scope, a plan and an estimate.',
  },
  {
    step: 'Design',
    time: 'Architecture first',
    body: 'Architecture, data model and interface prototypes, reviewed with the people who will use them.',
  },
  {
    step: 'Build',
    time: 'Working software, often',
    body: 'Short cycles with regular demos. You see working software early and steer it as we go.',
  },
  {
    step: 'Run',
    time: 'We stay on',
    body: 'Handover, documentation and monitoring. We can stay on to support, extend and improve it.',
  },
];

export const industries = [
  { name: 'Finance', href: '/ai-finance', body: 'Risk assessment, fraud detection and financial analysis.' },
  { name: 'Healthcare', href: '/ai-healthcare', body: 'Diagnostic support, patient monitoring and research analysis.' },
  { name: 'Agriculture', href: '/ai-agriculture', body: 'Crop monitoring, yield prediction and resource planning.' },
  { name: 'Supply chain', href: '/ai-supply-chain', body: 'Demand forecasting, inventory and logistics.' },
  { name: 'Security', href: '/ai-security', body: 'Threat detection and behavioural analysis.' },
  { name: 'Energy', href: '/ai-energy', body: 'Grid management and consumption analytics.' },
];

// Shown only in the illustrative variant. Scenarios and figures carried over from the
// previous site; they are not verified client results and must stay labelled that way.
export type ExampleEngagement = {
  slug: string;
  sector: string;
  title: string;
  client: string;
  duration: string;
  problem: string;
  approach: string;
  figures: { value: string; label: string }[];
  moreResults: string[];
  technologies: string[];
  team: string;
};

export const exampleEngagements: ExampleEngagement[] = [
  {
    slug: 'fraud-detection',
    sector: 'Finance',
    title: 'Fraud detection for card transactions',
    client: 'Example: a national bank',
    duration: '6 months',
    problem: 'Rule-based checks miss new fraud patterns and flag too many legitimate payments.',
    approach: 'A behavioural risk score on streaming transactions, with analysts reviewing the uncertain cases. The model keeps learning from newly confirmed fraud.',
    figures: [
      { value: '90%', label: 'faster fraud detection' },
      { value: '87%', label: 'fewer false positives' },
    ],
    moreResults: ['95% better detection accuracy', 'Real-time alerts to the fraud team'],
    technologies: ['Machine learning', 'Real-time analytics', 'Behavioural analysis', 'API integration'],
    team: '5 AI engineers, 2 data scientists, 1 DevOps engineer',
  },
  {
    slug: 'diagnostic-assistant',
    sector: 'Healthcare',
    title: 'Diagnostic assistant for a clinic network',
    client: 'Example: a regional medical centre',
    duration: '8 months',
    problem: 'Doctors spend long stretches on routine preliminary assessments, and patients wait longer as a result.',
    approach: 'An assistant that summarises images, symptoms and history for a clinician to confirm, so doctors can focus on complex cases.',
    figures: [
      { value: '60%', label: 'shorter patient waits' },
      { value: '40%', label: 'more clinician time for complex cases' },
    ],
    moreResults: ['85% better diagnostic accuracy', 'Support available around the clock'],
    technologies: ['Computer vision', 'Natural language processing', 'Cloud computing'],
    team: '4 AI engineers, 3 medical AI specialists, 2 healthcare consultants',
  },
  {
    slug: 'yield-planning',
    sector: 'Agriculture',
    title: 'Yield and resource planning for a cooperative',
    client: 'Example: a farming cooperative',
    duration: '12 months',
    problem: 'Inconsistent yields, and water and fertiliser used by habit rather than data.',
    approach: 'Satellite imagery, soil sensors and weather data combined into field-level recommendations, delivered through a mobile app.',
    figures: [
      { value: '30%', label: 'higher crop yield' },
      { value: '40%', label: 'less water used' },
    ],
    moreResults: ['25% lower fertiliser costs', 'More sustainable farming practice'],
    technologies: ['IoT sensors', 'Satellite imagery', 'Predictive analytics', 'Mobile apps'],
    team: '3 AI engineers, 2 agricultural specialists, 1 data scientist',
  },
  {
    slug: 'supply-chain',
    sector: 'Supply chain',
    title: 'Supply chain planning for a manufacturer',
    client: 'Example: a global manufacturer',
    duration: '10 months',
    problem: 'Disruptions, excess inventory and late deliveries, with no single view of the supply chain.',
    approach: 'Demand forecasting, inventory optimisation, route planning and supplier risk scoring in one planning system.',
    figures: [
      { value: '35%', label: 'lower supply chain costs' },
      { value: '50%', label: 'faster deliveries' },
    ],
    moreResults: ['45% less inventory waste', 'Real-time supply chain visibility'],
    technologies: ['Demand forecasting', 'Inventory management', 'Route optimisation', 'Risk analytics'],
    team: '4 AI engineers, 2 supply chain experts, 1 business analyst',
  },
];

export const faqs = [
  {
    q: 'How quickly can you start?',
    a: 'Project planning usually begins within one to two weeks of a first conversation, depending on scope and team availability.',
  },
  {
    q: 'Do you work with startups and small businesses?',
    a: 'Yes. We work with organisations of every size and shape the engagement to the problem and the budget.',
  },
  {
    q: 'Which industries do you know best?',
    a: 'Finance, healthcare, agriculture, supply chain, security and energy. The engineering carries over, so we take on work outside these too.',
  },
  {
    q: 'Who owns what you build?',
    a: 'You do. Code, infrastructure and data stay in your accounts, with documentation so your team can run it without us.',
  },
];

// ------------------------------------------------------------------
// Services page
// ------------------------------------------------------------------

export const servicesPage = {
  title: 'Engineering for the systems your business runs on.',
  intro:
    'Four disciplines, planned together. Most projects touch more than one, so the same team designs the software, the data underneath it and the AI on top.',
};

// Extra detail per service, keyed by Service.id.
export const serviceDetail: Record<string, { fit: string[]; outcome: string }> = {
  software: {
    fit: [
      'You have a product idea and need a team to design and ship it',
      'Internal processes run on spreadsheets and email threads',
      'An existing system is slow to change and hard to release',
    ],
    outcome: 'Software your team can use, change and release with confidence.',
  },
  ai: {
    fit: [
      'People spend hours reading, sorting or re-typing documents',
      'You want an assistant that answers from your own material',
      'A promising AI prototype has not made it into daily use',
    ],
    outcome: 'AI that does a defined job, measured on your data, with people reviewing what it is unsure about.',
  },
  data: {
    fit: [
      'Reports are rebuilt by hand and numbers disagree between teams',
      'Data sits in several tools that do not talk to each other',
      'You want forecasting or AI but the data is not ready for it',
    ],
    outcome: 'One trusted source of data, refreshed automatically and checked for quality.',
  },
  infrastructure: {
    fit: [
      'Releases are manual, risky or only one person knows how',
      'Outages are found by customers before your team sees them',
      'Cloud costs keep rising without a clear reason',
    ],
    outcome: 'Infrastructure that is repeatable, observable and costed.',
  },
};

export const engagementModels = [
  {
    name: 'Project',
    body: 'A defined scope delivered by a dedicated team, from discovery to launch.',
    bestFor: 'New products, migrations and clearly bounded builds.',
  },
  {
    name: 'Ongoing team',
    body: 'A standing team that works through your roadmap with you, month by month.',
    bestFor: 'Products that keep growing and need steady engineering capacity.',
  },
  {
    name: 'Assessment',
    body: 'A short review of your systems, data or AI plans with a written recommendation.',
    bestFor: 'Deciding what to build, fix or buy before committing a budget.',
  },
];

// ------------------------------------------------------------------
// About page (story, mission, vision and values from the previous site)
// ------------------------------------------------------------------

export const aboutPage = {
  title: 'Technology should serve people, not replace them.',
  intro:
    'Doxantro is a technology company built on one belief: human creativity combined with good engineering and artificial intelligence can solve hard, practical problems.',
  story: [
    'We started Doxantro to close the gap between human ingenuity and artificial intelligence. Too many organisations struggled to get value from AI because implementations were complex and the people building them did not know their industry.',
    'So we work the other way round. We learn how an operation actually runs, then design the software, data and AI around it, and stay to make sure it keeps working.',
  ],
  mission:
    'To give organisations intelligent, dependable systems that drive innovation, efficiency and sustainable growth, built to high standards of ethical technology.',
  vision:
    'A future where advanced technology is accessible to organisations of every size, and human creativity and artificial intelligence work well together.',
  mantraBody: 'Our mantra shapes every engagement, from the first conversation to the system running in production.',
};

export const values = [
  { name: 'Innovation first', body: 'We keep exploring what new technology makes possible, then apply what genuinely helps.' },
  { name: 'Client partnership', body: 'Long-term relationships built on understanding your needs, not just the brief.' },
  { name: 'Sustainable growth', body: 'Solutions that deliver now and keep scaling after launch.' },
  { name: 'Ethical AI', body: 'Responsibility, transparency and fairness at the core of what we build.' },
  { name: 'Excellence', body: 'High standards of quality on every project, large or small.' },
  { name: 'Global impact', body: 'Positive change for industries and communities, wherever our work reaches.' },
];

export const teamGroups = [
  { name: 'Leadership', body: 'Experience across technology, AI and business transformation.' },
  { name: 'Engineers', body: 'Software, data and machine learning engineers who build and run the systems.' },
  { name: 'Domain specialists', body: 'People who know finance, healthcare, agriculture and the other sectors we serve.' },
];

// ------------------------------------------------------------------
// Contact page
// ------------------------------------------------------------------

export const contactPage = {
  title: 'Tell us what needs building.',
  intro:
    'A few lines are enough to start. We reply within 24 hours with questions, a first view on approach and who you would work with.',
  next: [
    { step: 'We read it', body: 'Someone from the engineering team reads every message.' },
    { step: 'We reply', body: 'Within 24 hours, with questions and a first view on approach.' },
    { step: 'We talk', body: 'A short call to agree scope. Planning can start within one to two weeks.' },
  ],
  serviceOptions: ['Software builds', 'AI integration', 'Data engineering', 'Infrastructure', 'Not sure yet'],
  budgetOptions: ['Under $50,000', '$50,000 – $100,000', '$100,000 – $250,000', '$250,000 – $500,000', 'Over $500,000', 'Let’s discuss'],
  timelineOptions: ['As soon as possible', '1–3 months', '3–6 months', '6–12 months', 'Flexible'],
};

// ------------------------------------------------------------------
// Industry pages. Use cases, benefits and audiences from the previous site,
// rewritten as what we build rather than results we claim.
// ------------------------------------------------------------------

export type ServiceId = 'software' | 'ai' | 'data' | 'infrastructure';

export type Industry = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  useCases: { name: string; body: string; services: ServiceId[] }[];
  aims: string[];
  idealFor: string[];
  exampleSector?: string;
};

export const industryPages: Industry[] = [
  {
    slug: 'ai-finance',
    name: 'Finance',
    title: 'Software, data and AI for financial services.',
    intro:
      'Fraud detection, credit risk and reporting systems that analysts trust, built around the controls and audit trails finance already runs on.',
    useCases: [
      { name: 'Fraud detection', body: 'Scoring transactions as they happen and routing uncertain cases to an analyst.', services: ['ai', 'data'] },
      { name: 'Credit risk', body: 'Risk models that use more of the data you hold, with explanations a reviewer can follow.', services: ['ai', 'data'] },
      { name: 'Trading and analytics', body: 'Data pipelines and tooling for research, back-testing and performance reporting.', services: ['data', 'software'] },
      { name: 'Regulatory reporting', body: 'Automated, traceable reports in place of month-end spreadsheet work.', services: ['data', 'software'] },
    ],
    aims: ['Reduce fraud losses', 'Improve risk management', 'Better trading insight', 'Easier compliance reporting'],
    idealFor: ['Banks', 'Insurance', 'Investment firms', 'Fintech'],
    exampleSector: 'Finance',
  },
  {
    slug: 'ai-healthcare',
    name: 'Healthcare',
    title: 'Systems that give clinicians time back.',
    intro:
      'Diagnostic support, patient monitoring and research tools designed so the clinician always makes the final call.',
    useCases: [
      { name: 'Medical image analysis', body: 'Assistants that pre-read images and flag what needs attention first.', services: ['ai'] },
      { name: 'Predictive analytics', body: 'Early warnings from patient data, surfaced inside the tools staff already use.', services: ['ai', 'data'] },
      { name: 'Clinical documents', body: 'Summarising notes, letters and histories so less time goes on paperwork.', services: ['ai', 'software'] },
      { name: 'Research analysis', body: 'Data platforms that help research teams analyse studies faster.', services: ['data', 'infrastructure'] },
    ],
    aims: ['Support better diagnostics', 'Better patient outcomes', 'Lower operating costs', 'Faster research'],
    idealFor: ['Hospitals', 'Clinics', 'Research labs', 'Pharmaceuticals'],
    exampleSector: 'Healthcare',
  },
  {
    slug: 'ai-agriculture',
    name: 'Agriculture',
    title: 'Field data turned into daily decisions.',
    intro:
      'Crop monitoring, yield forecasting and resource planning that combine satellite, sensor and weather data into plain recommendations.',
    useCases: [
      { name: 'Crop health monitoring', body: 'Satellite and drone imagery checked for stress and disease, field by field.', services: ['ai', 'data'] },
      { name: 'Precision agriculture', body: 'Water and fertiliser recommendations from soil sensors and weather data.', services: ['data', 'software'] },
      { name: 'Agricultural supply chain', body: 'Tracking produce from farm to buyer with fewer gaps and less waste.', services: ['software', 'data'] },
      { name: 'Climate adaptation', body: 'Forecasts that help plan planting and harvest around changing weather.', services: ['ai', 'data'] },
    ],
    aims: ['Increase yields', 'Reduce input costs', 'More sustainable practice', 'Better resource management'],
    idealFor: ['Farms', 'Cooperatives', 'Agribusiness', 'Research institutions'],
    exampleSector: 'Agriculture',
  },
  {
    slug: 'ai-supply-chain',
    name: 'Supply chain',
    title: 'Forecasts and routing your operations team can act on.',
    intro:
      'Demand forecasting, inventory and logistics systems that connect the data spread across your ERP, warehouses and carriers.',
    useCases: [
      { name: 'Demand forecasting', body: 'Forecasts by product and location that planners can adjust and track.', services: ['ai', 'data'] },
      { name: 'Inventory optimisation', body: 'Stock levels set from real demand, not habit, across every site.', services: ['data', 'ai'] },
      { name: 'Route planning', body: 'Delivery routes and schedules planned around cost, time and capacity.', services: ['software', 'ai'] },
      { name: 'Supplier risk', body: 'Early signals when a supplier or lane is likely to cause delays.', services: ['data', 'ai'] },
    ],
    aims: ['Lower operating costs', 'Better efficiency', 'Better customer service', 'Reduced disruption risk'],
    idealFor: ['Manufacturing', 'Retail', 'Logistics', 'E-commerce'],
    exampleSector: 'Supply chain',
  },
  {
    slug: 'ai-security',
    name: 'Security',
    title: 'Detection and response, built into your systems.',
    intro:
      'Threat detection, behavioural analysis and access control that help a security team see problems sooner and act faster.',
    useCases: [
      { name: 'Threat detection', body: 'Unusual activity across logs and networks surfaced for an analyst to review.', services: ['ai', 'data'] },
      { name: 'Security engineering', body: 'Hardened infrastructure, secrets handling and safer release pipelines.', services: ['infrastructure'] },
      { name: 'Surveillance analytics', body: 'Video and sensor analysis that flags events worth a human look.', services: ['ai'] },
      { name: 'Access control', body: 'Identity and permission systems that are simple to audit.', services: ['software', 'infrastructure'] },
    ],
    aims: ['Stronger security', 'Faster response', 'Fewer breaches', 'Easier compliance'],
    idealFor: ['Enterprises', 'Government', 'Financial services', 'Healthcare'],
  },
  {
    slug: 'ai-energy',
    name: 'Energy',
    title: 'Smarter grids and lower energy bills.',
    intro:
      'Grid management, consumption analytics and maintenance systems for organisations that produce, distribute or use a lot of energy.',
    useCases: [
      { name: 'Smart grid management', body: 'Load forecasting and balancing tools for grid and network operators.', services: ['ai', 'data'] },
      { name: 'Consumption analytics', body: 'Meter and building data turned into clear views of where energy goes.', services: ['data', 'software'] },
      { name: 'Renewable optimisation', body: 'Solar and wind forecasts that help plan storage and dispatch.', services: ['ai', 'data'] },
      { name: 'Predictive maintenance', body: 'Equipment data watched for early signs of failure.', services: ['ai', 'infrastructure'] },
    ],
    aims: ['Lower energy costs', 'Better efficiency', 'Progress on sustainability', 'Better reliability'],
    idealFor: ['Utilities', 'Manufacturing', 'Commercial', 'Residential'],
  },
];

// ------------------------------------------------------------------
// Careers page
// ------------------------------------------------------------------

export const careersPage = {
  title: 'Build systems that people rely on.',
  intro:
    'We are a team of engineers and domain specialists who would rather ship something useful than something impressive. If that sounds like you, we would like to hear from you.',
  why: [
    { name: 'Real problems', body: 'Work on systems that finance, healthcare, agriculture and energy teams use every day.' },
    { name: 'Remote-first', body: 'Flexible hours and remote or hybrid arrangements.' },
    { name: 'Learning', body: 'Time and support to keep learning, from new tools to new industries.' },
    { name: 'Collaboration', body: 'Small teams where engineers, designers and domain experts work side by side.' },
  ],
  hiring: [
    { step: 'Apply', body: 'Send your CV and a few lines about the work you are proudest of.' },
    { step: 'Review', body: 'Our team reads every application and replies within 48 hours.' },
    { step: 'Interview', body: 'A practical technical conversation and time with the people you would work with.' },
    { step: 'Offer', body: 'If it is a fit on both sides, we help you get started.' },
  ],
};

// Illustrative variant only: roles carried over from the previous site, presented
// as the kinds of roles we hire for, not as confirmed open positions.
export const exampleRoles = [
  {
    title: 'Senior AI Engineer',
    team: 'Engineering',
    experience: '5+ years',
    body: 'Design, build and ship machine learning systems across industries, from concept to production.',
  },
  {
    title: 'AI Solutions Architect',
    team: 'Solutions',
    experience: '7+ years',
    body: 'Shape solutions with clients and make sure they scale, perform and deliver business value.',
  },
  {
    title: 'Data Scientist',
    team: 'Data',
    experience: '3+ years',
    body: 'Turn complex data into models and insights, and work with engineers to put them into use.',
  },
  {
    title: 'AI Product Manager',
    team: 'Product',
    experience: '4+ years',
    body: 'Own product direction for AI features, from customer problem to shipped release.',
  },
];

// ------------------------------------------------------------------
// Blog ("Field notes"). Topics we plan to write about; no articles are
// published yet, so nothing here has an author, date or link.
// ------------------------------------------------------------------

export const blogPage = {
  title: 'Notes from building real systems.',
  intro:
    'Practical writing on software, data and AI engineering: what worked, what did not and why. These are the topics we plan to cover first.',
  topics: [
    { category: 'AI integration', title: 'Taking an AI prototype into daily use', body: 'Evaluation, review loops and the unglamorous work between a demo and a dependable tool.' },
    { category: 'Finance', title: 'Building fraud detection teams can trust', body: 'Real-time scoring, explainable decisions and keeping analysts in the loop.' },
    { category: 'Healthcare', title: 'Designing AI that leaves the clinician in charge', body: 'Where assistance helps in clinical work and where it must step back.' },
    { category: 'Agriculture', title: 'From satellite images to field decisions', body: 'Combining imagery, sensors and weather into recommendations farmers use.' },
    { category: 'Supply chain', title: 'Forecasting demand when the data is messy', body: 'Getting useful forecasts out of fragmented ERP and warehouse data.' },
    { category: 'Infrastructure', title: 'Making releases boring', body: 'CI/CD, observability and the habits that turn deploy day into any day.' },
  ],
};
