import React from 'react';
import { content } from '../data/content';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} {content.hero.name}. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
