import React from 'react'
import { ReactComponent as Cart } from '../Cart.svg'
import ProfileMenu from './ProfileMenu'


export default function AccountProfile({ userData , itemCount}) {

  return (
    <div className="account-profile">
        <div className="profile-header">
            <img className="logo" alt='logo'/>
            <div className="profile-box">
                <div className='user-details'>
                    <span>{userData.name}</span>
                    <span>{userData.email}</span>
                </div>
                <div className="Checkout">{itemCount === 0 ? "_" : itemCount.length}<Cart/></div>    
            </div>
        </div>
        <ProfileMenu />
    </div>
  )
}
