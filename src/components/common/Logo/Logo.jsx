import React from 'react';
import './Logo.scss';
import SpriteSvg from '../../common/SpriteSvg';

const Logo = ({className = ''}) => {
  return (
    <a className={`logo ${className}`} href="#">
      <SpriteSvg svg="logo" />
      <span className="logo__text">Hounter</span>
    </a>
  );
};

export default Logo;
