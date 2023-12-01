import React from 'react'
import DynamicMenu from './DynamicMenu'
import { ReactComponent as Cart } from '../Cart.svg'

export default function AccountProfile() {
  return (
    <div className="account-profile">
        <div className="profile-header">
            <img className="profile-photo"/>
            <div className="profile-box">
                <p> Name</p>
                <p>Email Address</p>
                <br/>
                <div className="Checkout"><Cart /> Cart Counter </div>
            </div>
        </div>
        <div >
            <div className="ac-menu" >
                <h4>Manage Account</h4>
                <div className="side-menu" >
                    <p>Inbox</p>
                    <p>Profile Settings</p>
                    <p>Orders</p>
                    <p>Saved Items</p>
                    <p>Need Help ?</p>
                    <p>Give Feedback</p>
                </div> 
            </div>
            <div className='dynamic-menu'>
                <DynamicMenu />
            </div>
        </div>
  </div>
  )
}
