import React from 'react'
import { ReactComponent as Cart } from '../Cart.svg'
import ProfileMenu from './ProfileMenu'
import { Outlet } from 'react-router-dom'


export default function AccountProfile({ userData }) {

// function handlePage(){

// }

  return (
    <div className="account-profile">
        <div className="profile-header">
            <img className="profile-photo" src={userData.profilePhoto} alt='Profile'/>
            <div className="profile-box">
                <p>{userData.name}</p>
                <p>{userData.email}</p>
                <br/>
                <div className="Checkout"><Cart/> Cart Counter </div>
            </div>
        </div>
        <div >
            <div>
                <ProfileMenu />
            </div>
        </div>
  </div>
  )
}
