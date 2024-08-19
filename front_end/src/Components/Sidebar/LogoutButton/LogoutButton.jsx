import React from 'react'
import LogoutLogo from '/Icon/logoutIcon.svg'
import useLogout from '../../Hooks/useLogout';
import './LogoutButton.css';

function LogoutButton() {
    const {loading, logOut} = useLogout();
  return (
    <div className="">
        {!loading ?
        (<img src={LogoutLogo} className="logout-icon" onClick={logOut}/>) : (<span className='loading loading-spinner'></span>)
        }
    </div>
  )
}

export default LogoutButton;