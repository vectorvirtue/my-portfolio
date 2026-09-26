import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import '../App.css';

const Contact = () => {
  return (
    <motion.section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="contact-content">
        <p className="contact-kicker">Have a project in mind?</p>
        <h2 id="contact-heading">Let&apos;s work together.</h2>
        <p>
          I&apos;m open to thoughtful frontend projects, collaborations, and opportunities to build useful experiences.
        </p>
        <div className="contact-actions">
          <a className="contact-primary" href="mailto:amaugofaith@gmail.com">
            <FaEnvelope aria-hidden="true" /> Email me
          </a>
          <a
            className="contact-secondary"
            href="https://www.linkedin.com/in/amaugo-faith-b7b7412ab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin aria-hidden="true" /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
