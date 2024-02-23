'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';

import { AspectRatio } from '../ui/aspect-ratio';

import { cn } from '~/lib/utils';

export const EventList = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className='group relative  block h-full w-full p-2'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='card-gradient absolute inset-0 block h-full w-full rounded-3xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <div className='relative'>
              <CardImage />
              <CardDescription>{item.description}</CardDescription>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-[#0e0c25] backdrop-blur-2xl',
        className
      )}
    >
      <div className='relative z-50'>
        <div className='flex flex-col gap-1'>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        'p-3 text-lg font-bold tracking-wide text-zinc-100',
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardImage = ({ className }: { className?: string }) => {
  return (
    <div className='w-full max-w-lg'>
      <AspectRatio ratio={1.91} className='max-w-lg'>
        <Image
          src={
            'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt='Kratuj Cover'
          width={672}
          height={300}
          className={cn('rounded-b-xl object-cover opacity-40', className)}
        />
      </AspectRatio>
    </div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        'absolute bottom-2 mx-3 mt-8 text-sm leading-relaxed tracking-wide text-zinc-200',
        className
      )}
    >
      {children}
    </p>
  );
};
