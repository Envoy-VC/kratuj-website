import React from 'react';

import { Button } from '../ui/button';
import Link from 'next/link';
import HamburgerMenu from '../hamburger-menu';

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[100] h-[8dvh] w-full'>
      <div className='flex h-full flex-col bg-[rgba(3,0,20,.08)] backdrop-blur-md'>
        <div className='mx-auto flex h-full w-full max-w-screen-xl flex-row items-center justify-between px-3'>
          <div className='font-dune text-xl font-extrabold sm:text-2xl'>
            Kratuj
          </div>
          <div className='hidden flex-row items-center gap-6 rounded-3xl border border-border px-4 py-2 lg:flex'>
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className='text-sm text-slate-200 transition-all duration-300 ease-out hover:text-slate-400'
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className='flex flex-row items-center gap-2'>
            <Button variant='shimmer' className='h-8 px-5'>
              Get Started
            </Button>

            <HamburgerMenu />
          </div>
        </div>
        <div className='gradient-border h-[1px] w-full' />
      </div>
    </div>
  );
};

export const navItems = [
  {
    name: 'About',
    href: '#hero',
  },
  {
    name: 'Events',
    href: '#events',
  },
  {
    name: 'Speakers',
    href: '#speakers',
  },
  {
    name: 'Register',
    href: '#hero',
  },
  {
    name: 'Contact',
    href: '#footer',
  },
];

export default Navbar;
