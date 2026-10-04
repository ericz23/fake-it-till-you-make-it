# Episode one — A Hero for the Afternoon

This is the authored story blueprint. The implementation lead should expand the dialogue anchors into complete, concise exchanges and stage directions in the game's content files. The anchors are not the entire script. Preserve clue logic, outcomes, tone, and all branch IDs. Aim initially for 1,900–2,400 words on a successful path including optional observations; tune using timed play, without padding or forced waits.

## Cast and tone

- **Pip Finch, 13:** shy until he puts on a costume; rehearses grand speeches, genuinely wants to help. Green tunic, rust-red scarf, giant blue cloak, wooden practice sword. Never treated as stupid for caring.
- **Nell Reed, 14:** an apprentice repairer and Pip's friend. Dry, observant, affectionate rather than cruel. Tool satchel, dark curly hair, ochre overalls. Spots Pip immediately and helps because the town needs someone willing to listen.
- **Captain Alder:** beloved, quietly kind hero. Once repaired Pip's broken wooden sword and said, “Keep it. Practice helping, too.” Missing throughout episode one.
- **Brindle:** large, gentle troll and professional bridge keeper. Proud of his work, exhausted by unpaid repairs, carries a tiny pencil and maintenance ledger. Neither monster nor secretly evil.
- **Clerk Quill:** theatrical town official who is much better at ceremonies than maintenance. A pigeonlike human posture, not an actual bird. Evasive about paperwork, not established as the ultimate villain.

Warm absurdity, physical comedy, witty dialogue, and genuine stakes. No meme-dependent jokes, licensed references, gore, or cruelty toward Pip. Clever and empathetic approaches can work. Funny failures reward curiosity with a distinct gag and short caption; no long punishment or repeating whole conversations.

## Mystery truth (writer knowledge, not all revealed)

Alder discovered that repair funds and old civic mechanisms were being diverted toward a sealed network beneath town. He went underground voluntarily to investigate a signal associated with the former town bell. Someone is altering official records to conceal it. His actual fate and the culprit remain unrevealed. Episode one proves he visited the bridge before disappearing, deliberately entered the old gate, and distrusted official records. Do not reveal a kidnapped princess, time travel, or a secret evil Alder as an improvised twist.

## Persistent run facts

`entryStyle`: honest | bluff; `approach`: listen | inspect; `hasLedgerCopy`: boolean; `repairStyle`: mend | brace; `publicTruth`: boolean. Defaults false for booleans; others unset until chosen. Required clues are collected in every successful route: `alderVisited`, `bellSeal`, `alderNote`. Cosmetic callbacks can use entryStyle and repairStyle. Ending precedence: publicTruth -> E_TRUTH; else hasLedgerCopy -> E_PAPER; else E_APPRENTICE.

Discoveries (`failuresSeen`, `endingsSeen`, `scenesSeen`) are separate from run facts and survive retry. Optional observations must not accidentally set ending flags.

## Scene graph

All successful branches reconverge at the listed next scene. A failure offers Retry to the same choice with pre-choice state and Map to visited checkpoints. There are 10 choice checkpoints, eight distinct failures, and three endings. Failure captions are exact suggested copy; dialogue can be refined.

### S00 — The empty chair (2 minutes)

Town preparations: ribbons, a disproportionate statue of Alder, Quill directing people to move a banner three inches. Empty hero chair. Pip waits with a handmade apprentice application. Nell notices his application has a “dramatic entrance experience” section.

Quill: “Captain Alder is merely arriving with unusual suspense.”
Nell: “He missed breakfast. He doesn't do suspense before breakfast.”
Pip notices Alder's office door is ajar. Brief memory of the repaired wooden sword establishes affection without exposition. Inside, a departure notice has been torn away; no sign of a struggle.

Optional hotspots: application with “References: my mum, pending”; statue plaque with grand titles and “allergies: bees.” Neither adds flags. Continue -> S01.

### S01 — A perfectly qualified silhouette (choice C01; 1 minute)

Quill's assistant calls through the frosted office window for Alder's replacement. Pip is wearing the cloak to look in a mirror. Nell enters and recognizes his boots.

- “I'm his apprentice. Temporarily.” -> entryStyle=bluff. Nell: “Temporarily his apprentice, or temporarily telling the truth?” Quill accepts the silhouette. -> S02.
- “I'm Pip. I can try to help.” -> entryStyle=honest. Quill hears only the convenient part: “Splendid. Acting Apprentice.” Nell: “You did technically warn him.” -> S02.
- “Make a heroic balcony entrance.” -> F01: cloak catches on a hook; Pip rotates into a hanging municipal banner. Caption: “A banner day for heroism.” Retry C01.

