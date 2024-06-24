import React from 'react'
import useConversation from '../ZustandState/useConversation';

function Conversation({key, conversation}) {

    const {selectedConversation, setSelectedConversation} = useConversation();

    const selected = selectedConversation?._id === conversation._id;

  return (
    <div>
        <div className={`${selected ? "bg-blue-600" : ""} flex items-center hover:bg-blue-300 rounded-lg cursor-pointer h-20`} onClick={()=>setSelectedConversation(conversation)}>
            
        <div className="avatar offline">
            <div className="w-16 h-16 rounded-full">
                <img src={conversation.avatar} alt="Online Avatar" />
            </div>
        </div>
        
        <div className="flex ml-4 overflow-hiddem">
            <div>
                <p className="font-semibold text-lg text-white">
                    {conversation.name}
                </p>
            </div>
        </div>

    </div>


    </div>
  )
}

export default Conversation;