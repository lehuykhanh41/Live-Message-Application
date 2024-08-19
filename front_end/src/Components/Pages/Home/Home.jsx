import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import ChatSection from '../../Chat/ChatSection';
import LogoutButton from '../../Sidebar/LogoutButton/LogoutButton';

function Home() {
  return (

    <div>
    
    <div className="flex gap-6 sm:min-w-[80vw] md:max-h-[80vh] md:min-h-[80vh] overflow-hidden pt-2 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-white mt-20">
        
      <Sidebar />
      <ChatSection />
      

    </div>  

    

    </div>
  )
}

export default Home