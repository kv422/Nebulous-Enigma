import React from 'react'
import { useEffect, useState } from 'react'
import axios from '../../api/axios'
import Choice from './Choice'
import story from '../../story'

function Prompt({ currentID, choiceClicked }) {

  const [name, setName] = useState(localStorage.getItem('name'))
  const [username, setUsername] = useState(localStorage.getItem('username'))

  // Finds and replaces "{value}" in a string, so e.g. in story.jsx, if you write
  // {name} in the prompt text, call interpolate(story[currentID].text, name) to
  // replace {name} with the value in the variable called name.
  const interpolate = (str, value) => {
    return str.replace(/{([^{}]*)}/g, value)
  }

  useEffect(() => {
    const saveProgress = async () => {

      if (username) {
        try {
          // send post request to /signup
          axios.post('/save', { username, savedID: currentID })
          localStorage.setItem('savedID', currentID)
        } catch (err) {
          console.log(err)
        }
      }
    }

    saveProgress()

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
            <Choice key={ choice.id } handleClick={ () => choiceClicked(choice.goTo) } text={ interpolate(choice.text, name) } />
          )
        })}
      </div>
    </div>
  )
}

export default Prompt;
