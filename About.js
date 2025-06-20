import React from 'react'
import "../App.css"


const About = () => {
  return (
    <div className='about-section'>
       <section>
       <div className='left-text'>About Me</div>
       </section>
       
 <div className='box'>
 <div className='about'>
       Hi, I’m Amara — a frontend developer who enjoys creating clean, responsive, and visually appealing websites using just HTML, React, CSS, and JavaScript . I love turning simple ideas into structured layouts that look good and work well. My journey into tech has been fueled by curiosity, creativity, and a love for detail, and I’m always looking to learn more and build better.

When I’m not coding, I’m exploring new UI trends or just vibing with good music and design inspo. Let's build something beautiful.
       </div>
       <div className='resume-button'>
       <a href="/Amaugo Faith Resume.pdf" target="_blank" rel="noopener noreferrer">
       <button>
          My Resume
          
        </button>
        </a>
       </div>
 </div>



    </div>
  )
}

export default About


