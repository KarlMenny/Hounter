import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({ title, subtitle, isCenter = false, className = ''}) => {
  return (
    <h2 className={`section-title ${className}` + (isCenter ? ' section-title--center' : '')}>
      <div className="section-title__subtitle">{subtitle}</div>
      <div className="section-title__title">{title}</div>
    </h2>
  );
};

export default SectionTitle;
