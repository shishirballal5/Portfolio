export type Page = "home" | "skills" | "experience" | "projects" | "education" | "contact";

export const PAGES: { id: Page; label: string }[] = [
  { id: "home",       label: "About"      },
  { id: "skills",     label: "Skills"     },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects"   },
  { id: "education",  label: "Education"  },
  { id: "contact",    label: "Contact"    },
];

export const PAGE_LABELS = Object.fromEntries(PAGES.map((p) => [p.id, p.label])) as Record<Page, string>;
