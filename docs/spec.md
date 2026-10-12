
# CampusCue — MVP Specification
**Project:** P22 — Help at 2 A.M.  
**Product type:** Campus safety awareness and location-guidance prototype  
**Version:** 0.1  
**Platform:** Responsive web application  
**Framework:** Next.js App Router, TypeScript, Tailwind CSS  
**Current scope:** Frontend-only prototype, no authentication, no backend

## 1. Product identity

### Working name: CampusCue

**Tagline:** Find your next step.

**Product description:** CampusCue is a student-built campus safety awareness prototype that helps students practice identifying appropriate next steps, finding relevant campus contacts, and communicating their location through simulated scenarios.

The name is a working choice, not a verified trademark or domain availability claim.

### Product objective

Build a simple, mobile-first web application that allows a student to explore a fictional campus safety scenario, understand the example guidance, and identify an appropriate contact or location reference.

The MVP should test whether the information and interaction flows are understandable without assistance.

### Explicit limitation

CampusCue is not connected to campus security, medical services, an ambulance, or any emergency dispatch system. It must not claim that a real incident has been reported or help has been dispatched.

## 2. Target users

- Students participating in campus safety awareness exercises.
- Students unfamiliar with the campus contact structure or location codes.
- Project evaluators and authorized staff reviewing the prototype.

## 3. MVP features

Only three features are included.

### Feature 1: Scenario-based guidance

**Route:** `/help`

The student chooses one of a small set of fictional situations, such as a medical concern, personal safety concern, or campus accident.

The application displays:
- The selected scenario.
- Short, predefined example instructions.
- A relevant sample contact.
- A way to identify or look up the location.
- A persistent simulation-only notice.

All guidance comes from locally defined, reviewed sample data. No AI-generated emergency decisions are included.

**Acceptance criteria**
- Each scenario can be selected.
- The correct guidance is displayed for the selected scenario.
- The contact and location actions lead to the appropriate pages.
- Missing or invalid scenario data produces a clear fallback.
- The simulation-only notice remains visible.
- No dispatch or real incident submission is possible.

### Feature 2: Campus contact directory

**Route:** `/contacts`

A searchable directory of fictional campus contacts grouped into categories, such as security, hostel warden, and health centre.

Each contact entry displays:
- Name or role.
- Department or category.
- Clearly labelled fictional contact information.
- Availability information only where supplied in the sample dataset.

**Acceptance criteria**
- The contact list renders from local data.
- Search filters entries by name or role.
- Category filters work independently and together with search.
- An empty search result has a helpful message.
- Sample numbers are visibly marked as fictional and do not initiate real calls.

### Feature 3: Campus location lookup

**Route:** `/locations`

The student enters an example location code or searches a fictional building or landmark.

A successful result displays:
- Location code.
- Building and floor.
- Room or nearby landmark, where supplied.
- A concise location description.

**Acceptance criteria**
- A valid sample code returns the correct location.
- Search works for supported building names and landmarks.
- Invalid codes display a “Location not found” state.
- Empty input is handled clearly.
- Example data is labelled as fictional.
- No GPS tracking or location permissions are required.

QR scanning can be added later if testing demonstrates that it improves the chosen workflow. It is not required for this MVP.

## 4. Pages and navigation

| Route | Purpose | SEO policy |
|---|---|---|
| `/` | Product introduction and entry points | Indexable |
| `/help` | Scenario selection and guidance | Noindex during prototype |
| `/contacts` | Sample contact directory | Noindex during prototype |
| `/locations` | Sample location-code search | Noindex during prototype |
| `/about` | Project purpose, scope, and simulation disclaimer | Indexable |

Global navigation should contain the CampusCue wordmark, Help, Contacts, Locations, and About.

Every feature page must work independently when opened directly. Shared navigation must not be required for the underlying feature to function.

## 5. Frontend behaviour

Use local TypeScript fixture data for scenarios, contacts, and locations.

Do not introduce a database, external API, authentication provider, or remote service for the initial release.

