import React from 'react';

type Props = React.PropsWithChildren;

const HeaderWormhole = ({ children }: Props) => {
  return (
    <div className='hero-top relative hidden h-[202px] w-full bg-contain bg-no-repeat lg:block'>
      <div className='hero-top-mask absolute left-0 top-0 h-full w-full'>
        <div className='hero-top-animation relative top-0 z-[88888] w-full'></div>
      </div>
      <h1 className='gradient-title translate-y-[110%] text-center font-grotesque text-7xl 2xl:text-7xl'>
        {children}
      </h1>
    </div>
  );
};

export default HeaderWormhole;
