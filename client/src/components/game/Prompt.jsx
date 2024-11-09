import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Choice from './Choice'
import story from '../../story'

function Prompt({ currentID, choiceClicked }) {

  const [user, setUser] = useState(null); // State to hold the user data
  const [name, setName] = useState('')

  // Finds and replaces "{value}" in a string, so e.g. in story.jsx, if you write
  // {name} in the prompt text, call interpolate(story[currentID].text, name) to
  // replace {name} with the value in the variable called name.
  const interpolate = (str, value) => {
    return str.replace(/{([^{}]*)}/g,
      (a, b) => {
          const r = value;
          return typeof r === 'string' || typeof r === 'number' ? r : a;
      }
    );
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser); // Parse the user data
      setUser(foundUser); // Update state with the user data

      console.log(foundUser.testing)
      console.log(loggedInUser)
    }

    setName(localStorage.getItem('name'))





  }, []); // Empty dependency array means this runs once on mount

  // I'm just straight up using interpolate here since I can't foresee us needing
  // to interpolate any values besides character name, but we could change this
  // in the future if necessary

  return (
    <div className='gameBG'>
      <div  className='story'>
        <p> { interpolate(story[currentID].text, name) } </p>
      </div>
      <div className='choice'>
        { story[currentID].choice.map((choice) => {
          return (
            // goes to a choice which is an index, here "choice.goTo" goes to the button that was clicked goto index
            <Choice handleClick={ () => choiceClicked(choice.goTo) } text={ interpolate(choice.text, name) } />
          )
        })}
      </div>
    </div>
  )
}

export default Prompt;
