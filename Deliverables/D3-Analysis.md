# 1. System Description

The problem of non-linear story games with **choices** that don't actually matter affects gamers and visual novel fans; the impact of which is wasting **players**' time and money on boring games that fail to meet expectations. For all levels of gamers and visual novel fans who are interested in sci-fi, Nebulous Enigma is a "**_choose_** your own adventure" game that lets **players** experience their own _story_ and **_make choices_** that matter; unlike other _story_ games that follow a largely linear plot and give an illusion of **choice**, our product allows **players** to have a different experience each time they play the game. Nebulous Enigma is a "**_choose_** your own adventure" game that allows **players** to experience an exciting sci-fi _story_ the way they want, providing an entertaining and easy-to-play adventure.

**Players** can **_sign up_** for an **account** which has a _username_, _password_, _character name_, _save_, and **avatar**. A **player** **_creates_** a _username_ that is unique and the identifying key for the **account**. The _password_ is a security factor to ensure that someone cannot type in a random _username_ to get into and mess with someone else's **account**. The _character name_ is the name the **player** is referred to as in the story. The **account** **_saves_** the **choice** they were last at. The _save_ a player has is a **save** in the files that is a **choice**. **Players** can also **_log in_** to an **account** with their _username_ and _password_ in order to get back to where they were in the story. 

Each page of the game contains a **prompt**. Each **prompt** has a _storyID_, _body text_, and a list of **choices** the **player** can **_choose_** one of. **Choices** have **choice text** to describe the action that **choice** is taking. **Choices** also have _statistics_, a count of how many **players** selected that **choice**. When the **player** **_saves_** a **save** it stores what **prompt** they are at so they can later **_load_** that **save** and continue from where they left off. 

**Players** can **_customize_** their **avatar**, a visual illustration of their character. **Players** can choose customization options from arrays for their _head_, _torso_, and _lower body_.

**Players** can also **_log in_** to a guest **account**, which bypasses the need for a **player** to make an **account** with a _username_ and _password_. However, this account does not **_save_** any progress, and its _username_ and _password_ are determined by the developers. Additionally, the _character name_ is a generic name.

**Players** may receive **items** that are **_stored_** in their **inventory** when they **_choose_** certain **choices**. **Players** with can _**access**_ their **inventory** to see what **items** they have collected. Additionally, some **choices** may only be available if they **player** has a specific **item**.

# 2. Model

![system's UML class diagram](https://i.imgur.com/BsIWQ0w.png)