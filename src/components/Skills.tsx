import { motion } from 'framer-motion';
import React from 'react';
import { content } from '../data/content';
import '../styles/sections.css';

const Skills: React.FC = () => {
  const categories = Object.keys(content.skills).filter(key => key !== 'sectionTitle');

  return (
    <section id="skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content.skills.sectionTitle}
      </motion.h2>
      <div className="skills-grid">
        {categories.map((category, index) => (
          <motion.div
            key={category}
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 style={{ textTransform: 'capitalize' }}>{category}</h3>
            <div className="skill-list">
              {(content.skills as any)[category].map((skill: string) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
