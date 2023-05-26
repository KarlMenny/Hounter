import React, { useEffect, useState } from 'react';
import './ReadySellSlide.scss';
import SpriteSvg from '../../../common/SpriteSvg';
import { ava_3, p_1, p_2, p_3, p_4 } from '../../../../img/getAllPictures';
import FancyBox from '../../../common/FancyBox/FancyBox';
import SectionTitle from '../../../common/SectionTitle/SectionTitle';
import PersonCard from '../../../common/PersonCard/PersonCard';
import Button from '../../../common/Button/Button';

const ReadySellSlide = () => {
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
    <div className="ready-sell-slide">
      <div className="ready-sell-slide__grid-row">
        <div className="ready-sell-slide__grid-col ready-sell-slide__grid-col--left">
          <SectionTitle
            title="Let’s tour and see our house!"
            subtitle="Ready to Sell!"
            isCenter={windowWidth < 1075}
          />
          <div className="ready-sell-slide__wrapper">
            <p className="ready-sell-slide__text">
              Houses recommended by our partners that have been curated to
              become the home of your dreams!
            </p>
            <div className="ready-sell-slide__detail">
              <h3 className="ready-sell-slide__detail-title">House Detail</h3>
              <div className="ready-sell-slide__detail-wrapper">
                <ul className="ready-sell-slide__detail-items">
                  <li className="ready-sell-slide__detail-item">
                    <SpriteSvg svg="bed" />4 Bedrooms
                  </li>
                  <li className="ready-sell-slide__detail-item">
                    <SpriteSvg svg="car" />1 Carport
                  </li>
                </ul>
                <ul className="ready-sell-slide__detail-items">
                  <li className="ready-sell-slide__detail-item">
                    <SpriteSvg svg="bath" />2 Bathrooms
                  </li>
                  <li className="ready-sell-slide__detail-item">
                    <SpriteSvg svg="floors" />2 Floors
                  </li>
                </ul>
              </div>
            </div>
            <div className="ready-sell-slide__contact">
              <PersonCard
                ava={ava_3}
                avaSize="56"
                title="Dianne Russell"
                titleSize="18"
                text="Manager Director"
                textSize="16"
              />
              <Button img="phone" text="Contact Now" />
            </div>
          </div>
        </div>
        <div className="ready-sell-slide__grid-col ready-sell-slide__grid-col--media_padding">
          <FancyBox
            className="ready-sell-slide__gallery"
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <a
              className="ready-sell-slide__gallery-item"
              data-fancybox="gallery"
              href="https://youtu.be/v2yjbEuDCRY"
            >
              <SpriteSvg svg="play_btn" />
              <img src={p_1} />
            </a>
            <div className="ready-sell-slide__gallery-wrapper">
              <a
                className="ready-sell-slide__gallery-item"
                data-fancybox="gallery"
                href="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              >
                <img src={p_2} />
              </a>
              <a
                className="ready-sell-slide__gallery-item"
                data-fancybox="gallery"
                href="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
              >
                <img src={p_3} />
              </a>
              <a
                className="ready-sell-slide__gallery-item"
                data-fancybox="gallery"
                href="https://images.unsplash.com/photo-1550226891-ef816aed4a98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              >
                <img src={p_4} />
              </a>
            </div>
          </FancyBox>
        </div>
      </div>
    </div>
  );
};

export default ReadySellSlide;
