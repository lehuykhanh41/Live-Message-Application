import React from 'react';
import ChatContainer from './ChatContainer';
import ChatInput from './ChatInput';
import MessageLogo from '../../assets/Icons/message.svg'
import useConversation from '../ZustandState/useConversation';
import { useState, useEffect } from 'react';
import { useCurrUserContext } from '../Context/CurrUserContext';


function StartingScreen() {
  const {currUser} = useCurrUserContext();
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] max-h-[700px] text-center">
      <div className="text-white text-3xl font-bold text-center">
        Welcome, {currUser.name} <br /> Please search / select a conversation to start.
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
        <div className="bg-blue-600 shadow-md shadow-blue-400 border-2 border-blue-400 px-4 py-2 mb-2 ml-[-25px] mt-[-8px] text-center">
            <span className="text-white font-bold text-3xl">{selectedConversation.name}</span>
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