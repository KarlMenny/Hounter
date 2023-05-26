import React from 'react';
import './Label.scss';
import SpriteSvg from '../../common/SpriteSvg';

const Label = ({ label, className }) => {
  let svg = '';
  let color = '';

  switch (label) {
    case 'Popular':
      svg = 'popular';
      color = 'pink';
      break;
    case 'New house':
      svg = 'house';
      color = 'blue';
      break;
    case 'Best Deals':
      svg = 'purse';
      color = 'green';
      break;
  }

  return (
    <div className={`label label--color_${color} ${className}`}>
      <SpriteSvg svg={svg} />
      {label}
    </div>
  );
};

export default Label;
