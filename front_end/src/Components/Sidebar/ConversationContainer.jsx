import React, { useState } from 'react'
import Conversation from './Conversation';
import useGetConversation from '../Hooks/useGetConversation';
import { useEffect } from 'react';

function ConversationContainer() {
  const {loading, conversation} = useGetConversation();
  const [usersArray, setUsersArray] = useState([]);

  useEffect(()=>{
    setUsersArray(conversation);
    renderUsersArray();
  }, [conversation]);

  function renderUsersArray() {
    let data = usersArray.map((item)=>{return <Conversation conversation={item} />});

    return data;
  }

  return (

    <div className="py-3 my-3 gap-3 flex flex-col overflow-auto md:h-[95%]">

        {(usersArray.length > 0) ? (renderUsersArray()) : (<h1 className='text-white'>No user is found.</h1>)}

        
    </div>
    
  )
}

export default ConversationContainer;