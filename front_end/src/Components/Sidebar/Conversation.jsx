import React from 'react'

function Conversation() {
  return (
    <div>
        <div className="flex items-center hover:bg-blue-300 rounded-lg cursor-pointer h-20">
            
        <div className="avatar offline">
            <div className="w-16 h-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Online Avatar" />
            </div>
        </div>
        
        <div className="flex ml-4 overflow-hiddem">
            <div>
                <p className="font-semibold text-lg text-white">
                    Mulataka
                </p>
            </div>
        </div>

    </div>


    </div>
  )
}

export default Conversation;