import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './login-signup/SignUp'
import LogIn from './login-signup/LogIn'
import Home from './home/Home'
import Story from './story/Story'



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
