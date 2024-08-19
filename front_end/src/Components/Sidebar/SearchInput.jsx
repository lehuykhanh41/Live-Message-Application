import React, { useState } from 'react'
import { toast } from 'react-toastify';
import useGetConversation from '../Hooks/useGetConversation';
import useConversation from '../ZustandState/useConversation';

function SearchInput() {

  const [inputs, setInput] = useState("");
  const {currentTab} = useConversation();
  const {conversation, singleConversation, groupConversation} = useGetConversation();
  const {setSelectedConversation} = useConversation();

  function handlePersonSearch(event) {
    event.preventDefault();
    if (inputs.length < 2) {
      toast.error("Please enter a longer name");
    } else {
      let inputLowerCase = inputs.toLowerCase();
      // Find By Username.

      let result = null;

      if (currentTab == 0) {
         result = conversation.find((item)=>{return item.name.toLowerCase().includes(inputLowerCase)});
      } else if (currentTab == 1) {
        result = groupConversation.find((item)=>{return item.name.toLowerCase().includes(inputLowerCase)});
      }
      if (result) {

        setSelectedConversation(result);
        
      } else {
        if (currentTab == 0) {
          toast.error(`Person ${inputs} not found.`);
        } else if (currentTab == 1) {
          toast.error(`Group ${inputs} not found.`);
        }
      }
    }
  }

  return (
    <div className="flex pt-3">
        
        <div className="">
        <form className="flex items-center justify-center w-full gap-5" onSubmit={handlePersonSearch}>

            <input type="text" placeholder='🔎 Search for a name:' className="input input-bordered rounded-full w-full md:min-w-[20vw] h-[35px]" value={inputs} onChange={(event)=>{setInput(event.target.value)}}></input>
             
        </form>
        </div>

    </div>
  )
}

export default SearchInput