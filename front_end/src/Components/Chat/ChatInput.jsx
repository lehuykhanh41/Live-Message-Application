import React, { useState } from 'react'
import useSendChat from '../Hooks/useSendChat';

function ChatInput() {
    const [message, setMessage] = useState("");
    const {loading, sendMessage} = useSendChat();

    async function handleSendMessage(event) {
        event.preventDefault();
        if (!message) {return;}
        else {
            const data = await sendMessage(message).then(setMessage("")); 
        }
    }
  return (
    <div className='h-1/6 mt-3'>

        <form className='flex flex-row justify-center items-center h-full' onSubmit={handleSendMessage}>
            <div className="w-full h-10">
                <input type="text" placeholder='Say Something...' className='text-sm rounded-full w-[95%] p-2 mt-1' value={message} onChange={(event)=>{setMessage(event.target.value)}}></input>
            </div>
            <button type="submit" className='btn btn-circle btn-md text-white bg-blue-600 hover:bg-blue-400 h-2 border-black absolute right-1'>
                {loading ? (<span className='loading loading-spinner'></span>) : (<span>➤</span>)}
                </button>
        </form>
    </div>
  )
}

export default ChatInput