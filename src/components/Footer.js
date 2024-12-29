import React from 'react';
import '../css/Footer.css';
import { FaFacebook, FaFacebookMessenger, FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from '../media/jersey usman logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-name">JERSEY USMAN</p>
          </div>
        </div>
        <div className="footer-address">
          <p className="footer-title">ADDRESS</p>
          <p>808 M. Dela Cruz Ext. St. Pasay City 1300</p>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123624.80428718826!2d120.8675972390625!3d14.468884369569036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c946c7acacd7%3A0xe67a7060b62e6e2f!2s808%20M.%20Dela%20Cruz%20Ext%2C%20Pasay%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1735482919006!5m2!1sen!2sph"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="footer-phone-email">
          <p className="footer-title">PHONE</p>
          <p>09682575179</p>
          <p className="footer-title">EMAIL</p>
          <p>jerseyloveu@gmail.com</p>
        </div>
        <div className="footer-follow">
          <p className="footer-title">FOLLOW ME</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/jerseyloveu/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://m.me/jerseyloveu" target="_blank" rel="noopener noreferrer">
              <FaFacebookMessenger className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/jersey-usman-698077218/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/jerseyloveu" target="_blank" rel="noopener noreferrer"> 
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Developed by Jersey Usman © 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
