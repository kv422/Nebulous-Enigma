import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Music from '../../Music.jsx'

function Home() {
  const [name, setName] = useState(localStorage.getItem('name'))
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.setItem('auth-token', '')
    localStorage.setItem('name', 'Rook')
    localStorage.setItem('username', '')
    localStorage.setItem('savedID', 0)

    navigate(0)
  }  

  return (
    <div className='homeBG'>
      <title> Home </title>
      <div className='grid-container'>
        <div className='grid-item'>
          <p className='userName'> Hello, { name } </p>
        </div>
        <div className='grid-item'>
          <div>
            <Link to='/game' className='play'> play </Link>
          </div>
        </div>
        <div className='grid-item'>
          <div>
            <button onClickCapture={ handleLogOut } className='button-33'> log out </button>
          </div>
        </div>
          <div>
            <Music></Music>
          </div>
      </div>
    </div>
  )
}

export default Home;
