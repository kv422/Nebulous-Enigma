import React, { Component } from "react";
 
// Import your audio file
import song from './audio.mp3';
 
class Music extends React.Component {
    // Create state
    state = {
 
        // Get audio file in a variable
        audio: new Audio(song),
 
        // Set initial state of song
        isPlaying: false,
    };
 
    // Main function to handle both play and pause operations
    playPause = () => {
 
        // Get state of song
        let isPlaying = this.state.isPlaying;
 
        if (isPlaying) {
            // Pause the song if it is playing
            this.state.audio.pause();
            this.state.audio.currentTime = 0;
        } else {
 
            // Play the song if it is paused
            this.state.audio.play();
        }
 
        // Change the state of song
        this.setState({ isPlaying: !isPlaying });
    };

    componentWillUnmount() {
        const { audio } = this.state;

        // Stop playback and reset the audio
        audio.pause();
        audio.currentTime = 0;
    };
 
    render() {
        return (
            <div>
                <button onClick={this.playPause} className='music-button'>
                    Play | Pause
                </button>
            </div>
        );
    }
}
 
export default Music;


