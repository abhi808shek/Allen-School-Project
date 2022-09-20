import React from 'react'
import "./style/navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className='navbar-contentBox'>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/courses"><li>Courses</li></NavLink>
        <NavLink to="/login"><li>Login</li></NavLink>
            <li id='username'>Vanya Verma</li>
        </ul>
    </nav>
  )
}

export default Navbar