import React from 'react';

import { Badge } from '~/components/ui/badge';

const Hero = () => {
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
          <h1 className='gradient-title z-[10] py-1 text-center font-grotesque text-5xl sm:text-7xl 2xl:text-7xl'>
            Transforming Tomorrow
          </h1>
          <p className='z-[10] text-lg text-neutral-300'>
            Annual tech conclave of NIT Agartala
          </p>
        </div>

        <div className='relative z-[1] flex h-full w-full items-center justify-center '>
          <div className='absolute -top-[18rem] mx-auto flex min-h-max max-w-screen-2xl items-center justify-center'>
            <video
              controls={false}
              autoPlay
              muted
              playsInline
              loop
              width={1200}
              className='min-w-[1200px]'
            >
              <source src='/blackhole.webm' type='video/webm' />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='hero-gradient absolute -top-[18rem] z-[100] h-[400px] w-full'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
