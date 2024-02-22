import React from 'react';
import { Hero, Speakers, Events } from '~/sections';

const Home = () => {
  return (
    <div className='dark'>
      <Hero />
      <Speakers />
      <Events />
    </div>
  );
};

export default Home;
