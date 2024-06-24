import React from 'react';
import ChatContainer from './ChatContainer';
import ChatInput from './ChatInput';
import MessageLogo from '../../assets/Icons/message.svg'
import useConversation from '../ZustandState/useConversation';


function StartingScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-3/4 h-full text-center absolute">
      <div className="text-white text-2xl font-bold">
        Welcome, Nubba <br /> Please select a person to start chatting.
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

    <div className="md:min-w-[450px] w-full flex flex-col">
        
       {/*Conditional Rendering*/}

        {selectedConversation ? 
        (<div>
        <div className="bg-slate-500 backdrop-filer backdrop-blur-lg bg-opacity-50 px-4 py-2 mb-2 rounded-full">
            <span className="text-white font-bold text-2xl">{selectedConversation.name}</span>
        </div>

        <div className="h-3/4 flex">
          <ChatContainer />
        </div>
        
        <div className="h-1/6">
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