The application should support:
- Search and category filtering.
- Selection and navigation between scenarios.
- Location-code lookup.
- Empty, invalid, and missing-data states.
- A consistent simulation notice.
- Responsive layouts for desktop, tablet, and mobile.

The home page should explain the prototype and direct visitors to the three features. Keep feature pages focused on performing their specific task.

## 6. Technology choices

- **Next.js App Router:** Page routing, layouts, metadata, and static rendering.
- **TypeScript:** Typed data models and component props.
- **Tailwind CSS:** Utility-first styling and responsive design.
- **Lucide icons:** Consistent, lightweight interface icons.
- **Local TypeScript data:** Sample scenarios, contact records, and location records.
- **Vitest and React Testing Library:** Component and feature tests.
- **Playwright:** Optional end-to-end checks once the core flows work.

Prefer Server Components by default. Use Client Components only for interactive controls such as search, filters, scenario selection, and location lookup.

## 7. Project structure

```text
campus-cue/
├── public/
│   ├── favicon.ico
│   ├── icon.png
│   ├── opengraph-image.png
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── help/
│   │   │   └── page.tsx
│   │   ├── contacts/
│   │   │   └── page.tsx
│   │   ├── locations/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   ├── ui/
│   │   ├── demo-notice.tsx
│   │   └── page-heading.tsx
│   ├── features/
│   │   ├── guidance/
│   │   │   ├── scenario-selector.tsx
│   │   │   └── guidance-panel.tsx
│   │   ├── contacts/
│   │   │   ├── contact-list.tsx
│   │   │   └── contact-search.tsx
│   │   └── locations/
│   │       ├── location-search.tsx
│   │       └── location-result.tsx
│   ├── data/
│   │   ├── scenarios.ts
│   │   ├── contacts.ts
│   │   └── locations.ts
│   ├── lib/
│   │   └── search.ts
│   └── types/
│       └── index.ts
├── tests/
│   ├── help.test.tsx
│   ├── contacts.test.tsx
│   └── locations.test.tsx
├── .env.example
├── next.config.ts
├── package.json
└── README.md
```

This structure keeps the code divided by feature without introducing a complicated monorepo or separate backend.

## 8. Design system

Use the uploaded Shopifi design document as the visual foundation, adapted for campus safety.

### Visual direction

**Landing page:** Black background, large lightweight headline, generous whitespace, white text, and a single clear primary action.

**Feature pages:** White or cream background, black text, compact content, easy-to-scan sections, and aloe-mint accents for selected elements.

### Design tokens

| Token | Value | Usage |
|---|---|---|
| Canvas night | `#000000` | Landing-page hero |
| Canvas light | `#FFFFFF` | Feature pages |
| Canvas cream | `#FBFBF5` | Alternative light background |
| Aloe | `#C1FBD4` | Selected accents |
| Pistachio | `#D4F9E0` | Supporting light-surface accent |
| Hairline light | `#E4E4E7` | Dividers and borders |
| Primary text | `#000000` | Light surfaces |
| Secondary text | `#52525B` | Supporting copy |

Use a light-weight display font or Inter Display for headlines, Inter for interface text, an 8px spacing base, and pill-shaped buttons.

Do not copy the commerce pricing cards, shop imagery, or signup-focused navigation. Operational pages should prioritize clarity over oversized typography and negative space.

Ensure visible keyboard focus, readable contrast, descriptive labels, and touch targets of at least 44 × 44 pixels.

## 9. Page-level feature testing

Each feature must be testable separately without authentication or backend dependencies.

### Home page
- Navigation opens each feature page.
- The primary CTA opens Help.
- The project description and simulation disclaimer are visible.
- The layout works on mobile and desktop.

### Help page
- Scenario selection produces the correct instructions.
- Contact and location links work.
- Invalid selections are handled.
- The page makes no false dispatch claim.

### Contacts page
- All fixture contacts render.
- Search and category filtering work.
- Empty results are handled.
- Fictional contact information is unmistakable.

### Locations page
- Valid codes and search terms return the correct result.
- Invalid codes and empty searches are handled.
- The result is readable on a mobile screen.
- No location permissions are requested.

