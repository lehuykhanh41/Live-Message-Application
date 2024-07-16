import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import ChatSection from '../../Chat/ChatSection';
import LogoutButton from '../../Sidebar/LogoutButton';

function Home() {
  return (

    <div>

    <div className='absolute top-10 border rounded-full border-white py-1 pr-2 hover:bg-blue-400 border-2'>
        <LogoutButton />
    </div>
    
    <div className="flex gap-6 sm:min-w-[80vw] md:max-h-[80vh] md:min-h-[80vh] overflow-hidden p-2 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-white mt-20">
        
      <Sidebar />
      <ChatSection />

      
    </div>  

    

    </div>
  )
}

export default Home