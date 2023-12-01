import React from 'react'
import DynamicMenu from './DynamicMenu'
import { ReactComponent as Cart } from '../Cart.svg'
import { Route , Routes } from "react-router-dom";
import ProfileMenu from './ProfileMenu';

export default function AccountProfile({ customerData={'name':'Michael Njogu', "email":'michaelfebzen.mb@gmail.com',"profilePhoto":"https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg"}}) {


// <Routes>
//     <Route index />
//     <Route path="/inbox" element={<LogIn />}/>
//     <Route path="/orders" element={<SignUp />}/>
//     <Route path="/saved-items" element={ <Cover />}/>
//     <Route path="/profile-settings" element={ <AccountProfile />}/>
// </Routes>

  return (
    <div className="account-profile">
        <div className="profile-header">
            <img className="profile-photo" src={customerData.profilePhoto}/>
            <div className="profile-box">
                <p> {customerData.name}</p>
                <p>{customerData.email}</p>
                <br/>
                <div className="Checkout"><Cart /> Cart Counter </div>
            </div>
        </div>
        <div >
            <div className="ac-menu" >
                <ProfileMenu />
            </div>
            <div className='dynamic-menu'>
                <DynamicMenu />
            </div>
        </div>
  </div>
  )
}
