import React, { useState } from 'react'
import { toast } from 'react-toastify';
import useGetConversation from '../Hooks/useGetConversation';
import useConversation from '../ZustandState/useConversation';

function SearchInput() {

  const [inputs, setInput] = useState("");
  const {conversation} = useGetConversation();
  const {setSelectedConversation} = useConversation();

  function handlePersonSearch(event) {
    event.preventDefault();
    if (inputs.length < 2) {
      toast.error("Please enter a longer name");
    } else {
      let inputLowerCase = inputs.toLowerCase();
      const result = conversation.find((item)=>{return item.name.toLowerCase().includes(inputLowerCase)});
      if (result) {
        setSelectedConversation(result);
      } else {
        toast.error(`Person ${inputs} not found.`)
      }
    }
  }

  return (
    <div className="flex pt-3 w-full">
        
        <div className="">
        <form className="flex gap-2" onSubmit={handlePersonSearch}>

            <input type="text" placeholder='Enter First Name:' className="input input-bordered rounded-full md:min-w-[16vw]" value={inputs} onChange={(event)=>{setInput(event.target.value)}}></input>
            <button type="submit" className="text-2xl btn btn-circle bg-grey-500 hover:bg-blue-400 border-slate-700">
            🔍
            </button>
        </form>
        </div>

    </div>
  )
}

export default SearchInput