### S02 — Your first official problem (choice C02; 1 minute)

Quill hands over a wax-sealed order: remove the obstruction at Lantern Bridge before the procession. He describes Brindle as an unreasonable troll. Nell asks about the repair budget; Quill starts polishing a clean seal.

- “Take the order and go.” -> hasLedgerCopy=false -> S03.
- “Ask for the maintenance file.” -> Quill reluctantly gives a copy showing approvals but no delivered materials. hasLedgerCopy=true. Pip: “Is paperwork a weapon?” Nell: “In the correct hands.” -> S03.
- “Stamp myself a full hero's license.” -> F02: self-inking stamp sticks to cloak; a spring-loaded filing drawer neatly envelopes Pip in forms. Caption: “Application processed.” Retry C02.

### S03 — The terrible bridge beast (choice C03; 2 minutes)

Establish a lovely canal and lantern-strung bridge. Brindle bars entry with a sign: UNSAFE, PLEASE READ THE SECOND WORD TOO. A parade float waits behind Pip. Brindle politely offers them tea.

- “Challenge him to honorable combat.” -> F03: Pip's wooden sword sticks in its homemade sheath; Brindle pulls it free and the recoil sends Pip into an empty wheelbarrow. Brindle wheels him safely back. Caption: “Defeated by a helpful adult.” Retry C03.
- “Ask why the bridge is closed.” -> approach=listen. Brindle shows cracked planks and six ignored requests. -> S04.
- “Conduct an official inspection.” -> approach=inspect. Pip recites nonsense; Nell points out a real crack. Brindle brightens: “Finally, an inspector with an inspector.” -> S04.

### S04 — The inspection (choice C04; 1–2 minutes)

Brindle explains that the raising mechanism jammed after a late visitor used the service gate. He recognizes the cloak. Alder visited before dawn, asked about the old bell symbol, and went below alone. Set alderVisited=true. Pip briefly drops the heroic voice: “Did he look hurt?” Brindle: “Worried. That's different.”

- “Bounce on the cracked plank to test it.” -> F04: plank behaves like a seesaw, flips Pip onto the padded parade float. Its trumpet sounds one miserable note. Caption: “Load test: conclusive.” Retry C04.
- “Let Nell examine the mechanism.” -> Nell identifies a stuck retaining pin and rotten joint. Pip takes the notes seriously. -> S05.
- “Ask Brindle to walk us through it.” -> he uses his tiny pencil to explain; Pip asks a surprisingly sensible question about supporting the joint. -> S05.

### S05 — A plan with fewer swords (choice C05; 1–2 minutes)

Establish that Brindle has spare rope and timber; Nell has the necessary tools. No fetch quest. Both valid repairs have understandable logic and distinct animation.

- “Pull the enormous red lever.” -> F05: lever releases celebratory bunting, wrapping Pip in CONGRATULATIONS. Nell: “That one was labeled.” Caption: “A breakthrough in decorations.” Retry C05.
- “Free the pin and mend the joint.” -> repairStyle=mend. Brindle supports the deck, Nell fixes the joint, Pip carefully taps the pin. -> S06.
- “Brace the joint before lowering the bridge.” -> repairStyle=brace. Pip suggests using the float's detachable timber support; Nell approves, Brindle secures it. Float remains safe and usable. -> S06.

### S06 — The cost of pretending (choice C06; 2 minutes)

During repair, Pip's borrowed badge falls off; Brindle sees the handmade application underneath. Pip admits Alder never appointed him. Nell doesn't deliver a lecture. Brindle says he already suspected: the real Alder asks before touching levers.

- “Admit I was afraid nobody would listen.” -> Nell: “I listened before the cloak.” Brindle invites Pip to finish the job. -> S07.
- “Ask whether helping still counts.” -> Brindle: “The bridge won't ask for your qualifications.” Nell: “I might ask about the balcony.” -> S07.

No failure here; allow the vulnerable beat to stand. If entryStyle=honest, use “I let them call me his apprentice” rather than claiming Pip explicitly lied. The repair exposes an old brass gate below the bridge.

### S07 — The bell that isn't there (choice C07; 1–2 minutes)

