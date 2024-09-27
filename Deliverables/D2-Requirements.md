# 1. Positioning

Group 05 – *“Nebulous Enigma”*

Group Members: Ciaran Wham, Kameron Napier, Levi Ly, Isaac Schwarz, Collin Boyer, Kayden Vicenti


### 1.1 Problem statement

The problem of poorly-designed story games affects gamers; the impact of which is wasting players' time and money. 

### 1.2 Product Position Statement

### 1.3 Value proposition and customer segment

# 2. Stakeholders

# 3. Functional requirements (features)

1. The player can select different paths to progress the story in different ways.
2. If the player is logged into an account, their progress is saved as they play to a database server.
3. The game must have multiple endings.

# 4. Non-functional requirements

1. Going from one page to another page must be almost instantaneous
2. The game must be able to run in a web browser
3. The game must use a database of some kind to save a user's progress

# 5. MVP

# 6. Use cases

### 6.1 Use case diagram

### 6.2 Use case descriptions and interface sketch

### *Use Case 1: Make a story choice*
**Actor:** Player\
**Trigger:** The player wants to perform an action in the story.\
**Pre-conditions:** The player is at a branching point of the story.\
**Post-condition:** The player progresses to the next part of the story.

**Success Scenario:**

1. The system presents a number of options to progress the story.
2. The player selects an option.
3. The system saves the selected option.
4. The system displays the next story page. 

**Alternate Scenarios:**

*1a. The player is not at a branching point.*
1. The system does not display any options.
2. The player must progress to the next story page.

*3a. The system is unable to save.*
1. The system notifies the player that progress is unable to be saved.
2. The system allows the player to continue playing without save functionality.

*4a. The system is unable to access the next story node.*
1. The system notifies the player of the error and asks them to try again later.

(!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ADD SKETCH LATER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)

### *Use Case 2: Load progress*
**Actor:** Player\
**Trigger:** The player wants to load their save file from a previous play through.\
**Pre-conditions:** The player has a save file and is at the starting screen of the game.\
**Post-condition:** The player is redirected to their save point. 

**Success Scenario:**

1. The system presents an option to load a save.
2. The player enters their name.
3. The system redirects the player to the point in the game where they last saved.
4. The system displays the next story page. 

**Alternate Scenarios:**

*2a. The player has no save to load.*
1. The system tells the user that their name is not recognized.
2. The system displays the start screen.

*2b. The player spells their name differently to the last time they saved.*
1. The system tells the user that their name is not recognized.
2. The system displays the start screen.

*3a. The save data is unusable by the system*
1. The system notifies the player of this error
2. The system redirects the player back to the start screen

*4a. The system is unable to access the next story node.*
1. The system notifies the player of the error and asks them to try again later.

![Use Case 2](https://i.ibb.co/TvC6jmQ/image-2024-09-27-142247730.png)

# 7. User stories

1. As a player, I want to customize my character so that my playthroughs feel unique. (Priority: 12 (or some other low number), Estimation: (planning poker required))
2. As a player, I want to return to previous choices I've made so that I can experience other paths of the story. (Priority: 3, Estimation: (planning poker required))
3. As a player, I want to read a story, so that I am entertained (Priority 2, Estimation: (planning poker required))
4. As a player, I want to read multiple endings, so that I can learn more about the game's world (Priority 2, Estimation: (planning poker required))

# 8. Issue Tracker
