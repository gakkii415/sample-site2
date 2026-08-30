# Asset manifest

| File | Dimensions | Intended placement | Suggested `object-position` | Suggested alt text |
|---|---:|---|---|---|
| `hero-editorial.webp` | 1586×992 | Hero background | `65% 45%` | Dark-romantic editorial portrait with a fine-line upper-arm tattoo |
| `gallery-portrait.webp` | 1122×1402 | Selected Work — main portrait | `50% 35%` | Portrait featuring delicate bow and botanical forearm tattoos |
| `gallery-forearm.webp` | 1086×1448 | Selected Work — vertical detail | `50% 50%` | Fine-line bow and botanical tattoo on a forearm |
| `gallery-ankle.webp` | 1448×1086 | Selected Work — landscape detail | `50% 50%` | Small crescent moon and bow tattoo above an ankle |
| `style-editorial.webp` | 1448×1086 | Our Style image | `38% 45%` | Dark fashion portrait inside a tattoo studio |
| `studio-exterior.webp` | 1122×1402 | About / Access image | `50% 50%` | Black tattoo studio storefront glowing softly at night |
| `studio-interior.webp` | 1672×941 | Session / Studio information | `72% 50%` | Clean private tattoo room with black chair and pink curtain |
| `booking-still-life.webp` | 1774×887 | Final booking CTA background | `75% 50%` | Black velvet still life with ribbon, jewelry, sketchbook, and tattoo machine |

## Direction used

The images were generated as standalone photographs—not screenshots—with consistent near-black, dusty-rose, and deep-wine grading. The shared prompt direction was: premium Japanese fashion editorial, direct flash mixed with low-key cinematic shadows, subtle analog grain, realistic anatomy and tattoo linework, no text, UI, logos, watermark, blood, weapons, or neon-tech styling.

The hero establishes the fictional adult model. The portrait and style images reuse that identity and art direction. Detail shots focus on fine-line bow, botanical, and crescent motifs. Environment images provide the exterior, hygienic private studio, and a wide still life with copy-safe negative space.

## Implementation notes

- Load `hero-editorial.webp` with high priority; lazy-load the other seven.
- Use responsive `<picture>`/image components and set explicit aspect ratios to prevent layout shift.
- Add a dark overlay to the hero and booking image in CSS; do not bake text into the images.
- Treat generated tattoo photographs as design placeholders, not evidence of completed client work.
