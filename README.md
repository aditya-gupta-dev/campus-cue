# CampusCue

A responsive, frontend-only campus safety awareness prototype built with Next.js 16.4, TypeScript, Tailwind CSS 4, and shadcn/ui (Radix Nova). It follows `docs/design.md` and `docs/spec.md`.

## Run locally

Install Bun (the project uses Bun 1.4.3), then:

```sh
bun install
bun run dev
```

Open http://localhost:3000. There is no authentication, database, or external runtime API. Inter fonts and the illustrative campus photograph are served locally.

## Appearance

Use the theme toggle in the header to select Light, Dark, or System. The default follows the device preference, and an explicit selection persists across reloads and routes via `next-themes`. All pages and overlay menus use shared theme tokens.

## Pages

- `/`: landing page and entry points.
- `/help`: three fictional scenarios, predefined instructions, contact and location links. Supports `?scenario=medical`, `safety`, or `accident`; unsupported values show a recoverable fallback.
- `/contacts`: fictional directory with combined search and category filters. Scenario links use `?contact=health` or `security`.
- `/locations`: case-insensitive code lookup plus building and landmark search. Supports direct links such as `?code=LIB-G-01`.
- `/about`: educational purpose, research scope, and limitations.

## Validate

```sh
bun run lint
bun run test
bun run build
bunx playwright install chromium
bun run test:e2e
```

The component tests cover selection, cross-page references, filtering, empty states, location searches, and explanatory pages. Playwright tests exercise complete flows, independent routes, metadata, mobile navigation, page errors, and overflow on desktop and mobile against the production build. `bun run test:watch` starts the Vitest watcher.

## Project layout

The existing root `app/` convention is retained. `components/ui/` contains shadcn components; shared components live in `components/`; interactive flows live in `features/`; typed local fixtures live in `data/`; search and metadata helpers live in `lib/`.

Edit `data/scenarios.ts`, `data/contacts.ts`, and `data/locations.ts` to change fictional examples. These sample scripts are educational content, not clinically reviewed emergency instructions. Appropriate content review is required before changing them into real-world guidance.

## Metadata and deployment

No custom environment variables are required. Canonical, sitemap, and social URLs use the confirmed production origin `https://campus-cue.adibuilds.shop`, defined in `lib/metadata.ts`. This keeps shared links pointed at the public custom domain, including when the app is built as a Vercel preview.

Only `/` and `/about` are in the sitemap. Feature pages emit `noindex, follow`; robots permits crawling so search engines can read those directives. The shared 1200 × 630 social image (`public/opengraph.webp`) is converted from the supplied CampusCue artwork without cropping, with black padding to fit the social preview dimensions. The application icon and favicon are also local assets; regenerate those icons with `bun run assets`. The asset script uses Sharp. After deployment, verify the actual origin in Google Search Console; this local build does not perform verification or publication.

```sh
bun run build
bun run start
```

## Limitations

This is an educational simulation. All contacts and locations are fictional; sample numbers do not initiate calls. CampusCue cannot report incidents, dispatch help, request GPS access, provide live tracking, or connect to emergency services. It must not be used as a real emergency service.

## Image credit

Illustrative student graduation photograph: [Unsplash](https://images.unsplash.com/photo-1541339907198-e08756dedf3f), downloaded and served as `public/images/campus.jpg`. It does not represent the fictional campus in the dataset. The image contains no emergency scene or campus endorsement.
