# Aditya Baral — Dark Vintage Editorial Portfolio

A production-ready personal engineering portfolio website designed and built for **Aditya Baral**, Software Developer specializing in full-stack web applications and reliable backend architectures.

---

## 1. Project Overview

### Purpose
To establish Aditya Baral as a capable full-stack developer who designs and implements robust backend services, REST APIs, relational and document database schemas, secure authentication workflows, and intuitive web interfaces.

### Professional Positioning
- **Primary Identity:** Software Developer | Full-Stack & Backend Engineering
- **Target Roles:** Graduate Software Engineer, Full-Stack Developer (MERN), Backend Developer (Node.js / Spring Boot)
- **Academic Foundation:** B.Tech in Computer Science Engineering at UPES (CGPA 8.1 / 10, Class of 2027)
- **Verified Experience:** Software Development Internships at **Xebia** and **ONGC GEOPIC**, Lead Project Engineer at Smart India Hackathon.

### Visual & Creative Direction
- **Theme:** Dark Vintage Editorial with Cinematic Portraiture, tactile analogue character, muted earthy tones, and contemporary web performance.
- **Surface Palette:** Deep olive charcoal (`#292821`), smoky olive (`#45443A`), near-black (`#171816`), vintage taupe (`#837967`), aged ivory (`#E5DDCE`), faded parchment (`#C8BCA5`), and muted tobacco brown (`#9A7655`).
- **Brand Restriction:** **Strictly NO logos or watermarks.** Identity is established through plain typography, authentic photography, and clear technical substance.
- **Project Visuals:** All project screenshot areas are **intentionally empty** with reserved 16:10 architectural frames, ready for manual population.

---

## 2. Technology Stack

- **Framework:** Next.js 16 (App Router with Turbopack)
- **Language:** TypeScript 5
- **Library:** React 19
- **Styling:** Tailwind CSS v4 with custom `@theme` tokens and CSS variables
- **Typography:** Google Fonts loaded via `next/font/google`:
  - **Display:** `Instrument Serif` (weights: 400, regular & italic)
  - **Interface:** `Manrope` (weights: 300, 400, 500, 600, 700)
  - **Technical / Monospaced:** `IBM Plex Mono` (weights: 400, 500, 600)
- **Animation Stack:**
  - **GSAP 3 & `@gsap/react`:** Timeline coordination, hero entrance sequence, and scroll reveals
  - **Lenis:** Smooth inertia scrolling synchronized with browser repaint cycles
  - **Motion (`motion/react`):** State-driven UI micro-interactions, mobile navigation drawer
- **Icons:** Lucide React & custom SVGs for GitHub and LinkedIn
- **SEO & Structured Data:** Next.js Metadata API, OpenGraph, JSON-LD Schema (`Person`, `WebSite`), `sitemap.ts`, `robots.ts`, and `llms.txt`.

---

## 3. Project Structure

```
Portfolio/
├── public/
│   ├── images/
│   │   ├── aditya-baral-portrait.jpg     # Hero portrait (suit & tie)
│   │   └── aditya-baral-casual.jpg       # About section portrait
│   ├── projects/                         # Place manual project screenshots here
│   ├── llms.txt                          # Semantic context for AI search agents
│   └── Aditya_Baral_Resume.pdf           # Verified resume document
├── src/
│   ├── app/
│   │   ├── globals.css                   # Theme tokens, palette variables, film grain
│   │   ├── layout.tsx                    # Font definitions, metadata, JSON-LD
│   │   ├── page.tsx                      # Primary page assembling all sections
│   │   ├── not-found.tsx                 # Custom vintage editorial 404 page
│   │   ├── robots.ts                     # Search engine crawler directives
│   │   └── sitemap.ts                    # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── Navbar.tsx                    # Minimalist header, navigation & mobile drawer
│   │   ├── Hero.tsx                      # Editorial intro with suit portrait & GSAP
│   │   ├── ProjectsSection.tsx           # 5 featured systems with empty screenshot containers
│   │   ├── ExperienceSection.tsx         # Structured career & academic timeline
│   │   ├── SkillsSection.tsx             # 7 engineering discipline categories
│   │   ├── AboutSection.tsx              # Casual portrait & technical narrative
│   │   ├── ContactSection.tsx            # Copyable email, social links & resume CTA
│   │   ├── Footer.tsx                    # Typography-based footer with zero logos
│   │   ├── Icons.tsx                     # Custom inline SVG icons for GitHub & LinkedIn
│   │   └── SmoothScroll.tsx              # Lenis smooth scroll provider
│   └── data/
│       └── portfolio-data.ts             # Central typed data model for all content
├── package.json
├── tsconfig.json
└── README.md
```

---

