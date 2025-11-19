import React from 'react'
import { useState } from 'react';
import './Travelguide.css';
import { LocalActivityOutlined } from '@mui/icons-material'
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SunnyIcon from '@mui/icons-material/Sunny';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const Travelguide = () => {
    const [activeTab, setActiveTab] = useState("Essentials");
  return (
    <div>
        <div className='intro'>
        <h1>Complete Nigeria Travel Guide</h1>
        <p>Everything you need to know for an amazing trip to the preals of the African lands</p>
        </div>
         <section className='navigation'>
        {["Essentials", "Best Time", "P. Tips", "Emergency"].map(tab => (
          <button
            key={tab}
            className={`navi ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </section>

      {/* TAB CONTENT */}
      <section className='tab-content'>

        {/* Essentials */}
        {activeTab === "Essentials" && (
          <div>
            {/* <h2>Essentials</h2>
            <p>This is content for essentials (your cards + boxes can go here)</p> */}

            {/* Example — you can move your existing content here */}
            <section className='cards'>
            <div className='card'>
              <LocalAirportIcon className='img-1'/>
                {/* <img src={locationIcon} alt="Location" /> */}
                <h2>visa Request</h2>
                <p>Nigerian Naira (NGN), USD also widely accepted. Credit cards acceptedin major establishments</p>
            </div>
            <div className='card'>
              <CreditCardIcon className='img-2'/>
                {/* <img src={locationIcon} alt="Location" /> */}
                <h2>Currency</h2>
                <p>Nigerian Naira (NGN), USD also widely accepted. Credit cards acceptedin major establishments</p>
            </div>
            <div className='card'>
              <LocalPhoneIcon className='img-3'/>
                {/* <img src={locationIcon} alt="Location" /> */}
                <h2>Language</h2>
                <p>Nigerian Naira (NGN), USD also widely accepted. Credit cards acceptedin major establishments</p>
            </div>
            <div className='card'>
              <AccessTimeIcon className='img-4'/>
                {/* <img src={locationIcon} alt="Location" /> */}
                <h2>Time Zone</h2>
                <p>Nigerian Naira (NGN), USD also widely accepted. Credit cards acceptedin major establishments</p>
            </div>
        </section>
        <section className='boxs'>
            <div className='box'>
                <h4><LocalAirportIcon /> Entry Requirements</h4>
                <h2>Visa Information</h2>
                <ol>30-day tourist visa on arrival for most countries</ol>
                <ol>$20 USD visa fee (some countries exemp)</ol>
                <ol>Passport valid for at least 6 months</ol>
                <ol>Return/onward ticket required</ol>
                <ol>Apply online for Electronic Travel Authorization</ol>
                <h2>Customs Regulations</h2>
                <ol>Duty-free: 2L alcohol, 200 cigarettes</ol>
                <ol>Prohibited: Drugs, weapons, pornography</ol>
                <ol>Declare amounts over $15,00 USD</ol>
            </div>
            <div className='box'>
                <h4><CreditCardIcon /> Money & Banking</h4>
                <h2>Visa Information</h2>
                <ol>30-day tourist visa on arrival for most countries</ol>
                <ol>$20 USD visa fee (some countries exemp)</ol>
                <ol>Passport valid for at least 6 months</ol>             <ol>Apply online for Electronic Travel Authorization</ol>
                <h2>Customs Regulations</h2>
                <ol>Duty-free: 2L alcohol, 200 cigarettes</ol>
                <ol>Prohibited: Drugs, weapons, pornography</ol>
                <ol>Declare amounts over $15,00 USD</ol>
                <ol>Return/onward ticket required</ol>
            </div>
        </section>
        <section className='buttons'>
            <button className='green-but'>Start Planning Your Trip</button>
            <button className='white-but'>Browse Destination</button>
        </section>
        <div>
            <p className='foot'>Ready to explore Nigeria? Use our trip planner to create your perfect itinerary</p>
        </div>
          </div>
        )}

        {/* Regions */}
        {activeTab === "Regions" && (
          <div>
            <h2>Regions</h2>
            <p>Content for regions</p>
          </div>
        )}

        {/* Best Time */}
        {activeTab === "Best Time" && (
          <div>
          <section className='best-time'>
            <div className='best-time-box-1'>
              <div className='box-title'>
                <SunnyIcon /> 
                <h2>Peak Season</h2>
              </div>
              <h5>December - March</h5>
              <h4>Dry and sunny on west/south coasts</h4>
              <h3 className='green'>Pros:</h3>
            <div className='pros'>
              <p className='dot-g'>.</p>
              <p>Perfect beach weather</p>
            </div>
            <div className='pros'>
              <p className='dot-g'>.</p>
              <p>Ideal for wildlife viewing</p>
            </div>
            <div className='pros'>
              <p className='dot-g'>.</p>
              <p>Cultural festivals</p>
            </div>
            <h3 className='orange'>Cons:</h3>
            <div className='cons'>
              <p className='dot-o'>.</p>
              <p>Higher prices</p>
            </div>
            <div className='cons'>
              <p className='dot-o'>.</p>
              <p>Ideal for wildlife viewing</p>
            </div>
            <div className='cons'>
              <p className='dot-o'>.</p>
              <p>Air pollusion</p>
            </div>
          </div>

          <div className='best-time-box-2'>
              <div className='box-title'>
                <SunnyIcon /> 
                <h2>Shoulder Season</h2>
              </div>
              <h5>April - june</h5>
              <h4>Hot and humid, some rain</h4>
              <h3 className='green'>Pros:</h3>
            <div className='pros'>
              <p className='dot-g'>.</p>
              <p>Perfect beach weather</p>
            </div>
            <div className='pros'>
              <p className='dot-g'>.</p>
              <p>Ideal for wildlife viewing</p>
            </div>
            <div className='pros'>
              <p className='dot-g'>.</p>
              <p>Cultural festivals</p>
            </div>
            <h3 className='orange'>Cons:</h3>
            <div className='cons'>
              <p className='dot-o'>.</p>
              <p>Higher prices</p>
            </div>
            <div className='cons'>
              <p className='dot-o'>.</p>
              <p>Ideal for wildlife viewing</p>
            </div>
            <div className='cons'>
              <p className='dot-o'>.</p>
              <p>Air pollusion</p>
            </div>
          </div>

          <div className='best-time-box-3'>
              <div className='box-title'>
                <SunnyIcon /> 
                <h2>Monsoon Season</h2>
              </div>
              <h5>July - November</h5>
              <h4>Heavy rain on est/south coasts</h4>
              <h3 className='green'>Pros;</h3>
            <div className='pros'>
              <p className='dot-g'>.</p>
              <p>Perfect beach weather</p>
            </div>
            <div className='pros'>
              <p className='dot-g'>.</p>
              <p>Ideal for wildlife viewing</p>
            </div>
            <div className='pros'>
              <p className='dot-g'>.</p>
              <p>Cultural festivals</p>
            </div>
            <h3 className='orange'>Cons:</h3>
            <div className='cons'>
              <p className='dot-o'>.</p>
              <p>Higher prices</p>
            </div>
            <div className='cons'>
              <p className='dot-o'>.</p>
              <p>Ideal for wildlife viewing</p>
            </div>
            <div className='cons'>
              <p className='dot-o'>.</p>
              <p>Air pollusion</p>
            </div>
          </div>
          </section>
          <section className='buttons'>
              <button className='green-but'>Start Planning Your Trip</button>
              <button className='white-but'>Browse Destination</button>
          </section>
          </div>
        )}

        {/* Practical Tips */}
        {activeTab === "P. Tips" && (
          <div>
          <div className='p-tips'>
            <div className='e-2'>
            <div className='e-2-top'>
              <WarningAmberIcon />
              <h2>Important Information</h2>
            </div>
            <div className='e-2-info'>
              <h3>Embassy Contacts</h3>
              <p>Contact your embassy in case of lost passport or documents.</p>
              <ol>US Embassy Colombo: +94 11 249 8500</ol>
              <ol>Uk Embassy Colombo: +94 11 539 0639</ol>
              <ol>Australian Embassy: +94 11 539 0695</ol>
            </div>
            <div className='e-2-info'>
              <h3>Health Facilities</h3>
              <ol>Apollo Hospital Colombo (Private)</ol>
              <ol>Asiri Medical Hospital (Private)</ol>
              <ol>General Hospital Colombo (Public)</ol>
            </div>
          </div>
          <div className='e-2'>
            <div className='e-2-top'>
              <WarningAmberIcon />
              <h2>Important Information</h2>
            </div>
            <div className='e-2-info'>
              <h3>Embassy Contacts</h3>
              <p>Contact your embassy in case of lost passport or documents.</p>
              <ol>US Embassy Colombo: +94 11 249 8500</ol>
              <ol>Uk Embassy Colombo: +94 11 539 0639</ol>
              <ol>Australian Embassy: +94 11 539 0695</ol>
            </div>
            <div className='e-2-info'>
              <h3>Health Facilities</h3>
              <ol>Apollo Hospital Colombo (Private)</ol>
              <ol>Asiri Medical Hospital (Private)</ol>
              <ol>General Hospital Colombo (Public)</ol>
            </div>
          </div>
          </div>
          <section className='buttons'>
              <button className='green-but'>Start Planning Your Trip</button>
              <button className='white-but'>Browse Destination</button>
          </section>
          </div>
        )}

        {/* Emergency */}
        {activeTab === "Emergency" && (
        <div className='e'>
          <div className='e-box'>
            <div className='e-top'>
              <WarningAmberIcon />
              <h2>Emergency contacts</h2>
            </div>
            <div className='contacts'>
              <p>Police Emergency</p>
              <h3>911</h3>
            </div>
            <div className='contacts'>
              <p>Medical Emergency</p>
              <h3>110</h3>
            </div>
            <div className='contacts'>
              <p> Tourist Police</p>
              <h3>1912</h3>
            </div>
            <div className='contacts'>
              <p>Fire & Rescue</p>
              <h3>111</h3>
            </div>
          </div>
          <div className='e-2'>
            <div className='e-2-top'>
              <WarningAmberIcon />
              <h2>Important Information</h2>
            </div>
            <div className='e-2-info'>
              <h3>Embassy Contacts</h3>
              <p>Contact your embassy in case of lost passport or documents.</p>
              <ol>US Embassy Colombo: +94 11 249 8500</ol>
              <ol>Uk Embassy Colombo: +94 11 539 0639</ol>
              <ol>Australian Embassy: +94 11 539 0695</ol>
            </div>
            <div className='e-2-info'>
              <h3>Health Facilities</h3>
              <ol>Apollo Hospital Colombo (Private)</ol>
              <ol>Asiri Medical Hospital (Private)</ol>
              <ol>General Hospital Colombo (Public)</ol>
            </div>
          </div>
          </div>
        )}
      </section>
        
    </div>
  )
}

export default Travelguide;