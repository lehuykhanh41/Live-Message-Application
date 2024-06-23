import React from 'react'

function ChatInput() {
  return (
    <div>

        <form className='flex'>
            <div className="w-full h-10">
                <input type="text" placeholder='Say Something...' className='text-sm rounded-full w-full p-2 mt-1'></input>
            </div>
            <button type="submit" className='btn btn-circle btn-md text-white bg-primary h-2 border-black absolute right-1'>➤</button>
        </form>
    </div>
  )
}

export default ChatInput