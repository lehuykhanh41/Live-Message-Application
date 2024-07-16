import { useState } from 'react'
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignUp/SignUp';
import Home from './Components/Pages/Home/Home';
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import { useVerifiedContext } from './Components/Context/VerifiedContext';
import logo from '../public/logo.png';

function App() {
  const {currUser} = useVerifiedContext();

  return (
    <div>
      
    <div className="p-4 h-screen flex flex-col items-center justify-center">

      <img src={logo} className="absolute top-2"></img>

      <Routes>
        <Route path='/' element={currUser ? <Home /> : <Navigate to="/login" />}></Route>
        <Route path='/login' element={currUser ? <Navigate to='/' /> : <Login />}></Route>
        <Route path='/signup' element={currUser ? <Navigate to="/" /> : <SignUp />}></Route>

      </Routes>
    </div>
    </div>
  )
}

export default App;
