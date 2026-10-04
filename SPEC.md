# Product specification

## Intent and agreed scope

A funny, story-driven, single-player browser game with original cartoon illustrations. Inspired by the appeal of memorable characters and progression in handheld RPGs and entertaining branching choices in Henry Stickmin; do not reuse their characters, dialogue, music, or recognizable assets.

An earnest, unprepared kid steps into the role of a missing hero. Comedy rests on the gap between rehearsed heroics and real people's problems. A genuine mystery underlies the story. Target: one satisfying 15–20-minute first successful playthrough, with replay value and room for future episodes. This duration is a playtest target, not a guarantee or a reason to force players to wait.

User decisions: scene-based choices rather than free exploration; cartoon illustration; public GitHub repository; public browser link; first episode followed by potential expansion. Remaining creative choices in this package are planner defaults the implementation lead may refine while preserving the core story and scope.

## Episode one: A Hero for the Afternoon

In Bellwether, 13-year-old Pip Finch borrows the vanished Captain Alder's cloak and claims to be his appointed apprentice. With practical friend Nell, Pip must reopen Lantern Bridge before the evening procession. Bridge keeper Brindle is no villain: the town has ignored his repair requests. Solving the crossing uncovers Alder's secret investigation beneath the bridge.

The local problem is resolved in all three endings. The mystery continues, but the episode must feel complete. Pip earns a brass apprentice badge and learns that listening and helping are heroic acts.

## Player experience

- Title screen with New Game, Continue when available, Scene Map when unlocked, and Settings.
- Illustrated stage, animated character poses, dialogue, and two or three meaningful choice buttons.
- Click/Enter/Space advances dialogue. First advance during text reveal completes the line, second proceeds. Keyboard focus must remain visible; choices work with normal keyboard activation.
- No reflex challenges, timers, free movement, combat stats, inventory management screen, or procedural dialogue.
- Choices include comic failures with one-click retry, alternate successful approaches, and two enduring story decisions that affect the ending.
- Optional hotspots reveal short jokes or clues, but required progress never depends on pixel hunting.
- A compact scene map records visited checkpoints, discovered failures, and endings. Undiscovered nodes remain silhouettes; no ending spoilers.
- Progression comes from completing the assignment, gaining Nell's trust, earning the badge, and discovering the mystery. Do not add XP, currency, grinding, or achievements unrelated to these actions.

## Persistence and replay

Automatic device-local saves at stable dialogue/choice checkpoints. Explain in Settings that progress stays in this browser and can be lost if site data is cleared. Include restart confirmation, independent volume controls, instant-text setting, and reduced-motion support.

Retry restores the exact pre-choice story state without losing discovered failure collection entries. Scene replay restores that checkpoint's saved state, not the latest ending's state. New Game clears the current run after confirmation but can preserve discoveries; provide a separate confirmed erase-all action.

## Bounds

Desktop/laptop browsers first; usable responsive layout at 1280×720 and 1440×900. Smaller screens should remain readable and operable without covering choices. Mouse and keyboard; touch support where straightforward. No player account, multiplayer, backend database, payments, live AI calls, full voice acting, custom domain, or mobile app.

## Acceptance criteria

1. Start, Continue, Settings, credits, map, retry, and all three endings work without runtime errors.
2. Every STORY.md choice has its specified route/effect; all eight unique failures and three endings are reachable through ordinary play.
3. Retry and replay preserve the correct checkpoint state; refreshing during normal dialogue, choice, failure, and ending screens restores a coherent experience.
4. Required assets are original or licensed for public redistribution. Credits and asset provenance are included in the repository and game.
5. Full story is illustrated, with readable text and expressive reactions. No placeholder scenes, broken images, stock dashboard UI, or text-only replacements for required visual gags.
6. A first-time-style timed playthrough targets 15–20 minutes. Record actual duration and method. Automated fast-click tests alone cannot establish pacing or fun. Report a pacing shortfall if unresolved; never manufacture a human playtest.
7. Dialogue and choices work by keyboard; motion can be reduced; sound is optional; clues are legible without color or audio alone.
8. Scene graph validation, state tests, production build, and browser journeys pass. Console/network errors affecting play are resolved.
9. Public GitHub repository contains the final source, lockfile, setup instructions, assets and licensing information, plus automated validation where feasible. No credentials or private conversation exports.
10. Public production URL loads and supports a complete playthrough in a signed-out visitor session. Repo README links to it. Verify that the deployed version matches the final source commit, documenting any metadata-only follow-up commit.

## Expansion

Keep episode content separate from the reusable scene engine. Use stable scene IDs and versioned save data. Later episodes can reuse character rigs, settings, dialogue rendering, flags, and the map. Do not build an editor, plugin system, or full second episode now.
