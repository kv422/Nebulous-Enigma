import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'

function Navbar() {
    const { setUserData } = useContext(UserContext)
    const navigate = useNavigate()

    function logout() {
      setUserData({
        token: null,
        user: null,
      })

      localStorage.removeItem('auth-token')

      localStorage.removeItem('name')
      localStorage.removeItem('username')

      localStorage.removeItem('savedID')

      navigate('../')
    }

    return (
        <div className='navbar'>
            <a className='navItem' href='../home'>Home</a>
            <a className='navItem' onClick={logout}>Logout</a>
        </div>
    );
}

export default Navbar;
