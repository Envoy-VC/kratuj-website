import React from 'react';

import { Button } from '../ui/button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='fixed top-0 h-[8dvh] w-full'>
      <div className='flex h-full flex-col bg-[rgba(3,0,20,.08)] backdrop-blur-md'>
        <div className='mx-auto flex h-full w-full max-w-screen-xl flex-row items-center justify-between px-3'>
          <div className='font-dune text-xl font-extrabold sm:text-2xl'>
            Kratuj
          </div>
          <div className='border-border hidden flex-row items-center gap-6 rounded-3xl border px-4 py-2 lg:flex'>
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
          <Button variant='shimmer' className='h-8 px-5'>
            Get Started
          </Button>
        </div>
        <div className='gradient-border h-[1px] w-full' />
      </div>
    </div>
  );
};

export const navItems = [
  {
    name: 'About',
    href: '/',
  },
  {
    name: 'Events',
    href: '/',
  },
  {
    name: 'Schedule',
    href: '/',
  },
  {
    name: 'Register',
    href: '/',
  },
  {
    name: 'Contact',
    href: '/',
  },
];

export default Navbar;
