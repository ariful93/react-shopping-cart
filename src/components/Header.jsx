import React from 'react';
import Navbar from './Navbar';

function Header() {
  
  return (
    <div className='main-header'>
        <div className='container'>
          <div className='navHeader'>
            <div className="site-logo">
              Logo
            </div>
            <Navbar />
          </div>
        </div>
    </div>
  )
}

export default Header