### About page
- The project purpose and scope are clear.
- The application is identified as an educational prototype.
- The limitations are visible and accurate.

Add automated tests for these interactions and manually test the complete flows. Use fictional data throughout.

## 10. SEO strategy

### Positioning

Position CampusCue as a **campus safety awareness and location-guidance prototype**, not as an operational emergency-response platform.

Primary topics:
- Campus safety awareness.
- Campus emergency preparedness.
- Campus location communication.
- Emergency contact awareness for students.
- Simulation-based campus safety training.

Do not claim live incident reporting, guaranteed response, real-time responder tracking, or official campus integration.

### Page titles and descriptions

**Home**

Title: `CampusCue — Campus Safety Awareness Prototype`

Description: `Explore a student-built campus safety prototype for practicing emergency first steps and communicating campus locations through simulated scenarios.`

**Help**

Title: `Practice Campus Safety Scenarios | CampusCue`

Description: `Explore fictional campus situations and sample next-step guidance in a simulation-only awareness prototype.`

**Contacts**

Title: `Campus Contact Directory Demo | CampusCue`

Description: `Browse fictional campus safety contacts and explore how a clearer contact directory could support student awareness.`

**Locations**

Title: `Campus Location Lookup Demo | CampusCue`

Description: `Test building, floor, and landmark lookup using sample campus location codes in a simulated environment.`

**About**

Title: `About CampusCue | Student Campus Safety Project`

Description: `Learn about the CampusCue student project, its campus safety awareness goals, prototype features, and research limitations.`

### Technical SEO checklist

- Set a consistent default title and description in `src/app/layout.tsx`.
- Give each indexable page its own title, description, and canonical URL.
- Generate Open Graph metadata and a social-sharing image.
- Add a favicon and application icon.
- Implement `robots.ts` and `sitemap.ts`.
- Include only intended indexable URLs in the sitemap.
- Use semantic HTML and one clear main heading per page.
- Make important explanatory content visible in server-rendered HTML.
- Use descriptive internal links and meaningful image alt text.
- Avoid keyword stuffing, duplicate page titles, and unsupported claims.
- Verify the live site with Google Search Console after deployment.

### Indexing policy

Index `/` and `/about` because these explain the project.

Set `/help`, `/contacts`, and `/locations` to `noindex` during the prototype phase because they contain sample guidance and fictional campus data. This keeps demonstration content from being presented in search results as official emergency information.

Revisit this policy only after the information is accurate, reviewed, and suitable for public access.

### Open Graph image

Create `public/opengraph-image.png` at **1200 × 630 pixels**.

Suggested design:
- Pure black background.
- CampusCue wordmark in white.
- Main text: “Find your next step.”
- A restrained aloe-mint location marker or simple wayfinding graphic.
- Small subtitle: “Campus safety awareness prototype.”
- No photographs of emergencies, fake contact numbers, or official campus branding without permission.

Provide meaningful `og:title`, `og:description`, `og:url`, `og:image`, and `og:image:alt` metadata. Add a large-image social card configuration for X/Twitter as well.

Do not spend time generating separate social graphics for every route in the MVP. One polished shared image is enough.

## 11. Out of scope

The MVP does not include:
- User accounts or authentication.
- A backend or database.
- Real emergency reporting or dispatch.
- SMS, phone integrations, or notifications.
- Live GPS tracking.
- Real campus contact information without verification.
- AI-generated emergency decisions.
- QR scanning, advanced maps, or analytics dashboards.
- Production incident management.

## 12. Definition of done

The MVP is complete when:
1. All three core features work with local fixture data.
2. Every page can be opened and tested independently.
3. Search, selection, navigation, and error states work correctly.
4. The interface follows the adapted design system and is responsive.
5. No authentication or backend is required.
6. All demo data and safety limitations are clearly labelled.
7. Page metadata, favicon, Open Graph image, robots, and sitemap are configured.
8. Automated and manual feature tests pass.
9. The project can be run locally using the instructions in the README.

**Deliverable:** A minimal, responsive Next.js prototype that demonstrates three focused user journeys and can be evaluated independently of the research work carried out by the rest of the team.
