import React from 'react'
import { useState, useEffect } from 'react';
import useConversation from '../ZustandState/useConversation';
import { useCurrUserContext } from '../Context/CurrUserContext';
import useGetConversation from '../Hooks/useGetConversation';
import groupIcon from '/Icon/groupIcon.svg';

function ChatBubble(params) {
  const {selectedConversation} = useConversation();
  const {conversation} = useGetConversation();
  const {currUser} = useCurrUserContext();
 
  let avatar = "";
  let name = "";

  if (params.senderId != currUser.id) {
    let find = conversation.find((item)=>item._id == params.senderId);
    if (find) {
      avatar = find.avatar;
      name = find.name;
    }
  }
  
 
  return (
    
    <div className="">
        <div>

        <div className={params.senderId == currUser._id ? ("chat chat-end") : ("chat chat-start")}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Avatar" src={params.senderId == currUser._id ? (currUser.avatar) : (avatar)} />
                </div>
            </div>

          <div className="chat-header text-white">
              {params.senderId == currUser._id ? (currUser.name) : (name)}
          </div>
          <div className={params.senderId == currUser._id ? ("chat-bubble bg-blue-700 text-left") : ("chat-bubble")}>{params.message}</div>
            
          </div>
          </div>
      

    </div>
  )
}

export default ChatBubble;