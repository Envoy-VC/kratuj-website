import Link from 'next/link';
import Image from 'next/image';

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
  return (
    <div
      className={cn(
        'grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {items.map((item) => (
        <Link
          href={item?.link}
          key={item?.link}
          className='group relative h-full w-full p-3'
        >
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardImage />
            <CardDescription>{item.description}</CardDescription>
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
        'group relative z-20 w-full overflow-hidden rounded-2xl border border-transparent bg-[#0e0c25] backdrop-blur-2xl',
        className
      )}
    >
      <div className='relative z-50'>
        <div className='space-y-1'>{children}</div>
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
        'gradient-title absolute top-0 m-3 text-2xl font-bold tracking-wide',
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardImage = ({ className }: { className?: string }) => {
  return (
    <Image
      src={
        'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
      alt='Kratuj Cover'
      width={672}
      height={300}
      className={cn(
        'rounded-xl object-cover opacity-40 transition-all duration-300 ease-out group-hover:scale-[115%]',
        className
      )}
    />
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
