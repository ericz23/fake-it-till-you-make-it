/** Original episode content. Stable scene/choice IDs are part of the save contract. */
const L=(speaker,text,pose='neutral')=>({speaker,text,pose});
const C=(id,label,next,effects={},response=[])=>({id,label,next,effects,response});
const F=(id,label,failure)=>({id,label,failure});
export const scenes={
S00:{title:'The empty chair',location:'Bellwether · late afternoon',bg:'town',cast:['pip','nell','quill'],lines:[
L('Narrator','By four o’clock, Bellwether has polished its bells, folded its bunting, and reserved its largest chair for a man who is not in it.'),
L('Quill','That banner is three inches too far left. The Captain must feel welcomed, not geographically misrepresented.','announcing'),
L('Pip','Do you think he’ll read my application before the procession? I used my best handwriting. Even for the dangerous skills.','worried'),
L('Nell','“Dramatic entrance experience: available on request.” Pip. You fell out of a cupboard.','skeptical'),
L('Pip','I entered the room. There was drama. Nobody requested a second demonstration.'),
L('Narrator','Pip folds the application along its soft, much-folded crease. Captain Alder promised to be here. Captain Alder keeps promises.'),
L('Quill','The Captain is merely arriving with unusual suspense. Please stop looking at the empty chair. It encourages it.','defensive'),
L('Nell','He missed breakfast. He doesn’t do suspense before breakfast. Let’s check his office.','neutral'),
L('Pip','Last winter he fixed my practice sword. Everyone else said it was only a stick. He sat right down in the snow and bound the handle.'),
L('Alder','Keep it. Practice helping, too.'),
L('Narrator','The memory is smaller than the statue in the square, and considerably more useful. Pip still carries the sword. The handle has never come loose.'),
L('Nell','His door’s open. There’s a mark where a notice was pinned, but somebody’s torn the paper away. No mess. No overturned furniture.'),
L('Pip','Perhaps he left in a hurry. Perhaps he left instructions. Perhaps we should read them before anyone gives me a job.','worried')
],observations:[['The application','References: my mum, pending. Special skills: reaching low shelves. Availability: after lessons.'],['The statue','CAPTAIN ALDER. Defender of Bellwether. Friend to the friendless. Allergies: bees. The pedestal is taller than his office.']],next:'S01'},
S01:{title:'A perfectly qualified silhouette',location:'Alder’s office',bg:'office',cast:['pip','nell'],lines:[
L('Narrator','The cloak hangs beside a mirror. Pip puts it on for exactly one private second. It is a very large second.'),
L('Pip','Citizens! Remain reasonably calm! Your… appointed… person has arrived.','heroic'),
L('Nell','Your appointed person is standing on the hem. Hold still. There. You may now save the world without falling over yourself.','warm'),
L('Quill','Captain? Replacement Captain? Any authorized silhouette? The bridge has become a matter of public inconvenience!'),
L('Narrator','Through the frosted office window, a blue cloak makes a very convincing hero. The small boots below it are less persuasive.'),
L('Nell','It’s Pip, Clerk Quill. The same Pip you asked to move the chairs. We can fetch somebody with a proper appointment.','skeptical'),
L('Quill','Excellent. An appointment. Just what we need. Step outside, apprentice!'),
L('Pip','If I take it off, he’ll find somebody else to carry chairs. If I keep it on… somebody might actually let me help.','worried'),
L('Nell','Then start with something you can stand behind. Preferably a sentence. The balcony rail is loose.')
],choices:[
C('C01_bluff',"I’m his apprentice. Temporarily.",'S02',{entryStyle:'bluff'},[L('Nell','Temporarily his apprentice, or temporarily telling the truth?','skeptical'),L('Pip','I was hoping to grow into both.'),L('Quill','A fine attitude. Appointments are mostly posture. Follow me!')]),
C('C01_honest',"I’m Pip. I can try to help.",'S02',{entryStyle:'honest'},[L('Quill','Splendid. Acting Apprentice. I heard all the words I needed.'),L('Nell','You did technically warn him. I’ll come too. Somebody should bring tools.','warm'),L('Pip','And somebody should know which end to hold.')]),
F('C01_balcony','Make a heroic balcony entrance.','F01')
]},
S02:{title:'Your first official problem',location:'The clerk’s desk',bg:'office',cast:['pip','nell','quill'],lines:[
L('Quill','Lantern Bridge is obstructed. The evening procession cannot cross. You will remove the obstruction before the lanterns are lit.','announcing'),
L('Pip','What kind of obstruction? A tree? A landslide? A very determined goose?'),
L('Quill','A bridge keeper. Named Brindle. A troll, if that helps with your strategy.'),
L('Nell','It helps with his description. Why has he closed it?'),
L('Quill','Temperament. Unreasonable demands. An attachment to the word “unsafe.” I’ve sent him six perfectly good acknowledgments.','defensive'),
L('Nell','And the repair budget? Acknowledgments are difficult to hammer into a bridge.','skeptical'),
L('Narrator','Quill polishes a seal that is already clean. Behind him, a drawer marked COMPLETED contains an impressive quantity of untouched string.'),
L('Pip','The order says “remove.” Could that mean removing whatever is wrong with the bridge?'),
L('Quill','It could mean several things. That is the strength of official language. Here: wax, signature, and a ribbon. All the equipment you need.'),
L('Nell','I brought a spanner anyway. Professional superstition.')
],observations:[['The clean seal','Three little bells beneath a very large signature. Quill keeps polishing around a scratch in the brass.']],choices:[
C('C02_order','Take the order and go.','S03',{hasLedgerCopy:false},[L('Pip','We’ll talk to him. I can do talking. Most days.'),L('Nell','And I can do listening. Between us, that’s nearly a conversation.')]),
C('C02_file','Ask for the maintenance file.','S03',{hasLedgerCopy:true},[L('Quill','A copy only. The original is busy being filed.','anxious'),L('Narrator','Six requests. Six approvals. No delivered timber. A tiny bell stamp repeats at the bottom of every page.'),L('Pip','Is paperwork a weapon?'),L('Nell','In the correct hands. Keep that dry.')]),
F('C02_stamp',"Stamp myself a full hero’s license.",'F02')
]},
S03:{title:'The terrible bridge beast',location:'Lantern Bridge',bg:'bridge',cast:['pip','nell','brindle'],lines:[
L('Narrator','Lantern Bridge stretches over a green canal. Behind its barricade stands a very large troll, pouring tea into a very small cup.'),
L('Brindle','Afternoon. Mind the loose cobble. Would either of you like tea? It’s mint. The frightening steam is ordinary steam.','tea'),
L('Pip','I have come to… address your obstruction. On behalf of the town. Which includes you. I think.','heroic'),
L('Brindle','Good. I’ve been trying to address it for six weeks. The address is Lantern Bridge. The problem is the bridge.'),
L('Nell','Your sign says “UNSAFE. PLEASE READ THE SECOND WORD TOO.” Has that helped?','skeptical'),
L('Brindle','One gentleman thanked me for the please. The rest mostly argue about the first word.','explaining'),
L('Narrator','A parade dragon waits behind Pip, all painted scales and folded paper. Its driver practices one optimistic trumpet note. It comes out worried.'),
L('Pip','Everyone’s waiting. If the procession can’t cross, they’ll miss the lantern lighting.','worried'),
L('Brindle','I know. My little niece made a lantern shaped like a turnip. I’d like to see it. I’d also like her to remain above the water.'),
L('Nell','We have a ribbon, a spanner, and some time. Let’s spend the time first.')
],observations:[['The inspection sign','UNSAFE. PLEASE READ THE SECOND WORD TOO. Below it, in smaller writing: Tea is not conditional on agreeing with me.'],['The parade dragon','The mouth hinges open for sweets. The driver says it has never eaten a person. He seems proud of this.']],choices:[
F('C03_combat','Challenge him to honorable combat.','F03'),
C('C03_listen','Ask why the bridge is closed.','S04',{approach:'listen'},[L('Pip','Tell us from the beginning. The actual beginning, before anybody wrote an order.'),L('Brindle','A joint rotted. I asked for timber. Then I asked louder. The bridge doesn’t care how loudly I ask.','explaining'),L('Narrator','He opens his ledger. Every date has a careful tick. Every delivery box is empty.')]),
C('C03_inspect','Conduct an official inspection.','S04',{approach:'inspect'},[L('Pip','The transverse… bridgefulness appears insufficiently perpendicular.','heroic'),L('Nell','There’s a crack through that supporting joint. That part’s real.'),L('Brindle','Finally, an inspector with an inspector. Come round this side.','warm')])
]},
S04:{title:'The inspection',location:'Beneath the bridge deck',bg:'mechanism',cast:['pip','nell','brindle'],effects:{alderVisited:true},lines:[
L('Brindle',f=>f.approach==='listen'?'Thank you for asking. Nobody has let me finish the explanation before.':'You can put the ribbon away. The crack won’t feel underdressed.','explaining'),
L('Narrator','Up close, the bridge looks less like a single solid thing and more like a hundred small promises holding hands.'),
L('Brindle','The raising mechanism jammed after a visitor used the service gate. Before dawn. I thought he might have caught his cloak in it.'),
L('Pip','A blue cloak? Like this one?','worried'),
L('Brindle','Exactly like that one. Captain Alder. He asked about an old bell symbol, then went below alone. Said he’d come back before breakfast.'),
L('Pip','Did he look hurt?'),
L('Brindle','Worried. That’s different. He brought his own lantern. Checked the oil twice. People running away don’t usually ask about return routes.'),
L('Nell','So he meant to come back. And whatever he was looking for is under our feet.','worried'),
L('Brindle','First we keep everybody else’s feet safe. This pin should slide here. This joint should support that. Currently they’ve both resigned.'),
L('Pip','We can fix the bridge and find out where he went. We don’t have to choose which thing matters.','determined'),
L('Nell','That is the first official statement today I’d put my name under.')
],choices:[
F('C04_bounce','Bounce on the cracked plank to test it.','F04'),
C('C04_nell','Let Nell examine the mechanism.','S05',{},[L('Nell','Retaining pin: stuck. Joint: rotten. Whoever filed this under “cosmetic” has a very adventurous understanding of wood.','repairing'),L('Pip','I’m writing “rotten,” not “cosmetic.” Big letters.'),L('Brindle','An excellent inspection.')]),
C('C04_brindle','Ask Brindle to walk us through it.','S05',{},[L('Brindle','This joint carries the deck. That pin holds the lifting arm. Pull one without supporting the other and we’ll have a much shorter bridge.','explaining'),L('Pip','So we hold the weight before we free the pin?'),L('Brindle','Exactly. You’ve done this before?'),L('Pip','I’ve held a cupboard while Nell retrieved a dramatic entrance.')])
]},
S05:{title:'A plan with fewer swords',location:'The lifting mechanism',bg:'mechanism',cast:['pip','nell','brindle'],lines:[
L('Narrator','Nell unrolls her tools. Brindle uncovers spare rope and timber. For the first time today, the equipment outnumbers the speeches.'),
L('Pip','You already had all this? Why didn’t you fix it?'),
L('Brindle','Two hands. One deck to hold up. One joint to reach underneath. I’ve tried explaining this to my elbows. They remain unqualified.','explaining'),
L('Nell','We can mend the joint while Brindle supports the deck, then ease the pin free. Or we can brace it before we lower the bridge.','repairing'),
L('Pip','With that timber under the float?'),
L('Nell','The spare transport strut, yes. It detaches. The dragon keeps all four wheels and its deeply unsettling smile. Good spot.','warm'),
L('Pip','That was a real suggestion? I wasn’t accidentally saying bridge words?','determined'),
L('Brindle','A real suggestion. Strong enough for today, with a proper replacement scheduled before the next procession. Repairs need a next day, too.'),
L('Narrator','A red lever gleams beside a coil of festive ribbon. Someone has tied a little label to it. Pip’s hand drifts toward it.'),
L('Nell','Something small, carefully. That’s most repairs. The enormous gestures usually create the work.')
],observations:[['The lever label','CEREMONIAL BUNTING RELEASE. NOT CONNECTED TO ANY USEFUL MACHINERY. It is the most honestly labeled thing Quill owns.']],choices:[
F('C05_lever','Pull the enormous red lever.','F05'),
C('C05_mend','Free the pin and mend the joint.','S06',{repairStyle:'mend'},[L('Brindle','Weight secure. Nell, you’re clear. Pip, a gentle tap when she says.','supporting'),L('Nell','New wood seated. Joint fixed. Now.','repairing'),L('Narrator','Pip taps. The pin slides with a soft clink. An enormous bridge moves because somebody does a very small thing at the right moment.'),L('Pip','I thought fixing it would make a louder noise.','determined'),L('Nell','We prefer it when it doesn’t.')]),
C('C05_brace','Brace the joint before lowering the bridge.','S06',{repairStyle:'brace'},[L('Narrator','Pip carries the spare strut while Nell measures. Brindle holds the deck steady. The float remains on its four wheels, looking mildly offended.'),L('Nell','Brace seated. Rope secure. Lower it slowly.','repairing'),L('Brindle','And… holding. That’s a sensible piece of thinking, apprentice.','supporting'),L('Pip','Thank you. I’ll try to have another one.')])
]},
S06:{title:'The cost of pretending',location:'Under the blue cloak',bg:'mechanism',cast:['pip','nell','brindle'],lines:[
L('Narrator','Pip bends to collect a tool. The borrowed badge slips from the cloak. His application flutters down after it, landing face up beside Brindle’s boot.'),
L('Brindle','“Dramatic entrance experience.” That’s a category I haven’t seen on a maintenance application.','neutral'),
L('Pip',f=>f.entryStyle==='honest'?'I told Quill I was Pip. But I let them call me his apprentice. Alder never appointed me. I should have said it clearly.':'I said I was his apprentice. I’m not. Alder never appointed me. I put on his cloak and hoped nobody would ask.','embarrassed'),
L('Narrator','Without the heroic voice, Pip sounds his own size. The canal carries on moving. Neither of his friends moves away.'),
L('Pip','I thought I might become the sort of person he’d choose before anyone noticed I wasn’t that person yet.','worried'),
L('Brindle','I suspected. The real Alder asks before touching levers. Also, he’s never described a bridge as “extremely bridge-shaped.”'),
L('Nell','You could have asked me to come without any of this.','warm'),
L('Pip','Would you have?'),
L('Nell','Pip. I brought my entire tool bag. That isn’t something I do for the cloak.'),
L('Narrator','He picks up the application. One corner is oily. It looks a little less official and a little more like it has been somewhere.'),
L('Brindle','We still have the final check to do. There’s a place here for another pair of hands, if you want it.')
],choices:[
C('C06_admit','Admit I was afraid nobody would listen.','S07',{},[L('Pip','I was afraid nobody would listen to just me.'),L('Nell','I listened before the cloak.','warm'),L('Brindle','And I’m listening now. Finish the job with us.'),L('Narrator','Together they settle the last support. As the mechanism clears, a narrow stair and an old brass gate appear below the deck.')]),
C('C06_help','Ask whether helping still counts.','S07',{},[L('Pip','Does the helping still count, if I wasn’t who they thought?'),L('Brindle','The bridge won’t ask for your qualifications.'),L('Nell','I might ask about the balcony. Later.','warm'),L('Narrator','Together they settle the last support. As the mechanism clears, a narrow stair and an old brass gate appear below the deck.')])
]},
S07:{title:'The bell that isn’t there',location:'The old service gate',bg:'gate',cast:['pip','nell','brindle'],effects:{bellSeal:true},lines:[
L('Narrator','A field page is caught behind the lifting arm. On it, Alder has sketched three bells. The same emblem gleams in the gate below.'),
L('Pip','Those are his pencil marks. Look: he always draws a little arrow like a duck’s beak.'),
L('Nell','He marked this gate on purpose. Three cords: sunrise, midday sun, moon. And something carved beside them.','skeptical'),
L('Brindle','Wake the keeper; greet the day. Noon and night must wait their say. I used to know that rhyme. Haven’t opened this gate in years.','explaining'),
L('Narrator','Fresh scratches shine around the sunrise fitting. Somebody has brushed the dust away with a gloved hand.'),
L('Pip','An actual ancient test. I knew there would eventually be one.','heroic'),
L('Nell','It might be an operating instruction. Ancient people were allowed to have those.','skeptical'),
L('Brindle','Modern ones make them mysterious too. You should see my kettle warranty.'),
L('Pip','Right. Read what’s here before inventing anything. Heroic reading.','determined'),
L('Nell','Ordinary reading will do. “Greet the day.” We only need to wake the keeper, not the entire neighborhood.')
],observations:[['Read the carving','Wake the keeper; greet the day. Noon and night must wait their say. Fresh scratches surround the sunrise cord.']],choices:[
F('C07_all','Pull all three. Thoroughly.','F06'),
C('C07_sunrise','Pull the sunrise cord.','S08',{},[L('Narrator','A low click travels through the stone. The sunrise fitting turns, and the brass gate opens inward on surprisingly well-oiled hinges.'),L('Pip','He really came this way.'),L('Brindle','And wanted the way to work for whoever came next.')]),
F('C07_head','Use my head. Literally.','F07')
]},
S08:{title:'A message meant for someone else',location:'The service alcove',bg:'alcove',cast:['pip','nell','brindle'],effects:{alderNote:true},lines:[
L('Narrator','Beyond the gate is a small service alcove. A scarf rests on a dry stone. Chalk arrows lead toward a closed passage. Beside a bell-shaped seal lies a folded note.'),
L('Pip','His scarf. He must have taken it off to reach into the machinery. That corner always catches on things.'),
L('Nell','The note’s weighted down. He left it to be found.','neutral'),
L('Alder','The bridge was only the first missing payment. The old bell is ringing below town. If I am late, follow the repairs they say were never needed.'),
L('Alder','Trust the keeper. Keep this out of the official ledger. — A.'),
L('Pip','That’s his handwriting. Same little A he put on the tag when he fixed my sword. He didn’t just wander off.','worried'),
L('Nell','He didn’t run away. He followed something. And somebody didn’t want the repairs recorded properly.'),
L('Pip','Then we don’t get to run away either. If he’s down there, shouldn’t we keep going?','determined'),
L('Brindle','With a lantern, a plan, and someone above who knows where we went. Not through an unchecked passage in a borrowed cloak.','explaining'),
L('Narrator','Brindle closes the deeper door. Daylight still reaches their shoes. Above them, the parade dragon tries its trumpet again. Slightly more hopeful this time.'),
L('Pip','Waiting feels a lot like doing nothing.'),
L('Nell','We found his trail. We’re keeping it safe. And there’s still a bridge full of people waiting for us. That counts.','warm'),
L('Pip','Then we come back prepared. But this stays with us. No “filed and forgotten.”')
],observations:[['Alder’s full note','“The bridge was only the first missing payment. The old bell is ringing below town. If I am late, follow the repairs they say were never needed. Trust the keeper. Keep this out of the official ledger. — A.”']],choices:[
C('C08_copy','Keep the note; record the symbols.','S09',{},[L('Narrator','Pip copies each symbol carefully. Nell takes a rubbing of the seal. It takes longer than making a dramatic promise, and feels more useful.'),L('Nell','Two copies. One dry pocket. We are getting alarmingly organized.')]),
C('C08_trust','Ask Nell to keep the original safe.','S09',{},[L('Pip','Will you keep it? Your bag has actual fastenings. My cloak has ambitions.'),L('Nell','I will. But we follow it together.','warm'),L('Narrator','She slips the note inside the lining of her tool bag, beside the smallest and most reliable spanner.')])
]},
S09:{title:'The inaugural crossing',location:'Lantern Bridge · sunset',bg:'bridge',dusk:true,cast:['pip','nell','brindle','quill'],lines:[
L('Narrator','Back in the sunlight, Brindle checks every fastening. He presses the deck, tests the rail, and finally moves the barricade.'),
L('Brindle',f=>f.repairStyle==='mend'?'The new joint is seated. Pin moves freely. I’ll check it again tomorrow. Bridge open.':'The brace is secure. Deck is level. It stays under inspection until the permanent timber arrives. Bridge open.','explaining'),
L('Quill','Citizens! Our successful troll-removal initiative has restored dignified passage!','announcing'),
L('Brindle','The troll remains at his post.'),
L('Pip','And he’s the reason there’s still a bridge. He wasn’t stopping the celebration. He was stopping it falling in the canal.','determined'),
L('Quill','Yes. That aspect of the initiative. Precisely. I was coming to it.','defensive'),
L('Nell','You can just say thank you. Without a prepared statement.','skeptical'),
L('Quill','Without…? Very well. Thank you, Keeper Brindle.'),
L('Narrator','Brindle nods. It is a small nod, but it has six weeks of waiting behind it. The dragon driver lifts his trumpet. People gather at the crossing.'),
L('Pip','I imagined this part would involve standing on something very tall.'),
L('Nell','You are on a perfectly adequate bridge. Try enjoying it at its intended height.')
],choices:[
F('C09_fly','Demonstrate a flying victory pose.','F08'),
C('C09_brindle','Invite Brindle to lead the crossing.','S10',{},[L('Pip','Keeper first. Nobody knows this bridge better.'),L('Narrator','Brindle takes the first careful steps. The crowd follows, then the dragon. Someone lifts a turnip-shaped lantern. He smiles so broadly that Pip forgets about the speech.')]),
C('C09_nell','Walk across with Nell, at normal speed.','S10',{},[L('Narrator','Pip and Nell cross side by side. No leaps. No applause cue. Just the satisfying sound of feet on a bridge that holds.'),L('Nell','A flawless entrance. Almost suspiciously horizontal.','warm'),L('Pip','I’ve been practicing.')])
]},
S10:{title:'What do we tell them?',location:'The lantern lighting',bg:'town',dusk:true,cast:['pip','nell','quill'],lines:[
L('Narrator','Lanterns lift above the square. Quill approaches with his notebook open to a page already titled AN ENTIRELY ROUTINE AFTERNOON.'),
L('Quill','For the official record: what caused the delay? And did Captain Alder send any instructions? I’ll need exact wording.','anxious'),
L('Pip','There were repairs nobody delivered. There’s a gate. And… more than we expected.','worried'),
L('Nell','Quietly, Pip. Remember what the note said about the official ledger.'),
L('Narrator','Brindle watches from the bridge entrance. The crowd is close enough to hear if Pip raises his voice. He is not hiding behind the cloak now.'),
L('Pip','If we tell everyone, somebody might know what the bell means.'),
L('Nell','They might. Somebody else might hear that we found the note. If we keep it close, we can follow the trail carefully.'),
L('Pip','But the town deserves to know who kept the bridge safe.'),
L('Nell','We tell them that either way. You don’t have to accuse someone of things we don’t know. We have questions, not a culprit.','warm'),
L('Pip','There isn’t a completely unfrightening answer, is there?'),
L('Nell','I’ll stand next to you for either one.')
],choices:[
C('C10_truth','Tell the crowd about the ignored repairs and Alder’s clue.','ENDING',{publicTruth:true},[L('Pip','Everybody, please listen. The bridge keeper asked for repairs. They were approved, but the materials never came. Captain Alder was following the same trail.'),L('Narrator','The square grows quiet. This time Pip waits until he is sure they are listening.')]),
C('C10_private','Credit the bridge keeper. Keep the investigation between us.','ENDING',{publicTruth:false},[L('Pip','Keeper Brindle kept the bridge closed to keep us safe. Nell helped repair it. That belongs in the record.'),L('Narrator','Nell rests a hand against the pocket holding the note. The next part belongs to the three of them, for now.')])
]},
E_TRUTH:{title:'The town is listening',location:'Bellwether · lantern hour',bg:'town',dusk:true,cast:['pip','nell','brindle','quill'],ending:true,card:'BRIDGE OPEN. QUESTIONS OPEN, TOO.',lines:[
L('Pip','We don’t know what happened to Captain Alder. We know he came to the bridge, went below by choice, and wanted the missing repairs followed.','determined'),
L('Narrator','Questions rise from the crowd. Who approved the timber? Who received it? Can they see the records? None of these questions was printed on Quill’s program.'),
L('Quill','These matters require a properly organized review.','anxious'),
L('Brindle','I have six requests already organized. Shall I bring the kettle?'),
L('Nell','You wanted people to believe in you.','warm'),
L('Pip','I was imagining less paperwork. I practiced a speech about defeating darkness.'),
L('Nell','Save it. We may need decent lighting in the records room.'),
L('Narrator','Brindle kneels and pins a small brass badge to Pip’s tunic. It fits. Across the square, Quill watches a courier hurry out through the evening crowd.'),
L('Brindle','Apprentice. For the work you did, not the person you pretended to be.'),
L('Pip','Will there be more work?'),
L('Nell','There’s a bell ringing where there shouldn’t be a bell. I’d bring sandwiches.','warm'),
L('Narrator','Above the canal, the lanterns shine. Below Bellwether, something answers with a single quiet note.')
]},
E_PAPER:{title:'An unusually well-documented conspiracy',location:'Beside the open bridge',bg:'bridge',dusk:true,cast:['pip','nell','brindle'],ending:true,card:'APPRENTICE HERO. AMATEUR AUDITOR.',lines:[
L('Narrator','As the procession moves on, Nell spreads the copied approvals beside Alder’s note. Pip holds the corners against the evening breeze.'),
L('Nell','Here. The same bell stamp. Repairs approved for the abandoned bellhouse. No materials delivered. Just like the bridge.','skeptical'),
L('Pip','So asking for the file actually helped. I spent weeks practicing my sword salute.'),
L('Brindle','Did you practice holding a page flat?'),
L('Pip','Apparently I have a natural gift.'),
L('Narrator','Brindle pins a small brass apprentice badge to Pip’s tunic. There is no ceremony to hide behind. Just three people who know what it means.'),
L('Brindle','For careful work. And for asking a useful question when it would have been easier to make a speech.'),
L('Nell','We have a place to start. The bellhouse, the approvals, and a keeper who remembers what really happened.','warm'),
L('Pip','Our next enemy is a filing cabinet.'),
L('Nell','Finally. A fair fight.'),
L('Narrator','They fold the papers safely. Lantern Bridge stands open behind them. Beneath the abandoned bellhouse, a sound moves through the dark.')
]},
E_APPRENTICE:{title:'After the procession',location:'Lantern Bridge · after the crowd',bg:'bridge',dusk:true,cast:['pip','nell','brindle'],ending:true,card:'FIRST JOB DONE. REAL ADVENTURE PENDING.',lines:[
L('Narrator','After the last lantern crosses, Brindle calls Pip back. In his enormous palm rests a little brass badge. No borrowed name. Room on the back for Pip’s own.'),
L('Brindle','Apprentice. You’ve earned a beginning.','warm'),
L('Pip','An apprentice to what?'),
L('Brindle','Helping. Plenty left to learn.'),
L('Nell','I’m putting “asking before pulling levers” on the first lesson.','warm'),
L('Pip','Will there be an examination?'),
L('Brindle','There was a bridge.'),
L('Narrator','Pip looks at the crossing, then at the badge. Nell makes a practical list on the back of the application: lantern, rope, sandwiches.'),
L('Pip','Add “rescue Captain Alder.” At the top.','determined'),
L('Nell','We don’t know what he needs yet. And whatever it is, we’ll be better at it after sandwiches.'),
L('Narrator','She moves it down one line. Pip lets her. For a moment, the world is the right size.'),
L('Narrator','Then, beneath their feet, a bell rings. Brindle looks down. Nell closes the notebook. Pip holds his new badge.'),
L('Pip','Tomorrow, then. With a plan.')
]}
};
export const failures={
F01:{title:'A banner day for heroism.',scene:'S01',action:'Pip springs toward the balcony. The cloak catches a hook. One magnificent rotation later, Bellwether has a new municipal banner.',reaction:'Nell: “Should I put ‘available for hanging’ on the application?”',cue:'banner',cell:0},
F02:{title:'Application processed.',scene:'S02',action:'The self-inking stamp clamps onto the cloak. Pip pulls. A spring-loaded drawer opens and neatly files him beneath a snowdrift of forms.',reaction:'Quill: “At least someone is finally in the correct drawer.”',cue:'papers',cell:1},
F03:{title:'Defeated by a helpful adult.',scene:'S03',action:'Pip’s sword sticks in its homemade sheath. Brindle helpfully frees it. The recoil deposits Pip in an empty wheelbarrow.',reaction:'Brindle wheels him safely back. “Same tea? Or something stronger? I also have peppermint.”',cue:'wheelbarrow',cell:2},
F04:{title:'Load test: conclusive.',scene:'S04',action:'The cracked plank tips like a seesaw. Pip sails onto the padded parade float. Its trumpet produces one deeply disappointed note.',reaction:'Nell: “I’ll write ‘do not bounce’ in the report.”',cue:'seesaw',cell:3},
F05:{title:'A breakthrough in decorations.',scene:'S05',action:'Pip pulls the red lever. Ceremonial bunting unfurls, sweeps him into a spiral, and congratulates him from head to toe.',reaction:'Nell: “That one was labeled.”',cue:'bunting',cell:4},
F06:{title:'A clean sweep.',scene:'S07',action:'All three cords tug back. The gate stays shut. An ancient inspection shower awakens directly above the newest inspector.',reaction:'Nell silently offers a cloth. Brindle checks “shower still operational” in his ledger.',cue:'shower',cell:5},
F07:{title:'A different perspective.',scene:'S07',action:'Pip applies his forehead to the latch. His soft hood sticks. He turns, but the hood does not. The world becomes blue.',reaction:'Brindle gently turns him around. “We usually use the cords.”',cue:'hood',cell:6},
F08:{title:'A moving speech.',scene:'S09',action:'Imagine a flying victory pose. Now imagine the cloak becoming a sail. Pip lands in the parade dragon’s papier-mâché mouth. It politely spits out one boot.',reaction:'Nell: “Let’s keep that one hypothetical. The bridge is already fixed.”',cue:'dragon',cell:7}
};
export const sceneOrder=['S00','S01','S02','S03','S04','S05','S06','S07','S08','S09','S10','E_TRUTH','E_PAPER','E_APPRENTICE'];
