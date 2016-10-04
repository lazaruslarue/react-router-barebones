import React from 'react'
import { Link } from 'react-router'

const NavLink = () => {
  return (<ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/topics'>Topics</Link></li>
    <li><Link to='/miss'>Thoughts</Link></li>
  </ul>)
}

export default NavLink
