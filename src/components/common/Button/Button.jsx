import React from 'react';
import './Button.scss';
import SpriteSvg from '../../common/SpriteSvg';

const Button = ({ img, text, className = '' }) => {
  return (
    <button className={`button ${className}`}>
      {img && <SpriteSvg svg={img} />}
      {text}
    </button>
  );
};

export default Button;
