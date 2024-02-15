import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='navigation'>
      <ul className='navigation-menu'>
        <Link to="/home">Home</Link>
        <Link to="/home/services">Service</Link>
        <Link to="/home/protfolio">Protfolio</Link>
        <Link to="/home/contact">Contact</Link>
      </ul>
    </div>
  )
}

export default Nav