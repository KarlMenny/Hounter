import React from 'react';
import './FeaturedHouseSlide.scss';
import Label from '../../../common/Label/Label';
import PersonCard from '../../../common/PersonCard/PersonCard';

const FeaturedHouseSlide = ({ img, label, title, price, seller }) => {
  return (
    <div className="featured-house-slide">
      <div className="featured-house-slide__wrapper">
        <img className="featured-house-slide__img" src={img} alt="house" />
        <Label className="featured-house-slide__label" label={label} />
      </div>
      <h3 className="featured-house-slide__title">{title}</h3>
      <p className="featured-house-slide__price">{price}</p>
      <PersonCard
        ava={seller.avatar}
        avaSize="40"
        title={seller.name}
        titleSize="18"
        text={seller.fromWhere}
        textSize="14"
      />
    </div>
  );
};

export default FeaturedHouseSlide;
