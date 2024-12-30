import React, { useEffect } from 'react';
import { FaUser  } from 'react-icons/fa';
import '../css/HomePage.css';
import bannerImage from '../media/home banner.png'; // Ensure the image path is correct

function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAboutMe = () => {
    const aboutMeSection = document.querySelector('.about-me');
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="homepage">
      {/* Banner Section */}
      <div className="banner">
        <img src={bannerImage} alt="Home Banner" className="banner-image" />
      </div>

      {/* About Me Section */}
      <section className="about-me">
        <h2 className="about-title fade-in">
          ABOUT ME <FaUser  className="about-icon" />
        </h2>

        {/* Circle Image Frames with Text Boxes */}
        <div className="circle-container">
          <div className="circle-item fade-in">
            <div className="circle-frame">
              <img src="../media/circle1.png" alt="Circle 1" className="circle-image" />
            </div>
            <div className="circle-text">
              <p>Creative Developer with a knack for innovative solutions.</p>
            </div>
          </div>

          <div className="circle-item fade-in">
            <div className="circle-frame">
              <img src="../media/circle2.png" alt="Circle 2" className="circle-image" />
            </div>
            <div className="circle-text">
              <p>Passionate about designing web and mobile apps.</p>
            </div>
          </div>

          <div className="circle-item fade-in">
            <div className="circle-frame">
              <img src="../media/circle3.png" alt="Circle 3" className="circle-image" />
            </div>
            <div className="circle-text">
              <p>Always striving to make a positive impact through technology.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;