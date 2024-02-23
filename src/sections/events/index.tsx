import React from 'react';

import { EventList } from '~/components/event-card';

const Events = () => {
  return (
    <section id='events' className=''>
      <div className='relative mx-auto flex w-full items-center justify-center overflow-hidden '>
        <video
          controls={false}
          autoPlay
          muted
          playsInline
          loop
          className='wormhole-filter w-full min-w-[768px] -translate-y-1 sm:w-[1024px]'
        >
          <source src='/events-video.webm' type='video/webm' />
          <source src='/events-video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <div className='absolute flex h-full w-full flex-col items-end justify-end'>
          <h2 className='gradient-title z-[10] w-full translate-y-5 pb-5 text-center font-grotesque text-4xl sm:text-5xl'>
            Dive into the Events
          </h2>
        </div>
      </div>
      <div className='mx-auto max-w-screen-2xl'>
        <EventList items={events} />
      </div>
    </section>
  );
};

export const events = [
  {
    title: 'Event Name 1',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    link: '/',
  },
  {
    title: 'Event Name 2',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. aliquet vul tellus vel vel met tellus.',
    link: '/',
  },
  {
    title: 'Event Name 3',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. aliquet vul tellus vel vel',
    link: '/',
  },
  {
    title: 'Event Name 4',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. vae adaabhd ajda jad',
    link: '/',
  },
  {
    title: 'Event Name 5',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    link: '/',
  },
  {
    title: 'Event Name 6 ',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. vae adaabhd ajda jad ad jn jada nuuommefa',
    link: '/',
  },
];

export default Events;
