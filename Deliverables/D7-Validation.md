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
- **Navigability:** 8
- **Story:** 8
- **Immersion:** 7
- **Interface:** 7
- **What stood out:** Try to avoid localStorage for tokens, and have client-side form validation to prevent the extra request to the server.
- **What is desired:** A bit of dynamics help, like RNG, instead of full static content. try nginx if you aren't using that already due to the limited resources of a pi

### User 3:
- **Navigability:** 7
- **Story:** 7
- **Immersion:** 7
- **Interface:** 8
- **What stood out:** The background was amazing. The artist did a great job. I liked the story.
- **What is desired:** I played on my phone and I noticed that choosing an action were on the far right. It would have been nice if it was centered. A save point would be a great tool for players that don't want to start over and just choose the action they didn't already pick. Play as guess would bring me to a blank page even when I tried on pc. The story was great. However the intro felt a bit abrupt. Having the main character have a reason/purpose of going to space would be awesome for the intro. Either way, great game. I enjoyed it.

## Reflections

For the most part, our UI and UX are good. Some things could be improved, but functionally, they serve well. These were the highest rated elements of out website. Nobody reported struggles in figuring out how to use the website. 

The actual game left something to be desired for some players. The story itself received quite a wide range of ratings, ultimately averaging around 7.0/10.0. If we were to continue this project, the story would likely be our biggest priority to improve. 

Additionally, immersion received a few decent ratings, but one very low one. Currently, our game only displays text with some images in the background. Sound and music would likely improve the immersion for players greatly. More relevant images, not only in the background but as larger focuses could also add much to the experience. 

One note from a user indicated that our implementation of saving/loading is not quite adequate. They did not realize that we had saving/loading at all. For a story-based game (especially one that is long), they expected that they would be able to save manually at any point in the story, and load that save at any point. Ideally, there would also be multiple save slots. Changing our current method of saving to be closer to this would likely not be too difficult.

Overall, while the base of our game is there, there are many small features and improvements we can make to enhance our game. For most games, the smaller details are what really make a game memorable, and the same is true for Nebulous Enigma. Our value proposition largely emphasized an entertaining sci-fi story, which is hard to say we completely achieved. However, with the basic mechanics of our game complete, we are able to focus our future work mainly on writing a more engaging story. The story is not hard-coded into the game, so it is easy to expand upon or otherwise modify. If we were to continue development, we are confident in our ability to deliver complete, satisfying, and exciting storylines with many options for players to choose their path.
