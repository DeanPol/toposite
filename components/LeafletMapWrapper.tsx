'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const LeafletMapComponent = dynamic(() => import('@/components/LeafletMap'), {
  ssr: false,
  loading: () => <p className='text-center p-8'>Loading map...</p>,
});

export default function LeafletMapWrapper() {
  return <LeafletMapComponent />;
}
