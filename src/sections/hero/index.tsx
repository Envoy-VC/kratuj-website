import React from 'react';

import { Badge } from '~/components/ui/badge';
import { CalendarCustom } from '~/components/ui/calendar-custom';

import type { DateRange } from 'react-day-picker';

import { AspectRatio } from '~/components/ui/aspect-ratio';

const Hero = () => {
  const range: DateRange = {
    from: new Date('2024-03-15'),
    to: new Date('2024-03-17'),
  };
  return (
    <section className='hero-gradient max-w-screen-xl] mx-auto' id='hero'>
      <div className='relative py-[8dvh]'>
        <div className='hero-gradient absolute top-0'> </div>
        <div className='my-12 flex flex-col items-center justify-center gap-2 py-12'>
          <div className='gradient-badge z-[10]'>
            <Badge variant='gradient' className='w-fit'>
              From Mar 15th to Mar 17th, 2024
            </Badge>
          </div>
          <h1 className='gradient-title font-grotesque z-[10] py-1 text-center text-5xl sm:text-7xl 2xl:text-7xl'>
            Transforming Tomorrow
          </h1>
          <p className='z-[10] text-lg text-neutral-300'>
            Annual tech conclave of NIT Agartala
          </p>
        </div>

        <div className='relative z-[1] mx-4 flex h-full w-full items-center justify-center'>
          <div className='absolute -top-[18rem] mx-auto flex min-h-max max-w-screen-2xl items-center justify-center'>
            <video
              controls={false}
              autoPlay
              muted
              playsInline
              loop
              width={1200}
              className='w-full min-w-[1000px]'
            >
              <source src='/blackhole.webm' type='video/webm' />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='absolute top-[9rem] w-full max-w-screen-lg -translate-x-4 p-3'>
            <div className='flex flex-col items-center gap-4 rounded-lg border border-zinc-900 p-4 backdrop-blur-lg lg:flex-row'>
              <div className='w-full max-w-2xl'>
                <AspectRatio ratio={16 / 9}>
                  <div className='h-full border'></div>
                </AspectRatio>
              </div>

              <CalendarCustom
                mode='range'
                numberOfMonths={1}
                defaultMonth={new Date('2024-03-17')}
                selected={range}
                className='w-fit rounded-md shadow-2xl'
              />
            </div>
          </div>
          <div className='hero-gradient absolute -top-[18rem] z-[100] h-[400px] w-full'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
