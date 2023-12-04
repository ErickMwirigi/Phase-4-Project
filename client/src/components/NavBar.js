import React from 'react'
import { NavLink } from 'react-router-dom'
import Searchbar from './Searchbar'
// import LogIn from './LogIn'
// import ProductsPage from './ProductsPage'
// import AccountProfile from './AccountProfile'

export default function NavBar(onSearch) {
  return (
    <nav>
        <ul>
            <NavLink to={'/products'}>Logo</NavLink>
            <NavLink to={'/login'}>Sign In</NavLink>
            <NavLink to={'/products'}>Log Out</NavLink>
            <NavLink to={'/account'}>Profile</NavLink>
        </ul>
        <Searchbar searched={onSearch}/>
    </nav>
  )
}
