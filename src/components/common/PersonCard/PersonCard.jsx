import React from 'react';
import './PersonCard.scss';

const PersonCard = ({
  ava,
  avaSize,
  title,
  titleSize,
  text,
  textSize,
  className = '',
}) => {
  return (
    <div className={`person-card ${className}`}>
      <img
        className={`person-card__avatar person-card__avatar--size_${avaSize}`}
        src={ava}
        alt="avatar"
      />
      <div className="person-card__wrapper">
        <h4
          className={`person-card__title person-card__title--size_${titleSize}`}
        >
          {title}
        </h4>
        {text && (
          <p
            className={`person-card__text person-card__text--size_${textSize}`}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default PersonCard;
