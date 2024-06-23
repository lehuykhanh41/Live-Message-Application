import React from 'react'

function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 min-h-90 mx-auto">

      <div className="w-full p-6 shadow-lg rounded-lg backdrop-filer backdrop-blur-lg bg-gray-400 bg-clip-border bg-opacity-0">

      <h1 className="text-3xl text-white font-semibold text-center">SIGN UP 
            <span className="text-blue-200 font-Serif"></span>
        </h1>

        <form>
          <div>

          <label className="label p-2"></label>
          <input type="text" placeholder="Your name:" className="w-full input input-bordered h-10"></input>

            <label className="label p-2"></label>
            <input type="text" placeholder="Enter an username:" className="w-full input input-bordered h-10"></input>

            <label className="label p-2"></label>
            <input type="text" placeholder="Enter your password:" className="w-full input input-bordered h-10"></input>

            <label className="label p-2"></label>
            <input type="text" placeholder="Confirm password:" className="w-full input input-bordered h-10"></input>
          </div>

          <div>
          <button className="text-white bg-gray-600 hover:bg-gray-500 btn btn-md mt-5 border border-slate-900">SIGN UP</button>
          </div>
        </form>

      </div>
      
    </div>
  )
}

export default SignUp;