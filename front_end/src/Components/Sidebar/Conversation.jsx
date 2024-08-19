import React, { useEffect, useState } from 'react'
import useConversation from '../ZustandState/useConversation';
import useGetMessage from '../Hooks/useGetMessage';
import { useSocketContext } from '../Context/SocketContext';
import groupIcon from '/Icon/groupIcon.svg';

function Conversation({conversation}) {

    const {selectedConversation, setSelectedConversation} = useConversation();
    const {getMessageBasedOnUser} = useGetMessage();
    const [select, setSelect] = useState(false);
    const {online} = useSocketContext();
    const {currentTab} = useConversation();

    const isOnline = online.includes(conversation._id)


    useEffect(()=>{
        if (selectedConversation) {
            setSelect(selectedConversation._id == conversation._id);
        }
    }, [selectedConversation]);

  return (
    <div>
        <div className={`${select? "bg-blue-600" : ""} flex items-center hover:bg-blue-400 rounded-lg cursor-pointer h-20`} onClick={()=>{setSelectedConversation(conversation)}}>
            
        {currentTab == 0 ?
        (<div className={isOnline ? "avatar online" : "avatar offline"}>
            <div className="w-16 h-18 rounded-full">
                <img src={conversation.avatar} alt="Online Avatar" />
            </div>
        </div>) : (
            <div className="">
            <div className="w-16 h-18 rounded-full">
                <img src={groupIcon} alt="Group Image" className='filter brightness-0 invert' />
            </div>
        </div>
        )
        }
        
        <div className="flex ml-4 overflow-hidden">
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