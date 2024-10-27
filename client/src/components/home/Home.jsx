import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Home() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()



  useEffect(() => {
    const getUsername = async () => {
      setUsername(localStorage.getItem('username'))
    }
    getUsername()
  }, [])

  const handleLogOut = async () => {
    localStorage.setItem('auth-token', '')
    localStorage.setItem('username', '')
    navigate(0)
  }

  return (
    <div className='homeBG'>
      <title> Home </title>
      <div className='grid-container'>
      <div className='grid-item'>
      <p className='userName'>Hello, { username }</p>
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
