# 1. Description



# 2. Architecture



# 3. Class diagram

![class diagram](https://i.imgur.com/sfqShWB.png)

# 4. Sequence diagram

### *Use Case 2: Load progress*
**Actor:** Player\
**Trigger:** The player wants to load their save file from a previous playthrough.\
**Pre-conditions:** The player has a save file and is at the starting screen of the game.\
**Post-condition:** The player is redirected to their save point. 

**Success Scenario:**

1. The system presents an option to load a save.
2. The player enters their username and password.
3. The system redirects the player to the point in the game where they last saved.

**Alternate Scenarios:**

*2a. The log-in information is invalid.*
1. The system tells the user that their log-in information is invalid.
2. The system displays the start screen.

*3a. The save data is unusable by the system.*
1. The system notifies the player of this error.
2. The system redirects the player back to the start screen.

### *Sequence Diagram: Load progress*

![Sequence Diagram](https://i.ibb.co/nnnrLxs/Nebulous-Sequence.png)

# 5. Design patterns
Home Page - Façade Pattern (Structural Design Pattern): https://github.com/clw549/Nebulous-Enigma/blob/main/client/src/components/home/Home.jsx
![Home Page Diagram](deliverable_images/two_design_pattern_d5.png)


Path Selection - State Pattern (Behavioral Design Pattern): https://github.com/clw549/Nebulous-Enigma/blob/main/client/src/story.jsx
![Story Diagram](deliverable_images/one_design_pattern_d5.png)


# 6. Design Principles
Design principles allow for code to have certain qualities. We use two principles well, SRP and ISP. SRP, single responisbility principle, is where each function or object has a single use or purpose. To abide by this principle, our login, signup, game, prompts, and story are all seperate allowing for more modularity in our code. Each file and function in our code have singular purpose. ISP, Interface seperation principle, works off of SRP very well. ISP is the principle for interfaces and libraries to only be used where they need to be. Since our code is already incredibly modular, we have our libraries specific to each file allowing for seperation of interfaces and libraries. We use these principles for our code to be easier to read, write, and test since excessive libraries or uses of code can make tests, and thus makes code implementation and user experience worse. Using these principles will help in our project implementation and for the user.

