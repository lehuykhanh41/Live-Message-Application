import React from 'react'
import LogoutLogo from '../../assets/Icons/logout.svg'
import useLogout from '../../Components/Hooks/useLogout';

function LogoutButton() {
    const {loading, logOut} = useLogout();
  return (
    <div className="">
        {!loading ?
        (<img src={LogoutLogo} className="w-11" onClick={logOut}/>) : (<span className='loading loading-spinner'></span>)
        }
    </div>
  )
}

export default LogoutButton;