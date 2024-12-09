import React from 'react'
import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import Music from '../../Music.jsx'

function Navbar() {
    const { setUserData } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
      setUserData({
        token: null,
        user: null,
      })

      localStorage.setItem('auth-token', '')
      localStorage.setItem('name', 'Rook')
      localStorage.setItem('username', '')
      localStorage.setItem('savedID', 0)

    }

    return (
      <div className='navbar'>
        <Link to='/home' className='navItem'> home </Link>
        <Music></Music>
        { localStorage.getItem('auth-token') ? <Link to='/' onClickCapture={ handleLogOut } className='navItem'> log out </Link>
                                             : null }
      </div>
      
    )
}

export default Navbar;
