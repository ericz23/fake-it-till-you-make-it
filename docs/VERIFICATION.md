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

## Public release checks

- GitHub public repository: https://github.com/ericz23/fake-it-till-you-make-it. Standard authenticated Git push succeeded; remote main matched release source `f6a4e3af469b422ea7258068a02d0edd6550e7cf`. Public GitHub Actions validation passed: https://github.com/ericz23/fake-it-till-you-make-it/actions/runs/37182620790.
- Public game: https://fake-it-till-you-make-it.kachow-1.chatgpt.site. Sites audience reports `public`, deployment succeeded, version 1. No paid plan was activated.
- Credentialless HTTP requests returned the game and all 21 non-HTML production files. Every script, stylesheet and PNG matched its committed counterpart by SHA-256. The host adds a Cloudflare script to served HTML; the game entrypoint itself is the committed static file.
- Fresh game origin initially offered New game with no existing save or account prompt. A complete keyboard-activated production route reached E_PAPER. This was the existing browser's fresh game origin, not an incognito profile; independent cookie-free/credential-free requests established public access.
- Production ending reload -> title -> Continue restored the exact ending. Public map replay -> S09 -> F08 -> Retry restored the repaired crossing choice. Final boot tableau and ending teaser screenshots inspected at 1280×720. The final ending also passed 390×844 review: no horizontal overflow; its stacked controls remain reachable by ordinary vertical scrolling. No browser console errors or warnings on the completed public route.
- Source/version/archive identifiers are in `release.json`. The final documentation-only follow-up changes README, STATUS and verification records; it does not change deployed game files.

## Timed pacing evidence

On 2026-10-04, the production browser run started at 06:29:49.945 UTC and reached the completed E_PAPER card at 06:48:06.727 UTC: **18 minutes 16.8 seconds** wall time. There were 163 dialogue beats / 2,544 dialogue words and ten choices. Path: bluff, maintenance file, listen, Brindle explanation, brace, helping, sunrise, trust Nell, walk with Nell, private disclosure.

Method: paced agent review through ordinary rendered controls. Dialogue viewing dwell was explicitly calculated at 180 words/minute (14m 08s total); the remaining 4m 08.8s includes choices, UI/tool latency, a screenshot and commentary/inspection overhead. No optional hotspots, failures, retries, reloads, or map jumps were included in this timed route. The stopwatch stopped when the end card appeared; reading that card is extra. No forced delays were added to the game. Raw aggregate evidence is in `pacing.json`.

This supports the 15–20-minute target as an **agent-led estimate**, not measured human reading speed or proof of fun. Faster readers can finish earlier; failures and exploration can extend it. A human first-time playtest remains unperformed. Safari/Firefox and deliberate network-fault injection were not browser-tested; denied storage and corrupt saves were tested at the storage/engine level. All production assets were independently retrieved successfully.
