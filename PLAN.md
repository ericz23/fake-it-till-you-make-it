# Technical and delivery plan

## Architecture recommendation

A client-side TypeScript web game with a small deterministic scene engine. Use a lightweight modern build tool and familiar component rendering if compatible with the actual hosting workflow; prefer the supported Sites starter when required. Select current compatible dependency versions during implementation and commit a lockfile. Do not build around unverified SDKs or hard-code assumptions about the planning machine.

The game needs layered illustrated scenes, dialogue, choices, sound, a graph/map, and local persistence. DOM/SVG/CSS animation can cover this scope; use a canvas library only if it materially improves animation. No server gameplay, external database, or AI inference during play.

Suggested modules:
- `game/engine`: pure state transitions, predicates, effects, checkpoints.
- `game/content/episode-01`: typed scene data and authored dialogue.
- `game/ui`: stage, dialogue, choices, map, settings, title, credits.
- `game/storage`: versioned local save, validation, recovery, exportable schema.
- `public/assets`: illustrations and audio, with provenance.
- `tests`: engine/state tests, graph validation, browser journeys.

Use a discriminated scene/beat schema with stable IDs, speaker, text, background, character poses, animation cue, optional observations, choices, conditions, effects, and next scene. Keep transitions out of component event handlers. Visual animation completion must not apply the same story effect twice. Disable duplicate activation while committing a choice.

## Save model

Save `schemaVersion`, `episodeId`, scene and beat IDs, run facts, settings, checkpoint snapshots, and discoveries. Keep discoveries independent of run snapshots. Write on logical checkpoints and settings changes; gracefully handle denied/full storage by continuing play and showing a brief persistence notice. Validate parsed saves; unknown versions/corrupt records must offer recovery rather than crash. Don't overwrite an unreadable save silently.

Explicit restart confirmation; independent erase-all control. Version story content so later episode updates can preserve valid saves or explain why a chapter restart is needed. No speculative cloud sync.

## Milestones

### 0. Access and setup
Read applicable instructions. Verify local tools and hosting capabilities. Read installed GitHub plugin workflow and identify authenticated user and repository permissions. Initialize a dedicated local Git repository. Create public `substitute-hero` under the user's account if available, otherwise resolve collision without overwriting. Push a first meaningful scaffold/doc checkpoint once access works. If connector cannot create or push, use its supported CLI path; sign-in is a user step if needed.

Read current Sites building and hosting instructions before provisioning. Verify public signed-out access is supported before committing to that host. Sites is the proposed default, not permission to silently deliver a private-only URL. If public hosting is unavailable, report it and propose an available free static host; do not enable a paid service. Keep other implementation moving.

### 1. Representative playable slice
Implement title -> bridge conversation C03 -> one properly staged failure -> retry -> one successful transition. Include real character/background art, keyboard controls, sound toggle, and persistence. Show it for optional user feedback without waiting to proceed. This establishes tone, art consistency, and readable composition before producing all scenes.

### 2. Complete narrative and engine
Write the full dialogue from STORY.md; implement every specified scene, choice, flag, failure, ending, checkpoint, and map. Preserve causal continuity, especially honest entry vs false apprentice claim. Build graph validation now. Establish the complete playable route before final art polish.

### 3. Art and presentation
Integrate the complete asset set, unique failure staging, audio, transitions, reduced motion, and credits. Remove temporary placeholders. Owner coordinates assets and integration; subagents may assist with bounded art/research tasks per Sites rules. Keep the same art references throughout.

### 4. Verification and pacing
Run the checks below. Conduct an actual browser playthrough at normal reading speed, recording its limitations as an agent-led pacing estimate. Adjust dialogue/action density if the episode is materially short, without artificial waiting. A user/friend playtest can later refine fun and timing; don't block all delivery on unsolicited human testing.

### 5. Public delivery
Build and publish via the chosen verified hosting path. Test the production URL in a signed-out browser context, including save/reload and a complete route. Record final source commit/build correspondence. Push final source and documentation to the public repository; add game URL to README and repository description/homepage if supported. Configure a simple CI workflow for established validation/build commands if permissions allow. Deployment-on-push is not required: document the actual update procedure accurately.

## Verification matrix

- Static graph: unique IDs, all targets present, valid effect keys, reachable nodes, all eight failures, all three endings, and no accidental dead ends.
- Branch/state tests: publicTruth overrides ledger for E_TRUTH; ledger produces E_PAPER only with private ending; otherwise E_APPRENTICE. C01 honesty changes dialogue correctly. Both repair styles reach the same valid crossing.
- Retry tests: failure restores pre-choice facts and beat; records failure discovery; no accumulated effect from repeated attempts.
- Replay tests: earlier checkpoint restores its own inventory/facts; discoveries remain; later flags cannot leak backward.
- Save tests: refresh at dialogue, choice, failure and ending; storage unavailable; malformed JSON; unknown schema version; reset confirmation cancellation.
- Browser journeys: all three endings through actual choices; all failure/retry pairs; keyboard-only route; settings/reduced motion; map replay; repeated rapid input; asset loading failure handling.
- Visual QA: representative screenshots specified in ART.md at 1280×720 and 1440×900; inspect smaller viewport for usable controls.
- Release: production build, no blocking console/network failures, public repo visible signed-out, production URL playable signed-out, no local-only URLs or credentials in committed config.

Use meaningful tests of player behavior and state invariants. Do not test only that components render or snapshot the implementation. Record exact commands and results in the final README/status once the chosen stack exists.

## Repository README requirements

Game and episode description; public play URL; screenshot if available; prerequisites; install/dev/test/build commands; source structure; how to add an episode; local-save behavior; credits/provenance; actual deployment/update instructions; known limitations. Public repository does not imply the user selected an open-source license: leave overall licensing undecided and state that clearly unless instructed otherwise.

## Completion and external blockers

The definition of done is SPEC.md's acceptance list. A running localhost build is not deployment, and a connected GitHub plugin is not a pushed repository. Report missing authentication or hosting eligibility explicitly. Maintain STATUS.md with completed work and the precise next action so the task can resume without reconstructing context.
