import React from 'react'
import { ReactComponent as Cart } from '../Cart.svg'
import ProfileMenu from './ProfileMenu'


export default function AccountProfile({ userData }) {


  return (
    <div className="account-profile">
        <div className="profile-header">
            <img className="logo" alt='logo'/>
            <div className="profile-box">
                <div className='user-details'>
                    <span>{userData.name}</span>
                    <span>{userData.email}</span>
                </div>
                <div className="Checkout"><Cart/> Cart Counter </div>    
            </div>

        </div>
        <div className='account-container'>
            <div>
                <ProfileMenu />
            </div>
        </div>
  </div>
  )
}
