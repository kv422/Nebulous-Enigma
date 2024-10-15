import React from 'react'
import { useState } from 'react'
import Choice from './Choice'
import story from '../../story'

function Prompt({ currentID, choiceClicked }) {
  return (
    <div>
      <div>
        <p> { story[currentID].text } </p>
      </div>

      <div>
        { story[currentID].choice.map((choice) => {
          return (
            <Choice handleClick={ () => choiceClicked(choice.goTo) } text={ choice.text } />
          )
        })}
      </div>
    </div>
  )
}

export default Prompt;
