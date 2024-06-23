import React from 'react'

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 min-h-90 mx-auto">
    
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-white">
        
        <h1 className="text-3xl text-white font-semibold text-center">LOGIN 
            <span className="text-blue-200 font-Serif"></span>
        </h1>

        <form>
          <div>
            <label className="label p-2"></label>
            <input type="text" placeholder="Username:" className="w-full input input-bordered h-10"></input>

            <label className="label p-2"></label>
            <input type="text" placeholder="Password:" className="w-full input input-bordered h-10"></input>
          </div>

          <div className="mt-3">
            <a href="#" className="text-white text-sm hover:underline hover:text-blue-300 italic">Don't have an account? Register now</a>
          </div>

          <div>
            <button className="text-white bg-gray-600 hover:bg-gray-500 btn btn-md mt-3 border border-slate-900">LOGIN</button>
          </div>
        </form>

      </div>  

    </div>
  )
}

export default Login;
