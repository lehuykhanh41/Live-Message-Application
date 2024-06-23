import { useState } from 'react'
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignUp/SignUp';
import Home from './Components/Pages/Home/Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4 h-screen flex items-center justify-center">

      <Home />
    </div>
  )
}

export default App;
