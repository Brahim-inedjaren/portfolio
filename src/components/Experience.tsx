import { motion } from 'framer-motion';
import React from 'react';
import { content } from '../data/content';
import '../styles/sections.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content.experience.sectionTitle}
      </motion.h2>
      <div className="experience-list">
        {content.experience.list.map((job, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ 
              padding: '1.5rem', 
              background: 'var(--card-bg)', 
              borderRadius: '8px',
              borderLeft: '4px solid var(--primary-color)',
              border: '1px solid rgba(143, 13, 13, 0.1)'
            }}
          >
            <h3 style={{ marginBottom: '0.5rem' }}>{job.title}</h3>
            <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{job.company}</h4>
            <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--secondary-color)' }}>{job.period}</p>
            <p>{job.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
