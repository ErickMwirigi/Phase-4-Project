import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import DynamicMenu from './DynamicMenu'

export default function ProfileMenu() {
  return (
    <>
    <div className="ac-menu" >
      <h4>Manage Account</h4>
      <Link to={'/account/inbox'}>Inbox</Link>
      <Link to={'/account/profile-settings'}>Profile Settings</Link>
      <Link to={'/account/orders'}>Orders</Link>
      <Link to={'/account/saved-items'}>Saved Items</Link>
      <Link >Need Help ?</Link>
      <Link >Give Feedback</Link>
      <Outlet />
    </div>
    <div className='dynamic-menu'>
      <DynamicMenu />
      
    </div>
    </>
  )
}
