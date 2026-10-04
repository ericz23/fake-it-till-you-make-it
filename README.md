# Fake It Till You Make It

**Episode one: A Hero for the Afternoon.** An original, illustrated comedy adventure about a kid in a borrowed cloak, a very reasonable troll, and a bridge that needs actual repairs.

Play as Pip Finch through ten decisions, eight recoverable comic incidents, and three endings. Repair Lantern Bridge, earn an apprentice badge, and discover why Captain Alder went beneath Bellwether. The episode is designed for a 15–20-minute first playthrough; verification and pacing evidence are tracked in STATUS.md.

Public game URL: publishing in progress. This line will be replaced with the verified production link.

## Run locally

Node.js 20 or newer. No runtime dependencies, paid APIs, login, or backend database.

```sh
npm ci
npm run dev
```

Open the local URL printed by the server. Click or press Enter/Space to advance. The first press during text reveal completes the current line; the next advances. Use Tab/Enter for choices. Settings include independent music/effects levels, mute, instant text, reduced motion, and reset controls.

```sh
npm test       # Graph, all 512 successful routes, retry/replay and save invariants
npm run build # Validate production assets, entrypoint and ES-module syntax
```

## Structure

- `dist/game/episode.js`: authored scene, dialogue, observation, choice and failure content.
- `dist/game/engine.js`: pure deterministic transitions, snapshots, save validation and ending precedence.
- `dist/game/storage.js`: versioned browser-local saves and graceful storage failure handling.
- `dist/game/ui.js`, `dist/style.css`: layered illustrated stage, controls, settings, map and credits.
- `dist/game/audio.js`: original optional procedural score and effects.
- `dist/assets/`: original illustrations and reference sheet.
- `tests/`: Node state and graph tests.
- `docs/art-prompts.json`: original generation prompts and provenance.

The production source is authored directly in `dist/`; `build` validates it without transpilation. Keep that directory in Git. To add a future episode, create a separate content module with stable IDs, provide its own episode/version save identifier, and retain the reusable transition and UI contracts. No second episode is implemented.

## Saves and replay

Progress is stored only in this browser under `fake-it-afternoon-save-v1`. Clearing site data, switching browsers, or leaving a private session can lose it. Retry restores the exact pre-choice facts and keeps incident discoveries. Map replay restores the state saved on entry to that scene. Restart clears the current run but preserves discoveries; Erase all progress separately confirms deletion. Corrupt or unknown saves are kept until the player explicitly confirms a fresh run.

## Deployment

The static `dist/` directory is published with Sites using `.openai/hosting.json`. Publishing is manual, not triggered by GitHub pushes. The owner runs validation, commits the exact source, pushes GitHub, then uses the Sites workflow to push the same source and package its static output. A saved version is deployed with public audience and checked signed out. Release commit/version correspondence will be recorded in STATUS.md.

## Credits and licensing

Created for Eric Zhu with Codex. Original story, characters, generated cartoon artwork, and procedural score. See [ASSET-LICENSES.md](ASSET-LICENSES.md) and [art prompts](docs/art-prompts.json). No overall open-source license has been selected; public visibility does not itself grant reuse rights.

## Current limitations

Browser verification and timed pacing review are in progress. Agent-led pacing is an estimate, not a human fun test. Smaller screens reflow the controls; desktop/laptop is the primary format. Audio is optional synthesized music rather than recorded performances.
