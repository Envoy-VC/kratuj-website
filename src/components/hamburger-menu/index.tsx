'use client';

import React from 'react';
import Link from 'next/link';

import { motion, useCycle } from 'framer-motion';
import { Button } from '../ui/button';

import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';

import { navItems } from '../navbar';

const HamburgerMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className='lg:hidden'>
      <Sheet open={isOpen} onOpenChange={(value) => toggleOpen(Number(value))}>
        <SheetTrigger asChild>
          <Button
            size='icon'
            variant='ghost'
            className='z-[100] cursor-pointer hover:bg-transparent'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='cursor-pointer'
            >
              <motion.path
                {...path1Variants.closed}
                animate={isOpen ? path1Variants.open : path1Variants.closed}
                transition={{ duration: 0.2 }}
                stroke='#FFFFFF'
              />
              <motion.path
                {...path2Variants.closed}
                animate={isOpen ? path2Variants.open : path2Variants.closed}
                transition={{ duration: 0.2 }}
                stroke='#FFFFFF'
              />
              <motion.path
                {...path3Variants.closed}
                animate={isOpen ? path3Variants.open : path3Variants.closed}
                transition={{ duration: 0.2 }}
                stroke='#FFFFFF'
              />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent className='!dark border-none bg-[#040015]/50 p-0 text-gray-50 backdrop-blur-2xl'>
          <div className='my-16 flex h-full w-full flex-col gap-2'>
            {navItems.map((item) => (
              <Link
                href={item.href}
                className='border-b-2 border-[#4b4170] px-4 py-2 text-xl font-medium'
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const path1Variants = {
  closed: { d: 'M 2 2.5 L 20 2.5' },
  open: { d: 'M 3 16.5 L 17 2.5' },
};

const path2Variants = {
  closed: { opacity: 1, d: 'M 2 9.423 L 20 9.423' },
  open: { opacity: 0, d: 'M 2 9.423 L 20 9.423' },
};

const path3Variants = {
  closed: { d: 'M 2 16.346 L 20 16.346' },
  open: { d: 'M 3 2.5 L 17 16.346' },
};

export default HamburgerMenu;
