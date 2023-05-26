import React from 'react';
import './Header.scss';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from '../common/Logo/Logo';
import NavBtn from './NavBtn/NavBtn';
import OneField from '../common/OneField/OneField';
import HeaderSliderItem from './HeaderSliderItem/HeaderSliderItem';
import {
  airbnb,
  ava_1,
  ava_2,
  ava_3,
  ava_4,
  ava_house,
  headerImg,
  ticketcom,
  traveloka,
  tripadvisor,
} from '../../img/getAllPictures';
import BurgerMenu from '../common/BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <header className="header">
      <div className="header__shape header__shape--order_first"></div>
      <div className="header__shape header__shape--order_second"></div>
      <div className="container">
        <div className="header__navigation">
          <Logo />
          <div className="header__wrapper">
            <nav className="navigation">
              <BurgerMenu />
              <ul className="navigation__items">
                <li>
                  <NavBtn>About Us</NavBtn>
                </li>
                <li>
                  <NavBtn>Article</NavBtn>
                </li>
                <li>
                  <NavBtn hasDropdown={true}>Property</NavBtn>
                </li>
              </ul>
            </nav>
            <a className="navigation__sing-up" href="#">
              Sign Up!
            </a>
          </div>
        </div>
        <div className="header__grid-row">
          <div className="header__grid-col">
            <h1 className="header__title">
              find the place to live <span>your dreams</span> easily here
            </h1>
            <p className="header__text">
              Everything you need about finding your place to live will be here,
              where it will be easier for you
            </p>
            <OneField
              className="header__search"
              textBtn="Search"
              placeholder="Search for the location you want!"
              isArrow={true}
            />
            <div className="our-partnership">
              <h3 className="our-partnership__title">Our Partnership</h3>
              <ul className="our-partnership__items">
                <li className="our-partnership__item">
                  <a href="#">
                    <img src={traveloka} alt="partner" />
                  </a>
                </li>
                <li className="our-partnership__item">
                  <a href="#">
                    <img src={ticketcom} alt="partner" />
                  </a>
                </li>
                <li className="our-partnership__item">
                  <a href="#">
                    <img src={airbnb} alt="partner" />
                  </a>
                </li>
                <li className="our-partnership__item">
                  <a href="#">
                    <img src={tripadvisor} alt="partner" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header__grid-col">
            <img className="header__img" src={headerImg} alt="headerImg" />
          </div>
        </div>
      </div>
      <Swiper
        className="header-swiper"
        modules={[Autoplay]}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // allowTouchMove={false}
      >
        <SwiperSlide>
          <HeaderSliderItem
            title="1K+ People"
            text="Successfully Getting Home"
            img={
              <>
                <img src={ava_1} alt="avatar" />
                <img src={ava_2} alt="avatar" />
                <img src={ava_3} alt="avatar" />
              </>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderItem
            title="56 Houses"
            text="Sold Monthly"
            img={
              <>
                <img src={ava_house} alt="avatar" />
              </>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderItem
            title="4K+"
            text="People Looking for New Homes"
            img={
              <>
                <img src={ava_4} alt="avatar" />
              </>
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSliderItem
            title="4K+"
            text="People Looking for New Homes"
            img={
              <>
                <img src={ava_4} alt="avatar" />
              </>
            }
          />
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
