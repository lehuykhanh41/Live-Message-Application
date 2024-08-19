import React from 'react';
import UserInfo from './UserInfo';
import SearchInput from './SearchInput';
import ConversationContainer from './ConversationContainer';
import { useState, useEffect } from 'react';
import "./Sidebar.css";
import singleIcon from '/Icon/singleIcon.svg';
import groupIcon from '/Icon/groupIcon.svg';
import useConversation from '../ZustandState/useConversation';

function Sidebar() {

  // Note: Tabs are for selection:
  // 0 is private conversation.
  // 1 is group conversation
  const {currentTab, setCurrentTab} = useConversation();

  return (
    <div className=" flex flex-col md:w-[35%] ml-2 pr-2 border-r-2 border-slate-500 ">

  
        <div className='mb-5'>
          <UserInfo />
        </div>

        <div className="flex flex-row text-white h-[4vh]">

          <div className={currentTab == 0? ("tab-selected tab-item") : ("tab-item")} onClick={()=>{setCurrentTab(0)}}>
              <img src={singleIcon} className='inner-icon' />
          </div>

          <div className={currentTab == 1? ("tab-selected tab-item") : ("tab-item")} onClick={()=>{setCurrentTab(1)}}>
               <img src={groupIcon} className='inner-icon' />
          </div>

        </div>

          
          <div className='mt-2'>
            <SearchInput />
          </div>
        
          <div className="px-1">
              <ConversationContainer />
          </div>

       
    </div>
  )
}

export default Sidebar;