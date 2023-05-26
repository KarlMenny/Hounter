import React, { useEffect, useRef, useState } from 'react';
import './FeaturedHouse.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SpriteSvg from '../../common/SpriteSvg';
import { houseSlides } from '../../../data/dataSlides';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import FeaturedHouseSlide from './FeaturedHouseSlide/FeaturedHouseSlide';

const FeaturedHouse = () => {
  const [activeButton, setActiveButton] = useState('house');
  const swiperRef = useRef(null);

  const handlerFilterButtonClick = (type) => {
    setActiveButton(type);
  };

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
    <>
      <section className="featured-house">
        <div className="featured-house__func">
          <SectionTitle
            title="Featured House"
            subtitle="Our Recommendation"
            isCenter={windowWidth < 1075}
          />
          <div className="slider-filter">
            <button
              type="button"
              className={
                `slider-filter__btn` +
                (activeButton === 'house' ? ' slider-filter__btn--active' : '')
              }
              onClick={() => handlerFilterButtonClick('house')}
            >
              <SpriteSvg svg="house" />
              House
            </button>
            <button
              type="button"
              className={
                `slider-filter__btn` +
                (activeButton === 'villa' ? ' slider-filter__btn--active' : '')
              }
              onClick={() => handlerFilterButtonClick('villa')}
            >
              <SpriteSvg svg="villa" />
              Villa
            </button>
            <button
              type="button"
              className={
                `slider-filter__btn` +
                (activeButton === 'apartment'
                  ? ' slider-filter__btn--active'
                  : '')
              }
              onClick={() => handlerFilterButtonClick('apartment')}
            >
              <SpriteSvg svg="apartment" />
              Apartment
            </button>
          </div>
          <div className="slider-nav">
            <button
              className="slider-nav__btn"
              onClick={() => swiperRef.current.slidePrev()}
              type="button"
            >
              <SpriteSvg svg="arrow_left" />
            </button>
            <button
              className="slider-nav__btn"
              onClick={() => swiperRef.current.slideNext()}
              type="button"
            >
              <SpriteSvg svg="arrow_right" />
            </button>
          </div>
        </div>

        <Swiper
          className="featured-house__swiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onInit={(swiper) => {
            window.onload = () => {
              swiper.slideTo(1, 1000);
            };
          }}
          breakpoints={{
            1075: {
              slidesPerView: 'auto',
              spaceBetween: 40,
            },
            320: {
              slidesPerView: 'auto',
              centeredSlides: true,
              spaceBetween: 20,
            },
          }}
        >
          {houseSlides
            .filter((dataSlide) => activeButton === dataSlide.type)
            .map((dataSlide) => (
              <SwiperSlide key={dataSlide.id}>
                <FeaturedHouseSlide
                  img={dataSlide.image}
                  label={dataSlide.label}
                  title={dataSlide.title}
                  price={dataSlide.price}
                  seller={dataSlide.seller}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
};

export default FeaturedHouse;
