import React from 'react';
import { useCurrUserContext } from '../Context/CurrUserContext';
import LogoutButton from './LogoutButton/LogoutButton';

function UserInfo() {

    const {currUser} = useCurrUserContext();

  return (
    <div className="flex flex-row items-center justify-center">
    <div className="flex gap-2 items-center text-center h-full w-full md:min-w-[18vw] cursor-pointer rounded-3xl">

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

    <div>
        <LogoutButton />
    </div>

    </div>
  )
}

export default UserInfo