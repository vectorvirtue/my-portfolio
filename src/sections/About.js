import React from 'react'
import { motion } from 'framer-motion'
import { TbGridDots } from 'react-icons/tb'
import "../App.css"


const About = () => {
  return (
     <motion.div
       className='about-section'
       id="about"
       initial={{ opacity: 0, y: 24 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, amount: 0.15 }}
       transition={{ duration: 0.6, ease: 'easeOut' }}
     >
       <section aria-labelledby="about-heading">
       <h2 className='left-text' id="about-heading">
         <TbGridDots className="section-marker" aria-hidden="true" />
         <span>About Me</span>
       </h2>
       </section>
       
 <div className='box'>
 <div className='about'>
      Hi, I’m Faith — a frontend developer who enjoys creating clean, responsive, and visually appealing websites using HTML, React, CSS, and JavaScript. I love turning simple ideas into structured layouts that look good and work well. My journey into tech has been fueled by curiosity, creativity, and a love for detail, and I’m always looking to learn more and build better.

When I’m not coding, I’m exploring new UI trends or just vibing with good music and design inspo. Let's build something beautiful.
       </div>
       <div className='resume-button'>
      <a href="/Faith-Amaugo-Resume.pdf" target="_blank" rel="noopener noreferrer">
       <span className="resume-link">View my resume</span>
        </a>
       </div>
 </div>



    </motion.div>
  )
}

export default About


