export const SKILL_BARS = [
  { label: "TypeScript / JavaScript (ES6+)", pct: 95, color: "from-[#00f0ff] to-[#0099cc]" },
  { label: "NestJS / Node.js",               pct: 93, color: "from-[#00f0ff] to-[#bf5af2]" },
  { label: "REST APIs & System Design",       pct: 92, color: "from-[#00f0ff] to-[#bf5af2]" },
  { label: "PostgreSQL / MySQL / MongoDB",    pct: 86, color: "from-[#bf5af2] to-[#00f0ff]" },
  { label: "Socket.IO / WebSockets",          pct: 88, color: "from-[#00f0ff] to-[#bf5af2]" },
  { label: "AWS / Docker / DevOps",           pct: 80, color: "from-[#ffd60a] to-[#ff6b35]" },
  { label: "TypeORM / BullMQ / Redis",        pct: 78, color: "from-[#bf5af2] to-[#00f0ff]" },
  { label: "JWT / OAuth 2.0 / Security",      pct: 82, color: "from-[#39ff14] to-[#00aacc]" },
  { label: "React (Learning / Beginner)",     pct: 22, color: "from-[#bf5af2] to-[#9333ea]", beginner: true },
];

export const SKILL_CATS = [
  {
    title: "Languages",
    icon: "⌨",
    color: "cyan",
    items: ["TypeScript", "JavaScript (ES6+)", "SQL", "Java"],
  },
  {
    title: "Frameworks / Libraries",
    icon: "🧩",
    color: "purple",
    items: ["NestJS", "Node.js", "React ✦", "Socket.IO", "TypeORM", "BullMQ"],
  },
  {
    title: "Databases / Caching",
    icon: "🗄",
    color: "gold",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Security",
    icon: "🔐",
    color: "green",
    items: ["JWT", "OAuth 2.0", "RBAC", "Data Encryption", "Audit Logging"],
  },
  {
    title: "Cloud / DevOps",
    icon: "☁",
    color: "cyan",
    items: ["AWS (EC2, S3, RDS)", "GCP", "Docker", "Nginx", "PM2", "Coolify", "GitHub Actions (CI/CD)", "Linux", "Git"],
  },
  {
    title: "Architecture",
    icon: "🏗",
    color: "purple",
    items: ["REST APIs", "Microservices", "Multi-Tenancy", "WebSockets", "Event-Driven", "System Design"],
  },
  {
    title: "Tools",
    icon: "🛠",
    color: "gold",
    items: ["Swagger / OpenAPI", "Postman", "GitHub"],
  },
  {
    title: "Integrations",
    icon: "🔌",
    color: "green",
    items: ["Razorpay", "Agora", "MSG91", "Anvil", "Digio", "BSE StAR MF"],
  },
  {
    title: "Practices",
    icon: "📋",
    color: "cyan",
    items: ["Agile / Scrum", "Code Review", "Debugging", "Production Monitoring", "Mentoring"],
  },
];

export const COL_MAP: Record<string, string> = {
  cyan:   "tag-cyan",
  purple: "tag",
  gold:   "tag-gold",
  green:  "tag",
};

export const HDR_MAP: Record<string, string> = {
  cyan:   "text-[#00f0ff]",
  purple: "text-[#bf5af2]",
  gold:   "text-[#ffd60a]",
  green:  "text-[#39ff14]",
};

export const BDR_MAP: Record<string, string> = {
  cyan:   "rgba(0,240,255,.2)",
  purple: "rgba(191,90,242,.2)",
  gold:   "rgba(255,214,10,.2)",
  green:  "rgba(57,255,20,.2)",
};
