import {React, useState} from 'react'
import {Link} from 'react-router-dom';
import useLogin from '../../Hooks/useLogin';

function Login() {

  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const {loading, issueLogin} = useLogin();

  async function handleLogin(event) {
      event.preventDefault();
      const res = await issueLogin(loginInfo);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 min-h-90 mx-auto">
    
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-white">
        
        <h1 className="text-3xl text-white font-semibold text-center">LOGIN 
            <span className="text-blue-200 font-Serif"></span>
        </h1>

        <form onSubmit={handleLogin}>
          <div>
            <label className="label p-2"></label>
            <input type="text" placeholder="Username:" className="w-full input input-bordered h-10" value={loginInfo.username} onChange={(event)=>{setLoginInfo({...loginInfo, username: event.target.value.toLowerCase()})}}></input>

            <label className="label p-2"></label>
            <input type="password" placeholder="Password:" className="w-full input input-bordered h-10" value={loginInfo.password} onChange={(event)=>{setLoginInfo({...loginInfo, password: event.target.value})}}></input>
          </div>

          <div className="mt-3 text-center">
            <p className="text-white text-md italic">Don't have an account? <Link to="/signup" className="hover:underline hover:text-[#00feff] font-bold">Register now</Link></p>
          </div>

          <div className="text-center">
            <button className="text-white bg-[#0f7d9f] hover:bg-[#00feff] btn btn-md mt-3 border border-slate-900" disabled={loading}>
              {loading ? (<span className='loading loading-spinner'></span>) : (<span>LOGIN</span>)}
              </button>
          </div>
        </form>

      </div>  

    </div>
  )
}

export default Login;
