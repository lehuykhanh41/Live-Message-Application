import React, { useState } from 'react'
import Conversation from './Conversation';
import useGetConversation from '../Hooks/useGetConversation';
import { useEffect } from 'react';
import useConversation from '../ZustandState/useConversation';

function ConversationContainer() {
  const {currentTab} = useConversation();
  const {loading, conversation, singleConversation, groupConversation} = useGetConversation();
  const [conversationArray, setConversationArray] = useState([]);
  const [renderingData, setRenderingData] = useState();

  useEffect(()=>{
    if (currentTab == 0) {
      setConversationArray(conversation);
    } else if (currentTab == 1){
      setConversationArray(groupConversation);
    }
  }, [currentTab, conversation, groupConversation]);

  useEffect(()=>{
    renderConversationArray();
  }, [conversationArray]);

  
  function renderConversationArray() {
    let data = conversationArray.map((item)=>{return <Conversation conversation={item} />});
    setRenderingData(data);
  }
  return (

    <div className="py-3 my-3 gap-3 overflow-auto flex flex-col md:h-[95%] max-h-[60vh]">

        {(conversationArray.length > 0) ? (renderingData) : (<h1 className='text-white'>Search for an user to start a conversation.</h1>)}

        
    </div>
    
  )
}

export default ConversationContainer;