import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Searchbar from './Searchbar'

export default function NavBar() {
  return (
    <nav>
        <ul>
        <NavLink>Logo</NavLink>
        <NavLink>Sign In</NavLink>
        <NavLink>Log Out</NavLink>
        <NavLink>Profile</NavLink>
        </ul>
        <Searchbar />
    </nav>
  )
}
