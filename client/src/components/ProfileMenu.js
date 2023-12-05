import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ProfileMenu() {
  return (
    <>
    <h4>Manage Account</h4>
    <div className="ac-menu" >
        <Link to={'/inbox'}>Inbox</Link>
        <Link to={'/profile-settings'}>Profile Settings</Link>
        <Link to={'/orders'}>Orders</Link>
        <Link to={'/saved-items'}>Saved Items</Link>
        <Link >Need Help ?</Link>
        <Link >Give Feedback</Link>
        <Outlet />
    </div> 
    </>
  )
}
