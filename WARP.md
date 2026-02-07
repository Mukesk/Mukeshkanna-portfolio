# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Framework: Next.js 14 (App Router) with TypeScript
- Styling: Tailwind CSS (postcss, autoprefixer)
- Animations/3D: Framer Motion, React Three Fiber, three
- Linting: ESLint (extends next/core-web-vitals)
- Deployment: Vercel (vercel.json present)

Commands you’ll use most
- Install dependencies
  - npm install
- Local development
  - npm run dev
- Build
  - npm run build
- Start production server (after build)
  - npm run start
- Lint
  - npm run lint

Notes
- Node.js >= 18 is required (see README). A yarn.lock exists, but README and scripts use npm; prefer npm for consistency unless you explicitly switch managers.
- Lint/TS are ignored during production builds via next.config.js (eslint.ignoreDuringBuilds, typescript.ignoreBuildErrors). Run lint locally to catch issues before building.
- Tests: No test tooling or scripts are configured in this repo; running a single test is not applicable at present.

High-level architecture and where things live
- App Router (app/)
  - app/layout.tsx is the root layout. It imports global styles (app/globals.css), sets Inter as the font, applies base classes, and composes global UI: StarsCanvas background, Navbar, page content, and Footer. Metadata/viewport come from config/siteConfig and a static themeColor.
  - app/page.tsx is the home route. It composes the landing experience from feature sections (Hero, Skills, Encryption, Projects, GitHubPortfolio, Certifications, Achievements). There are no other routes in app/ at present and no app/api/* routes in the tree.
- Components (components/)
  - main/: Top-level page sections used by app/page.tsx (hero, skills, projects, certifications, achievements, footer, navbar, star-background, etc.).
  - sub/: Reusable subcomponents and cards (project-card, certification-card, certificate-modal, hero-content, etc.).
  - ui/: Generic UI utilities (LazyImage, MobileNav/Feedback, Skeleton).
- Configuration and constants
  - config/index.ts defines siteConfig (Next Metadata): title, description, keywords, authors.
  - constants/index.ts centralizes all static content rendered by the main/sub components (SKILL_DATA, PROJECTS, CERTIFICATIONS, ACHIEVEMENTS, NAV_LINKS, socials, footer data). The landing page reads from here to render structured content.
- Lib utilities (lib/)
  - lib/utils.ts provides cn(), a Tailwind-aware classnames merger via clsx + tailwind-merge.
  - lib/motion.ts declares Framer Motion variants/utilities (slideInFromLeft/Right, fadeInUp, staggerContainer), a reduced-motion flag, smoothScrollTo helper, and a throttled scroll listener.
- Styling and tooling
  - tailwind.config.ts scans app/, components/, pages/. postcss.config.js enables tailwindcss and autoprefixer.
  - tsconfig.json uses path alias @/* to repo root and sets bundler resolution for Next 14. Strict mode is enabled; noEmit with incremental.
  - .eslintrc.json extends next/core-web-vitals with a couple of relaxed React rules.
- Next.js config (next.config.js)
  - Disables ESLint and TypeScript blocking during build. Optimizes images (WebP/AVIF, TTL, SVG allowed with a CSP). Adds security and caching headers via an async headers() function. Enables experimental optimizePackageImports for framer-motion and lucide-react. Enables compression.

Deployment (Vercel)
- vercel.json
  - version: 2, framework: nextjs
  - Commands: install (npm install), dev (npm run dev), build (npm run build)
  - functions: app/api/**/*.ts mapped to runtime nodejs18.x (no app/api currently; this is forward-compatible if added)
  - Headers: Global security headers (X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin) and long-term caching via Cache-Control where applicable
  - Region: ["iad1"]
- Note: next.config.js also sets security/caching headers. The duplication is harmless, but next.config.js is the canonical Next way. If you change headers, keep next.config.js and vercel.json consistent or remove one source of truth.
- If you encounter the Vercel error “Function Runtimes must have a valid version, for example `now-php@1.0.0`”: this repo’s vercel.json already uses a modern Node runtime (nodejs18.x). Ensure your Vercel project doesn’t have legacy runtimes configured elsewhere, and that you’re on a recent Vercel CLI. You can validate locally with: vercel build

Quick reference from README
- Prereqs: node >= 18, npm >= 9
- Scripts: dev, build, start, lint
- The live demo and feature showcase in README are for reference only; the repo itself contains the single-page portfolio assembled from the components rooted in app/page.tsx.
