import Link from 'next/link';
import React from 'react';

import HeaderWormhole from '../header-wormhole';
import { LuBinary } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className='mt-24 flex flex-col gap-8'>
      <div className='mx-auto w-full max-w-screen-xl'>
        <HeaderWormhole>
          <div className='pb-2'>Transforming Tomorrow</div>
        </HeaderWormhole>
      </div>
      <div id='footer' className='flex flex-col pb-12'>
        <div className='gradient-border h-[1px] w-full' />
        <div className='hero-gradient z-[2] flex min-h-[50%] w-full flex-col bg-background px-4 pt-12'>
          <div className='mx-auto flex h-2/3 w-full max-w-screen-xl flex-col py-5 pb-8 md:flex-row'>
            <div className='w-full basis-1/2'>
              <div className='flex h-full flex-col items-center justify-between gap-4 md:items-start'>
                <div className='gradient-title font-dune text-4xl'>kratuj</div>
                <div className='flex flex-col'>
                  <div className='text-center text-zinc-400'>
                    Gymkhana Technical @{new Date().getFullYear()}.{' '}
                    <br className='block sm:hidden' />
                    All rights reserved.
                  </div>
                  <div className=' hidden text-zinc-400 md:block'>
                    Made with <LuBinary className='inline' /> by{' '}
                    <Link
                      href='https://envoy1084.xyz'
                      target='_blank'
                      className='text-zinc-200'
                    >
                      Envoy_
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='my-8 flex w-full basis-1/2 flex-row items-center justify-center gap-5 sm:my-0 md:justify-end'>
              <div className='flex w-full max-w-[10rem] flex-col items-center gap-1 md:items-start'>
                <div className='my-2 text-lg font-medium text-zinc-200'>
                  Events
                </div>
                {eventsLinks.map((event, index) => (
                  <Link
                    key={index}
                    href={event.href}
                    className='text-sm font-medium text-zinc-400'
                  >
                    {event.name}
                  </Link>
                ))}
              </div>
              <div className='flex w-full max-w-[10rem] flex-col items-center gap-1 md:items-start'>
                <div className='my-2 text-lg font-medium text-zinc-200'>
                  About
                </div>
                {aboutLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className='text-sm font-medium text-zinc-400'
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className='block text-center text-zinc-400 md:hidden'>
              Made with <LuBinary className='inline' /> by{' '}
              <Link
                href='https://envoy1084.xyz'
                target='_blank'
                className='text-zinc-200'
              >
                Envoy_
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const eventsLinks = [
  {
    name: 'Event 1',
    href: '/',
  },
  {
    name: 'Event 2',
    href: '/',
  },
  {
    name: 'Event 3',
    href: '/',
  },
  {
    name: 'Event 4',
    href: '/',
  },
];

export const aboutLinks = [
  {
    name: 'About Us',
    href: '/',
  },
  {
    name: 'Our Team',
    href: '/',
  },
  {
    name: 'Partners',
    href: '/',
  },

  {
    name: 'Contact Us',
    href: '/',
  },
];

export default Footer;
