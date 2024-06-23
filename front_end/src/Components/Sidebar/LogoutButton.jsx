import React from 'react'
import LogoutLogo from '../../assets/Icons/logout.svg'

function LogoutButton() {
  return (
    <div className="mb-0 hover:bg-blue-400">
        <img src={LogoutLogo} className="w-12"/>
    </div>
  )
}

export default LogoutButton;