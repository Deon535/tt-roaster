---
name: TT Roaster
description: Modern Tropical Neoretro — a specialty coffee brand book turned into a website
colors:
  forest-deep: "#122318"
  forest: "#1c3a2a"
  forest-soft: "#2f5940"
  forest-mist: "#3f6a4f"
  sand-paper: "#faf3e3"
  sand: "#eee0c3"
  sand-deep: "#dfc99c"
  terracotta: "#c1622c"
  terracotta-deep: "#9a4a20"
  brick: "#a23b2b"
  ink: "#17241a"
  cream-ink: "#f4ecd8"
  gold-line: "#c9a86a"
typography:
  display:
    fontFamily: "Unbounded, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 1.7rem + 4.3vw, 6.4rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  display-ar:
    fontFamily: "El Messiri, Unbounded, sans-serif"
    fontWeight: 700
  body:
    fontFamily: "Golos Text, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-ar:
    fontFamily: "Tajawal, Golos Text, sans-serif"
  label:
    fontFamily: "Golos Text, Segoe UI, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  sm: "1rem"
  md: "1.75rem"
  lg: "2.75rem"
  pill: "999px"
spacing:
  xs: "0.75rem"
  sm: "1.25rem"
  md: "2rem"
  lg: "3.25rem"
  xl: "5.5rem"
  section-y: "clamp(4.5rem, 3.5rem + 4vw, 8.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.cream-ink}"
    rounded: "{rounded.pill}"
    padding: "1.05rem 2.1rem"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-deep}"
  button-dark:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.cream-ink}"
    rounded: "{rounded.pill}"
    padding: "1.05rem 2.1rem"
---

# Design System: TT Roaster

## Overview

**Creative North Star: "The Brand Book, Poured as a Website"**

TT Roaster is a specialty coffee shop and in-house roastery in Buynaksk, Dagestan, whose real
storefront and emblem already speak in the vocabulary of a 1960s–70s tropical travel poster:
a tiki-sun mark, a coffee grove rendered as flat screenprint foliage, and a wandering traveler
figure ringed by "FEEL A TASTE OF TROPICAL TRAVEL." This site does not invent a new identity —
it treats that emblem as the whole grammar and builds every surface, from hero to footer, as
another plate torn from the same brand book. The result should feel like a small premium coffee
shop discovered mid-journey through a tropical country: warm, editorial, unhurried, slightly
vintage, unmistakably hand-made rather than templated.

Confirmed rejections: no SaaS card grids, no Starbucks brown, no white minimalism, no acid-bright
green, no generic AI-cream-and-serif default. Color is deep and muted, never pastel; type is
bold uppercase grotesque, never a soft literary serif.

**Key Characteristics:**
- Deep forest-green fields carry roughly half the page; sand/cream carries the rest; terracotta
  is the single accent, spent on price, CTA, and the kicker line only.
- Large UPPERCASE display type set in a geometric-but-characterful grotesk (Unbounded), never a
  system sans, with tracked micro-labels beside it.
- Every product illustration is hand-drawn flat screenprint (2–3 tones), matching the emblem's
  own construction — never a stock photo standing in for a drink or pastry that hasn't been shot yet.
- Organic rounded containers (28–44px radius) that photography and illustration are allowed to
  break out of, never a hard rectangle grid.
- Full bilingual-plus-Arabic type system: the same visual weight and warmth must survive a
  complete mirror into RTL with a different typeface pairing (El Messiri / Tajawal).

## Colors

The palette is a Committed strategy: two large fields (forest, sand) trade dominance section by
section, with terracotta as the only saturated color and brick reserved for the smallest accents.

### Primary
- **Terracotta** (`#c1622c`): the one accent. CTA fills, prices, kickers, active tags, hover
  states. Never used for large fields — its rarity is what makes it read as "the price" or "the
  action" at a glance.
- **Terracotta Deep** (`#9a4a20`): hover/pressed state for terracotta fills only.

### Secondary
- **Forest** (`#1c3a2a`): the second dominant field. Header, dark section backgrounds (Menu, Why
  Us), primary button fill on sand, and the emblem's own base color.
