import React from 'react';
import ChatContainer from './ChatContainer';
import ChatInput from './ChatInput';
import MessageLogo from '../../assets/Icons/message.svg'
import useConversation from '../ZustandState/useConversation';
import { useState, useEffect } from 'react';
import { useVerifiedContext } from '../Context/VerifiedContext';


function StartingScreen() {
  const {currUser} = useVerifiedContext();
  return (
    <div className="flex flex-col items-center justify-center text-center w-2/3 h-full text-center absolute">
      <div className="text-white text-2xl font-bold text-center">
        Welcome, {currUser.name} <br /> Please select a person to start chatting.
      </div>

      <img src={MessageLogo} className='w-2/6 mt-3'></img>
      
    </div>
  )
}

function ChatSection() {

  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(()=>{
    return () => setSelectedConversation(null);
  }, []);
   
  return (

    <div className="w-full flex flex-col">
        
       {/*Conditional Rendering*/}

        {selectedConversation ? 
        (<div className="flex flex-col h-full">
        <div className="bg-blue-600 backdrop-filer backdrop-blur-lg bg-opacity-70 px-4 py-2 mb-2 rounded-full text-center">
            <span className="text-white font-bold text-2xl">{selectedConversation.name}</span>
        </div>

        <div className="h-[90%] max-h-[90%] overflow-auto flex mb-10">
          <ChatContainer />
        </div>
        
        <div className="h-[10%] relative bottom-0 w-full">
          <ChatInput />
        </div>
        </div>) : (

            <div>
              <StartingScreen />
            </div>
        )
        }
    </div>
  )
}


export default ChatSection;