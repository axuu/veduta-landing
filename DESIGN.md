# Design

A single committed world: a dark museum picture-gallery wall where public-domain paintings
glow under gallery light, framed in brass, labeled with quiet precision. The chrome behaves
like a well-made macOS utility; the paintings behave like the collection. Reference points:
the deep-green Canaletto rooms of a national gallery, the typographic restraint of a museum
wall label, the precision of an Apple product page. Explicitly NOT the cream/Cormorant
editorial-magazine art cliché.

## Color

OKLCH throughout. Strategy: **Committed / drenched dark.** The wall IS the color; brass is
the single metallic accent (≤ 8% of surface); the paintings supply all polychrome.

| Token | OKLCH | Role |
|---|---|---|
| `--wall` | `oklch(0.205 0.018 172)` | Body background. Deep desaturated gallery green (petrol). |
| `--wall-deep` | `oklch(0.158 0.016 172)` | Vignette, footer, recessed areas. |
| `--wall-raised` | `oklch(0.262 0.017 172)` | Menu-bar dropdown, panels, the few real surfaces. |
| `--wall-line` | `oklch(0.34 0.014 172)` | Hairlines, dividers, picture-rail shadow side. |
| `--ink` | `oklch(0.952 0.010 86)` | Primary text. Warm gallery-label white. |
| `--ink-soft` | `oklch(0.820 0.012 86)` | Secondary text / long body. ≥ 4.5:1 on `--wall`. |
| `--ink-mute` | `oklch(0.690 0.013 86)` | Wall-label meta, captions. ≥ 4.5:1 on `--wall`. |
| `--brass` | `oklch(0.785 0.095 83)` | Accent: picture rail, frame edge, menu icon, focus, marks. |
| `--brass-bright` | `oklch(0.870 0.105 86)` | Hover / lit-edge highlight. |
| `--brass-deep` | `oklch(0.620 0.085 78)` | Frame shadow side, pressed states. |

Gilt frame = a brass→brass-deep gradient with a brass-bright top edge, never a flat band.
Contrast verified: `--ink`, `--ink-soft`, `--ink-mute` all clear 4.5:1 on `--wall` /
`--wall-raised`. Brass is used for marks and large text only, not small body copy.

## Typography

Three families, each with a job. Reflex museum-serif (Cormorant/Playfair/Fraunces) and
Inter/DM/Plex are explicitly rejected.

- **Schibsted Grotesk** — display + UI. Wordmark, headings, nav, buttons, body UI. A
  contemporary institutional grotesque (think a museum identity), precise and a little warm.
  Weights 400/500/600/700/800. Display tracking -0.02 to -0.03em; never below -0.04em.
- **Spectral** — the wall label. Artwork titles, captions, provenance lines, pull quotes,
  the etymology note. Used at label scale and a few editorial moments, regular + italic.
  This inverts the slop pairing (museums set labels in a refined serif, titles in a grotesque).
- **Spline Sans Mono** — code only. The `brew install` command, `make` targets, the
  `~/Pictures/VedutaLibrary` path. Honest (real terminal commands), never decorative.

Scale: fluid `clamp()`, ratio ≥ 1.25. Hero display max ≤ 5.5rem. Body 17px, measure 62–72ch.
`text-wrap: balance` on h1–h3; `text-wrap: pretty` on prose. Light-on-dark adds ~0.06 to
line-height.

## Layout

- Full-bleed hero (a real macOS desktop scene). Long, deliberately paced scroll; one
  dominant idea per fold; varied `clamp()` spacing for gallery rhythm.
- A horizontal brass **picture rail** recurs as the structural motif between major sections.
- Gallery: salon-style hang, varied sizes, each piece framed + wall-labeled. Not an
  identical-card grid. Responsive without fixed breakpoints where possible.
- Max content width ~1200px for text; paintings break wider / full-bleed.
- Semantic z-index scale: rail < sticky-nav < menu-dropdown < dialog < toast.

## Motion

Intentional, gallery-grade. All have `prefers-reduced-motion: reduce` fallbacks.

- **Hero rotation** — the wallpaper cross-fades between the four Venice vedute every ~7s,
  mirroring the app's actual rotation feature, with a very slow ≤1.04 Ken Burns drift.
  Reduced motion: a single static painting, no drift.
- **Gallery lights up** on load: hero painting rises from dimmed to lit, brass rail draws in,
  wordmark and label settle. One orchestrated entrance, not fade-on-scroll everywhere.
- **Section reveals** via IntersectionObserver, content visible by default (never gated on a
  class). Staggered for lists that warrant it. Reduced motion: instant.
- **Wall-label hover** on gallery pieces: label slides up, frame edge brightens, ≤1.03 scale.
- Easing: ease-out-quint / expo. No bounce, no elastic.

## Components

`MenuBar` (faux macOS top strip + Veduta dropdown demo), `SiteNav` (sticky), `Hero`,
`WallLabel` (reused placard: artist / title / date / source / provenance), `Gallery`
(salon hang), `Sources` (museum list + open-access note), `HowItWorks` (stream→cache→rotate
flow), `AppDetail` (menu-bar close-up), `OpenSource` (mono terminal + pipeline), `Etymology`
(the name), `Footer` (install command, requirements, license, image credit). `PictureRail`
divider motif.

## Imagery

Real public-domain paintings from The Metropolitan Museum of Art Open Access (CC0),
downloaded and served locally, optimized by Astro `<Image>`. Curated for luminosity against
the dark wall: Venice vedute (Canaletto, Guardi, Turner) for the hero; Van Gogh, Hokusai,
Church, Rembrandt, David for the gallery. Alt text in wall-label voice. Credit line in
footer. The five supported source museums are named in the Sources section.
