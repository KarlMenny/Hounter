import React from 'react';
import './SeeTipsTrick.scss';
import {
  post_1,
  post_2,
  post_3,
  post_4,
  ava_3,
  ava_4,
  ava_11,
  ava_12,
} from '../../../img/getAllPictures';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import Post from './Post/Post';

const SeeTipsTrick = () => {
  return (
    <section className="see-tips-trick">
      <div className="see-tips-trick__shape see-tips-trick__shape--order_first"></div>
      <div className="see-tips-trick__shape see-tips-trick__shape--order_second"></div>

      <div className="see-tips-trick__header">
        <SectionTitle
          className="see-tips-trick__title"
          title="Find out more about selling and buying homes"
          subtitle="See tips and trick from our partnership"
          isCenter={true}
        />
        <Button text="More Artikel" />
      </div>
      <div className="see-tips-trick__posts">
        <div className="see-tips-trick__post-1">
          <Post
            img={post_4}
            ava={ava_4}
            name="Cameron Williamson"
            title="12 Things to know before buying a house"
            text="Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house"
            timeText="8 min read | 25 Apr 2021"
          />
        </div>
        <div className="see-tips-trick__post-2">
          <Post
            img={post_1}
            ava={ava_3}
            name="Dianne Russell"
            title="The things we need to check when we want to buy a house"
            timeText="4 min read | 25 Apr 2021"
          />
        </div>
        <div className="see-tips-trick__post-3">
          <Post
            img={post_2}
            ava={ava_12}
            name="Darlene Robertson"
            title="The best way to know the quality of the house we want to buy"
            timeText="2 min read | 24 Apr 2021"
          />
        </div>
        <div className="see-tips-trick__post-4">
          <Post
            img={post_3}
            ava={ava_11}
            name="Courtney Henry"
            title="7 Ways to distinguish the quality of the house we want to buy"
            timeText="6 min read | 24 Apr 2021"
          />
        </div>
      </div>
    </section>
  );
};

export default SeeTipsTrick;
