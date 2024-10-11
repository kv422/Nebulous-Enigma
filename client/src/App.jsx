import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './components/login-signup/SignUp'
import LogIn from './components/login-signup/LogIn'
import Home from './components/home/Home'
import Story from './components/game/Story'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/login' element={ <LogIn /> } />
        <Route path='/home' element={ <Home /> } />

        <Route path='/game' element={ <Story /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
