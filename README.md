# Atlas Loop — AI Sales Agent Platform

Atlas Loop is a polished frontend prototype for an AI sales intelligence workspace. The interface is designed as a **Signal Room**: a light evidence-led working canvas with a dark navigation rail, cobalt action lanes, teal qualification signals, compact metadata, and visible demo-data provenance.

This archive contains the complete local source for the verified frontend prototype, the generated brand assets used by the UI, the deterministic mock service layer, and the verification record. The project is intentionally frontend-only: the data layer is local and deterministic so the experience can be demonstrated safely without live LinkedIn, X, CRM, phone, funding, or hiring-data access.

## Run locally

From the project directory, install dependencies and start the Vite development server:

```bash
pnpm install
pnpm run dev
```

The production checks used for this export are:

```bash
pnpm check
pnpm build
```

The project uses the existing Vite/React/TypeScript scaffold. The application source lives under `client/src`, with shared domain types in `client/src/types/index.ts` and deterministic persistence plus mock operations in `client/src/services/mockApi.ts`.

## Route coverage

| Route | Purpose |
| --- | --- |
| `/dashboard` | Signal Room overview with KPIs, priority review, funnel, activity, sources, and integration health. |
| `/discover` | Criteria-driven discovery setup, animated deterministic run, progress steps, and discovery report. |
| `/leads` | Ranked table/card views with search, fit/status filters, selection, archive, and campaign actions. |
| `/leads/lead-001` | Explainable lead workspace with evidence, readiness, enrichment, market intelligence, transcript, and activity tabs. |
| `/campaigns` | Active campaign overview, campaign members, and sequence steps. |
| `/voice` | Voice qualification console with start/pause behavior, question-set feedback, and transcript entry point. |
| `/imports` | CSV import presentation, recent import/export activity, and data contract. |
| `/analytics` | Opportunity movement, conversion-by-source, metric definitions, and time-range control presentation. |
| `/integrations` | Public-source, CRM, LinkedIn, and X connector states with roadmap messaging. |
| `/settings` | Workspace defaults, demo-mode safety controls, access presentation, and feedback actions. |
| `/admin` | Synthetic-data disclosure, persisted demo state, mock API contract, reset control, and copy feedback. |
| `/signin` | Branded sign-in screen with demo login, Google presentation, and onboarding entry point. |
| `/onboarding` | Five-step workspace setup flow with step navigation, editable criteria, service roadmap, and launch. |

## Verified demo interactions

The local interaction audit passed **13 routes and 25 interactions**. Coverage includes onboarding progression and launch, demo sign-in, localStorage persistence, discovery progress and report persistence, voice start/pause and question-set feedback, lead table/card views, search and filters, bulk campaign feedback, lead-detail campaign membership persistence, AI qualification with stored call outcome, transcript and activity tabs, global search navigation, notifications, campaign creation feedback, import/export feedback, roadmap integration feedback, settings feedback, admin contract feedback, reset persistence, and signing in again after reset.

The final TypeScript check and production build passed. Desktop and mobile screenshot passes covered every declared route. The only non-blocking build note is that the bundled JavaScript chunk is larger than Vite's advisory 500 kB threshold; the current prototype remains functional and can be code-split later if the application expands.

## Data and persistence

The demo state is stored under the browser localStorage key `atlas-loop-demo-state`. Clearing this key returns the browser to the deterministic default fixture. The Admin Demo page also provides a Reset demo control. The mock API is deliberately small and replaceable; its conceptual contracts are documented in the Admin Demo screen and mirror future FastAPI endpoints for dashboard data, discovery runs, and lead qualification.

## Included assets

The `client/public/assets/` directory contains the generated Atlas Loop logo mark and the generated enterprise data-intelligence background images used by the sign-in and workspace surfaces. The application references `/assets/atlas-loop-logo.png` and `/assets/atlas-intelligence-field.jpg`, so local development and production builds do not depend on temporary Manus-hosted URLs. The archive also includes `patches/wouter@3.7.1.patch`, whose SHA-256 matches the hash recorded in `pnpm-lock.yaml`.

## Verification note

The managed repository checkpoint could not be created because the session's remote repository token repeatedly returned HTTP 403 with `Invalid or expired token`. This corrected export was created locally after the full build, route, interaction, and visual verification passes, and after restoring the required patch and bundling all runtime image assets locally. No managed checkpoint retry is required for this archive.
