import { motion } from 'framer-motion';
import React from 'react';
import { content } from '../data/content';
import '../styles/sections.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content.about.sectionTitle}
      </motion.h2>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'var(--secondary-color)' }}>
          {content.about.description}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
