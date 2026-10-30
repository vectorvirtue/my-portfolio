import React from 'react';
import { motion } from 'framer-motion';
import { TbGridDots } from 'react-icons/tb';
import ecommerce1 from '../assets/Screenshot_20-6-2025_185247_127.0.0.1.jpeg';
import ecommerce2 from '../assets/Screenshot_20-6-2025_18538_127.0.0.1.jpeg';
import ecommerce3 from '../assets/Screenshot_20-6-2025_185333_127.0.0.1.jpeg';
import firebase from '../assets/Screenshot_20-6-2025_185551_firebase-login-topaz-eight.vercel.app.jpeg';
import movieapp from '../assets/Screenshot_20-6-2025_18578_.jpeg';
import series1 from '../assets/Screenshot_20-6-2025_185753_.jpeg';
import series2 from '../assets/Screenshot_20-6-2025_185838_.jpeg';
import stadiumDashboard from '../assets/stadium-admin-dashboard.png';
import technitesPreview from '../assets/technites-preview.png';
import barakahPreview from '../assets/barakah-suite-preview.png';
import proxynetPreview from '../assets/proxynet-preview.png';
import promallShopPreview from '../assets/promall-shop-preview.png';
import '../App.css';

const projects = [
  {
    title: 'E-commerce Homepage',
    description: 'A responsive storefront homepage with product discovery at its center.',
    tech: 'HTML, CSS, JavaScript',
    image: ecommerce1,
    alt: 'E-commerce homepage',
  },
  {
    title: 'Product Page',
    description: 'Product browsing with a reusable grid and cart interaction logic.',
    tech: 'HTML, CSS, JavaScript',
    image: ecommerce2,
    alt: 'E-commerce product page',
  },
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

const liveProjects = [
  {
    title: 'Promall Shop',
    description: 'An online shop for browsing products and shopping electronics.',
    liveUrl: 'https://www.promallshop.com',
    tech: ['React', 'Vite', 'CSS', 'TypeScript (TSX)'],
    image: promallShopPreview,
    alt: 'Promall Shop ecommerce homepage',
  },
  {
    title: 'Proxynet Group',
    description: 'Connectivity, infrastructure, and managed technology services for businesses across Africa.',
    liveUrl: 'https://www.proxynetgroup.com',
    tech: ['React', 'Vite', 'CSS', 'JavaScript (JSX)'],
    image: proxynetPreview,
    alt: 'Proxynet Communications homepage',
  },
  {
    title: 'The Technites',
    description: 'Software solutions that help African businesses and industries innovate and grow.',
    liveUrl: 'https://thetechnites.com',
    tech: ['React', 'Vite', 'CSS', 'JavaScript (JSX)'],
    image: technitesPreview,
    alt: 'The Technites software solutions homepage',
  },
  {
    title: 'Barakah Suite',
    description: 'A business management platform for accounting, payroll, inventory, and everyday operations.',
    liveUrl: 'https://www.barakahsuite.com',
    tech: ['React', 'Vite', 'CSS', 'JavaScript (JSX)'],
    image: barakahPreview,
    alt: 'Barakah Suite business and financial management homepage',
  },
  {
    title: 'Stadium Admin Dashboard',
    description: 'A recently built dashboard for managing stadium events, ticket sales, and attendance.',
    tech: ['React', 'Vite', 'CSS', 'JavaScript (JSX)'],
    image: stadiumDashboard,
    alt: 'Stadium admin dashboard showing ticket sales, revenue, and attendance metrics',
    status: 'Not live yet',
  },
];

const Projects = () => {
  return (
    <div className="about-section" id="projects">
      <section aria-labelledby="projects-heading">
        <h2 className="left-text" id="projects-heading">
          <TbGridDots className="section-marker" aria-hidden="true" />
          <span>Early experiments</span>
        </h2>
      </section>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img src={project.image} alt={project.alt} />
            <div className="project-content">
              <p className="project-tech">{project.tech}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
      {liveProjects.length > 0 && (
        <section className="live-projects-section" aria-labelledby="live-projects-heading">
          <h2 className="left-text section-title" id="live-projects-heading">
            <TbGridDots className="section-marker" aria-hidden="true" />
            <span>Live projects</span>
          </h2>
          <div className="projects-grid live-projects-grid">
            {liveProjects.map((project) => (
              <motion.article
                className="project-card live-project-card"
                key={`${project.title}-live`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="live-project-preview-container">
                  {project.image ? (
                    <img className="live-project-preview" src={project.image} alt={project.alt} />
                  ) : (
                    <div
                      className="project-preview-placeholder"
                      role="img"
                      aria-label={`Screenshot coming soon for ${project.title}`}
                    >
                      <span className="project-preview-icon" aria-hidden="true">▧</span>
                      <span>Screenshot coming soon</span>
                    </div>
                  )}
                  {project.image && project.description && (
                    <p className="live-project-description">{project.description}</p>
                  )}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  {!project.image && project.description && <p>{project.description}</p>}
                  <ul className="project-tech-list" aria-label={`${project.title} technology stack`}>
                    {project.tech.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  {project.liveUrl ? (
                    <a
                      className="live-project-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit live site
                    </a>
                  ) : (
                    <span className="project-status">{project.status}</span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Projects;
