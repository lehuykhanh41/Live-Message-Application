import React from 'react'
import ChatBubble from './ChatBubble2';


function ChatContainer() {

  return (
    <div className="px-4 flex flex-1 flex-col-reverse overflow-auto h-full">
            
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />
        <ChatBubble />

    </div>
  )
}

export default ChatContainer;