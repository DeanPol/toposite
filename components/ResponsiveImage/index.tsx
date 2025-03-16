'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

interface ComponentProps {
  fileName: string;
  desktopWidth: number;
  desktopHeight: number;
  mobileWidth: number;
  mobileHeight: number;
  imageDescription: string;
  className: string;
}

const ResponsiveImage = ({
  fileName,
  desktopWidth,
  desktopHeight,
  mobileWidth,
  mobileHeight,
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
      loading='lazy'
    />
  );
};

export default ResponsiveImage;
