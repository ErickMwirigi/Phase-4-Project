import React from 'react'
import DynamicMenu from './DynamicMenu'
import { ReactComponent as Cart } from '../Cart.svg'
import ProfileMenu from './ProfileMenu'
import { Outlet } from 'react-router-dom'


export default function AccountProfile({ customerData={'name':'Michael Njogu', "email":'michaelfebzen.mb@gmail.com',"profilePhoto":"https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg"}}) {

// function handlePage(){

// }

  return (
    <div className="account-profile">
        <div className="profile-header">
            <img className="profile-photo" src={customerData.profilePhoto} alt='Profile'/>
            <div className="profile-box">
                <p>{customerData.name}</p>
                <p>{customerData.email}</p>
                <br/>
                <div className="Checkout"><Cart/> Cart Counter </div>
            </div>
        </div>
        <div >
            <div className="ac-menu" >
                <ProfileMenu />
            </div>
            <Outlet />
            <div className='dynamic-menu'>
                <DynamicMenu />
            </div>
        </div>
  </div>
  )
}
