import React from 'react'

function Choice({ handleClick, text }) {
  return (
    <button onClick={ handleClick } className='button-33'>
      { text }
    </button>
  )
}

export default Choice;
