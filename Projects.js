import React from 'react';
import ecommerce1 from '../assets/Screenshot_20-6-2025_185247_127.0.0.1.jpeg';
import ecommerce2 from '../assets/Screenshot_20-6-2025_18538_127.0.0.1.jpeg';
import ecommerce3 from '../assets/Screenshot_20-6-2025_185333_127.0.0.1.jpeg';
import firebase from '../assets/Screenshot_20-6-2025_185551_firebase-login-topaz-eight.vercel.app.jpeg';
import movieapp from '../assets/Screenshot_20-6-2025_18578_.jpeg';
import series1 from '../assets/Screenshot_20-6-2025_185753_.jpeg';
import series2 from '../assets/Screenshot_20-6-2025_185838_.jpeg';
import '../App.css';

const Projects = () => {
  return (
    <div className="about-section">
       <section>
       <div className='left-text'>Projects (Screenshots Only)</div>
       </section>
      <div className="projects-grid">
        <div className="project-card">
          <img src={ecommerce1} alt="E-commerce Homepage" />
          <div className="overlay">
            <h3>E-commerce Homepage</h3>
            <p>Built with HTML, CSS, JavaScript</p>
          </div>
        </div>

        <div className="project-card">
          <img src={ecommerce2} alt="Product Page" />
          <div className="overlay">
            <h3>Product Page</h3>
            <p>Includes cart logic and product grid</p>
          </div>
        </div>

        <div className="project-card">
          <img src={ecommerce3} alt="Checkout Page" />
          <div className="overlay">
            <h3>produvt Range Page</h3>
            <p>Payment section UI only</p>  </div>
        </div>

        <div className="project-card">
          <img src={firebase} alt="Firebase Auth Page" />
          <div className="overlay">
            <h3>Login/Register</h3>
            <p>Firebase Auth integrated</p>
          </div>
        </div>

        <div className="project-card">
          <img src={movieapp} alt="Movie App Homepage" />
          <div className="overlay">
            <h3>Movie App</h3>
            <p>Uses TMDB API for movie data</p>
          </div>
        </div>

        <div className="project-card">
          <img src={series1} alt="Series Page" />
          <div className="overlay">
            <h3>Series Section</h3>
            <p>Filtered by genre</p>
          </div>
        </div>

        <div className="project-card">
          <img src={series2} alt="Series Page 2" />
          <div className="overlay">
            <h3>Series Description</h3>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
