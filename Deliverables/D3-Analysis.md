# 1. System Description

The problem of non-linear story games with choices that don't actually matter affects gamers and visual novel fans; the impact of which is wasting players' time and money on boring games that fail to meet expectations. For all levels of gamers and visual novel fans who are interested in sci-fi, Nebulous Enigma is a "choose your own adventure" game that lets players experience their own story and make choices that matter; unlike other story games that follow a largely linear plot and give an illusion of choice, our product allows players to have a different experience each time they play the game. Nebulous Enigma is a "choose your own adventure" game that allows players to experience an exciting sci-fi story the way they want, providing an entertaining and easy-to-play adventure.

**Players** can **_choose_** _options_ on a **choice**. A **choice** is a part of the story the **player** is currently at. **Choices** have **prompts** which in turn have have _body text_ and _button text_. **Choices** also have _statistics_, and can be _**saved**_ to a **player's account**. When the **player** **_saves to file_** **save data** it stores what **choice** they are at for later to **_load from file_**. 

(no longer have story nodes)\
~~Each **story node** has a _number_, _text_, _options_, _background art_, _music_ and _statistics_. The _number_ is a unique identifier that can be compared to a page of a book. The _text_ is a block of text displayed to the **player** for them to decide what **option** to **_choose_** to continue to the next **story node**. **Options** are a list of choices the player  can make. The _background art_ is displayed behind the _text_ and _options_, and _music_ **_plays_** for the **player**'s experience to establish an atomsphere.~~

(no longer have ending nodes)\
~~**Ending nodes** inherit from **story nodes**, but their list of _options_ will be empty, as there should be no choice to make by this point. Additionally, **ending nodes** allow the **player** to reset their progress and return to the beginning of the game.~~

**Players** can **_sign up_** for an **account** which has a _username_, _password_, _character name_, _save_, and **avatar**. A **player** **_creates_** a _username_ that is unique and the identifying key for the **account**. The _password_ is a security factor to ensure that someone cannot type in a random _username_ to get into and mess with someone else's **account**. The _character name_ is the name the **player** is referred to as in the story. The **account** **_saves_** the **choice** they were last at. The _save_ a player has is a **save** in the files that is a **choice**. **Players** can also **_log in_** to an **account** with their _username_ and _password_ in order to get back to where they were in the story. 

**Players** can **_configure_** a **settings page** to pick their preferred _sound volume_ and _UI colors_.

**Players** can **_customize_** their **avatar**, a visual illustration of their character. **Players** can choose customization options from arrays for their _head_, _torso_, and _lower body_.

**Players** can also **_log in_** to a **guest account**, ~~which inherits from a regular **account**~~ (alt desc since a guest account is an object of a registered account) which bypasses the need for a **player** to make a _username_ and _password_. However, this account does not **_save_** any progress, and its _username_ and _password_ are determined by the developers. Additionally, the _character name_ is a generic name.

**Items** when a player completes a path they are given an **item** to their **inventory**. **Players** with an **account** can _**access account inventory**_ which will allow them to see what **items** they have collected.

# 2. Model

 Classes: (!!!!!!!!just to reference while drawing the model, delete later!!!!!!!!!)
- **player**
- ~~story node~~
- ~~ending node~~
- ~~option~~ **choice**
- **account**
- ~~guest account(inherits from account)~~
- ~~settings page~~
- **avatar**
- **inventory**
- **save**
- **item**
- **prompt**
