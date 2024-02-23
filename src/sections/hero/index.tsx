import React from 'react';
import Image from 'next/image';

import { Badge } from '~/components/ui/badge';
import { CalendarCustom } from '~/components/ui/calendar-custom';
import { AspectRatio } from '~/components/ui/aspect-ratio';
import { Dialog, DialogContent, DialogTrigger } from '~/components/ui/dialog';

import { KratujCover } from '~/assets';

import { FaPlay } from 'react-icons/fa6';

import type { DateRange } from 'react-day-picker';

const Hero = () => {
  const range: DateRange = {
    from: new Date('2024-03-15'),
    to: new Date('2024-03-17'),
  };
  return (
    <section
      className='hero-gradient mx-auto mb-48 min-h-[100dvh] max-w-screen-xl lg:mb-0'
      id='hero'
    >
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

        <div className='relative z-[1] flex h-full w-full items-center justify-center'>
          <div className='absolute left-0 top-0 flex w-full -translate-y-[18rem] items-center justify-center overflow-x-hidden pt-8 sm:pt-0'>
            <video
              controls={false}
              autoPlay
              muted
              playsInline
              loop
              className='w-full min-w-[1280px]'
            >
              <source src='/blackhole.webm' type='video/webm' />
              <source src='/blackhole.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='absolute top-24 w-full max-w-screen-lg p-3 sm:top-16'>
            <div className='flex flex-col items-center gap-4 rounded-lg border border-zinc-900 p-4 backdrop-blur-lg lg:flex-row'>
              <div className='w-full max-w-2xl'>
                <AspectRatio ratio={16 / 9} className='relative'>
                  <Image
                    src={KratujCover.src}
                    alt='Kratuj Cover'
                    width={672}
                    height={300}
                    className='object cover rounded-xl opacity-40'
                  />
                  <div className='absolute top-0 flex h-full w-full flex-row items-center justify-center'>
                    <Dialog>
                      <DialogTrigger>
                        <div className='group flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-slate-600/40 backdrop-blur-lg transition-all duration-300 ease-out hover:h-28 hover:w-28'>
                          <div className='flex h-20 w-20 items-center justify-center rounded-full border border-[#262135] bg-gradient-to-b from-[#141026] to-[#2B293A] backdrop-blur-lg transition-all duration-300 ease-out group-hover:h-[5.5rem] group-hover:w-[5.5rem]'>
                            <FaPlay className='text-xl text-neutral-200' />
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className='dark w-full max-w-2xl border-none bg-primary p-1'>
                        <AspectRatio ratio={16 / 9} className='relative'>
                          <iframe
                            src='https://www.youtube.com/embed/oILbvIRsfpM?si=Vc2T2hN_LL3SWXwI&amp;controls=0'
                            title='YouTube video player'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowFullScreen
                            className='h-full w-full rounded-lg'
                          ></iframe>
                        </AspectRatio>
                      </DialogContent>
                    </Dialog>
                  </div>
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
