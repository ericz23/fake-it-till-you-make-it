# Verification record

Implementation date: 2026-10-04. Browser checks use Codex's in-app Chromium browser via ordinary rendered controls. No game-state mutations or debug skip routes were used.

## Automated checks

`npm test`: 9 tests passed. Exhaustive 512 successful choice sequences cover all 32 persistent-fact combinations, all three endings, required clues, exact retry restoration for eight failures, historical checkpoint replay, honest/bluff callbacks, both repairs, dialogue/choice/response/failure/ending save round-trips, malformed/unknown save rejection, denied storage, and restart collection preservation.

`npm run build`: ES-module syntax, production entrypoint, manifest and all required illustration paths checked.

## Browser journeys completed locally

- New game, Continue, Settings, Credits, map, confirmations, all eight failure/retry pairs, and all three endings.
- Full honest / copied-file / listen / Nell inspection / mend / admit / sunrise / copy note / Brindle crossing / public truth route, including every failure.
- Map replay of S10 yielded E_PAPER with the copied file retained.
- Map replay of S02, taking no file, inspection / Brindle explanation / brace / helping / sunrise / trust Nell / normal crossing / private route yielded E_APPRENTICE. Final-run ledger and disclosure did not leak backward.
- Refresh during dialogue, choice, failure, and ending: title offers Continue and restores the same coherent checkpoint.
- Restart cancellation preserves run. Confirmed restart preserves all eight incident and three ending discoveries; older-run map entries are labelled and do not offer invalid replay links.
- Enter completes a partially revealed line; Space then advances. Tab gives a solid visible focus indicator and Enter activates the selected choice.
- Separate music/effects sliders verified at 0% and 100%; sound toggle persisted. Reduced-motion setting makes actor animation `none`. All clues remain in text.
- Optional read-only WebMCP story tool registered and returned the current visible state; invalid additional input was rejected without state change.
- Current browser console after integrated-art reload: no error/warning entries.

## Visual review

Screenshots captured and inspected in the browser at 1280×720 and 1440×900: title, bridge C03, gate C07, banner failure, shower failure, map, settings, and each ending. Character identity and nonuniform transparent sprite windows checked against the reference.

390×844: gate puzzle, all three choices, settings and keyboard focus inspected; document width equals viewport width (390), all choice buttons fully within width. Fixed the clue panel covering Brindle's face and the troll's right-edge clipping. Native modal scroll keeps settings reachable.

Original art was inspected before integration. No placeholder scene art is used. A distinct repaired/open bridge image replaces the raised bridge for the crossing and bridge endings. S00 uses uncloaked Pip. Failure captions/clues are rendered text rather than text baked into images.

## Remaining release checks

Public deployment, full signed-out-origin browser route, release commit correspondence, and timed agent-led pacing run are pending. A human first-time playtest has not been conducted. Do not describe automated or agent-led results as human feedback.
