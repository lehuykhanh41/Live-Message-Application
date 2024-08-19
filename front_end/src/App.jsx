import { useEffect } from 'react';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignUp/SignUp';
import Home from './Components/Pages/Home/Home';
import Landing from './Components/Pages/Landing/Landing';
import './App.css'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { useCurrUserContext } from './Components/Context/CurrUserContext';
import useLanding from './Components/ZustandState/useLanding';
import logo from '../public/logo.png';


function App() {
  const {currUser} = useCurrUserContext();
  const {isLanding, setLanding} = useLanding();

  useEffect(()=>{
    if (currUser) {
      setLanding(false);
    }
  }, []);

  return (
    <div>
      
    <div className="p-4 h-screen flex flex-col items-center justify-center">

    {isLanding ? null : <img src={logo} className="absolute top-1"></img>}
      <Routes>
        <Route path='/' element={currUser ? <Navigate to="/login"/> : <Landing /> }></Route>
        <Route path='/home' element={currUser ? <Home /> : <Navigate to="/" />}></Route>
        <Route path='/login' element={currUser ? <Navigate to="/home" /> : <Login />}></Route>
        <Route path='/signup' element={currUser ? <Navigate to="/home" /> : <SignUp />}></Route>

      </Routes>
    </div>
    </div>
  )
}

export default App;
