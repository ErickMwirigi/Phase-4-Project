import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function ProfileMenu() {
  return (
<<<<<<< HEAD
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
=======
    <div className="account-container">
      <div className="ac-menu">
        <h4 className="generic-h4">Manage Account</h4>
        <Link to={"/account/inbox"}>Inbox</Link>
        <Link to={"/account/profile-settings"}>Profile Settings</Link>
        <Link to={"/account/orders"}>Orders</Link>
        <Link to={"/account/checkout"}>Checkout</Link>
        <Link to={"/account/favorites"}>Saved Items</Link>
        <Link>Need Help ?</Link>
        <Link>Give Feedback</Link>
      </div>
      <div className="dynamic-menu">
        <Outlet />
      </div>
    </div>
  );
>>>>>>> b701189f75562c47fdcd9cb2ae8507926789c86e
}
