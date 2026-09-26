import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/20250404_131230.jpg";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "../App.css";

function Header() {
  return (
    <>
      <header className="site-header">
        
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="/Faith-Amaugo-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
      </header>

    <motion.div
      className="hero"
      id="top"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="intro">
        <img src={heroImage} alt="Faith Amaugo" />
      </div>
      <h1>Faith Amaugo</h1>

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
        <a href="https://www.linkedin.com/in/amaugo-faith-b7b7412ab" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://github.com/vectorvirtue" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
          <FaGithub className="icon github" />
        </a>
        <div className="location-container">
          <button className="location-trigger" type="button" aria-label="Location: Lagos, Nigeria">
            <FaMapMarkerAlt className="icon location" />
          </button>
          <span className="tooltip">Lagos, Nigeria</span>
        </div>
         <a href="tel:+2347070485626" aria-label="Call Faith"> 
         <FaPhone className="icon phone" />
         </a>  
    
         <a href="mailto:amaugofaith@gmail.com" aria-label="Email Faith">
         <FaEnvelope className="icon envelope" />
         </a>
        </div>
    </motion.div>
    </>

  );
}

export default Header;
