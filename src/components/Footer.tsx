import React from 'react';
import { content } from '../data/content';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} {content.hero.name}. Tous droits réservés. (v1.1 - {new Date().toLocaleDateString()})</p>
    </footer>
  );
};

export default Footer;
