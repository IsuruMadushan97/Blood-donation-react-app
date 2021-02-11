import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
        <>
           <nav className='navbar'>
               <div className='navbar-container'>
                   <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                       Give blood <i className='fas fa-burn' />
                   </Link>
                   <div className= 'menu-icon' onClick={handleClick}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                   </div>

                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className='nav-item'>
                           <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
                               Home
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to= '/who-give-blood' className='nav-links' onClick={closeMobileMenu}>
                               Why give blood
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to= '/who-can-give-blood' className='nav-links' onClick={closeMobileMenu}>
                               Who can give blood
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to= '/the-donation-process' className='nav-links' onClick={closeMobileMenu}>
                               The donation Process
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to= '/where-to-donate' className='nav-links' onClick={closeMobileMenu}>
                               Where to donate
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to= '/news-and-campaigns' className='nav-links' onClick={closeMobileMenu}>
                               News and Campaigns
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to= '/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                               Sign Up
                           </Link>
                       </li>
                   </ul>
                   {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
               </div>

           </nav>
        </>
    );
}

export default Navbar;
