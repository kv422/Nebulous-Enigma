# 1 Introduction

# 2 Implemented Requirements
## 2.1 Enriching story
Requirement: As a player, I want to read multiple endings, so that I can learn more about the game's world.

Issue: #34 

Pull request: https://github.com/clw549/Nebulous-Enigma/pull/114 #114 

Links to an external site. 

Implemented by: Ciaran Wham 

Approved by: Levi Ly

## 2.2 Backtracking
Requirement: As a player, I want to return to previous choices I've made, so that I can experience other paths of the story.

Issue: #43

Pull request: https://github.com/clw549/Nebulous-Enigma/pull/114 #114 

Links to an external site. 

Implemented by: Ciaran Wham 

Approved by: Levi Ly

# 3 Tests
## 3.1 Unittests
1. This test was made with supertest
2. Do keep in mind that this test file uses server.js and app.js files in the root directory, but this is where all the test code actually is:
   https://github.com/clw549/Nebulous-Enigma/tree/main/tests
3. So this tests if the root page, aka the "/" page can recieve a button click from the user. This uses a mock button by using a boolean called ButtonPressed.
   The code for this mock button is located here:

   Mock button: https://github.com/clw549/Nebulous-Enigma/blob/main/server.js

   Tests: https://github.com/clw549/Nebulous-Enigma/tree/main/tests

4. Please keep in mind that both the automated tests are run at once. The one that passed is the button pressed one.
   The one that failed is a user log in test, which will be discussed in more detail in 3.2.
   ![3.1 image](https://i.ibb.co/xmx5gW5/Screenshot-2024-11-23-162547.png)

## 3.2 Acceptance tests
1. This test was made with supertest
2. Do keep in mind that this test file uses server.js and app.js files in the root directory, but this is where all the test code actually is:
   https://github.com/clw549/Nebulous-Enigma/tree/main/tests
3. So this tests tests if a given username/password combination will work in playing the game.
   This uses a dummy username and a dummy password to test and see if it will move onto the next screen.
   This test should fail because obviously the dummy username and password are not in the database.

   The code for this test is in the same file as 3.1: https://github.com/clw549/Nebulous-Enigma/tree/main/tests

4. Please keep in mind that both the automated tests are run at once. The one that failed is the fake log in attempt.
   The error code it gives is 404 because it couldn't find the page that it would go to had the username and password been legit.
   ![3.2 image](https://i.ibb.co/xmx5gW5/Screenshot-2024-11-23-162547.png)


# 4 Demo

# 5 Code Quality

# 6 Lessons learned
We have learned a lot about React and MongoDB through this project. React being a great tool for modular peices of the story, where each story peice uses the same HTML and alters the text through using objects. Using React in this way we made our website easy to add story modules to and have different number of options for each one. React helps make the site more edit friendly. MongoDB is the database system we used in our website. We learned both how to query the website and how to add tuples into the website. We have also learned how to use local browser storage so that a user can be remembered and have information specific to them used within the website. We have also grown greatly as a team, showing how well we can work together and helping eachother in persuit of bettering ourselves. Overall this project has been a great learning experiece in teamwork and systems to run a website.
