import React from 'react';
import UserInfo from './UserInfo';
import SearchInput from './SearchInput';
import ConversationContainer from './ConversationContainer';

function Sidebar() {
  return (
    <div className=" flex flex-col md:w-[35%] border-r-2 border-slate-500 ">

      <div className="mt-3">
        <div className='mb-2'>
          <UserInfo />
        </div>
        <SearchInput />
        </div>
        <div className="px-1">
            <ConversationContainer />
        </div>

       
    </div>
  )
}

export default Sidebar;