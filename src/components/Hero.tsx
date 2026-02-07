import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';
import { content } from '../data/content';
import '../styles/sections.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="profile-photo-container"
      >
        <img src={content.hero.img} alt={content.hero.name} className="profile-photo" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Bonjour, je suis {content.hero.name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {content.hero.role}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ display: 'flex', gap: '20px' }}
      >
        <Link to="projects" smooth={true} duration={500} offset={-70}>
          <button className="cta-button">Voir mon travail</button>
        </Link>
        <a href={content.hero.resumeLink} download className="cta-button" style={{ background: 'transparent', border: '2px solid var(--primary-color)' }}>
          Télécharger CV
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
