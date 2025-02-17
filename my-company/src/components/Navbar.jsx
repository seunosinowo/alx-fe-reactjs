import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center' }}>
      <ul>
        <li>
            <Link to='/home'>Home</Link>
        </li>

        <li>
            <Link to='/about'>About</Link>
        </li>

        <li>
            <Link to='/service'>Services</Link>
        </li>

        <li>
            <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
