import React, { useEffect, useState } from 'react';
import './Subscribe.scss';
import OneField from '../../common/OneField/OneField';

import {
  s_1,
  s_2,
  s_3,
  s_4,
  ava_1,
  ava_2,
  ava_3,
  ava_4,
} from '../../../img/getAllPictures';

const Subscribe = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const oneFieldHandleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', oneFieldHandleResize);

    return () => {
      window.removeEventListener('resize', oneFieldHandleResize);
    };
  }, []);

  return (
    <section className="subscribe">
      <div className="subscribe__content">
        <h2 className="subscribe__title">
          Subscribe For More Info and update from Hounter
        </h2>
        <OneField
          textBtn={windowWidth < 430 ? '' : 'Subsribe Now'}
          svg="letter"
          placeholder="Your email here"
          isArrow={windowWidth < 430}
          isEmail={true}
        />
        <img
          className="subscribe__img subscribe__img-1"
          src={s_1}
          alt="picture"
        />
        <img
          className="subscribe__img subscribe__img-2"
          src={s_4}
          alt="picture"
        />
        <img
          className="subscribe__img subscribe__img-3"
          src={ava_1}
          alt="picture"
        />
        <img
          className="subscribe__img subscribe__img-4"
          src={ava_2}
          alt="picture"
        />
        <img
          className="subscribe__img subscribe__img-5"
          src={s_3}
          alt="picture"
        />
        <img
          className="subscribe__img subscribe__img-6"
          src={s_2}
          alt="picture"
        />
        <img
          className="subscribe__img subscribe__img-7"
          src={ava_3}
          alt="picture"
        />
        <img
          className="subscribe__img subscribe__img-8"
          src={ava_4}
          alt="picture"
        />
      </div>
    </section>
  );
};

export default Subscribe;
