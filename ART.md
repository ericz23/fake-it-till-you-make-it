# Art, motion, and audio direction

## Look

Original 2D storybook cartoon: warm cream, moss green, terracotta, midnight blue, amber lantern light. Thick softened outlines; gently textured backgrounds; exaggerated silhouettes. Cozy afternoon shifting toward dusk. Characters should read clearly at the actual stage size. Avoid photorealism, copied franchise styling, generic emoji figures, and static slideshow presentation.

Composition: landscape illustrated stage dominates the screen. Dialogue panel at its lower edge, with choices in a reserved readable area that does not hide important action. Responsive letterboxing/reflow is acceptable. Game title screen belongs to the world: cloak hanging from a hero-sized chair, not a marketing landing page.

## Asset production

Use the available image-generation skill for raster illustrations; read its current instructions. First create a character reference sheet fixing proportions, costume, palette, and facial features. Use that reference for variants. Keep text, labels, clues, and choice UI as rendered text, not embedded in generated images. Generate isolated character assets suitable for transparent backgrounds and layered motion. Inspect every delivered asset before integration.

Minimum environment set:
- Town square, with morning and dusk color treatments.
- Alder's office with frosted doorway and balcony area.
- Lantern Bridge wide shot including canal, float, and barricade.
- Bridge mechanism close-up.
- Brass service gate with separately rendered readable icons.
- Small underground alcove.

Character pose inventory:
- Pip: neutral, heroic, worried, embarrassed, determined; cloak and arm layers when practical.
- Nell: neutral, skeptical, repairing, warm smile.
- Brindle: neutral, tea, explaining, supporting bridge.
- Quill: announcing, defensive, anxious.
- Alder: portrait/memory only.

Props: wooden sword, oversized cloak, badge, ledger, seal, cords, tools, note, bunting, parade dragon, inspection sign. Reuse scene components and camera crops instead of generating a background per dialogue beat.

## Motion requirements

Use short staged motion: entrances, anticipation, pose changes, modest squash/stretch, object arcs, eye blinks, and camera reframing. Each failure needs a readable setup, action, and reaction. Eight failures must not all be a screen shake and a caption. Suggested timing: 2–5 seconds each, skippable after first discovery. Use restrained parallax only where it helps staging.

Reduced motion: replace large movement/zoom/shake with immediate pose changes or short fades, retain every clue and punchline. Avoid flashing and autoplaying noisy intros.

## Sound

Music begins only after a user gesture. Separate music and effects volume, mute controls persisted locally. A small reusable score palette is enough: playful town loop, quiet mystery motif, success sting. Use original procedural audio where effective or free audio explicitly licensed for public repository redistribution. Do not use commercial soundtrack clips. Missing optional music must not block the game, but audio choices and limitations must be documented.

## Provenance

Create ASSET-LICENSES.md listing path, creator/source, license, attribution, and modifications for each third-party asset or coherent pack. Record generated art as generated and retain useful prompts/reference descriptions in an assets document. Public repository visibility means distribution rights matter; an asset that can be used in a compiled game may not allow publishing its source file. Do not infer permission from a free download button. Do not add an overall open-source license on the user's behalf without an explicit choice; public visibility alone does not grant reuse rights.

## Visual checks

Inspect title, C03, C07, at least two distinct failures, settings, map, and every ending. Check that Pip looks consistent, readable text overlays remain separate, there is no clipping at 1280×720, and keyboard focus and disabled states are visible. Fix placeholders and illegible clue icons before release.
