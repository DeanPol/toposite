'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';

interface ComponentProps {
  fileName: string;
  desktopWidth: number;
  desktopHeight: number;
  mobileWidth: number;
  mobileHeight: number;
  lazyload: boolean;
  imageDescription: string;
  className: string;
}

const ResponsiveImage = ({
  fileName,
  desktopWidth,
  desktopHeight,
  mobileWidth,
  mobileHeight,
  lazyload,
  imageDescription,
  className,
}: ComponentProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    typeof window !== 'undefined' && window.innerWidth < 600
      ? setIsMobile(true)
      : setIsMobile(false);
  }, []);

  return (
    <Image
      src={isMobile ? `/images/mobile/${fileName}` : `/images/${fileName}`}
      alt={imageDescription}
      width={isMobile ? mobileWidth : desktopWidth}
      height={isMobile ? mobileHeight : desktopHeight}
      className={className}
      loading={lazyload ? 'lazy' : 'eager'}
    />
  );
};

export default ResponsiveImage;
