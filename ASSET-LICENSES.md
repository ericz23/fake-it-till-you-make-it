# Asset provenance and distribution

All game illustrations in `dist/assets/*.png` were newly generated for this project with OpenAI's included image-generation tool on 2026-10-04. No third-party artwork was used as a reference: the canonical reference was itself generated from the original character descriptions in STORY.md and ART.md. These generated outputs are included in the public repository as requested by the commissioning user. This records provenance, not a guarantee of exclusive copyright or a third-party open-source license.

| Pack / paths | Source / creator | Rights and attribution | Modifications |
| --- | --- | --- | --- |
| `character-reference.png` | OpenAI image generation for this project | Original generated output; no third-party attribution requirement identified | Original PNG retained; Alder portrait displayed with a CSS crop |
| `pip.png`, `pip-uncloaked.png`, `nell.png`, `brindle.png`, `quill.png` | Same tool, canonical character reference | Original generated outputs | Original alpha retained; nonuniform pose windows selected in CSS |
| `town.png`, `office.png`, `bridge.png`, `mechanism.png`, `gate.png`, `alcove.png` | Same tool, original environment briefs | Original generated outputs | CSS camera crop; town dusk uses a color treatment |
| `bridge-open.png` | Same tool, edit of generated bridge | Original generated output | Repaired deck lowered and dusk lighting generated |
| `failures.png` | Same tool, generated character references | Original generated output | Transparent tableau windows and CSS motion; captions rendered separately |
| `dist/game/audio.js` | Original procedural composition and synthesis authored for this game | Project licensing undecided | Web Audio oscillators; no samples or recordings |
| Embedded favicon | Original simple interface emblem | Project licensing undecided | Inline SVG |
| Typography | Browser/system Georgia and system-ui font stacks | No font files redistributed | None |

Exact selected prompts are recorded in `docs/art-prompts.json`. No paid assets, commercial soundtrack excerpts, external asset downloads, or live AI calls are used by the game.

## Overall license

The user requested public source visibility but has not chosen an overall open-source or Creative Commons license. No such license is granted by this repository. Public visibility and access to source files alone do not grant permission to reuse the game, its code, or its assets. A future explicit license decision may change this.
