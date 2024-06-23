import React from 'react'

function SearchInput() {
  return (
    <div className="flex pt-3">
        
        <div className="">
        <form className="flex gap-2">

            <input type="text" placeholder='Search:' className="input input-bordered rounded-full md:min-w-[100%]"></input>
            <button type="submit" className="text-2xl btn btn-circle bg-grey-500 hover:bg-blue-400 border-slate-700">
            🔍
            </button>
        </form>
        </div>

    </div>
  )
}

export default SearchInput