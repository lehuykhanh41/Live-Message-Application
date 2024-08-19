import React from 'react';
import logo from '/logo.png';
import landingLogo from '/landingLogo.png';
import landingChatPhoto from '/landingChatPhoto.jpg';
import { useNavigate } from 'react-router-dom';
import useLanding from '../../ZustandState/useLanding';

import './Landing.css'

function Landing() {

  let navigate = useNavigate();
  let {setLanding} = useLanding();

  function getToLogin() {
    navigate("/login");
    setLanding(false);
  }

  return (
    <div className="">
        <div className="flex flex-col items-center justify-center w-full gap-0">
            <img src={logo} className="w-[100vw] max-w-[1200px] glowing-logo"/>
            
              <div className="text-[white] font-bold landing-text">Conversation made simple</div>

              <div className="flex-col justify-center items-center chatbox">
                <p className="text-[#00feff] landing-bubble-text text-[35px] font-bold italic text-center">"Welcome to Mini-Convo 😊"</p>
              </div>

            <div className="text-center">
                <button className="text-[white] w-[40vw] h-[7vh] mt-5 p-3 font-bold text-[1.5em] border landing-button" onClick={getToLogin}>
                GET STARTED
                </button>
            </div>

            <div>
              
            </div>
            
        </div>
        
    </div>
  )
}

export default Landing;