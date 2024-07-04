import React, { useEffect, useState } from 'react'
import useConversation from '../ZustandState/useConversation';
import useGetMessage from '../Hooks/useGetMessage';

function Conversation({conversation}) {

    const {selectedConversation, setSelectedConversation} = useConversation();
    const {getMessageBasedOnUser} = useGetMessage();
    const [select, setSelect] = useState(false);

    useEffect(()=>{
        if (selectedConversation) {
            setSelect(selectedConversation._id == conversation._id);
        }
    }, [selectedConversation]);

  return (
    <div>
        <div className={`${select? "bg-primary" : ""} flex items-center hover:bg-blue-400 rounded-lg cursor-pointer h-20`} onClick={()=>{setSelectedConversation(conversation)}}>
            
        <div className="avatar offline">
            <div className="w-16 h-18 rounded-full">
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