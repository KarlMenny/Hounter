import React from 'react';
import './SeeOurReview.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import {
  ava_3,
  ava_7,
  ava_9,
  h_5,
  h_6,
  h_7,
} from '../../../img/getAllPictures';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import SeeOurReviewSlide from './SeeOurReviewSlide/SeeOurReviewSlide';

const SeeOurReview = () => {
  return (
    <section className="see-our-review">
      <SectionTitle
        className="see-our-review__title"
        title="What Our User Say About Us"
        subtitle="See Our Review"
        isCenter={true}
      />
      <Swiper
        className="see-our-review__slider"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        // slidesPerView={'auto'}
        centeredSlides={true}
        // spaceBetween={56}
        onInit={(swiper) => {
          window.onload = () => {
            swiper.slideTo(1, 1000);
          };
        }}
        breakpoints={{
          770: {
            slidesPerView: 'auto',
            spaceBetween: 56,
          },
          320: {
            slidesPerView: 'auto',
            spaceBetween: 40,
          },
        }}

      >
        <SwiperSlide>
          <SeeOurReviewSlide
            img={h_5}
            title="Best! I got the house I wanted through Hounter"
            text="Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want."
            ava={ava_3}
            fullname="Dianne Russell"
            role="Manager Director"
            rating="4.6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SeeOurReviewSlide
            img={h_6}
            title="Through the Hounter, I can get a house for my self"
            text="By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!"
            ava={ava_7}
            fullname="Esther Howard"
            role="Head of Marketing"
            rating="4.8"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SeeOurReviewSlide
            img={h_7}
            title="My house sold out fast!"
            text="I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!"
            ava={ava_9}
            fullname="Courtney Henry"
            role="CEO Andarafish"
            rating="4.3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SeeOurReviewSlide
            img={h_7}
            title="My house sold out fast!"
            text="I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!"
            ava={ava_9}
            fullname="Courtney Henry"
            role="CEO Andarafish"
            rating="4.3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SeeOurReviewSlide
            img={h_7}
            title="My house sold out fast!"
            text="I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!"
            ava={ava_9}
            fullname="Courtney Henry"
            role="CEO Andarafish"
            rating="4.3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SeeOurReviewSlide
            img={h_7}
            title="My house sold out fast!"
            text="I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!"
            ava={ava_9}
            fullname="Courtney Henry"
            role="CEO Andarafish"
            rating="4.3"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SeeOurReview;
