# Local completion checklist

- [x] Audit onboarding routes and step transitions.
- [x] Audit authentication and demo-login behavior.
- [x] Audit secondary routes and navigation coverage.
- [x] Verify localStorage persistence and reset behavior.
- [x] Verify mock interactions: discovery run, add-to-campaign, qualification, transcript, notifications, search, filters, settings, imports, and admin demo controls.
- [x] Run TypeScript checks and production build.
- [x] Run full route visual verification at desktop and mobile sizes.
- [x] Inspect runtime logs and fix any errors.
- [x] Export verified source code and assets with README as a ZIP archive.

## Clean export repair

- [x] Restore `patches/wouter@3.7.1.patch` and verify the package reference resolves.
- [x] Bundle image assets under the project and remove runtime dependence on Manus-hosted asset URLs.
- [x] Rebuild the corrected ZIP with source, patches, assets, and README.
- [x] Extract the ZIP into a completely empty directory.
- [x] Pass `corepack pnpm install --frozen-lockfile`.
- [x] Pass `corepack pnpm check`.
- [x] Pass `corepack pnpm build`.
- [x] Start and verify `corepack pnpm run dev` from the clean extraction.
- [x] Confirm all local image references resolve without temporary hosted URLs.
