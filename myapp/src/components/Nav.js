import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <a>LOGO</a>
        <ul>
          <NavLink exact to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
        </ul>
      </div >
    </div>
  )
} 

export default Nav;