import { useState } from 'react'
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignUp/SignUp';
import Home from './Components/Pages/Home/Home';
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom';
import { useVerifiedContext } from './Components/Context/VerifiedContext';

function App() {
  const {currUser} = useVerifiedContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">

      <Routes>
        <Route path='/' element={currUser ? <Home /> : <Navigate to="/login" />}></Route>
        <Route path='/login' element={currUser ? <Navigate to='/' /> : <Login />}></Route>
        <Route path='/signup' element={currUser ? <Navigate to="/" /> : <SignUp />}></Route>

      </Routes>
    </div>
  )
}

export default App;
