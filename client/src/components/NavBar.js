import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import Logo from "../assets/logo.png";
import ls from "local-storage"

export default function NavBar({ onSearch, userData }) {
  const navigate = useNavigate();
  return (
    <>
      <nav>
<<<<<<< HEAD
        <NavLink to={'/products'}>Logo</NavLink>
        <ul className='nav-links'>
          <NavLink to={'/login'}>Sign In</NavLink>
          <NavLink to={'/products'}>Log Out</NavLink>
          <NavLink to={'/account'}>Profile</NavLink>
        </ul>
        <Searchbar className='searchbar' searched={onSearch} />
      </nav>
      <Outlet />
    </>

  )
=======
        <div className="nav-items">
          <NavLink to={"/products"}>
            <div className="logo-container">
              <img className="logo" alt="logo" src={Logo} />
            </div>
          </NavLink>
          <ul className="nav-links">
            {userData.firstname ? (
              <NavLink to={"/products"} onClick={() => {
                if (!userData.firstname) {
                  try {
                    ls.clear();
                    document.location.assign("/login")
                  } catch (e) {
                    console.log(e)
                  }
                }
              }}>
                <i className="bi bi-box-arrow-left"></i> Log Out ({userData.firstname} {userData.lastname})
              </NavLink>
            ) : (
              <NavLink to={"/login"}>
                <i className="bi bi-box-arrow-in-right"></i> Sign In
              </NavLink>
            )}
            <NavLink to={"/account/profile-settings"}>
              <i className="bi bi-person-circle"></i> Profile
            </NavLink>
          </ul>
        </div>
        <Searchbar className="searchbar" products={onSearch} />
      </nav>
      <Outlet />
    </>
  );
>>>>>>> b701189f75562c47fdcd9cb2ae8507926789c86e
}
