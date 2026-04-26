# Design Brief — Aim Chess Academy

**Tone**: Luxury/refined. Precision, strategy, mastery. Restrained elegance with sparingly-placed gold accents.

**Differentiation**: Glassmorphic cards, chess-inspired patterns, dark-first aesthetic, gold CTAs with glow effects, smooth micro-interactions.

## Palette

| Token | OKLCH | Purpose |
| --- | --- | --- |
| Primary | 0.30 0.08 258 | Deep navy, royal depth, legacy |
| Accent | 0.65 0.15 75 | Burnished gold, luxury highlight, CTA |
| Secondary | 0.50 0 0 | Cool gray, muted text, hierarchy |
| Foreground | 0.98 0 0 | Soft white, clarity, text on dark |
| Background | 0.10 0 0 | Deep black, card backgrounds, shadow |
| Muted | 0.35 0 0 | Deep gray, secondary content |
| Destructive | 0.55 0.22 25 | Alert red (unchanged) |

## Typography

| Layer | Font | Size | Weight | Use |
| --- | --- | --- | --- | --- |
| Display | Fraunces (serif) | 2.25–3.5rem | 600–700 | Hero, section headings |
| Body | Figtree (sans) | 1rem–1.125rem | 400–600 | Paragraph, card text |
| Mono | JetBrainsMono | 0.875rem | 400 | Code, technical |

## Structural Zones

| Zone | Background | Border | Elevation | Detail |
| --- | --- | --- | --- | --- |
| Header | `bg-primary` | `border-b border-border/50` | `shadow-sm` | Glassmorphic nav items |
| Hero | `bg-background` | none | none | Chess pattern overlay, gradient text |
| Content Section (alt) | `bg-background` / `bg-muted/20` | none | none | Rhythm via alternation |
| Card | `bg-card/40` + backdrop-blur | `border-border/30` | `shadow-md` | Glassmorphism, hover lift |
| CTA Button | `bg-accent` | none | `shadow-glow` | Gold with glow, scale on hover |
| Footer | `bg-primary` | `border-t border-border/50` | `shadow-sm` | Mirrored header |

## Component Patterns

- **Cards**: Glassmorphic with `glass` utility — `backdrop-blur-md bg-card/40 border border-border/30`
- **Buttons**: Primary gold CTAs use `btn-gold` — `bg-accent hover:shadow-glow hover:scale-105`
- **Text**: Headings use Fraunces display, body Figtree, inline accents via `text-gradient`
- **Hover**: All interactive elements use `transition-smooth` (0.3s cubic-bezier)
- **Floating Elements**: Chess pieces use `float-animation` keyframe for subtle up/down motion

## Motion

- **Entrance**: `fadeInUp` 0.6s ease-out for cards on scroll reveal
- **Hover**: `transition-smooth` 0.3s on all interactive elements; scale/shadow for depth
- **Floating**: `float-animation` 3s infinite for decorative chess pieces
- **Loading**: Pulse animation (2s) for counters and dynamic elements

## Constraints

- No neon, no bouncy animations, no rainbow gradients
- All colors use OKLCH tokens (dark-mode first, light optional)
- Button hierarchy: primary = gold accent, secondary = muted text
- Rounded corners uniform at 0.75rem via `--radius`
- Spacing: mobile-first, scaled via `py-12 md:py-20`

## Signature Detail

Burnished gold (`oklch(0.65 0.15 75)`) CTA buttons with shadow-glow effect and interactive scale transform. Glassmorphic cards with backdrop blur create sophisticated depth layering. Subtle chess board grid pattern in hero background. Dark-first palette conveys premium academy brand.
