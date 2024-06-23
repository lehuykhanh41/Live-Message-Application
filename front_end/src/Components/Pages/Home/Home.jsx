import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import ChatSection from '../../Chat/ChatSection';

function Home() {
  return (
    
    <div className="flex gap-6 sm:min-w-[80vw] md:max-h-[80vh] overflow-hidden p-2 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-white">
        
      <Sidebar />
      <ChatSection />
      
    </div>  
  )
}

export default Home