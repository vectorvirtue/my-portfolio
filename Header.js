import React from "react";
import heroImage from "../assets/20250404_131230.jpg";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "../App.css";

function Header() {
  return (
    

    <div className="hero">
     
      <div className="intro">
        <img src={heroImage} alt="Hero"  />
      </div>
      <h4>  Amarachi</h4>

      <div className="typewriter-text">
        <Typewriter
          options={{
            strings: [
              "I'm a Frontend Developer",
              "I build web applications",
              "I love clean UI & UX",
              " I’m passionate about creating web experiences",
              "that not only look good but",
              "feel good to use",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 75,
          }}
        />
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/amaugo-faith-b7b7412ab" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://github.com/vectorvirtue" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
        <div className="location-container">
          <FaMapMarkerAlt className="icon location" />
          <span className="tooltip">Lagos, Nigeria</span>
        </div>
        <a href="tel:+2347070485626"> 
         <FaPhone className="icon phone" />
         </a>  
    
         <a href="mailto:amaugofaith@gmail.com">
         <FaEnvelope className="icon envelope" />
         </a>
        </div>
    </div>

  );
}

export default Header;
