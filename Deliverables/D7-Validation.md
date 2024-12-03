# 1. Introduction

Nebulous Enigma is a web-based interactive storytelling game that immerses players in a sci-fi "choose your own adventure" experience. Each story unfolds through a series of pages, featuring descriptive text to set the narrative and interactive buttons for players to make choices that influence the plot's direction. The system ensures accessibility and flexibility by providing multiple login options: users can create an account, log in, or play as a guest. Account creation and login credentials, including usernames and passwords, are securely managed and stored using MongoDB. The game is built on the MERN stack, leveraging MongoDB for efficient data handling and JavaScript for seamless gameplay logic.

# 2. Validation (user evaluation)

## Script

### Tasks: 
- Achieve a "win" ending.
- Achieve a "fail" ending. 
- Play the game as you wish.

### Questions:
- What would you rate the navigability out of 10?
- What would you rate the story out of 10?
- What would you rate the immersion out of 10?
- What would you rate the interface out of 10?
- Is there anything that stood out to you?
- Is there anything that you wanted/wish you had?

## Results

### User 1:
- **Navigability:** 9
- **Story:** 10
- **Immersion:** 8
- **Interface:** 10
- **What stood out:** "Really rad becoming a pirate. I like some of the liberties taken in all the death endings, too."
- **What is desired:** "A load and save feature."

### User 2:
- **Navigability:** 
- **Story:** 
- **Immersion:** 
- **Interface:** 
- **What stood out:** 
- **What is desired:** 

### User 3:
- **Navigability:** 
- **Story:** 
- **Immersion:** 
- **Interface:** 
- **What stood out:** 
- **What is desired:** 

### User 4:
- **Navigability:** 
- **Story:** 
- **Immersion:** 
- **Interface:** 
- **What stood out:** 
- **What is desired:** 

## Reflections

For the most part, our UI and UX are good. Some things could be improved, but functionally, they serve well. These were the highest rated elements of out website. Nobody reported struggles in figuring out how to use the website. 

The actual game left something to be desired for some players. The story itself received quite a wide range of ratings, ultimately averaging around 7.0/10.0. If we were to continue this project, the story would likely be our biggest priority to improve. 

Additionally, immersion received a few decent ratings, but one very low one. Currently, our game only displays text with some images in the background. Sound and music would likely improve the immersion for players greatly. More relevant images, not only in the background but as larger focuses could also add much to the experience. 

One note from a user indicated that our implementation of saving/loading is not quite adequate. They did not realize that we had saving/loading at all. For a story-based game (especially one that is long), they expected that they would be able to save manually at any point in the story, and load that save at any point. Ideally, there would also be multiple save slots. Changing our current method of saving to be closer to this would likely not be too difficult.

Overall, while the base of our game is there, there are many small features and improvements we can make to enhance our game. For most games, the smaller details are what really make a game memorable, and the same is true for Nebulous Enigma. Our value proposition largely emphasized an entertaining sci-fi story, which is hard to say we completely achieved. However, with the basic mechanics of our game complete, we are able to focus our future work mainly on writing a more engaging story. The story is not hard-coded into the game, so it is easy to expand upon or otherwise modify. If we were to continue development, we are confident in our ability to deliver complete, satisfying, and exciting storylines with many options for players to choose their path.