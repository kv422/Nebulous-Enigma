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
    <div>
      <title> Home </title>
      <p>Hello, { username }</p>
      <Link to='/game' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> PLAY </Link>
      <button onClickCapture={ handleLogOut } className='btn btn-success w-100 rounded-0'> LOG OUT </button>
    </div>
  )
}


export default Home;
