# Atlas Loop — UI Direction

## Three Directions Considered

### Theme Name: Signal Room
Very Brief Intro: A quiet, evidence-led enterprise workspace where every panel feels like a measured instrument. Navy, paper white, and cobalt create a credible operating environment for sales teams.
Probability: 0.07

### Theme Name: Field Notes
Very Brief Intro: An editorial intelligence desk with off-white surfaces, ink typography, and restrained blue markers. It feels human and research-oriented without becoming consumer or playful.
Probability: 0.04

### Theme Name: Night Relay
Very Brief Intro: A high-contrast command center with charcoal surfaces and precise teal/cobalt accents. It emphasizes live movement and voice activity but keeps the glow controlled and purposeful.
Probability: 0.02

## Chosen Approach: Signal Room

### Design Movement
Swiss International Typographic Style translated into a modern B2B operations console: clear hierarchy, disciplined grids, strong alignment, and data treated as the visual subject.

### Core Principles
1. **Evidence before decoration.** Every surface should help a user decide, review, or act.
2. **Calm precision.** Use compact typography, controlled borders, and shallow shadows instead of ornamental effects.
3. **Asymmetrical emphasis.** Let the priority opportunity and next action carry visual weight; avoid equal-weight card grids.
4. **Trust through disclosure.** Make demo data, confidence levels, provenance, and unavailable fields visible.

### Color Philosophy
Paper-white and cool slate surfaces create a stable reading canvas. Deep ink navy anchors navigation and signals authority. Cobalt is reserved for action and active states; teal is only for positive qualification and AI-confirmed movement; amber and red are used sparingly to communicate urgency and exceptions. The signature brand color is **Atlas Cobalt `#2155D9`**, a clear action blue that feels precise rather than loud.

### Layout Paradigm
A persistent dark rail and a wide working canvas. Pages use an asymmetric split: a dominant decision surface on the left and supporting evidence on the right. Dense tables are given breathing room through section headers, short labels, and horizontal rhythm rather than card stacks.

### Signature Elements
- A thin cobalt rule used as a visual “active lane” marker along selected navigation and priority sections.
- Tiny provenance labels and confidence bars attached directly to information, never hidden in a secondary tooltip.
- A compact “signal strip” motif: small dots, micro-bars, and a single highlighted node that communicates opportunity movement without decorative chart overload.

### Interaction Philosophy
Interactions should feel like reviewing an instrument panel: immediate, reversible, and explicit. Buttons confirm with subtle press compression. Drawers and dialogs enter from the edge that owns the action. Filters update the working set without surprise navigation. Demo actions explain what changed through a concise toast and preserve the state in localStorage.

### Animation
Use 180–260ms ease-out transitions for controls, table row hover, and drawer/dialog entrances. Apply a 40ms stagger to dashboard sections on first entry. Discovery progress uses a calm linear progress rhythm with one active step and subdued completed steps. Respect `prefers-reduced-motion` by removing non-essential movement.

### Typography System
Use **Manrope** for compact UI labels, navigation, buttons, and data. Pair it with **IBM Plex Sans** for longer explanatory copy and lead requirement text. Headings are 600–700 weight with tight tracking; metadata is 11–12px with uppercase labels and 0.08em letter spacing. Never use oversized marketing display text inside the authenticated app.

### Brand Essence
Atlas Loop is the evidence-led sales workspace for small enterprise sales teams that need to move from public intent signals to qualified conversations without losing provenance. Personality: **measured, sharp, dependable**.

### Brand Voice
Headlines are direct and operational. CTAs name the outcome rather than the mechanism. Microcopy is transparent about synthetic records, public availability, and confidence.

Example lines:
- “Three signals are ready for a human review.”
- “Start the conversation with the evidence in view.”

### Wordmark & Logo
The mark is two interlocking arcs forming a forward-moving loop around a small diamond of negative space. The arcs imply discovery and iteration; the diamond is the decision point. The wordmark is set in a custom-feeling wide grotesk treatment with a slightly raised “Loop” baseline, but the supplied implementation uses the symbol mark prominently and avoids relying on generated typography for the core logo asset.

### Signature Brand Color
**Atlas Cobalt `#2155D9`** — an ownable, high-clarity action blue used for active lanes, primary CTAs, and focused data states.

## Style Decisions

- Keep the authenticated experience light, structured, and evidence-led; do not drift into generic dark-mode dashboard styling.
- Use the generated Atlas Loop symbol in the top rail and sign-in page; use the abstract data-field visual only in the sign-in composition so the app remains information-dense and usable.
- Prioritize one strong decision surface per page over a wall of equal-weight cards.
