import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import { VerifiedContextProvider } from './Components/Context/VerifiedContext.jsx';
import { SocketContextProvider } from './Components/Context/SocketContext.jsx';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <VerifiedContextProvider>
      <SocketContextProvider>
        <App />
        <ToastContainer />

      </SocketContextProvider>
      </VerifiedContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)

/* USED TECHNOLOGIES:

Build on Vite.

FRONT END:
- TAILWIND & POSTCSS
- DAISY UI
- REACT TOASTIFY
- REACT ROUTER DOM
- ZUSTAND
- AUTO PREFIXER.

BACK END:
- COOKIE PARSER
- BCRYPTJS
- DOTENV
- EXPRESS & MONGOOSE
- NODEMON

*/