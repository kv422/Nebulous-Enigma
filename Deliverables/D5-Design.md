# 1. Description



# 2. Architecture



# 3. Class diagram

![class diagram](https://i.imgur.com/sfqShWB.png)

# 4. Sequence diagram



# 5. Design patterns
Home Page - Façade Pattern (Structural Design Pattern): https://github.com/clw549/Nebulous-Enigma/blob/main/client/src/components/home/Home.jsx
![Home Page Diagram](Deliverables/deliverable_images/two_design_pattern_d5.png)


Path Selection - State Pattern (Behavioral Design Pattern): https://github.com/clw549/Nebulous-Enigma/blob/main/client/src/story.jsx
![Story Diagram](Deliverables/deliverable_images/one_design_pattern_d5.png)


# 6. Design Principles
Design principles allow for code to have certain qualities. We use two principles well, SRP and ISP. SRP, single responisbility principle, is where each function or object has a single use or purpose. To abide by this principle, our login, signup, game, prompts, and story are all seperate allowing for more modularity in our code. Each file and function in our code have singular purpose. ISP, Interface seperation principle, works off of SRP very well. ISP is the principle for interfaces and libraries to only be used where they need to be. Since our code is already incredibly modular, we have our libraries specific to each file allowing for seperation of interfaces and libraries. We use these principles for our code to be easier to read, write, and test since excessive libraries or uses of code can make tests, and thus makes code implementation and user experience worse. Using these principles will help in our project implementation and for the user.

