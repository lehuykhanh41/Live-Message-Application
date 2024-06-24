import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import { VerifiedContextProvider } from './Components/Context/VerifiedContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <VerifiedContextProvider>

        <App />

      </VerifiedContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)
