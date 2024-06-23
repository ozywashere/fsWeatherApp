'use strict';
import React from 'react';
import { useGlobalContext } from '@/app/context/globalContext';
import { Skeleton } from '@/components/ui/skeleton';
import { windIcon } from '@/app/utils/icons';
import Image from 'next/image';

const Wind = () => {
  const { forecast } = useGlobalContext();

  const windSpeed = forecast?.wind?.speed;
  const windDir = forecast?.wind?.deg;

  if (!forecast || !windSpeed || !windDir) {
    return <Skeleton className="h-[12rem] w-full " />;
  }
  return (
    <div className="pt-6 pb-5 h-[12rem] px-4 border rounded-lg flex flex-col gap-3 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <h2 className="flex items-center gap-2 font-medium"> Wind</h2>
      <div className="compass relative flex items-center justify-center">
        <div className="image relative">
          <Image src="/compass-body.svg" width={110} height={110} alt="body" />
          <Image
            src="/compass-arrow.svg"
            width={11}
            height={11}
            alt="arrow"
            className="absolute top-0 left-[50%] transform  transition-all duration-300 ease-in-out dark:invert"
            style={{
              transform: `rotate(${windDir}deg) translateX(-50%)`,
              transformOrigin: `0 50%`,
              height: '100%',
            }}
          />
        </div>
        <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] dark:text-white font-medium">
          {Math.round(windSpeed)} m/s
        </p>
      </div>
    </div>
  );
};

export default Wind;
