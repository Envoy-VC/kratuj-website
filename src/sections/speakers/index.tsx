import Image from 'next/image';
import React from 'react';

import { Badge } from '~/components/ui/badge';
import { LayoutGrid } from '~/components';

import { RingImage } from '~/assets';

const Speakers = () => {
  return (
    <section id='speakers' className='w-full'>
      <div className='flex w-full flex-col items-center justify-center overflow-hidden'>
        <div className='flex flex-col items-center justify-center'>
          <Image
            src={RingImage.src}
            alt='Ring Image'
            width={650}
            height={650}
            className='over min-w-[500px] sm:w-[768px]'
          />
          <div className='flex h-full w-full -translate-y-24 flex-col items-end justify-end sm:-translate-y-32'>
            <div className='gradient-badge z-[10]'>
              <Badge variant='gradient' className='w-fit'>
                Speakers
              </Badge>
            </div>
            <h2 className='gradient-title z-[10] w-full translate-y-5 pb-5 text-center font-grotesque text-4xl sm:text-5xl'>
              Meet the Speakers
            </h2>
          </div>
        </div>
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
};

export default Speakers;

const SkeletonOne = () => {
  return (
    <div>
      <p className='text-4xl font-bold text-white'>House in the woods</p>
      <p className='text-base font-normal text-white'></p>
      <p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className='text-4xl font-bold text-white'>House above the clouds</p>
      <p className='text-base font-normal text-white'></p>
      <p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className='text-4xl font-bold text-white'>Greens all over</p>
      <p className='text-base font-normal text-white'></p>
      <p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className='text-4xl font-bold text-white'>Rivers are serene</p>
      <p className='text-base font-normal text-white'></p>
      <p className='my-4 max-w-lg text-base font-normal text-neutral-200'>
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'md:col-span-2',
    thumbnail:
      'https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail:
      'https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'col-span-1',
    thumbnail:
      'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'md:col-span-2',
    thumbnail:
      'https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
