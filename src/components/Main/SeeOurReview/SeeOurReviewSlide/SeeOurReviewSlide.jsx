import React from 'react';
import './SeeOurReviewSlide.scss';
import SpriteSvg from '../../../common/SpriteSvg';
import PersonCard from '../../../common/PersonCard/PersonCard';

const SeeOurReviewSlide = ({
  img,
  title,
  text,
  ava,
  fullname,
  role,
  rating,
}) => {
  return (
    <div className="see-our-review-slide">
      <img className="see-our-review-slide__img" src={img} alt="house" />
      <div className="see-our-review-slide__describe">
        <div className="see-our-review-slide__wrapper">
          <h3 className="see-our-review-slide__title">{title}</h3>
          <p className="see-our-review-slide__text">{text}</p>
        </div>
        <div className="see-our-review-slide__footer">
          <PersonCard
            ava={ava}
            avaSize="40"
            title={fullname}
            titleSize="14"
            text={role}
            textSize="14"
          />

          <div className="rating">
            <SpriteSvg svg="star" />
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeOurReviewSlide;
