import React from 'react';
import ecommerce3 from '../assets/Screenshot_20-6-2025_185333_127.0.0.1.jpeg';
import firebase from '../assets/Screenshot_20-6-2025_185551_firebase-login-topaz-eight.vercel.app.jpeg';
import movieapp from '../assets/Screenshot_20-6-2025_18578_.jpeg';
import series1 from '../assets/Screenshot_20-6-2025_185753_.jpeg';
import series2 from '../assets/Screenshot_20-6-2025_185838_.jpeg';
import '../App.css';

const projects = [
  {
    title: 'Product Range Page',
    description: 'A focused product range and checkout interface concept.',
    tech: 'HTML, CSS, JavaScript',
    image: ecommerce3,
    alt: 'E-commerce product range page',
  },
  {
    title: 'Login and Registration',
    description: 'Authentication screens connected to Firebase for account access.',
    tech: 'React, Firebase',
    image: firebase,
    alt: 'Firebase login and registration page',
  },
  {
    title: 'Movie App',
    description: 'A movie discovery experience powered by live TMDB data.',
    tech: 'React, TMDB API',
    image: movieapp,
    alt: 'Movie app homepage',
  },
  {
    title: 'Series Explorer',
    description: 'Browse and filter series by genre in a simple viewing interface.',
    tech: 'React, TMDB API',
    image: series1,
    alt: 'Series explorer page',
  },
  {
    title: 'Series Details',
    description: 'A detailed view for learning more about a selected series.',
    tech: 'React, TMDB API',
    image: series2,
    alt: 'Series details page',
  },
];

const liveProjects = projects.filter((project) => project.liveUrl);

const Projects = () => {
  return (
    <div className="about-section">
      <section>
        <div className="left-text">Selected projects</div>
      </section>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt={project.alt} />
            <div className="project-content">
              <p className="project-tech">{project.tech}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
      {liveProjects.length > 0 && (
        <section className="live-projects-section">
          <div className="left-text">Live projects</div>
          <div className="projects-grid">
            {liveProjects.map((project) => (
              <a
                className="live-project-link"
                href={project.liveUrl}
                key={`${project.title}-live`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View {project.title}
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Projects;
