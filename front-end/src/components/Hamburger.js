import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const HamburgerMenu = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'login',
    path: '/login',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
  },
  {
    title: 'Logout', 
    path: '/Logout', //logout path
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
  },
  {
    title: 'Saved Locations',
    path: '/favorites',
    icon: <FaIcons.FaThumbtack />,
    cName: 'nav-text'
  },
  {
    title: 'Search',
    path: '/search',
    icon: <FaIcons.FaSearch />,
    cName: 'nav-text'
  },
  {
    title: 'Featured Locations',
    path: '/FeaturedLocations',
    icon: <AiIcons.AiOutlineGlobal />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/aboutus',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Travel Resources',
    path: '/TravelResources',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Meet The Team',
    path: '/MeetTheTeam',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  }
];
