import React from 'react';
import './Main.scss';
import FeaturedHouse from './FeaturedHouse/FeaturedHouse';
import ReadySell from './ReadySell/ReadySell';
import SeeOurReview from './SeeOurReview/SeeOurReview';
import SeeTipsTrick from './SeeTipsTrick/SeeTipsTrick';
import Subscribe from './Subscribe/Subscribe';

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <FeaturedHouse />
        <ReadySell />
      </div>
      <SeeOurReview />
      <div className="container">
        <SeeTipsTrick />
        <Subscribe />
      </div>
    </main>
  );
};

export default Main;
