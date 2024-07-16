import React from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import useSignUp from '../../Hooks/useSignUp';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    password: "",
    pwverify: ""
  });

  const {loading, signUp} = useSignUp();

  async function proceedToSignUp(event) {
      event.preventDefault();
      if (inputs.username.includes("@")) {
        toast.error("Username cannot contain special characters.");
      } else if (inputs.password.length < 6) {
        toast.error("Password needs to be at least 6 characters long.");
      } else {
        await signUp(inputs);
      }
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 min-h-90 mx-auto">

      <div className="w-full p-6 shadow-lg rounded-lg backdrop-filer backdrop-blur-lg bg-gray-400 bg-clip-border bg-opacity-0 border border-white">

      <h1 className="text-3xl text-white font-semibold text-center">SIGN UP 
            <span className="text-blue-200 font-Serif"></span>
        </h1>

        <form onSubmit={proceedToSignUp}>
          <div>

          <label className="label p-2"></label>
          <input type="text" placeholder="Your name:" className="w-full input input-bordered h-10" value={inputs.name} onChange={(event)=>setInputs({...inputs, name: event.target.value})}></input>

            <label className="label p-2"></label>
            <input type="text" placeholder="Enter an username:" className="w-full input input-bordered h-10" value={inputs.username} onChange={(event)=>setInputs({...inputs, username: event.target.value.toLowerCase()})}></input>

            <label className="label p-2"></label>
            <input type="password" placeholder="Enter your password:" className="w-full input input-bordered h-10" value={inputs.password} onChange={(event)=>setInputs({...inputs, password: event.target.value})}></input>

            <label className="label p-2"></label>
            <input type="password" placeholder="Confirm password:" className="w-full input input-bordered h-10" value={inputs.pwverify} onChange={(event)=>setInputs({...inputs, pwverify: event.target.value})}></input>
          </div>


          <div className="mt-3 text-center">
            <Link to="/login" className="text-white text-sm hover:underline hover:text-blue-300 italic">Already have an account?</Link>
          </div>

          <div className='text-center'>
          <button className="text-white bg-blue-500 hover:bg-blue-700 btn btn-md mt-5 border border-slate-900" disabled={loading}>
          {loading ? (<span className='loading loading-dots'></span>) : (<span>SIGN UP</span>)}</button>
          </div>
        </form>

      </div>
      
    </div>
  )
}

export default SignUp;