import React, { useState } from 'react'
import useSendChat from '../Hooks/useSendChat';

function ChatInput() {
    const [message, setMessage] = useState("");
    const {loading, sendMessage} = useSendChat();

    async function handleSendMessage(event) {
        event.preventDefault();
        if (!message) {return;}
        const data = await sendMessage(message);
    }
  return (
    <div>

        <form className='flex' onSubmit={handleSendMessage}>
            <div className="w-full h-10">
                <input type="text" placeholder='Say Something...' className='text-sm rounded-full w-full p-2 mt-1' value={message} onChange={(event)=>{setMessage(event.target.value)}}></input>
            </div>
            <button type="submit" className='btn btn-circle btn-md text-white bg-primary h-2 border-black absolute right-1' disable={loading}>
                {loading ? (<span className='loading loading-spinner'></span>) : (<span>➤</span>)}
                </button>
        </form>
    </div>
  )
}

export default ChatInput