import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import { FaUser  } from 'react-icons/fa';
import logo from '../media/jersey usman logo.png'; // Updated logo import path

function Header() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // To track if the device is mobile

  const handleIconClick = () => {
    if (isMobile) {
      setShowWelcome(!showWelcome); // Toggle the welcome message on small screens
    }
  };

  // Mouse hover sparkle effect
  const handleMouseMove = (event) => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    document.body.appendChild(sparkle);
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    sparkle.style.left = `${mouseX - 7}px`;  // Center the sparkle over the cursor
    sparkle.style.top = `${mouseY - 7}px`;  // Center the sparkle over the cursor

    // Remove the sparkle after animation completes
    setTimeout(() => {
      sparkle.remove();
    }, 800); // Matches the duration of the animation
  };

  useEffect(() => {
    // Detect if the screen width is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Set mobile state if the width is smaller than 768px
    };
    
    // Set up event listener for mousemove
    const header = document.getElementById('header');
    header.addEventListener('mousemove', handleMouseMove);

    // Check the device size initially and also on window resize
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Cleanup the event listeners when component unmounts
    return () => {
      header.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <header className="header" id="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-center">
        <Link to="/" className="home-link">JERSEY USMAN</Link>
      </div>
      <div className="header-right">
        <div className="user-icon-container" onClick={handleIconClick}>
          <FaUser  className="user-icon" />
        </div>
        {(!isMobile || showWelcome) && <span className="welcome-text">WELCOME!</span>} {/* Always show on large screens */}
      </div>
    </header>
  );
}

export default Header;