## 4. Typography & Theme Tokens

The typography strictly follows the user's supplied theme reference:

| Role | Font Family | Source | CSS Variable |
|---|---|---|---|
| Display / Hero / Titles | **Instrument Serif** | `next/font/google` | `--font-instrument-serif` (`font-serif`) |
| Interface / Body / Nav | **Manrope** | `next/font/google` | `--font-manrope` (`font-sans`) |
| Technical / Index / Tags | **IBM Plex Mono** | `next/font/google` | `--font-ibm-plex-mono` (`font-mono`) |

### Color Palette

```css
--color-olive-dark: #292821;        /* Primary background surface */
--color-olive-smoke: #45443a;       /* Elevated cards and hover surfaces */
--color-near-black: #171816;        /* Deep photographic contrast */
--color-vintage-taupe: #837967;     /* Hairline borders & subtle annotations */
--color-faded-parchment: #c8bca5;   /* Secondary text & labels */
--color-aged-ivory: #e5ddce;        /* Primary text & headlines */
--color-tobacco: #9a7655;           /* Warm accent & highlights */
--color-fog: #a7a49a;               /* Atmospheric gradients */
```

---

## 5. How to Add Project Screenshots Manually

Per the master prompt instructions, **all screenshot areas have been built with stable 16:10 dimensions and intentionally left empty**. To add real screenshots:

1. **Prepare your images:**
   - **Recommended Dimensions:** `1600 × 1000 px` (or any `16:10` aspect ratio, e.g., `1280 × 800 px`).
   - **Format:** Modern `.webp` or optimized `.png` / `.jpg`.
   - **Color Tone:** Clean, un-skewed application captures, UI screenshots, or architecture diagrams.

2. **Save files in `public/projects/`:**
   - Create the directory `public/projects/` if not present.
   - Example filenames:
     - `public/projects/intern-resource-hub.webp`
     - `public/projects/secure-doc-platform.webp`
     - `public/projects/ai-sales-crm.webp`
     - `public/projects/exam-platform.webp`
     - `public/projects/workload-escalation.webp`

3. **Update `src/data/portfolio-data.ts`:**
   - Locate the project object in `PORTFOLIO_DATA.projects`.
   - Set the `screenshotPath` field to the image path:
     ```ts
     {
       id: "intern-resource-hub",
       // ...
       screenshotPath: "/projects/intern-resource-hub.webp", // <-- Update here!
     }
     ```

4. **Automatic Rendering:**
   `src/components/ProjectsSection.tsx` automatically checks `project.screenshotPath`. When populated, it renders using `next/image` inside the reserved frame with `fill`, `object-cover`, and responsive sizes—preserving complete layout stability with zero Cumulative Layout Shift (CLS).

---

## 6. Development & Build Commands

```bash
# Run local development server (starts on http://localhost:3000)
npm run dev

# Create optimized production build
npm run build

# Start production server
npm run start

# Run ESLint validation
npm run lint
```

---

## 7. Guidelines for AI Coding Assistants

When modifying this repository, any future AI assistant MUST adhere to the following rules:

1. **Read this README first** and inspect `src/data/portfolio-data.ts` and `src/app/globals.css` before writing code.
2. **Preserve the visual identity:** Dark vintage editorial with warm olive tones (`#292821`), aged ivory (`#E5DDCE`), and muted accents. Do not convert the design to pure black (`#000000`) or a generic neon/cyberpunk template.
3. **Follow the typography system:** Use `Instrument Serif` for headlines, `Manrope` for interface/body copy, and `IBM Plex Mono` for technical labels. Do not arbitrarily substitute Inter, Geist, or other fonts.
4. **Strict Branding Restriction:** **Never add a logo or watermark.** No monograms, no badge icons for the name, and no decorative logo marks. Aditya Baral's name must remain plain, styled typography.
5. **Preserve the Authentic Portrait:** Never replace the supplied portrait images with stock photography or AI-generated faces.
6. **Keep Screenshot Containers Empty:** Do not generate or insert placeholder images into `screenshotPath` unless the user provides real files.
7. **Animation Separation:** Use GSAP for scroll and timeline choreography. Use Motion for localized React state transitions. Use CSS for hover transitions. Never animate the same transform property from competing systems.
8. **Preserve Clean Teardown:** Always clean up GSAP timelines, ScrollTrigger instances, event listeners, and timers in `useEffect` or `useGSAP` cleanup functions.
9. **Never Fabricate Credentials:** Do not invent metrics, awards, client names, or professional claims. All content must match the verified data in `PORTFOLIO_DATA`.
10. **Run Build Checks:** Always verify changes with `npm run build` to ensure TypeScript compilation, route generation, and Next.js Turbopack rules pass without errors.
