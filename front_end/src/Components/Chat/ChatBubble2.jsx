import React from 'react'
import useConversation from '../ZustandState/useConversation';

function ChatBubble() {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation.id;

  return (
    <div className="">
        
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Avatar" src={conversation.avatar} />
                </div>
            </div>

          <div className="chat-header">
              {conversation.name}
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
            
          </div>

    </div>
  )
}

export default ChatBubble;