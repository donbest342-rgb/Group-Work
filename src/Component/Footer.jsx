import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="flex">
            <div className="one">
                <div className="si">
                    <div className="logo">
                        <LocationOnIcon className='icon' />
                        </div>
                        <div className="name">
                            <h2>Nigerian Tourism</h2>
                        </div>
                </div>
                <div className="so">
                    <p>We offer the best tourism experience you can ever have, with our top tier 
                      tour packages and affordable prices.
                    </p>
                </div>
            </div>
            <div className="two">
                <h2>Quick Links</h2>
                 <Link to='/' className='link'><p>Home</p> </Link>
                <Link to='/destination' className='link'><p>Destination</p></Link>
                <Link to='/hotels' className='link'><p>Hotels</p></Link>
                <Link to='/plantravel' className='link'><p>Plan Travel</p></Link>
                <Link to='/travelguide' className='link'><p>Travel Guide</p></Link>
            </div>
            <div className="three">
               <h2>Contact Info</h2>
                <p>123 Heritage Street</p>
                <p>owerri imo state</p>
                <p>Nigeria</p>
                <p>+234 9031164634</p>
                <p>info@nigeriantours.co.za</p> 
            </div>  
        </div>
      <div className="nom">
        <p>© 2024 Nigerian Tours. All rights reserved</p>
        <hr />
        <p className='p'>Proudly Nigerina</p>
      </div>
    </div>
  )
}

export default Footer
