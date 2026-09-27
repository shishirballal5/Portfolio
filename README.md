# Shishir Ballal — Portfolio

Personal portfolio site built with React 19, Vite 8, TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # start the dev server (port $PORT, default 8443)
npm run build    # production build
npm run preview  # preview the production build
npm run format   # format with oxfmt
```

Toolchain versions (Node.js 22) are pinned in `.mise.toml`.

## Project structure

```
src/
├── main.tsx              React entrypoint
├── App.tsx               Page switching and app shell
├── index.css             Global styles, fonts and Tailwind import
├── assets/
│   ├── images/           Profile photo
│   └── resume/           Resume PDFs (older versions in archive/)
├── components/
│   ├── layout/           Nav, Footer
│   ├── ui/               Small reusable pieces (SectionLabel)
│   └── effects/          Background particles
├── data/                 All site content — edit these to update text
├── hooks/                useReveal, useTyping, useSkillAnim
└── pages/                One component per page
```

## Updating content

Text, metrics and links live in `src/data/`:

| File            | Contents                                    |
| --------------- | ------------------------------------------- |
| `profile.ts`    | Email, LinkedIn, headline roles, home stats |
| `navigation.ts` | Page list and nav labels                    |
| `skills.ts`     | Proficiency bars and skill categories       |
| `experience.ts` | Work history                                |
| `projects.ts`   | Project cards                               |
| `education.ts`  | Degree details and learning path            |
| `contact.ts`    | Contact cards                               |

## Conventions

- Style with Tailwind utility classes in JSX; global CSS and theme tokens go in `src/index.css`.
- Import from `src` with the `@` alias, e.g. `import SectionLabel from "@/components/ui/SectionLabel"`.
- Export components and hooks as default exports.
- Use double quotes for strings that contain apostrophes.
