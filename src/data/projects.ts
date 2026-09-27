export const PROJECTS = [
  {
    title: "Professional Networking Platform",
    subtitle: "Recruitment & Career Portal — Asia",
    period: "Jul 2023 – May 2025",
    icon: "🌐",
    accent: "#00f0ff",
    metrics: [
      { val: "20+",  label: "REST APIs" },
      { val: "100+", label: "Messages/day" },
      { val: "<700ms",label: "Search resp." },
    ],
    stack: ["NestJS", "MySQL", "Socket.IO", "Nginx", "PM2", "JWT", "WebSockets"],
    points: [
      "Created a networking hub for members, recruiters, and organizations across Asia — delivering 20+ REST APIs for profiles, resumes, company pages, job applications, and search.",
      "Enabled real-time messaging (100+ messages), notifications, and presence tracking via Socket.IO and WebSockets.",
      "Secured logins with JWT and optimized database queries for search responses under 700 ms.",
    ],
  },
  {
    title: "Mutual Fund Trading Platform",
    subtitle: "Distributor Investment Dashboard",
    period: "Nov 2023 – Present",
    icon: "📈",
    accent: "#bf5af2",
    metrics: [
      { val: "INR 27Cr+", label: "Under Mgmt." },
      { val: "2.5K+",     label: "Investor Regs." },
      { val: "3K+",       label: "Monthly Orders" },
    ],
    stack: ["NestJS", "REST", "Socket.IO", "BSE StAR MF", "BullMQ", "TypeORM"],
    points: [
      "Built a solution used by 5+ distributors managing INR 27 Cr+ in client investments.",
      "Connected KYC, FATCA, UCC, and onboarding modules to BSE StAR MF — processing 2.5K+ investor registrations.",
      "Orchestrated SIP, lump-sum, SWP, and STP flows for 3K+ monthly orders with real-time Socket.IO status updates.",
      "Automated order sync, NAV updates, reconciliation, and transactions via 7 scheduled jobs, reducing manual effort.",
    ],
  },
  {
    title: "Shares Dealing Platform",
    subtitle: "Private Equity Deal Engine",
    period: "Aug 2023 – Present",
    icon: "💎",
    accent: "#ffd60a",
    metrics: [
      { val: "200+",  label: "Active Users" },
      { val: "7",     label: "API Modules" },
      { val: "500+",  label: "Agreements" },
    ],
    stack: ["NestJS", "REST", "Razorpay", "Anvil", "RBAC", "Audit Logging"],
    points: [
      "Engineered the backend from scratch with one other developer for deals between HNIs and startup founders (200+ active users).",
      "Developed REST APIs across 7 modules: users, RBAC, bidding, negotiation, deals, payments, and transactions.",
      "Incorporated Anvil e-signatures with audit logging for 500+ agreements and records.",
    ],
  },
];
