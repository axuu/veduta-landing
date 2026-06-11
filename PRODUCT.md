# Product

## Register

brand

## Users

Mac owners who care about art and about their own machine. The primary visitor is an
everyday macOS user who would rather look at a Canaletto than a stock-photo mountain, and
who quietly prefers software that doesn't phone home. A meaningful secondary audience is the
tinkerer / developer who wants to build their own library from museum open-access APIs and
run their own mirror. They arrive from GitHub, a Mac-app newsletter, or word of mouth, on a
desktop, in the evening, looking for something calm and a little serious.

## Product Purpose

Veduta (淡景) is a local-first, open-source macOS menu-bar app that rotates public-domain
museum artwork as your desktop wallpaper. It keeps a library on your machine at
`~/Pictures/VedutaLibrary`, streams what you haven't cached yet from a public mirror, and
then works offline. It imports from museum open-access collections (the Met, the National
Gallery, Cleveland, the Art Institute of Chicago, Harvard). Success is a visitor installing
it with one `brew` command and feeling like they hung a gallery on their desktop, not
installed another utility. The name comes from the 18th-century Venetian *veduta*: the
detailed, faithful city view (Canaletto, Guardi).

## Brand Personality

Curatorial, quiet, exact. The voice of a good museum wall label: it tells you the artist,
the date, the provenance, and then gets out of the way. Confident without shouting; the art
does the shouting. Three words: luminous, local, precise. It should evoke the hush of a
gallery and the trust of software that asks for nothing.

## Anti-references

- The cream-and-Cormorant "editorial magazine" art-site cliché: warm paper background,
  italic display serif, drop caps, three ruled columns. This is the saturated AI move for
  anything art-adjacent. Avoid it.
- Generic SaaS landing pages: gradient-mesh hero, hero-metric template, identical
  feature-card triplets, "supercharge your desktop."
- Dark-mode dev-tool neon: terminal-green-on-black, glow grids, monospace everywhere as a
  costume for "technical."
- Stock-photo placeholders or colored blocks where a painting should be. This product IS the
  art; zero real imagery is a bug.

## Design Principles

1. **The painting is the design.** Chrome stays quiet so the art carries the visual weight,
   the way a museum keeps its walls dark and its labels small.
2. **Show the product literally.** The hero is a real macOS desktop with the menu-bar app
   open, not an abstraction of one. Demonstrate, don't describe.
3. **Practice the wall label.** Every artwork is credited like a museum placard: artist,
   title, date, source, provenance. Honesty about the art is part of the brand.
4. **It asks for nothing.** Local-first, no account, no cloud, no telemetry. The page should
   feel as unintrusive as the app.
5. **Curatorial restraint, not timid restraint.** Commit to one strong gallery-dark world.
   Restraint here means editing down to the few right paintings, not muting the design.

## Accessibility & Inclusion

Target WCAG 2.1 AA. Body text ≥ 4.5:1 against the dark gallery wall; large text ≥ 3:1.
Full `prefers-reduced-motion` support: the hero wallpaper rotation and all reveals collapse
to static states. Keyboard-navigable nav, menu, and gallery; visible brass focus rings.
Every artwork carries descriptive alt text in the wall-label voice. Color is never the only
signal (the menu state, toggles, and links carry text/shape cues too).
