//rfce
import React,{useState} from 'react';
import {Link}from 'react-router-dom';
function Navbar() {
  return (
   <>
  <nav className='navbar'>
    <div className="navbar-container">
    <Link to="/" className="navbar-logo">
        TRVL<i className='fab fa-typo3'/>
    </Link>
    <div className='menu-icon'>
        <i className={click? 'fas -fa-times': 'fas fa-bars'}/>
    </div>
    </div>
  </nav>

   </>
  )
}

export default Navbar;
