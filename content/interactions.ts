import type { Chapter, Interaction } from "./types";

type ChapterInteractionMap = Record<string, Record<number, Interaction>>;

function h(
  id: string,
  prompt: string,
  markers: Array<{ id: string; x: number; y: number; label: string; reveal: string }>,
  completeText: string,
): Interaction {
  return { id, kind: "hotspots", prompt, markers, completeText };
}

function c(
  id: string,
  prompt: string,
  options: Array<{ id: string; label: string; feedback: string; correct?: boolean }>,
  completeText: string,
): Interaction {
  return { id, kind: "choice", prompt, options, completeText };
}

function s(
  id: string,
  prompt: string,
  items: Array<{ id: string; label: string }>,
  correctOrder: string[],
  completeText: string,
): Interaction {
  return { id, kind: "sequence", prompt, items, correctOrder, completeText };
}

export const chapterInteractions = {
  "who-is-allah": {
    5: h("creation-signs", "Tap three signs that point back to the One who made them.", [
      { id: "stars", x: 27, y: 23, label: "Stars", reveal: "The stars are signs, not gods; Allah made their light." },
      { id: "sea", x: 58, y: 47, label: "Sea", reveal: "The sea is vast, yet it obeys the limits Allah gives it." },
      { id: "life", x: 78, y: 34, label: "Life", reveal: "Every living thing is a gift from Allah, the Creator." },
    ], "Creation becomes a quiet lesson when you know who made it."),
    12: c("not-like-creation", "What does it mean that Allah is not like creation?", [
      { id: "body", label: "He has a body like ours.", feedback: "Allah is not a created body, shape, or thing.", correct: false },
      { id: "nothing-like", label: "Nothing is like Him.", feedback: "Yes. Allah is real, near, and unlike anything He made.", correct: true },
      { id: "hidden-star", label: "He is only a hidden star.", feedback: "Stars are created things. Allah made every star.", correct: false },
    ], "You kept the most important boundary clear."),
    25: h("rain-wakes-earth", "Tap what changes when Allah sends rain.", [
      { id: "rain", x: 48, y: 20, label: "Rain", reveal: "Rain is rizq: provision Allah sends from above." },
      { id: "dry-earth", x: 33, y: 55, label: "Earth", reveal: "Dry earth can look finished, but Allah can wake it again." },
      { id: "green-life", x: 66, y: 49, label: "Green life", reveal: "New shoots remind us that Allah brings life from what seems still." },
    ], "Rain turns the page from empty to alive."),
    30: s("gift-to-giver", "Put the lesson of the signs in order.", [
      { id: "gift", label: "A gift appears" },
      { id: "notice", label: "We notice it" },
      { id: "giver", label: "It points to the Giver" },
      { id: "thanks", label: "We thank Allah" },
    ], ["gift", "notice", "giver", "thanks"], "That is the path from wonder to gratitude."),
    36: c("forgiveness-response", "When someone does wrong and feels sorry, what does Allah love?", [
      { id: "hide", label: "Hide forever.", feedback: "Hiding keeps the heart heavy. Allah invites us back.", correct: false },
      { id: "return", label: "Return and ask.", feedback: "Yes. Allah loves to forgive the one who turns back.", correct: true },
      { id: "pretend", label: "Pretend nothing happened.", feedback: "A truthful heart does not need pretending.", correct: false },
    ], "Mercy is not far away."),
    37: h("provider-gifts", "Tap gifts that teach Allah is the Provider.", [
      { id: "dates", x: 35, y: 43, label: "Dates", reveal: "Food reaches us because Allah provides through the earth and people." },
      { id: "bread", x: 61, y: 50, label: "Bread", reveal: "A simple meal can carry a big lesson of gratitude." },
      { id: "warm-light", x: 48, y: 28, label: "Warmth", reveal: "Home, warmth, and safety are also provisions from Allah." },
    ], "Provision is not only food; it is care."),
    46: c("near-and-listening", "What should you remember when you call on Allah?", [
      { id: "too-busy", label: "He is too busy.", feedback: "Allah never grows tired and is never too busy.", correct: false },
      { id: "near", label: "He is near.", feedback: "Yes. Allah hears even a whisper inside the heart.", correct: true },
      { id: "only-special", label: "Only special places count.", feedback: "You can call on Allah anywhere.", correct: false },
    ], "Dua can begin anywhere."),
    56: s("prophets-same-truth", "Order the way Allah guides people in this book.", [
      { id: "allah", label: "Allah made people" },
      { id: "prophets", label: "He sent prophets" },
      { id: "truth", label: "They taught one truth" },
      { id: "reader", label: "We learn it today" },
    ], ["allah", "prophets", "truth", "reader"], "Every story is part of one bright message."),
  },

  "what-is-the-quran": {
    3: c("allahs-words", "Why is the Qur'an different from an ordinary book?", [
      { id: "people-made", label: "People invented it.", feedback: "Muslims believe the Qur'an is Allah's words, not invented by people.", correct: false },
      { id: "allah-words", label: "It is Allah's words.", feedback: "Yes. That is why Muslims treat it with love and care.", correct: true },
      { id: "shelf-book", label: "It is only decoration.", feedback: "The Qur'an is recited, learned, remembered, and lived.", correct: false },
    ], "The Qur'an is a guide, not just a book on a shelf."),
    17: s("revelation-arrives", "Put the first revelation story in order.", [
      { id: "hira", label: "Muhammad sits in Hira" },
      { id: "gabriel", label: "Gabriel brings words" },
      { id: "read", label: "The command is Read" },
      { id: "years", label: "Revelation continues" },
    ], ["hira", "gabriel", "read", "years"], "The Qur'an came with care, over time."),
    20: h("made-to-be-heard", "Tap the parts of the Qur'an's sound-life.", [
      { id: "book", x: 50, y: 40, label: "Book", reveal: "The Qur'an is kept in pages, but it is meant to be recited." },
      { id: "voice", x: 61, y: 25, label: "Voice", reveal: "Recitation lets the words be heard by the heart." },
      { id: "light", x: 40, y: 25, label: "Light", reveal: "Its meaning guides like a light in a dark room." },
    ], "The Qur'an lives in reading, listening, and remembering."),
    30: h("kept-two-ways", "Tap the two ways the Qur'an was kept safe.", [
      { id: "pen", x: 38, y: 44, label: "Written", reveal: "Careful writing helped preserve the words." },
      { id: "heart", x: 59, y: 36, label: "Heart", reveal: "Memorizing by heart made the Qur'an travel inside people." },
      { id: "lamp", x: 76, y: 28, label: "Care", reveal: "The words were guarded with reverence from the beginning." },
    ], "Written lines and living hearts worked together."),
    45: c("quran-respect", "Why do Muslims treat the Qur'an with care?", [
      { id: "rare-paper", label: "Because paper is rare.", feedback: "The paper matters less than whose words it carries.", correct: false },
      { id: "allah-words", label: "Because it is Allah's words.", feedback: "Yes. Love for Allah makes the reader careful.", correct: true },
      { id: "for-display", label: "Because it is for display.", feedback: "The Qur'an is loved most by being read and lived.", correct: false },
    ], "Respect grows from knowing what the Qur'an is."),
    48: h("learning-circle", "Tap how children slowly learn the Qur'an.", [
      { id: "teacher", x: 29, y: 38, label: "Teacher", reveal: "A trusted teacher helps the words be learned correctly." },
      { id: "pages", x: 50, y: 54, label: "Pages", reveal: "A few ayahs at a time can become a lifetime of guidance." },
      { id: "home", x: 72, y: 35, label: "Home", reveal: "The Qur'an is often learned beside someone who loves you." },
    ], "Small lessons can grow into a whole book carried by heart."),
    51: c("begin-with-meaning", "If you do not know Arabic yet, where can you begin?", [
      { id: "wait", label: "Wait until you know everything.", feedback: "You can begin before you know everything.", correct: false },
      { id: "meaning", label: "Begin with meaning and stories.", feedback: "Yes. Understanding can start gently, step by step.", correct: true },
      { id: "ignore", label: "Ignore the Qur'an.", feedback: "The stories are an open door, not a closed one.", correct: false },
    ], "A first step still counts."),
  },

  "prophet-muhammad": {
    9: c("what-is-prophet", "Which sentence describes a prophet?", [
      { id: "god", label: "A prophet is a god.", feedback: "A prophet is human, not God.", correct: false },
      { id: "human-message", label: "A human with God's message.", feedback: "Yes. A prophet lives as a human and carries God's words.", correct: true },
      { id: "king-only", label: "Only a powerful king.", feedback: "Some prophets were kings, but many were not.", correct: false },
    ], "That keeps love for prophets in the right place."),
    16: h("mecca-world", "Tap three parts of Muhammad's early world.", [
      { id: "kaaba", x: 50, y: 45, label: "Kaaba", reveal: "The Kaaba stood at the center of Mecca." },
      { id: "hills", x: 73, y: 28, label: "Hills", reveal: "Mecca sat in a dry valley between bare hills." },
      { id: "traders", x: 27, y: 55, label: "Traders", reveal: "Travelers and traders passed through the town." },
    ], "The message began in a real place."),
    31: c("al-amin-meaning", "What did Al-Amin mean in daily life?", [
      { id: "loudest", label: "The loudest one.", feedback: "Trust was not about being loud.", correct: false },
      { id: "trustworthy", label: "The trustworthy one.", feedback: "Yes. People trusted Muhammad because he was honest.", correct: true },
      { id: "richest", label: "The richest one.", feedback: "His honor was honesty, not wealth.", correct: false },
    ], "Trust is a beautiful kind of strength."),
    38: h("cloak-peacemaking", "Tap the pieces of Muhammad's peaceful solution.", [
      { id: "cloak", x: 48, y: 55, label: "Cloak", reveal: "The cloak let everyone share the honor." },
      { id: "stone", x: 51, y: 43, label: "Stone", reveal: "The Black Stone was lifted without one tribe taking all the pride." },
      { id: "hands", x: 28, y: 47, label: "Hands", reveal: "Many leaders carried together, so anger cooled." },
    ], "A wise answer made room for everyone."),
    49: h("hira-first-words", "Tap what is happening in the cave.", [
      { id: "light", x: 55, y: 24, label: "Light", reveal: "Gabriel is shown with light, bringing Allah's words." },
      { id: "cave", x: 32, y: 46, label: "Cave", reveal: "This is Hira, the quiet place where revelation began." },
      { id: "muhammad", x: 50, y: 62, label: "Muhammad", reveal: "Muhammad is shown respectfully without a face." },
    ], "The first words arrived in awe and mercy."),
    66: c("tawhid-message", "What was the first message Muhammad taught?", [
      { id: "many-gods", label: "Pray to many gods.", feedback: "That was exactly what he came to correct.", correct: false },
      { id: "one-god", label: "Worship Allah alone.", feedback: "Yes. This is tawhid: Allah is one.", correct: true },
      { id: "tribe-pride", label: "Your tribe is greatest.", feedback: "He taught goodness, not tribe pride.", correct: false },
    ], "The message was simple and world-changing."),
    69: h("mercy-in-action", "Tap three people or needs Muhammad taught us to care for.", [
      { id: "food", x: 43, y: 46, label: "Food", reveal: "Feeding others is mercy you can hold in your hands." },
      { id: "poor", x: 64, y: 52, label: "Poor", reveal: "The poor and traveler were not to be forgotten." },
      { id: "hands", x: 33, y: 57, label: "Hands", reveal: "Helping hands turn belief into action." },
    ], "Mercy becomes real when it helps someone."),
    93: s("muhammad-life-arc", "Put Muhammad's story arc in order.", [
      { id: "trust", label: "Known as trustworthy" },
      { id: "hira", label: "Receives words in Hira" },
      { id: "message", label: "Teaches one God" },
      { id: "medina", label: "Builds community in Medina" },
      { id: "mercy", label: "Shows mercy to the worlds" },
    ], ["trust", "hira", "message", "medina", "mercy"], "You followed the path from honesty to mercy."),
  },

  adam: {
    3: h("clay-and-life", "Tap what Adam's creation teaches.", [
      { id: "clay", x: 50, y: 54, label: "Clay", reveal: "Adam began from earth, shaped by Allah's care." },
      { id: "light", x: 50, y: 25, label: "Life", reveal: "Life and soul are gifts from Allah." },
      { id: "earth", x: 28, y: 63, label: "Earth", reveal: "The first human connects every family back to one beginning." },
    ], "Human life is honored from its first moment."),
    16: c("pride-or-humility", "What made Satan's heart cold?", [
      { id: "asking", label: "Asking questions.", feedback: "Good questions can lead to truth.", correct: false },
      { id: "pride", label: "Pride.", feedback: "Yes. Pride made him think he was too great to obey.", correct: true },
      { id: "being-small", label: "Being small.", feedback: "Smallness is not the problem. Pride is.", correct: false },
    ], "Pride pushes the heart away from mercy."),
    23: h("garden-test", "Tap the gifts and the one boundary in the Garden.", [
      { id: "fruit", x: 36, y: 38, label: "Fruit", reveal: "The Garden was full of gifts Adam and Eve could enjoy." },
      { id: "stream", x: 63, y: 57, label: "Streams", reveal: "Allah surrounded them with beauty and peace." },
      { id: "tree", x: 52, y: 30, label: "One tree", reveal: "One tree was a gentle test of trust." },
    ], "Love can be shown by keeping one promise."),
    30: c("after-mistake", "What did Adam and Eve do after their mistake?", [
      { id: "blame", label: "Blame someone else.", feedback: "They did not hide behind blame.", correct: false },
      { id: "turn-back", label: "Turned back to Allah.", feedback: "Yes. They asked Allah for mercy with humble hearts.", correct: true },
      { id: "run-away", label: "Ran away forever.", feedback: "Running away keeps the wound open.", correct: false },
    ], "Tawbah begins by turning back."),
    39: s("adam-story-order", "Put Adam's story in order.", [
      { id: "created", label: "Adam is created" },
      { id: "names", label: "He learns names" },
      { id: "garden", label: "He enters the Garden" },
      { id: "mistake", label: "He makes a mistake" },
      { id: "tawbah", label: "He asks forgiveness" },
    ], ["created", "names", "garden", "mistake", "tawbah"], "The story moves from honor to mercy."),
    41: c("run-to-allah", "When you slip, where does Adam teach you to run?", [
      { id: "away", label: "Away from Allah.", feedback: "That only makes the heart lonelier.", correct: false },
      { id: "to-allah", label: "To Allah.", feedback: "Yes. His mercy is the safest place to go.", correct: true },
    ], "A mistake is not the end of the story."),
  },

  noah: {
    11: c("patience-meaning", "What did Noah's patience look like?", [
      { id: "quit", label: "He quit quickly.", feedback: "Noah kept calling with hope.", correct: false },
      { id: "gentle", label: "He stayed gentle.", feedback: "Yes. Sabr means holding on to good without becoming cruel.", correct: true },
      { id: "mocked-back", label: "He mocked them back.", feedback: "He answered mockery with patience.", correct: false },
    ], "Patience can be strong and soft at the same time."),
    17: h("ark-building", "Tap what Noah kept doing while others laughed.", [
      { id: "wood", x: 42, y: 52, label: "Wood", reveal: "Every plank was an act of trust." },
      { id: "work", x: 63, y: 46, label: "Work", reveal: "Faith can look like steady work, day after day." },
      { id: "distance", x: 75, y: 34, label: "Mockers", reveal: "Noah did not let laughter stop obedience." },
    ], "The ark was built with patience before the rain ever came."),
    18: c("trust-when-strange", "Why did building a ship on dry land make sense?", [
      { id: "popular", label: "Everyone liked the plan.", feedback: "Most people laughed at it.", correct: false },
      { id: "allah-commanded", label: "Allah commanded it.", feedback: "Yes. Allah's command was safer than people's laughter.", correct: true },
      { id: "guess", label: "Noah guessed wildly.", feedback: "Noah was following revelation, not guessing.", correct: false },
    ], "Trust listens higher than the crowd."),
    20: h("two-by-two", "Tap who came into the ark.", [
      { id: "animals", x: 49, y: 45, label: "Animals", reveal: "Allah gathered the creatures in pairs." },
      { id: "ark", x: 67, y: 58, label: "Ark", reveal: "The ark became safety because Allah made it safety." },
      { id: "believers", x: 32, y: 54, label: "Believers", reveal: "Those who trusted Allah climbed aboard together." },
    ], "The rescue gathered people and creatures under Allah's care."),
    29: c("ark-safety", "What truly carried the ark through the flood?", [
      { id: "wood-alone", label: "Wood by itself.", feedback: "The wood mattered, but Allah was the true Protector.", correct: false },
      { id: "allah-with", label: "Allah was with them.", feedback: "Yes. That is why Noah was not afraid.", correct: true },
    ], "Safety comes from Allah."),
    33: s("flood-to-new-world", "Put the flood story in order.", [
      { id: "call", label: "Noah calls his people" },
      { id: "build", label: "He builds the ark" },
      { id: "board", label: "Believers board" },
      { id: "flood", label: "The flood rises" },
      { id: "rest", label: "The ark rests" },
    ], ["call", "build", "board", "flood", "rest"], "You steered the story safely to dry land."),
  },

  abraham: {
    5: c("idols-cannot-help", "Why did Abraham doubt the idols?", [
      { id: "stone", label: "They were only stone.", feedback: "Yes. They could not hear, see, create, or help.", correct: true },
      { id: "too-small", label: "They were too small.", feedback: "Size was not the problem. Being powerless was.", correct: false },
      { id: "too-old", label: "They were too old.", feedback: "Age did not make them gods.", correct: false },
    ], "A made thing cannot be the Maker."),
    11: h("sky-signs", "Tap what Abraham learned from the sky.", [
      { id: "stars", x: 33, y: 25, label: "Stars", reveal: "The stars were beautiful, but they faded." },
      { id: "moon", x: 62, y: 30, label: "Moon", reveal: "The moon was greater, but it also set." },
      { id: "horizon", x: 51, y: 58, label: "Horizon", reveal: "The Creator of the sky never sets." },
    ], "The signs led Abraham beyond the signs."),
    17: h("broken-idols", "Tap Abraham's lesson to his people.", [
      { id: "broken", x: 38, y: 55, label: "Broken", reveal: "The broken idols showed they had no power." },
      { id: "big-idol", x: 58, y: 38, label: "Big idol", reveal: "The largest idol could not answer a single question." },
      { id: "axe", x: 64, y: 53, label: "Axe", reveal: "Abraham used the moment to wake up their thinking." },
    ], "He wanted them to think, not just follow."),
    25: c("fire-courage", "What made Abraham brave in front of the fire?", [
      { id: "fire-small", label: "The fire was tiny.", feedback: "The fire was terrifyingly large.", correct: false },
      { id: "trust-allah", label: "He trusted Allah.", feedback: "Yes. Trust made him steady when danger was real.", correct: true },
      { id: "crowd-helped", label: "The crowd helped him.", feedback: "The crowd opposed him, but Allah protected him.", correct: false },
    ], "Courage is trust when the heat is real."),
    26: h("cool-fire", "Tap how Allah changed danger into peace.", [
      { id: "flames", x: 33, y: 38, label: "Flames", reveal: "The fire was real, but it obeyed Allah." },
      { id: "garden", x: 54, y: 56, label: "Garden", reveal: "Allah made coolness and safety in the very center of danger." },
      { id: "peace", x: 67, y: 38, label: "Peace", reveal: "A miracle can turn fear into calm." },
    ], "Even fire is a servant of Allah."),
    33: h("building-kaaba", "Tap what Abraham and Ishmael built together.", [
      { id: "stones", x: 42, y: 58, label: "Stones", reveal: "Stone by stone, they built for worship." },
      { id: "kaaba", x: 52, y: 42, label: "Kaaba", reveal: "The Kaaba was raised for Allah alone." },
      { id: "prayer", x: 68, y: 52, label: "Prayer", reveal: "Their work was joined with dua." },
    ], "The strongest buildings are raised with prayer."),
    43: s("abraham-truth-path", "Put Abraham's path in order.", [
      { id: "questions", label: "He asks who made the world" },
      { id: "rejects", label: "He rejects idols" },
      { id: "fire", label: "Allah saves him from fire" },
      { id: "valley", label: "He travels to the valley" },
      { id: "kaaba", label: "He builds the Kaaba" },
    ], ["questions", "rejects", "fire", "valley", "kaaba"], "Abraham's questions became a life of worship."),
  },

  moses: {
    6: h("river-trust", "Tap the path Allah opened for baby Moses.", [
      { id: "basket", x: 47, y: 50, label: "Basket", reveal: "The basket carried a baby his mother loved deeply." },
      { id: "river", x: 58, y: 62, label: "River", reveal: "The river became a road by Allah's plan." },
      { id: "bank", x: 72, y: 43, label: "Bank", reveal: "Allah promised the river would bring him where he needed to go." },
    ], "Trust sometimes means placing what you love in Allah's care."),
    7: c("letting-go", "What did Moses' mother show when she let the basket go?", [
      { id: "forgetting", label: "Forgetting him.", feedback: "She did not forget him. She loved him and trusted Allah.", correct: false },
      { id: "trust", label: "Trust in Allah.", feedback: "Yes. Trust can be the hardest kind of love.", correct: true },
      { id: "giving-up", label: "Giving up hope.", feedback: "She let go with hope in Allah's promise.", correct: false },
    ], "Her hands let go, but her hope held on."),
    18: h("moses-signs", "Tap the signs Allah gave Moses.", [
      { id: "staff", x: 45, y: 58, label: "Staff", reveal: "The staff became a sign by Allah's command." },
      { id: "light", x: 63, y: 34, label: "Light", reveal: "The shining hand was another proof from Allah." },
      { id: "proof", x: 52, y: 42, label: "Proofs", reveal: "Signs were not magic tricks; they were truth made visible." },
    ], "The signs pointed beyond Moses to Allah."),
    19: c("hard-heart", "Why did Pharaoh refuse even after seeing signs?", [
      { id: "no-signs", label: "There were no signs.", feedback: "The signs were right in front of him.", correct: false },
      { id: "choice", label: "His heart chose pride.", feedback: "Yes. Seeing is not enough if the heart refuses truth.", correct: true },
      { id: "too-kind", label: "He was too kind.", feedback: "Pharaoh was cruel and proud.", correct: false },
    ], "A soft heart matters more than a full argument."),
    26: c("sea-trust", "What did Moses say when danger was in front and behind?", [
      { id: "finished", label: "We are finished.", feedback: "The people were afraid, but Moses trusted Allah.", correct: false },
      { id: "lord-with", label: "My Lord is with me.", feedback: "Yes. Trust spoke before the road appeared.", correct: true },
      { id: "go-back", label: "Go back to Pharaoh.", feedback: "Allah opened a way forward.", correct: false },
    ], "Trust can speak before the sea opens."),
    29: h("parted-sea", "Tap the miracle at the sea.", [
      { id: "staff", x: 38, y: 57, label: "Staff", reveal: "Moses struck the sea only by Allah's command." },
      { id: "water", x: 32, y: 34, label: "Water walls", reveal: "The water stood like mountains." },
      { id: "path", x: 53, y: 62, label: "Dry path", reveal: "Allah made a road where there was none." },
    ], "The danger became a doorway."),
    37: s("moses-doors", "Put Moses' rescue signs in order.", [
      { id: "river", label: "River carries baby Moses" },
      { id: "fire", label: "Fire holds Allah's call" },
      { id: "signs", label: "Signs warn Pharaoh" },
      { id: "escape", label: "People escape at night" },
      { id: "sea", label: "Sea opens as a road" },
    ], ["river", "fire", "signs", "escape", "sea"], "River, fire, and sea became doors by Allah's plan."),
  },

  jonah: {
    3: c("too-soon", "What was Jonah's mistake at the beginning?", [
      { id: "asking", label: "He asked Allah for help.", feedback: "Asking Allah is good.", correct: false },
      { id: "left-too-soon", label: "He left too soon.", feedback: "Yes. He walked away before Allah told him to go.", correct: true },
      { id: "warned", label: "He warned his people.", feedback: "Warning them was part of his prophetic work.", correct: false },
    ], "Patience means waiting for Allah's timing."),
    6: h("storm-rises", "Tap the storm Jonah entered.", [
      { id: "clouds", x: 48, y: 24, label: "Clouds", reveal: "The sky darkened as the story turned." },
      { id: "waves", x: 52, y: 58, label: "Waves", reveal: "The sea became wild and frightening." },
      { id: "ship", x: 38, y: 46, label: "Ship", reveal: "The sailors knew they were in danger." },
    ], "Running away did not bring Jonah peace."),
    11: h("darkness-inside", "Tap the layers of darkness around Jonah.", [
      { id: "whale", x: 50, y: 45, label: "Whale", reveal: "The whale became a hidden place for Jonah's turning back." },
      { id: "sea", x: 31, y: 59, label: "Sea", reveal: "He was deep under the water." },
      { id: "night", x: 59, y: 26, label: "Darkness", reveal: "No darkness is too deep for Allah to hear." },
    ], "Even there, Jonah was not beyond mercy."),
    13: c("darkest-prayer", "What did Jonah do in the deepest dark?", [
      { id: "despair", label: "He gave up.", feedback: "He was afraid, but he did not give up.", correct: false },
      { id: "dua", label: "He made dua.", feedback: "Yes. He turned to Allah from the bottom of his heart.", correct: true },
      { id: "blame", label: "He blamed the sailors.", feedback: "He admitted his own wrong.", correct: false },
    ], "Dua works in places no one else can reach."),
    20: s("storm-to-shore", "Put Jonah's rescue in order.", [
      { id: "ship", label: "Jonah boards the ship" },
      { id: "storm", label: "A storm rises" },
      { id: "whale", label: "The whale swallows him" },
      { id: "dua", label: "He makes dua" },
      { id: "shore", label: "He reaches the shore" },
    ], ["ship", "storm", "whale", "dua", "shore"], "The way out began with turning back."),
    21: h("mercy-upon-mercy", "Tap the mercies Allah gave Jonah.", [
      { id: "shore", x: 37, y: 59, label: "Shore", reveal: "Allah brought Jonah out of the sea alive." },
      { id: "vine", x: 57, y: 35, label: "Shade", reveal: "The leafy plant sheltered him while he healed." },
      { id: "sun", x: 68, y: 22, label: "Morning", reveal: "Warm light came after darkness." },
    ], "Allah's mercy did not stop at rescue; it kept caring."),
    23: c("mercy-reaches", "Who can Allah's mercy reach?", [
      { id: "near-only", label: "Only people nearby.", feedback: "Distance does not limit Allah.", correct: false },
      { id: "anyone", label: "Anyone who turns back.", feedback: "Yes. Mercy reached Jonah and his whole town.", correct: true },
      { id: "perfect-only", label: "Only perfect people.", feedback: "Mercy is for those who need Allah.", correct: false },
    ], "No one is too far to turn back."),
  },

  mary: {
    5: h("rizq-in-temple", "Tap the provision Allah gave Mary.", [
      { id: "fruit", x: 49, y: 55, label: "Fruit", reveal: "Fresh fruit came to Mary as rizq from Allah." },
      { id: "light", x: 58, y: 28, label: "Light", reveal: "The light reminds us that provision can arrive unexpectedly." },
      { id: "room", x: 30, y: 43, label: "Prayer place", reveal: "Mary's worship and trust filled this quiet place." },
    ], "Allah can provide without any visible hand."),
    10: c("mary-trust", "What did Mary do when she could not see the whole plan?", [
      { id: "trusted", label: "She trusted Allah.", feedback: "Yes. Trust can be brave and quiet.", correct: true },
      { id: "understood-all", label: "She understood everything.", feedback: "She trusted even without seeing everything.", correct: false },
      { id: "ran-from-allah", label: "She ran from Allah.", feedback: "Mary stayed close to Allah.", correct: false },
    ], "Trust does not require seeing the whole road."),
    14: h("palm-and-stream", "Tap how Allah comforted Mary.", [
      { id: "stream", x: 45, y: 63, label: "Stream", reveal: "Cool water came beneath her when she needed relief." },
      { id: "dates", x: 58, y: 33, label: "Dates", reveal: "Ripe dates fell from the palm by Allah's mercy." },
      { id: "palm", x: 50, y: 42, label: "Palm", reveal: "The tree became a place of shelter and provision." },
    ], "Comfort came in exactly the form she needed."),
    22: s("mary-story-path", "Put Mary's story in order.", [
      { id: "worship", label: "Mary worships Allah" },
      { id: "angel", label: "An angel brings news" },
      { id: "palm", label: "Allah gives dates and water" },
      { id: "cradle", label: "Jesus speaks from the cradle" },
      { id: "lesson", label: "Mary teaches trust" },
    ], ["worship", "angel", "palm", "cradle", "lesson"], "Mary's path is full of trust and provision."),
    23: c("trust-without-seeing", "What is trust in Mary's story?", [
      { id: "know-everything", label: "Knowing every detail.", feedback: "Mary did not know every detail.", correct: false },
      { id: "know-allah-good", label: "Knowing Allah's plan is good.", feedback: "Yes. That is trust when the future is hidden.", correct: true },
      { id: "never-afraid", label: "Never feeling afraid.", feedback: "Trust can live in a heart that feels afraid.", correct: false },
    ], "A trusting heart can still feel deeply."),
    24: c("comfort-in-pain", "What should Mary help us remember when pain is real?", [
      { id: "forgotten", label: "Allah forgot her.", feedback: "Allah had not forgotten her at all.", correct: false },
      { id: "comfort-time", label: "Allah's comfort comes on time.", feedback: "Yes. He knew exactly when and how to comfort her.", correct: true },
      { id: "pain-fake", label: "Her pain was not real.", feedback: "Her pain was real, and Allah cared for her in it.", correct: false },
    ], "Real pain can still be held by mercy."),
  },

  solomon: {
    2: h("solomon-gift", "Tap the gift Allah gave Solomon.", [
      { id: "birds", x: 58, y: 24, label: "Birds", reveal: "Solomon could understand the speech of birds." },
      { id: "king", x: 48, y: 52, label: "King", reveal: "He had power, but he stayed Allah's servant." },
      { id: "meadow", x: 42, y: 67, label: "Creation", reveal: "His gift helped him notice even small creatures." },
    ], "A gift becomes beautiful when it makes the heart grateful."),
    8: c("source-of-strength", "Why did Solomon stay humble with so much power?", [
      { id: "his-alone", label: "He thought it was his alone.", feedback: "That would have made pride grow.", correct: false },
      { id: "from-allah", label: "He knew it came from Allah.", feedback: "Yes. Knowing the source kept his heart soft.", correct: true },
      { id: "no-power", label: "He had no power.", feedback: "He had great power, but used it with humility.", correct: false },
    ], "Remembering the Giver protects the gift."),
    12: h("ant-warning", "Tap the tiny moment Solomon noticed.", [
      { id: "ant", x: 51, y: 57, label: "Ant", reveal: "A tiny ant cared enough to warn her people." },
      { id: "homes", x: 39, y: 67, label: "Homes", reveal: "The ants had little dwellings worth protecting." },
      { id: "army", x: 66, y: 38, label: "Army", reveal: "A mighty army paused for a tiny creature." },
    ], "Greatness can hear what is small."),
    17: h("every-gift", "Tap gifts Solomon thanked Allah for.", [
      { id: "birds", x: 47, y: 24, label: "Birds", reveal: "Even understanding birds was a favor from Allah." },
      { id: "tree", x: 57, y: 44, label: "Shade", reveal: "Small comforts are gifts too." },
      { id: "kingdom", x: 35, y: 58, label: "Kingdom", reveal: "Power is a trust to use with justice." },
    ], "Every gift, large or tiny, can become gratitude."),
    20: c("wisdom-use", "What is wisdom for?", [
      { id: "pride", label: "To feel proud.", feedback: "Wisdom with pride stops being wise.", correct: false },
      { id: "kindness", label: "To be kind and fair.", feedback: "Yes. Wisdom should protect and serve.", correct: true },
      { id: "show-off", label: "To show off.", feedback: "Solomon's wisdom led him to gratitude.", correct: false },
    ], "Wisdom shines when it serves."),
    21: s("ant-valley-order", "Put the Valley of the Ants story in order.", [
      { id: "march", label: "The army marches" },
      { id: "ant", label: "An ant warns her people" },
      { id: "hears", label: "Solomon hears her" },
      { id: "smiles", label: "He smiles and stops" },
      { id: "thanks", label: "He thanks Allah" },
    ], ["march", "ant", "hears", "smiles", "thanks"], "Power listened, paused, and became gratitude."),
  },

  "why-pray": {
    2: h("five-times-rhythm", "Tap the rhythm of the five quiet meetings.", [
      { id: "morning", x: 29, y: 31, label: "Morning", reveal: "Fajr begins the day by remembering Allah." },
      { id: "midday", x: 52, y: 25, label: "Midday", reveal: "Prayer interrupts busyness with remembrance." },
      { id: "night", x: 72, y: 40, label: "Night", reveal: "The day closes by returning to Allah." },
    ], "Salah gives the day a steady heartbeat."),
    4: c("prayer-as-gift", "What is Salah in this chapter?", [
      { id: "burden", label: "Only a burden.", feedback: "The chapter calls it a gift, not just a duty.", correct: false },
      { id: "meeting", label: "A quiet meeting with Allah.", feedback: "Yes. Salah is a loving pause with the One who hears.", correct: true },
      { id: "performance", label: "A performance for people.", feedback: "Prayer is for Allah, not showing off.", correct: false },
    ], "Prayer is a meeting, not a show."),
    6: h("wudu-prepares", "Tap what wudu prepares.", [
      { id: "hands", x: 48, y: 54, label: "Hands", reveal: "Hands are washed before standing before Allah." },
      { id: "water", x: 58, y: 39, label: "Water", reveal: "Clean water helps the body feel fresh." },
      { id: "heart", x: 42, y: 30, label: "Heart", reveal: "Wudu also quiets the heart for prayer." },
    ], "Clean water prepares more than skin."),
    11: h("prayer-postures", "Tap the prayer postures.", [
      { id: "stand", x: 34, y: 43, label: "Stand", reveal: "Standing begins prayer with attention." },
      { id: "bow", x: 51, y: 50, label: "Bow", reveal: "Bowing teaches humility before Allah." },
      { id: "sujud", x: 64, y: 60, label: "Sujud", reveal: "Prostration is the closest posture of love." },
    ], "The whole body learns worship."),
    22: s("salah-order", "Put these prayer movements in order.", [
      { id: "stand", label: "Stand" },
      { id: "recite", label: "Recite" },
      { id: "bow", label: "Bow" },
      { id: "sujud", label: "Prostrate" },
      { id: "peace", label: "End with peace" },
    ], ["stand", "recite", "bow", "sujud", "peace"], "The movements become a path of remembrance."),
    17: c("who-can-pray", "Who can begin learning to pray?", [
      { id: "adults-only", label: "Only grown-ups.", feedback: "Children can begin learning too.", correct: false },
      { id: "any-child", label: "Even a child.", feedback: "Yes. A clean spot and open heart are enough to begin.", correct: true },
      { id: "perfect-only", label: "Only perfect people.", feedback: "Prayer is how imperfect people return to Allah.", correct: false },
    ], "You can begin with one sincere step."),
    21: c("peace-source", "Where does prayer's peace come from?", [
      { id: "perfect-life", label: "Everything being perfect.", feedback: "Life does not need to be perfect for the heart to find Allah.", correct: false },
      { id: "allah-with-you", label: "Knowing Allah is with you.", feedback: "Yes. That knowledge settles the heart.", correct: true },
      { id: "being-seen", label: "Being seen by people.", feedback: "Salah is a quiet meeting with Allah.", correct: false },
    ], "Peace can arrive right where you are."),
  },

  hijab: {
    2: h("hijab-visible-signs", "Tap what the scarf can remind us of.", [
      { id: "fabric", x: 49, y: 43, label: "Scarf", reveal: "Hijab can be a visible act of worship." },
      { id: "light", x: 62, y: 25, label: "Joy", reveal: "Many Muslim women wear it with pride and joy." },
      { id: "garden", x: 36, y: 62, label: "Dignity", reveal: "The feeling is dignified, not hidden or ashamed." },
    ], "The outside sign points to an inside intention."),
    4: c("hijab-whole-idea", "What is hijab in this chapter?", [
      { id: "just-scarf", label: "Only a scarf.", feedback: "The scarf matters, but hijab is bigger than cloth.", correct: false },
      { id: "modesty-dignity", label: "Modesty, dignity, and grace.", feedback: "Yes. It is a whole way of living before Allah.", correct: true },
      { id: "shame", label: "A sign of shame.", feedback: "The chapter says it is never out of shame.", correct: false },
    ], "Hijab begins with dignity before Allah."),
    8: c("not-hiding", "What does covering not mean?", [
      { id: "hide", label: "A woman must hide.", feedback: "Correct. Covering does not mean her mind and kindness disappear.", correct: true },
      { id: "dignity", label: "She has dignity.", feedback: "Dignity is part of the meaning, not the wrong answer.", correct: false },
      { id: "choice", label: "She can worship Allah.", feedback: "Worship is part of why many women cover.", correct: false },
    ], "A woman is known by her heart, mind, and kindness."),
    10: h("wrapped-gift", "Tap the gift picture and what it teaches.", [
      { id: "wrap", x: 48, y: 47, label: "Wrap", reveal: "The wrap shows care, not shame." },
      { id: "ribbon", x: 55, y: 34, label: "Ribbon", reveal: "Beauty can be guarded with dignity." },
      { id: "gift", x: 46, y: 57, label: "Gift", reveal: "A person's worth is precious with or without being displayed." },
    ], "The picture is about honor and care."),
    15: h("many-beautiful-ways", "Tap the variety this page protects.", [
      { id: "different", x: 34, y: 45, label: "Different ways", reveal: "Muslim women dress modestly in many beautiful styles." },
      { id: "friendship", x: 52, y: 56, label: "Respect", reveal: "The reader learns to speak respectfully, not judge." },
      { id: "heart", x: 68, y: 40, label: "Heart", reveal: "Allah sees the heart most of all." },
    ], "The lesson is dignity without judging people."),
    16: c("haya-first", "Where does haya live first?", [
      { id: "heart", label: "In the heart.", feedback: "Yes. Modesty begins inside before it appears outside.", correct: true },
      { id: "mirror", label: "Only in a mirror.", feedback: "The mirror cannot measure the heart.", correct: false },
      { id: "noise", label: "In being noticed.", feedback: "Haya is humble, not attention-seeking.", correct: false },
    ], "The most important covering is a beautiful heart."),
    17: s("hijab-learning-path", "Put the hijab lesson in order.", [
      { id: "guidance", label: "Allah gives guidance" },
      { id: "learn", label: "A girl learns its meaning" },
      { id: "choose", label: "She chooses worship" },
      { id: "respect", label: "People show respect" },
      { id: "heart", label: "Allah sees her heart" },
    ], ["guidance", "learn", "choose", "respect", "heart"], "The lesson ends with dignity and respect."),
  },

  ramadan: {
    2: h("ramadan-arrives", "Tap signs that Ramadan has arrived.", [
      { id: "crescent", x: 54, y: 22, label: "Crescent", reveal: "The new moon marks the special month." },
      { id: "lanterns", x: 69, y: 42, label: "Lanterns", reveal: "Light and joy fill many homes at Ramadan." },
      { id: "quran", x: 42, y: 55, label: "Qur'an", reveal: "Ramadan is the month when the Qur'an first began to come down." },
    ], "Ramadan begins with moonlight and revelation."),
    7: h("suhoor-and-hunger", "Tap the early-morning Ramadan lesson.", [
      { id: "meal", x: 46, y: 56, label: "Suhoor", reveal: "The quiet meal before dawn prepares the fasting day." },
      { id: "window", x: 67, y: 33, label: "Dawn", reveal: "Fasting begins when dawn's first light comes." },
      { id: "remember", x: 35, y: 42, label: "Compassion", reveal: "Hunger helps the heart remember people who need food." },
    ], "The day begins with intention and compassion."),
    8: c("whole-self-fast", "Fasting is not only about which part of you?", [
      { id: "tummy", label: "Only the tummy.", feedback: "Correct. The tongue, eyes, hands, and heart fast too.", correct: true },
      { id: "kindness", label: "Kindness.", feedback: "Kindness is part of fasting well.", correct: false },
      { id: "self-control", label: "Self-control.", feedback: "Self-control is one of Ramadan's gifts.", correct: false },
    ], "A fasting heart tries to become gentler."),
    9: c("why-hunger", "Why does fasting let a person feel hunger?", [
      { id: "complain", label: "So they can complain.", feedback: "Ramadan teaches patience, not complaint.", correct: false },
      { id: "compassion", label: "To grow compassion.", feedback: "Yes. Feeling hunger helps us remember those who have less.", correct: true },
      { id: "ignore-poor", label: "To ignore others.", feedback: "Fasting should make us more generous.", correct: false },
    ], "Compassion grows when the heart understands."),
    11: h("iftar-table", "Tap how the fast opens at sunset.", [
      { id: "date", x: 42, y: 48, label: "Date", reveal: "Many people break fast first with a sweet date." },
      { id: "water", x: 56, y: 49, label: "Water", reveal: "A sip of water feels like a mercy after the day." },
      { id: "family", x: 68, y: 58, label: "Together", reveal: "Iftar gathers hearts around gratitude." },
    ], "The first bites after patience taste like thanks."),
    17: c("after-patience", "What does Eid remind us after Ramadan?", [
      { id: "no-joy", label: "There is no joy.", feedback: "Eid is full of joy and gratitude.", correct: false },
      { id: "ease", label: "After patience comes joy.", feedback: "Yes. Allah teaches effort, then ease.", correct: true },
      { id: "forget", label: "Forget Allah.", feedback: "Eid is a big thank-you to Allah.", correct: false },
    ], "Patience and joy belong together."),
    22: s("ramadan-rhythm", "Put Ramadan's rhythm in order.", [
      { id: "moon", label: "Moon is sighted" },
      { id: "suhoor", label: "Suhoor before dawn" },
      { id: "fast", label: "Fast through the day" },
      { id: "iftar", label: "Iftar at sunset" },
      { id: "eid", label: "Eid brings joy" },
    ], ["moon", "suhoor", "fast", "iftar", "eid"], "The month moves from intention to joy."),
  },

  sadaqah: {
    4: h("many-sadaqah-forms", "Tap forms of sadaqah that are not money.", [
      { id: "path", x: 52, y: 57, label: "Clear path", reveal: "Moving harm from a path can be sadaqah." },
      { id: "stone", x: 43, y: 63, label: "Stone", reveal: "Even a small removed stone can protect someone." },
      { id: "kind-word", x: 62, y: 35, label: "Kind word", reveal: "A gentle word can be a gift to Allah." },
    ], "Kindness has many shapes."),
    5: c("smile-charity", "Which small action can be sadaqah?", [
      { id: "smile", label: "A warm smile.", feedback: "Yes. A smile can be a gift when it is sincere.", correct: true },
      { id: "show-off", label: "Showing off.", feedback: "Showing off harms the intention.", correct: false },
      { id: "hurt", label: "Hurting feelings.", feedback: "Sadaqah brings kindness, not harm.", correct: false },
    ], "Small kindness can be real charity."),
    7: h("seed-multiplies", "Tap the picture of a gift growing.", [
      { id: "seed", x: 44, y: 60, label: "Seed", reveal: "A small gift can begin like one tiny seed." },
      { id: "ears", x: 50, y: 38, label: "Seven ears", reveal: "Allah can multiply goodness far beyond what we see." },
      { id: "grain", x: 64, y: 45, label: "Grain", reveal: "Every grain reminds us that Allah grows sincere giving." },
    ], "What is small for us is not small with Allah."),
    9: c("heart-behind-gift", "What does Allah look at in sadaqah?", [
      { id: "size-only", label: "Only the size.", feedback: "A big gift with pride can be smaller than a small gift with love.", correct: false },
      { id: "love", label: "The love behind it.", feedback: "Yes. The heart behind the gift matters most.", correct: true },
      { id: "audience", label: "How many people saw it.", feedback: "Being seen is not the goal.", correct: false },
    ], "A sincere heart makes the gift shine."),
    11: h("little-kindness-counts", "Tap people or needs sadaqah can touch.", [
      { id: "food", x: 44, y: 55, label: "Food", reveal: "Sharing food can fill a stomach and a heart." },
      { id: "door", x: 57, y: 39, label: "Neighbor", reveal: "A neighbor's door can become a place of kindness." },
      { id: "home", x: 70, y: 52, label: "Home", reveal: "Sadaqah can quietly strengthen a whole community." },
    ], "Every little kindness counts."),
    13: c("secret-giving", "Why is giving in secret beautiful?", [
      { id: "fame", label: "It brings fame.", feedback: "Secret giving is not chasing fame.", correct: false },
      { id: "allah-only", label: "It is between you and Allah.", feedback: "Yes. That keeps the intention pure.", correct: true },
      { id: "smaller", label: "It makes the gift smaller.", feedback: "A hidden gift can be huge with Allah.", correct: false },
    ], "Hidden goodness is still seen by Allah."),
    17: s("giving-growth", "Put the sadaqah path in order.", [
      { id: "notice", label: "Notice a need" },
      { id: "choose", label: "Choose a kind gift" },
      { id: "give", label: "Give gently" },
      { id: "allah", label: "Allah knows" },
      { id: "grow", label: "Goodness grows" },
    ], ["notice", "choose", "give", "allah", "grow"], "Giving grows when the heart is sincere."),
  },

  "kindness-family": {
    4: c("uff-lesson", "What does the tiny word uff teach?", [
      { id: "grumble", label: "Even small grumbles matter.", feedback: "Yes. Allah teaches us to guard even little signs of annoyance.", correct: true },
      { id: "harsh", label: "Harsh words are best.", feedback: "The verse teaches noble, gentle words.", correct: false },
      { id: "ignore", label: "Ignore parents.", feedback: "Kindness begins by paying attention.", correct: false },
    ], "Gentleness can begin with one small word held back."),
    5: c("choose-gentle", "When you could choose harsh words, what does kindness choose?", [
      { id: "shout", label: "Shouting.", feedback: "Shouting usually makes hearts harder.", correct: false },
      { id: "gentle", label: "Gentle words.", feedback: "Yes. Kindness often starts with the voice.", correct: true },
      { id: "mock", label: "Mocking.", feedback: "Mocking is not birr.", correct: false },
    ], "A soft answer can protect the whole room."),
    9: h("parents-care", "Tap ways parents care when children are small.", [
      { id: "holding", x: 48, y: 48, label: "Holding", reveal: "Parents held us when we could not hold ourselves up." },
      { id: "food", x: 36, y: 58, label: "Feeding", reveal: "They fed us before we could feed ourselves." },
      { id: "night", x: 63, y: 31, label: "Staying awake", reveal: "Love often looks like losing sleep for someone small." },
    ], "Remembering care makes gratitude easier."),
    14: h("home-kindness", "Tap small acts that count at home.", [
      { id: "tea", x: 43, y: 53, label: "Tea", reveal: "Making tea can be love in a cup." },
      { id: "chore", x: 62, y: 45, label: "Helping", reveal: "Helping with a chore is worship when done for Allah." },
      { id: "thanks", x: 54, y: 32, label: "Thank you", reveal: "A grateful word can warm the whole home." },
    ], "Home is where kindness gets practiced every day."),
    17: c("family-forgiveness", "What is stronger than anger in a family?", [
      { id: "grudge", label: "Holding a grudge.", feedback: "Grudges make love feel far away.", correct: false },
      { id: "forgiveness", label: "Forgiveness and patience.", feedback: "Yes. They help love heal what anger hurts.", correct: true },
      { id: "winning", label: "Always winning.", feedback: "Family is not a contest to win.", correct: false },
    ], "Forgiveness is strength at home."),
    18: s("kind-response-order", "Put a kind family response in order.", [
      { id: "pause", label: "Pause before speaking" },
      { id: "listen", label: "Listen carefully" },
      { id: "gentle", label: "Use gentle words" },
      { id: "help", label: "Help where you can" },
      { id: "dua", label: "Make dua for them" },
    ], ["pause", "listen", "gentle", "help", "dua"], "Kindness at home can become kindness everywhere."),
  },

  "allah-promises": {
    4: c("allah-near-promise", "What does Allah promise when you call on Him?", [
      { id: "near", label: "He is near and hears.", feedback: "Yes. This promise runs through the whole book.", correct: true },
      { id: "gone", label: "He is gone.", feedback: "Allah is never absent or unaware.", correct: false },
      { id: "busy", label: "He is too busy.", feedback: "Allah is never too busy for His servants.", correct: false },
    ], "Nearness is one of the promises to carry with you."),
    7: h("hardship-ease", "Tap signs that ease can come after hardship.", [
      { id: "clouds", x: 39, y: 30, label: "Clouds", reveal: "Hardship can feel heavy like storm clouds." },
      { id: "light", x: 56, y: 28, label: "Light", reveal: "Allah can open light through what felt closed." },
      { id: "green", x: 53, y: 58, label: "Green valley", reveal: "Ease can grow after rain and difficulty." },
    ], "Hardship does not get the last word."),
    11: c("mercy-after-mistake", "What does Allah promise the one who turns back sorry?", [
      { id: "turned-away", label: "Always turned away.", feedback: "Allah does not turn away sincere tawbah.", correct: false },
      { id: "forgiven", label: "Mercy is open.", feedback: "Yes. His mercy is bigger than any mistake.", correct: true },
      { id: "perfect-first", label: "Be perfect first.", feedback: "We return because we need mercy.", correct: false },
    ], "Hope stays open."),
    16: h("jannah-promises", "Tap what Jannah means in this promise.", [
      { id: "river", x: 45, y: 60, label: "Rivers", reveal: "The garden is described with beauty and peace." },
      { id: "trees", x: 58, y: 39, label: "Trees", reveal: "Every good thing there is from Allah's mercy." },
      { id: "peace", x: 67, y: 24, label: "No fear", reveal: "Allah promises a home where sadness and fear end." },
    ], "Jannah is hope made forever."),
    21: c("your-story", "What does the book ask the reader to carry forward?", [
      { id: "forget", label: "Forget every lesson.", feedback: "The stories are meant to travel with you.", correct: false },
      { id: "begin", label: "Begin your own story with Allah.", feedback: "Yes. The ending opens into your life.", correct: true },
      { id: "only-watch", label: "Only watch from far away.", feedback: "These lessons are for your real days.", correct: false },
    ], "The book closes by opening a door."),
    20: s("bookwide-path", "Put the book's big lesson in order.", [
      { id: "learn", label: "Learn who Allah is" },
      { id: "stories", label: "Meet the prophets" },
      { id: "return", label: "Turn back after mistakes" },
      { id: "good", label: "Do good with love" },
      { id: "hope", label: "Hope for Allah's mercy" },
    ], ["learn", "stories", "return", "good", "hope"], "That is a path you can keep walking."),
    22: h("final-landscape", "Tap the worlds gathered in the final picture.", [
      { id: "mountains", x: 31, y: 35, label: "Mountains", reveal: "Moses, Abraham, and many stories stood near mountains." },
      { id: "sea", x: 58, y: 58, label: "Sea", reveal: "Noah, Moses, and Jonah all learned that water obeys Allah." },
      { id: "road", x: 49, y: 70, label: "Road", reveal: "The last page invites your own next step." },
    ], "All the lessons gather into a hopeful beginning."),
  },
} satisfies ChapterInteractionMap;

export function applyInteractions(chapter: Chapter): Chapter {
  const interactions = chapterInteractions[chapter.id] ?? {};
  return {
    ...chapter,
    pages: chapter.pages.map((page, index) => {
      const interaction = interactions[index];
      return interaction ? { ...page, interaction } : page;
    }),
  };
}
