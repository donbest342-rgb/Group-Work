import React from 'react'
import './Nav.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Nav = () => {
  return (
    <div className='navbar'>
        <div className="box">
            <LocationOnIcon className='icon'/>
            <h1>Nigerian tourism</h1>
        </div>
        <div className="links">
            <a href="/">Home</a>
            <a href="/destination">Destination</a>
            <a href="/hotels">Hotels</a>
            <a href="/plantravel">Plan Travel</a>
            <a href="/travelguide">Travel Guide</a>
        </div>
        <div className="action">
            <button className='btn'>Login</button>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Nav
