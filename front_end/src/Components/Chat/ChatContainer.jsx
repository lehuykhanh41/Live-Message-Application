import React, {useEffect, useState} from 'react';
import ChatBubble from './ChatBubble';
import useConversation from '../ZustandState/useConversation';
import useGetMessage from '../Hooks/useGetMessage';


function ChatContainer() {
  const {loading, getMessageBasedOnUser} = useGetMessage();
  const {selectedConversation, messages} = useConversation();
  const [messageMap, setMessageMap] = useState([]);

  useEffect(()=>{

      if (selectedConversation) {
        getMessageBasedOnUser();
      }

      /*
    if (messages) {
      let mapData = messages.map((item)=>{
        return <ChatBubble senderId={item.senderId} receiverId={item.receiverId} message={item.message} />
      });
      
      setMessageMap(mapData);
    }
      */
  }
  
  , [selectedConversation]);


  return (

    <div className="px-4 flex flex-1 flex-col-reverse overflow-auto">

    {messages ? (<div>
      {messages.map((item)=>{
        return <ChatBubble senderId={item.senderId} receiverId={item.receiverId} message={item.message} />
      })}
    </div>) : (<div><h1 className="text-white italic font-semibold">Type something to start chatting with {selectedConversation.name}.</h1></div>)}
        

    </div>
  )
}

export default ChatContainer;