- **Forest Deep** (`#122318`): the deepest field — hero/final-CTA video overlay base, Bakery
  section, footer. Reserved for the darkest, most atmospheric moments.
- **Forest Mist** (`#3f6a4f`): secondary text tint on dark fields, decorative botanical linework.

### Neutral
- **Sand Paper** (`#faf3e3`): the page's base "paper" — About, Signature, Reviews, Contacts.
- **Sand** (`#eee0c3`): card/menu-strip fields on dark backgrounds, cream text on forest.
- **Sand Deep** (`#dfc99c`): borders, dividers, secondary card fill.
- **Ink** (`#17241a`): body text on sand.
- **Cream Ink** (`#f4ecd8`): body/heading text on forest.
- **Gold Line** (`#c9a86a`): the thinnest decorative rule — emblem ring, footer link hover.

### Named Rules
**The One Accent Rule.** Terracotta is the only saturated color on any given viewport. If a
section needs a second point of emphasis, reach for brick (`#a23b2b`) in a small dose (a berry,
a tag) — never a second saturated hue competing with terracotta.

## Typography

**Display Font:** Unbounded (with Arial Narrow, sans-serif fallback) — RU/EN
**Body Font:** Golos Text (with Segoe UI, sans-serif fallback) — RU/EN
**Arabic Display:** El Messiri — **Arabic Body:** Tajawal

**Character:** Unbounded's blocky, slightly architectural geometry reads as vintage
travel-signage when set uppercase and tight; Golos Text is a warm, humanist Cyrillic-native
grotesk that keeps long-form copy legible without competing with the display face. El Messiri
carries the same bold, rounded confidence into Arabic display; Tajawal keeps Arabic body copy
clean and highly legible.

### Hierarchy
- **Display XL** (800, `clamp(2.6rem, 1.7rem+4.3vw, 6.4rem)`, line-height 0.98): hero H1 and
  final-CTA H2 only. Uppercase, -0.01em tracking.
- **Display LG** (700, `clamp(2.1rem, 1.6rem+2.6vw, 3.9rem)`, line-height 1.04): every section H2.
- **Display MD/SM** (700, 1.2–2.15rem): card/item titles (menu, signature, bakery, why-us).
- **Body LG** (`clamp(1.1rem, 1rem+0.35vw, 1.35rem)`): hero lede, section intros.
- **Body** (1.0625rem, line-height 1.6): running copy.
- **Label** (700, 0.78rem, 0.14em tracking, uppercase): kickers, nav, badges, footer columns.

### Named Rules
**The No-Eyebrow-Alone Rule.** A kicker never floats without its heading directly beneath it —
it is a label on the heading, not a substitute for one.
**The RTL Un-tracking Rule.** Arabic never inherits Latin letter-spacing or uppercase transforms;
`[dir="rtl"]` resets `text-transform: none` and `letter-spacing: 0` everywhere the LTR rule set
applies them.

## Layout

Container max-width 1400px with fluid inline padding (`clamp(1.25rem, 4vw, 4rem)`). Section
vertical rhythm is one shared token, `--section-pad-y: clamp(4.5rem, 3.5rem + 4vw, 8.5rem)` —
every section breathes the same amount regardless of its content density. Composition is
deliberately asymmetric per section: Menu is a 4-column strip that collapses to 2 then 1; Signature
alternates left/right per item; Bakery is an uneven 6-column cluster (3/3/3/… spans) with
alternating micro-rotation; Atmosphere is a hand-placed 12-column masonry (explicit
`grid-column`/`grid-row` per tile, not an auto-grid) that collapses to a plain 2-column grid on
mobile — the two layouts are independently authored, not one fluid-resized from the other.
Mobile breakpoint for nav/grid simplification is 860px (atmosphere) / 900px (nav) / 760px
(bakery cluster, mobile route bar).

## Elevation & Depth

Flat by default with one soft, warm-tinted shadow system used only where an element genuinely
lifts off the page (buttons on hover, cards, the hero content over video). No neobrutalist hard
offset shadows, no glass/blur used decoratively — the one `backdrop-filter: blur` in the system
(scrolled header, atmosphere tile labels, menu-modal backdrop) is functional legibility, not
texture.

