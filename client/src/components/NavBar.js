import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Searchbar from './Searchbar'



export default function NavBar(onSearch) {
  return (
    <>
      <nav>
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
}
