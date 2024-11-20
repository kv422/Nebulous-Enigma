const story = [
  {
    id: 0,
    text: `Your name is {name}. You approach a dark, unfamiliar planet, lowering your spacecraft closer to its surface. You're unsure, yet, if you want to land here. As you descend through you clouds, you quickly notice the heavy fog that drapes over the planet. No rain dots your windshield, but you can see (and soon hear) lightning in the distance, striking every so often. Below you, the mountainous, tree-covered terrain might be obscuring what truly inhabits this place. Or perhaps it really is just wilderness.`,
    background: ``,
    choice: [
      { id: 0, text: `Continue.`, goTo: 1 },
      { id: 1, text: `My name is {name}.`, goTo: 1 }
    ]
  },
  {
    id: 1,
    text: `Maybe you shouldn't stop here. You cruise through the sky, checking your radar for another nearby planet to scope out. You glance up occasionally and realize the lightning has increased in frequency by a frightening rate, and with each strike, they seem to be getting closer to you.`,
    background: ``,
    choice: [
      { id: 0, text: `Leave this planet.`, goTo: 2 },
      { id: 1, text: `Return to previous page.`, goTo: 0 }
    ]
  },
  {
    id: 2,
    text: `You can pick your next destination later. As you pull your spacecraft up, it's as if the storm knows your intentions. You hardly have time to process it as lightning directly hits your ship, sending you careening off course towards the ground. Try as you may to regain control, you realize you can do nothing when you look at your HUD and see your right wing is severely damaged.`,
    background: ``,
    choice: [
      { id: 0, text: `Prepare for a crash-landing.`, goTo: 4 },
      { id: 1, text: `Accept your fate.`, goTo: 3 },
      { id: 2, text: `Return to previous page.`, goTo: 1 }
    ]
  },
  {
    id: 3,
    text: `Well, this is it. What can you do? You close your eyes and try to block out the blaring of the alarms and recall your best memories. Like that one time you... No... What about that moment where... Not that either. Hm. What are your best memories? You ponder that question up until you reach your fiery demise on the surface of this unknown planet, all by yourself. Maybe it was too soon for you to give up.`,
    background: ``,
    choice: [
      { id: 0, text: `Start from the beginning.`, goTo: 0 },
      { id: 1, text: `Return to previous page.`, goTo: 2 }
    ]
  },
  {
    id: 4,
    text: `There's only so much you can do, but you do it anyways. You pull up as best you can with only one decent wing and straighten yourself out. Your speed is still far too high to feel comfortable, and you are quickly approaching the ground. You soon reach the canopy of trees, and flying through branches doesn't slow you down as much as it makes your ship shake and take even more damage. The trees are much taller than you imagined from above, and you can only hope that you don't slam directly into any of them. With your hands frozen on the steering controls, you close your eyes and brace yourself for impact, the sounds of metal scraping and alarms blaring ringing through your head.`,
    background: ``,
    choice: [
      { id: 0, text: `Continue.`, goTo: 5 },
      { id: 1, text: `Return to previous page.`, goTo: 2 }
    ]
  },
  {
    id: 5,
    text: `After several moments, who knows how long, you come to consciousness. The land has simalarities to your own planet, but some striking differences. Plants are nothing that you've seen before. With whats left of your ship you can gather a limited amount of information. The planet's climate is habitable for you, there is H2O on the surface of the planet, and the biomatter on the planet contains some basic sustanance. At the word "sustanance" you feel your stomach drop. You need food and water. What next?`,
    background: ``,
    choice: [
      { id: 0, text: `Search for food.`, goTo: 6 },
      { id: 1, text: 'Search for water.', goTo: 7 },
      { id: 2, text: 'Stay in the ship, search for what you can find.', goTo: 8 },
      { id: 3, text: `Return to previous page.`, goTo: 4 }
    ]
  },
  {
    id: 6,
    text: `As your stomach drops you think of what might be edible? Your ship cannot check anything for you as the systems are too damaged from the landing. Getting out of your ship and looking for food, you find a berry bush of some sort, the berries are bright red and there are so many berries to pick. The bush is large and has what seems to be normal leaves.`,
    background: '',
    choice: [
      {id: 0, text: 'Eat the berries.', goTo: 8},
      {id: 1, text: 'Do not eat the berries, keep searching.', goTo: 9},
      {id: 2, text: 'Return to previous page.', goTo: 5}
    ]
  },
  {
    id: 7,
    text: 'Searching for water was tiring but you find some lake that spans as far as you can see. It looks clear, and you can also see some alien fish. At one part of the beach you can see some other creatures drinking the water. You have a filtered canteen that should purify any possible micro organisms.',
    background: '',
    choice: [
      {id: 0, text: 'Collect some water.', goTo: 10},
      {id: 1, text: 'Do not collect water, search for food instead.', goTo: 6},
      {id: 2, text: 'Return to previous page.', goto: 5}
    ]
  },
  {
    id: 8,
    text: '{name} has died. RIP to a fallen pilot after a crashlanding. Someday you may be found by another pilot, but that is past your time.',
    background: '',
    choice: [
      {id:0, text: 'Start over.', goTo: 0}
    ]
  },
  {
    id: 9,
    text: 'You decide against the berries. Instead searching for something more animal. After a while you found some sort of track, some creature frequents this area. You also find another bush, its very thorny and the berries are a pale white color. The bush is mostly picked over but there are still a few left.',
    background: '',
    choice: [
      {id:0, text: 'Make a trap for the animal.', goTo: 11},
      {id:1, text: 'Eat some of the pale white berries.', goTo: 12},
      {id:2, text: 'Return to previous page.', goTo: 6}
    ],
  },
  {
    id: 10,
    text: 'You collect some water. As you do, a large pirate looking ship comes over the horizon moving at an incredible pace. You are not sure how but they look like they are coming for you.',
    background: '',
    choice: [
      {id:0, text: 'Run away!', goTo: 13},
      {id:1, text: 'Wait for their arrival.', goTo: 15},
      {id:2, text: 'Return to previous page.', goTo: 7}
    ]
  },
  {
    id: 11,
    text: 'You make a trap for the animal. It is rudementary but luckily you took that one trapping class in pilot school. You assure that it will work and wait... and wait... and wait... Then you see the small animal, its a cat sized squirrel from the look of it. As it steps into the trap it springs and successfully captures the animal.',
    background: '',
    choice: [
      {id:0, text: 'Search for water.', goTo: 7},
      {id: 1, text: 'Eat your well deserved meal.', goTo: 14}
    ]
  },
  {
    id: 12,
    text: 'You eat some pale white berries. Using this knowledge you continue finding these pale white berries, you continue to survive in this planet until you are able to escape. fixing your ship with leftover parts until you are able to fix the communication system and send a distress signal to be saved. Congratulations, you, {name} survived through the harsh planet.',

    choice: [
      {id: 0, text: 'Start from the beguinning.', goTo: 0},
      {id: 1, text: 'Return to previous page.', goTo: 9}
    ]
  },
  {
    id: 13,
    text: 'You start running from the ship with the water you collected. Suddenly you hear a loud "BANG!" and then darkness. . .',
    background: '',
    choice: [
      {id: 0, text: 'Continue.', goTo: 8},
      {id:1, text: 'Return to previous page.', goTo: 10}
    ]
  },
  {
    id: 14,
    text: 'You eat your well earned meal. Using your expert trapping skills you are able to live on this planet. Making your ship a shelter, and some gardens nearby with what crops you find to be good. Living your life off the grid and happily by yourself.',
    background: '',
    choice: [
      {id:0, text: 'Start from beguinning.', goTo:0},
      {id:2, text: 'Return to previous page.', goTo: 11}
    ]
  },
  {
    id: 15,
    text: 'You await the pirates arrival. When they approach they ask you who you are and if you will join them.',
    background: '',
    choice: [
      {id:0, text: 'I will join you, my name is {name}.', goTo:16},
      {id:1, text: 'No! I will not join you!', goTo:8}, //alternative ending: kill all the pirates and use their supplies to repair your space craft somehow
      {id:2, text: 'Return to previous page.', goTo:10}
    ]
  },
  {
    id:16, 
    text: 'You join the pirates with your technology you rule the seas eventually usurping the capitain and leading your own vessil.',
    background:'',
    choice: [
      {id:0, text: 'Return to previous page.', goTo:15},
      {id:1, text: 'Start over.', goTo:0}
    ]
  }

]

export default story;
