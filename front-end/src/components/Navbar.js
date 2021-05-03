import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from './Hamburger';
import './Navbar.css';
import { IconContext } from 'react-icons';
import logo from '../img/CovidTravelAgentLogo.jpg';
//ATTENTION: YOU HAVE TO RUN THIS COMMAND "npm install react-icons --save" in terminal for icons

//function to toggle/show or hide Hamburger Menu
function Navbar() {
  const [Hamburger, setHamburger] = useState(false);

  const showHamburger = () => setHamburger(!Hamburger);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showHamburger} />
          </Link>
          <h1 className="font">Covid Travel Agent</h1>
          <Link to = './'>
          <img className="LogoPic" src={logo} alt="logo"/> 
          </Link>
        </div>
        <nav className={Hamburger ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showHamburger}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {HamburgerMenu.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;