import React from 'react'
import { NavLink } from 'react-router-dom'
import Searchbar from './Searchbar'


export default function NavBar(onSearch) {
  return (
    <nav>
        <NavLink to={'/products'}>Logo</NavLink>
        <ul>
            <NavLink to={'/login'}>Sign In</NavLink>
            <NavLink to={'/products'}>Log Out</NavLink>
            <NavLink to={'/account'}>Profile</NavLink>
        </ul>
        <Searchbar searched={onSearch}/>
    </nav>
  )
}
