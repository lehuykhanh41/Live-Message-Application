import React from 'react';
import UserInfo from './UserInfo';
import SearchInput from './SearchInput';
import ConversationContainer from './ConversationContainer';

function Sidebar() {
  return (
    <div className=" flex flex-col md:w-[35%]">

        <div className='h-1/6'>
          <UserInfo />
        </div>
        <SearchInput />
        <div className="px-1">
            <ConversationContainer />
        </div>

       
    </div>
  )
}

export default Sidebar;