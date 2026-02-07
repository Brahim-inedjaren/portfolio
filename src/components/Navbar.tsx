import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { content } from '../data/content';
import '../styles/sections.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <Link to="hero" smooth={true} duration={500} offset={-70}>
          {content.hero.name.split(' ')[0]}
        </Link>
      </div>
      <ul className="nav-links">
        {['À propos', 'Compétences', 'Expérience', 'Projets', 'Contact'].map((item) => (
          <li key={item}>
            <Link
              to={
                item === 'À propos' ? 'about' :
                item === 'Compétences' ? 'skills' :
                item === 'Expérience' ? 'experience' :
                item === 'Projets' ? 'projects' :
                item === 'Contact' ? 'contact' : item.toLowerCase()
              }
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              spy={true}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
