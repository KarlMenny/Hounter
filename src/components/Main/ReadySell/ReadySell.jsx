import React, { useEffect, useRef } from 'react';
import './ReadySell.scss';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReadySellSlide from './ReadySellSlide/ReadySellSlide';

const ReadySell = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      swiperRef.current.swiper.autoplay.stop();
    };

    const handleMouseLeave = () => {
      swiperRef.current.swiper.autoplay.start();
    };

    swiperRef.current.addEventListener('mouseenter', handleMouseEnter);
    swiperRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      swiperRef.current.removeEventListener('mouseenter', handleMouseEnter);
      swiperRef.current.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="ready-sell">
      <div className="ready-sell__shape ready-sell__shape--order_first"></div>
      <div className="ready-sell__shape ready-sell__shape--order_second"></div>

      <Swiper
        className="ready-sell__slider"
        modules={[Autoplay]}
        spaceBetween={60}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper.el;
        }}
      >
        <SwiperSlide>
          <ReadySellSlide />
        </SwiperSlide>
        <SwiperSlide>
          <ReadySellSlide />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ReadySell;
