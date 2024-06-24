import React from 'react'
import Conversation from './Conversation';
import useGetConversation from '../Hooks/useGetConversation';

function ConversationContainer() {
  const [loading, conversation] = useGetConversation();

  return (
    <div className="py-3 my-3 gap-3 flex flex-col overflow-scroll md:h-[62%]">
      
      {conversation.map((item)=>{
        <Conversation 
          key={item._id}
          conversation={item}
        ></Conversation>
      })}
    </div>
    
  )
}

export default ConversationContainer;