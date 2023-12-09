import React from 'react'
import { ReactComponent as Cart } from '../Cart.svg'
import Logo from "../assets/logo.png";
import ProfileMenu from './ProfileMenu'


export default function AccountProfile({ userData, itemCount }) {
  return (
    <div className="account-profile">
      <div className="profile-header">
        <div className='logo-container'>
          <img className="logo" alt='logo' src={Logo} />
        </div>
        <div className="profile-box">
          <div className='user-details'>
            <span>{userData.name}</span>
            <span>{userData.email}</span>
          </div>
          <div className="checkout">{itemCount.length > 0 && itemCount.length}<Cart /></div>
        </div>
      </div>
      <ProfileMenu />
    </div>
  )
}
