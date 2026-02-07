import { motion } from 'framer-motion';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { content } from '../data/content';
import '../styles/sections.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content.projects.sectionTitle}
      </motion.h2>
      <div className="projects-grid">
        {content.projects.list.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>
            <p style={{ marginTop: '1rem', color: 'var(--secondary-color)' }}>{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
