import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Searchbar from './Searchbar'



export default function NavBar({onSearch , userData}) {
  return (
    <>
      <nav>
          <NavLink to={'/products'}>Logo</NavLink>
          {userData.name ? <span className='profile'>{userData.name}</span> : undefined}
          <ul className='nav-links'>
              {userData.name === 'Mwagash' ? <NavLink to={'/products'}>Log Out</NavLink> : <NavLink to={'/login'}>Sign In</NavLink>}
              <NavLink to={'/account'}>Profile</NavLink>
          </ul>
          <Searchbar className='searchbar' products={onSearch}/>
      </nav>
      <Outlet />
    </>
    
  )
}
