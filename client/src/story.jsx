const story = [
  {
    id: 0,
    text: `You approach a dark, unfamiliar planet, lowering your spacecraft closer to its surface. You're unsure, yet, if you want to land here. As you descend through you clouds, you quickly notice the heavy fog that drapes over the planet. No rain dots your windshield, but you can see (and soon hear) lightning in the distance, striking every so often. Below you, the mountainous, tree-covered terrain might be obscuring what truly inhabits this place. Or perhaps it really is just wilderness.`,
    background: `https://i.imgur.com/i64x6I4.jpeg`,
    choice: [
      { id: 0, text: `Continue.`, goTo: 1 },
    ]
  },
  {
    id: 1,
    text: `Maybe you shouldn't stop here. You cruise through the sky, checking your radar for another nearby planet to scope out. You glance up occasionally and realize the lightning has increased in frequency by a frightening rate, and with each strike, they seem to be getting closer to you.`,
    background: `https://i.imgur.com/i64x6I4.jpeghttps://i.imgur.com/i64x6I4.jpeg`,
    choice: [
      { id: 0, text: `Leave this planet.`, goTo: 2 },
      { id: 1, text: `Return to previous page.`, goTo: 0 }
    ]
  },
  {
    id: 2,
    text: `You can pick your next destination later. As you pull your spacecraft up, it's as if the storm knows your intentions. You hardly have time to process it as lightning directly hits your ship, sending you careening off course towards the ground. Try as you may to regain control, you realize you can do nothing when you look at your HUD and see your right wing is severely damaged.`,
    background: `https://i.imgur.com/i64x6I4.jpeg`,
    choice: [
      { id: 0, text: `Prepare for a crash-landing.`, goTo: 4 },
      { id: 1, text: `Accept your fate.`, goTo: 3 },
      { id: 2, text: `Return to previous page.`, goTo: 1 }
    ]
  },
  {
    id: 3,
    text: `Well, this is it. What can you do? You close your eyes and try to block out the blaring of the alarms and recall your best memories. Like that one time you... No... What about that moment where... Not that either. Hm. What are your best memories? You ponder that question up until you reach your fiery demise on the surface of this unknown planet, all by yourself. Maybe it was too soon for you to give up.`,
    background: `https://i.imgur.com/q5tKTlL.png`,
    choice: [
      { id: 0, text: `Start from the beginning.`, goTo: 0 },
    ]
  },
  {
    id: 4,
    text: `There's only so much you can do, but you do it anyways. You pull up as best you can with only one decent wing and straighten yourself out. Your speed is still far too high to feel comfortable, and you are quickly approaching the ground. You soon reach the canopy of trees, and flying through branches doesn't slow you down as much as it makes your ship shake and take even more damage. The trees are much taller than you imagined from above, and you can only hope that you don't slam directly into any of them. With your hands frozen on the steering controls, you close your eyes and brace yourself for impact, the sounds of metal scraping and alarms blaring ringing through your head.`,
    background: `https://i.imgur.com/i64x6I4.jpeg`,
    choice: [
      { id: 0, text: `Continue.`, goTo: 5 },
      { id: 1, text: `Return to previous page.`, goTo: 2 }
    ]
  },
  {
    id: 5,
    text: `You're not sure how long you've been out by the time you regain consciousness. It takes you several moments to gather your bearings, and then you survey the land around you. You're surrounded by forest as far as your eye can see. You can see some similarities to your own planet, but you notice far more differences. The flora bear no more than passing resemblances to the species you're familiar with. At the moment, the planet's climate is comfortable for you. And, fortunately, you only now realize you're breathing the air just fine.`,
    background: `https://i.imgur.com/1ZHSUa4.jpeg`,
    choice: [
      { id: 0, text: `Search for food.`, goTo: 6 },
      { id: 1, text: `Search for water.`, goTo: 7 },
      { id: 2, text: `Stay in the ship, search for what you can find.`, goTo: 20 },
      { id: 3, text: `Return to previous page.`, goTo: 4 }
    ]
  },
  {
    id: 6,
    text: ` As you scrutinize your surroundings, you feel the all-too-familiar sensation of hunger beginning to set in. Looking at what's left of your ship, you realize your rations were likely destroyed in the crash. You need to find food. And water, now that you think of it. But that can come later. You awkwardly climb out of a narrow opening in the ceiling of your ship and begin your search. Not too far from the ruins of your ship, you find what looks comparable to a berry bush. The bright red fruit it bears are abundant. The plant is quite large, but otherwise, it looks rather normal to you. But you're no botanist.`,
    background: `https://i.imgur.com/1ZHSUa4.jpeg`,
    choice: [
      {id: 0, text: `Eat the berries.`, goTo: 8},
      {id: 1, text: `Search elsewhere.`, goTo: 9},
      {id: 2, text: `Return to previous page.`, goTo: 5}
    ]
  },
  {
    id: 7,
    text: `Searching for water proves tiring, but you eventually find the shores of what you can only assume to be an ocean, water spanning as far as you can see. It looks beautiful, and it's clear enough that you can also see some small, unfamiliar creatures swimming swiftly in an odd path through the water. They're tiny enough that you don't think they're worth trying to catch. A distance down the coast, you see some roughly deer-sized animals drinking the water. You're not sure if the oceans here are safe to drink from, but luckily, you have a filtered canteen that should purify any immediate dangers from the water.`,
    background: `https://i.imgur.com/76cDcMl.jpeg`,
    choice: [
      {id: 0, text: `Collect some water.`, goTo: 10},
      {id: 1, text: `Return to previous page.`, goTo: 5}
    ]
  },
  {
    id: 8,
    text: `They look good enough. You pick a berry and pop it in your mouth, but as soon as you bite down, you know something is terribly wrong. A burning sensation explodes in your mouth, and faster than you can even process, it spreads rapidly throughout your entire body. You crumple to the ground, and seconds pass by in what are certainly the longest, most agonizing moments of your life, followed by a complete lack of any feeling as your body goes limp.`,
    background: `https://i.imgur.com/q5tKTlL.png`,
    choice: [
      {id:0, text: `Start over.`, goTo: 0}
    ]
  },
  {
    id: 9,
    text: `You decide against the berries. That color seems like a warning, and there might be a reason there are so many on the bush. You trudge through the mud and push your way through leaves and vines. You're not sure how long the days are here, but the light hasn't changed by the time you encounter some sort of track in the mud. Many tracks, actually. They all look similar, and you can't be sure whether they come from one or many creatures. Nearby, you also spot another bush of fruit. Upon closer inspection, the plant is incredibly thorny, and the berries are almost a pure white color. The bush is mostly picked over, but there's still a number of berries worth harvesting. Assuming they're good to eat.`,
    background: `https://i.imgur.com/1ZHSUa4.jpeg`,
    choice: [
      {id:0, text: `Make a trap for the animal.`, goTo: 11},
      {id:1, text: `Eat some of the pale white berries.`, goTo: 12},
      {id:2, text: `Return to previous page.`, goTo: 6}
    ],
  },
  {
    id: 10,
    text: `As you fill your canteen, a large, pirate-looking ship comes over the horizon, moving at an incredible pace. To your dismay, it seems like they're headed straight for you.`,
    background: `https://i.imgur.com/76cDcMl.jpeg`,
    choice: [
      {id:0, text: `Run away!`, goTo: 13},
      {id:1, text: `Wait for their arrival.`, goTo: 15},
      {id:2, text: `Return to previous page.`, goTo: 7}
    ]
  },
  {
    id: 11,
    text: `You thank the stars that you took a survival class in your education to become a pilot. It's perhaps the most rudimentary trap you learned of (and certainly not because it was the only trap you remembered), but you set a snare trap using a long vine tied into a slipknot, using some of the white berries you found earlier as bait. You sit under some large, leafy plants, ensuring you're mostly hidden while still having a view of the trap. You assure yourself that it will work and wait... and wait... and wait...`,
    background: `https://i.imgur.com/1ZHSUa4.jpeg`,
    choice: [
      {id:0, text: `Continue.`, goTo: 17}
    ]
  },
  {
    id: 12,
    text: `You eat some pale white berries. Using this knowledge you continue finding these pale white berries, you continue to survive in this planet until you are able to escape. fixing your ship with leftover parts until you are able to fix the communication system and send a distress signal to be saved. Congratulations, you, {name} survived through the harsh planet.`,
    background: ``,
    choice: [
      {id: 0, text: `Start from the beginning.`, goTo: 0},
    ]
  },
  {
    id: 13,
    text: `You turn and break into a sprint away from the shore, running back towards the trees in the hopes that their cover will keep you safe from any alien pirates coming your way. However, before you can make it to the forest, a loud CRACK! echoes across the waters to the beach, and you hardly process it before a cannonball slams into your behind. It's incredible, the accuracy that was required to snipe you with a cannon. Unfortunately, your awe cannot save you from your lethal injuries.`,
    background: `https://i.imgur.com/q5tKTlL.png`,
    choice: [
      {id: 0, text: `Start from the beginning.`, goTo: 0},
    ]
  },
  {
    id: 14,
    text: `You start a fire and cook your well-earned meal. "Maybe this isn't so bad," you think to yourself. Clearly, you are a master of survival, and you turn your ruined ship into a cozy shelter, always improving it and turning it into more of a home. Using your expert trapping skills, you are able to live comfortably on this planet. You even get a little something of a garden going! Your old life becomes a fading memory as the days pass, and you find you don't mind. You're happy to live off the grid, all by yourself.`,
    background: `https://i.imgur.com/2iWu8eC.png`,
    choice: [
      {id: 0, text: `Start from beginning.`, goTo: 0}
    ]
  },
  {
    id: 15,
    text: `You don't have to wait long for the pirates to arrive at the shore. You watch as they dock and lower the ship's gangplank to approach you. Three of the crew walk onto land, staring unnervingly at you. They don't look like stereotypical aliens. In fact, they look very similar to your own people. But there's something off about their appearance that gives you pause. They stare at you for a moment longer, before the smallest of the group steps forward. It emits a horrifying wail of noise, but when you recoil, it stops and seems to clear its throat before speaking with more familiar sounds.`,
    background: `https://i.imgur.com/76cDcMl.jpeg`,
    choice: [
      {id: 0, text: `Continue.`, goTo: 18},
      {id: 1, text: `Return to previous page.`, goTo: 10},
    ]
  },
  {
    id:16,
    text: `They become the best friends you've ever had. You learn the ways of sailing the seas and raiding other ships you come across. Combining their skills with your knowledge of modern technology, you and the crew rule the Seventeen Seas. Eventually, true to your scallywag nature, you stage a mutiny and usurp the captain, leading the crew as captain for a while until the cycle begins again.`,
    background: `https://i.imgur.com/2iWu8eC.png`,
    choice: [
      {id: 0, text: `Start over.`, goTo: 0}
    ]
  },
  {
    id: 17,
    text: `You've almost nodded off by the time you see a small animal approach your foolproof trap. You could compare it to a cat-size squirrel, but it has other features you can't quite place. You wait until the right moment, and when it sticks its head through the loop of vine, you yank and close it around its neck. The snap is a bit sickening, but your pride outshines your discomfort. You notice now that the sky appears darker.`,
    background: `https://i.imgur.com/1ZHSUa4.jpeg`,
    choice: [
      {id:0, text: `Search for water.`, goTo: 7},
      {id: 1, text: `Eat your well deserved meal.`, goTo: 14}
    ]
  },
  {
    id: 18,
    text: `Its words aren't exactly in your language, but they're close enough that you can infer most of what it's saying. It seems that it's asking who you are, and if you will join them. You get the sense the last part isn't much a question, however.`,
    background: `https://i.imgur.com/76cDcMl.jpeg`,
    choice: [
      {id: 0, text: `"Of course, friend! My name is {name}. I would love to join you."`, goTo: 16},
      {id: 1, text: `"FREAK!"`, goTo: 19}, //alternative ending: kill all the pirates and use their supplies to repair your space craft somehow
      {id: 2, text: `Turn and run.`, goTo: 13},
      {id: 2, text: `Return to previous page.`, goTo: 10}
    ]
  },
  {
    id: 19,
    text: `The pirates immediately go into a uproar, switching back to their own language. You can't understand them anymore, but it's clear they're not very happy with you. Before you can react, the little captain raises one of its arms towards you, and a long, large spike suddenly shoots forward, skewering you. It raises its arm and flings you into the ocean as if you were a bug. As you bleed out under the surface of the water, you close your eyes and accept your fate. You don't regret your last word at all.`,
    background: `https://i.imgur.com/q5tKTlL.png`,
    choice: [
      {id: 0, text: `Start from the beginning.`, goTo: 0},
    ]
  },
  {
    id: 20,
    text: `It's almost comical how it happens. You were searching what was left of a small storage compartment in your ship, but you couldn't quite see what was in the crushed hole. You reach a hand in, feeling around for any of your supplies, when your fingers brush against a live wire. An incredible, painful jolt runs through your body, but luckily, your hand didn't contract around the wire. Less luckily, you fell backwards when you got shocked, and you couldn't do anything to recover before your head smacked into a piece of metal jutting out from the wall of your ship, hitting at just the right angle to instantly kill you.`,
    background: `https://i.imgur.com/q5tKTlL.png`,
    choice: [
      {id: 0, text: `Start from the beginning.`, goTo: 0},
    ]
  },


]

export default story;
