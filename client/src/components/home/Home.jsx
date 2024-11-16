import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Home() {
  const [name, setName] = useState(localStorage.getItem('name'))
  const navigate = useNavigate()

  const handleLogOut = async () => {
    localStorage.setItem('auth-token', '')
    localStorage.setItem('username', '')
    localStorage.setItem('name', '')
    localStorage.setItem('savedID', 0)
    navigate(0)
  }

  return (
    <div className='homeBG'>
      <title> Home </title>
      <div className='grid-container'>
      <div className='grid-item'>
      <p className='userName'>Hello, { name }</p>
      </div>
      <div className='grid-item'>
      <div className='buttonOrg'>
      <Link to='/game' className='button-33'> PLAY </Link>
      </div>
      </div>
      <div className='grid-item'>
      <div className='buttonOrg'>
      <button onClickCapture={ handleLogOut } className='button-33'> LOG OUT </button>
      </div>
      </div>
</div>
      </div>
  )
}


export default Home;
