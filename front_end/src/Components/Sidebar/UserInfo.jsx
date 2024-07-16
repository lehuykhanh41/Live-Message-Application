import React from 'react';
import { useVerifiedContext } from '../Context/VerifiedContext';

function UserInfo() {

    const {currUser} = useVerifiedContext();

  return (
    <div className="flex gap-2 items-center text-center h-full w-full md:min-w-[18vw]">

        <div className="avatar online">
            <div className="w-16 rounded-full">
                <img src={currUser.avatar} alt="Online Avatar" />
            </div>
        </div>

        <div className="flex ml-3">
            <div className="text-white text-xl font-bold">
                {currUser.name} (You)
            </div>
        </div>

        
    </div>
  )
}

export default UserInfo