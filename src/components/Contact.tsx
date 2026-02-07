import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { content } from '../data/content';
import '../styles/sections.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {content.contact.sectionTitle}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ color: 'var(--secondary-color)', fontSize: '1.2rem', marginBottom: '2rem' }}
      >
        N'hésitez pas à me contacter pour des opportunités ou collaborations !
      </motion.p>
      <motion.div
        className="contact-details"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ marginBottom: '2rem' }}
      >
         <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
           <a href={`mailto:${content.contact.email}`} style={{ color: 'var(--text-color)' }}>{content.contact.email}</a>
         </p>
         <p style={{ fontSize: '1.2rem' }}>
           <a href={`tel:${content.contact.phone.replace(/\s/g, '')}`} style={{ color: 'var(--text-color)' }}>{content.contact.phone}</a>
         </p>
      </motion.div>
      <motion.div
        className="social-links"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href={content.contact.github} target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
