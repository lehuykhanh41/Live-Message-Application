import React from 'react'
import useConversation from '../ZustandState/useConversation';
import { useVerifiedContext } from '../Context/VerifiedContext';

function ChatBubble(params) {
  const {selectedConversation} = useConversation();
  const {currUser} = useVerifiedContext();
 
  return (
    
    <div className="">
        <div>

        <div className={params.senderId == currUser._id ? ("chat chat-end") : ("chat chat-start")}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Avatar" src={params.senderId == currUser._id ? (currUser.avatar) : (selectedConversation.avatar)} />
                </div>
            </div>

          <div className="chat-header">
              {params.senderId == currUser._id ? (currUser.name) : (selectedConversation.name)}
          </div>
          <div className={params.senderId == currUser._id ? ("chat-bubble chat-bubble-primary text-left") : ("chat-bubble")}>{params.message}</div>
            
          </div>
          </div>
      

    </div>
  )
}

export default ChatBubble;