A brass three-bell emblem matches a sketch in Alder's discarded field page caught in the mechanism. Set bellSeal=true. Three pull cords beside the gate have icons: sunrise, midday sun, moon. A rhyme carved beside them reads: “Wake the keeper; greet the day. Noon and night must wait their say.” Nearby scratched marks suggest Alder used the sunrise cord. Make symbols and wording legible; no audio-only puzzle.

- “Pull all three. Thoroughly.” -> F06: a disused inspection shower drenches Pip; Nell silently offers a cloth. Caption: “A clean sweep.” Retry C07.
- “Pull the sunrise cord.” -> gate unlocks. -> S08.
- “Use my head. Literally.” -> F07: Pip's soft hood sticks to the latch, leaving him facing the wrong way; Brindle gently turns him around. Caption: “A different perspective.” Retry C07.

### S08 — A message meant for someone else (choice C08; 2 minutes)

Small service alcove, not a new dungeon. Find Alder's scarf, chalk route marks, and a folded note beside a bell-shaped seal. No blood. Note: “The bridge was only the first missing payment. The old bell is ringing below town. If I am late, follow the repairs they say were never needed. Trust the keeper. Keep this out of the official ledger. — A.” Set alderNote=true.

Pip recognizes Alder's handwriting from the repaired sword's tag. Nell: “He didn't run away.” Pip: “Then we don't get to, either.” Brindle closes the deeper passage until they can return properly equipped. Daylight and distant parade music bring us back to the local job.

- “Keep the note; record the symbols.” -> Pip copies carefully, Nell keeps a rubbing. -> S09.
- “Ask Nell to keep the original safe.” -> shared trust beat, same necessary clue retained. -> S09.

### S09 — The inaugural crossing (choice C09; 1–2 minutes)

Bridge repaired, Brindle verifies it before anyone crosses. Quill arrives to announce his successful troll-removal initiative. Brindle remains visibly at his post.

- “Demonstrate a flying victory pose.” -> F08: cloak becomes a sail and carries Pip into the float's papier-mâché dragon mouth. Dragon politely spits out his boot. Caption: “A moving speech.” Retry C09. This is a comic hypothetical failure; restoring checkpoint leaves the completed repair intact.
- “Invite Brindle to lead the crossing.” -> crowd realizes he repaired/protected their bridge. -> S10.
- “Walk across with Nell, at normal speed.” -> understated victory, callback to the balcony. -> S10.

### S10 — What do we tell them? (choice C10; 1–2 minutes)

Quill asks what caused the delay and whether Captain Alder sent any official instructions. Nell quietly notes that Alder's message warned against the official record. Brindle watches. This is a real decision, not a wrong-answer trap.

- “Tell the crowd about the ignored repairs and Alder's clue.” -> publicTruth=true -> E_TRUTH.
- “Credit the bridge keeper. Keep the investigation between us.” -> publicTruth=false -> E_PAPER if hasLedgerCopy, otherwise E_APPRENTICE.

### E_TRUTH — The town is listening (1 minute)

Pip explains repairs were ignored and Alder followed the trail beneath town; does not accuse Quill of kidnapping. Residents demand the records be opened. Nell: “You wanted people to believe in you.” Pip: “I was imagining less paperwork.” Brindle awards a small brass apprentice badge. Quill anxiously watches a distant courier leave. End card: BRIDGE OPEN. QUESTIONS OPEN, TOO.

### E_PAPER — An unusually well-documented conspiracy (1 minute)

In private, Nell compares the copied approvals with Alder's note. The same bell stamp appears on repairs at the abandoned bellhouse. Pip: “Our next enemy is a filing cabinet.” Nell: “Finally. A fair fight.” Badge awarded by Brindle before their departure. End card: APPRENTICE HERO. AMATEUR AUDITOR.

### E_APPRENTICE — After the procession (1 minute)

Pip accepts Brindle's badge in a quiet moment. Nell makes a practical list: lantern, rope, sandwiches. Pip adds “rescue Captain Alder.” Nell moves it below sandwiches. A faint bell sounds beneath their feet; their expressions change. End card: FIRST JOB DONE. REAL ADVENTURE PENDING.

All endings unlock the map and offer replay plus credits. Show a short illustration of the next mystery, not a dead “Play episode two” button. No second episode implementation.

## Writing and pacing gate

Each scene needs a beginning, visual action, and exit beat. Expand anchors through character interaction and observations, not walls of exposition. Balance 2–6-line exchanges with animation. Allow readers to advance immediately. Optional hotspots and failure discoveries add replay time but must not be counted as mandatory first-route duration. Review continuity for every combination of entryStyle, approach, ledger, repair, and final disclosure.
