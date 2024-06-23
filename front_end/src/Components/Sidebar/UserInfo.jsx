import React from 'react'

function UserInfo() {
  return (
    <div className="flex gap-2 items-center text-center h-full">

        <div className="avatar offline">
            <div className="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Online Avatar" />
            </div>
        </div>

        <div className="flex">
            <div className="text-white text-2xl font-bold">
                Nubba
            </div>
        </div>

        
    </div>
  )
}

export default UserInfo