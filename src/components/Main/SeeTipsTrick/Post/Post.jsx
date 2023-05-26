import React from 'react';
import './Post.scss';
import SpriteSvg from '../../../common/SpriteSvg';
import PersonCard from '../../../common/PersonCard/PersonCard';

const Post = ({
  img,
  ava,
  name,
  title,
  titleSize = '18',
  text,
  timeText,
  className = '',
}) => {
  return (
    <div className={`post ${className}`}>
      <img className="post__img" src={img} alt="post" />
      <div className="post__wrapper">
        <PersonCard
          className="post__person-card"
          ava={ava}
          avaSize="32"
          title={name}
          titleSize="14"
        />
        <h3 className={`post__title post__title--size_${titleSize}`}>
          {title}
        </h3>
        {text && <p className="post__text">{text}</p>}
        <time className="post__time">
          <SpriteSvg svg="clock" />
          {timeText}
        </time>
      </div>
    </div>
  );
};

export default Post;
