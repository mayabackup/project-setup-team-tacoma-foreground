import React, { useState, useEffect } from 'react'
import './MeetTheTeam.css'
import samplepics from './img/SampleProfile.png';

const MeetTheTeam = () => {

    return (
  <div className="MeetTheTeam">
    <section className="TeamCSS">
      <h1>Meet The Team</h1>
          <h2>Raj Bharaj</h2>
          <img alt="Raj" src={/img/raj_pic.jpeg} />  
          <p>
            Senior at NYU CAS majoring in Computer Science, with minors in Math, Cybersecurity and 'Web Development and Programming'.
          </p>

          <h2>Alifa Faruk</h2>
          <img alt="Alifa" src={samplepics} />
          <p>
           Hello Im Alifa Faruk and Im a senior at NYU studying stuff. 
          </p>

          <h2>Adam Ethan</h2>
          <img alt="Adam" src={samplepics} />
          <p>
           Hello Im Adam Ethan and Im a junior at NYU studying stuff. 
          </p>
          <h2>Maya Sijaric</h2>
          <img alt="Maya" src={samplepics} />
          <p>
           Hello Im Maya Sijaric and Im a senior at NYU studying stuff. 
          </p>
          <h2>Roman Haberli</h2>
          <img alt="Roman" src={samplepics} />
          <p>
           Hello Im Roman Haberli and Im a senior at NYU studying stuff. 
          </p>
      </section>
  </div>
    );
  }
  
  export default MeetTheTeam;