### Shadow Vocabulary
- **Soft** (`0 14px 30px -16px rgba(18,35,24,0.3)`): default resting elevation for outline buttons,
  small lifts.
- **Card** (`0 22px 48px -22px rgba(18,35,24,0.38)`): photo frames, atmosphere tiles, signature
  drink roundels, map panel.
- **Lift** (`0 30px 70px -24px rgba(18,35,24,0.42)`): hover state for primary buttons and the
  rotating emblem badge.

## Shapes

Organic and rounded everywhere a rectangle would default: `1.75rem`–`2.75rem` radii on photo
frames, cards, and modal panels; full pill (`999px`) on every button and tag. Photography is
allowed to sit inside a rotated frame (`rotate(-1.4deg)`) and have decorative botanical SVGs
overlap its edge — containment is suggested, not absolute. Circles are reserved for two things
only: the emblem/badge system (a real screenprint-badge convention) and signature-drink roundels
— never used as a generic photo-crop mask.

## Components

### Buttons
- **Shape:** full pill (`border-radius: 999px`).
- **Primary (terracotta):** `background: #c1622c`, cream text, `padding: 1.05rem 2.1rem`,
  uppercase label, 700 weight.
- **Dark (forest):** same shape/padding, forest fill — used as the default/secondary CTA on sand
  backgrounds.
- **Outline:** transparent fill, 1.5px currentColor border — used over photography/video where a
  solid fill would compete with the image.
- **Hover/Focus:** `translateY(-3px)` plus a shift from Soft to Lift shadow, never a color-only
  change; RTL mirrors any directional icon inside via a dedicated `.icon-flip` class.

### Cards / Containers
- **Corner style:** 1.75–2.75rem radius depending on scale (menu-modal vs. atmosphere tile).
- **Background:** sand-on-forest or forest-on-sand, never white.
- **Shadow strategy:** Card token; Bakery cards additionally carry a ±0.6deg rotation for
  hand-placed character.
- **Border:** none — separation comes from color contrast or a 1.5px hairline divider, never a
  card outline.

### Navigation
- Header is `position: fixed`, transparent-over-video by default, crossfading to a blurred
  forest-deep bar past 24px scroll. Links are label-weight uppercase with a terracotta underline
  that grows from the reading-direction start on hover. Below 900px, the link row is replaced by
  a full-screen forest-deep takeover nav in display type; the language switch and burger stay in
  the header at every width.

### Language Switch (signature component)
A compact pill button (`RU ▾`) in the header opens a small sand-paper dropdown with a live tick
mark on the active language. Selecting a language rewrites every `[data-i18n]` node, flips
`<html lang/dir>`, and persists to `localStorage`. This is the one piece of "app-like" UI in an
otherwise editorial system — kept deliberately small and quiet so it never competes with the
brand type.

## Do's and Don'ts

### Do:
- **Do** spend terracotta on exactly one thing per viewport: the price, the CTA, or the kicker —
  never more than one saturated accent visible at once.
- **Do** author new product/illustration icons as flat 2–3 tone screenprint shapes on the
  `currentColor` + one or two hardcoded brand-tone convention already used by the drink/pastry
  symbol library, so new icons recolor correctly inside both forest and sand contexts.
- **Do** give every new section its own visual rhythm (alternating dark/light field, a different
  grid shape) rather than repeating the previous section's layout.
- **Do** reset both `text-transform` and `letter-spacing` under `[dir="rtl"]` for any new
  uppercase/tracked element.

### Don't:
- **Don't** introduce a same-size icon+heading+text card grid — every multi-item section in this
  system uses an asymmetric, hand-placed, or alternating layout instead.
- **Don't** use a circular photo mask for anything except the emblem/badge system; crop
  photography with the rounded-rectangle frame instead.
- **Don't** set an absolutely-positioned label/pill with only one inline inset and
  `width: fit-content` inside a narrow flex/grid child — on cramped mobile columns this can starve
  the shrink-to-fit box and clip text; define both inline insets (or a `max-width`) explicitly.
- **Don't** leave a `grid-row` value from a wide desktop grid in place when a mobile media query
  redefines `grid-template-columns` to fewer tracks — reset `grid-row: auto` alongside the
  `grid-column` override, or the browser will fabricate a squeezed implicit column.
