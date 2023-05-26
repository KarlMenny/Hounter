import React from 'react';
import './HeaderSliderItem.scss';

const HeaderSliderItem = ({ title, text, img }) => {
  return (
    <div className="header-slider-item">
      <div className="header-slider-item__avatars">{img}</div>
      <div className="header-slider-item__wrapper">
        <h4 className="header-slider-item__title">{title}</h4>
        <p className="header-slider-item__text">{text}</p>
      </div>
    </div>
  );
};

export default HeaderSliderItem;
