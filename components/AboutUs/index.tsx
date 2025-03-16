'use client';

import { Fragment } from 'react';

import ListItem from '@/components/list';

import { useTranslation } from 'react-i18next';
import ResponsiveImage from '../ResponsiveImage';

interface StudiesItem {
  name: string;
}

interface EquipmentItem {
  entryName: string;
  specifications: { characteristic: string; details?: { name: string }[] }[];
}

export default function AboutUs() {
  const { t } = useTranslation();

  const studiesItems = t('previousStudies', {
    returnObjects: true,
  }) as StudiesItem[];

  const equipmentItems = t('equipmentEntry', {
    returnObjects: true,
  }) as EquipmentItem[];

  return (
    <div className='container mx-auto p-8 bg-card rounded'>
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <div className='relative aspect-[4/3] rounded-lg overflow-hidden'>
          <div className='relative rounded-lg overflow-hidden'>
            <ResponsiveImage
              fileName={'header_banner.webp'}
              desktopWidth={700}
              desktopHeight={468}
              mobileWidth={300}
              mobileHeight={200}
              imageDescription='Our team collaborating'
              className='object-cover w-auto h-auto'
            />
          </div>
        </div>
        <div className='space-y-6'>
          <div className='inline-block'>
            <h2 className='text-3xl font-bold mb-2'>
              {t('studiesSectionTitle')}
            </h2>
            <div className='h-1 w-20 bg-primary rounded-full' />
          </div>
          <ul className='space-y-3 text-lg text-muted-foreground leading-relaxed'>
            {studiesItems.map((study, index) => (
              <ListItem key={index} text={study.name} />
            ))}
          </ul>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-12 items-center mt-12'>
        <div className='space-y-6'>
          <div className='inline-block'>
            <h2 className='text-3xl font-bold mb-2'>
              {t('equipmentSectionTitle')}
            </h2>
            <div className='h-1 w-20 bg-primary rounded-full' />
          </div>
          <ul className='list-disc list-inside space-y-4 text-gray-800'>
            {equipmentItems.map((entry, index) => (
              <li key={index}>
                <span className='font-semibold'>{entry.entryName}</span>
                <ul className=' pl-6 mt-2 text-sm text-gray-600'>
                  {entry.specifications.map((specification, index) => (
                    <Fragment key={index}>
                      <li>
                        {specification.characteristic}
                        {specification.details && (
                          <ul className='pl-6'>
                            {specification.details.map((detail, index) => (
                              <li key={index}>{detail.name}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                      <br />
                    </Fragment>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className='relative rounded-lg overflow-hidden'>
          <ResponsiveImage
            fileName={'equipment.webp'}
            desktopWidth={700}
            desktopHeight={468}
            mobileWidth={300}
            mobileHeight={200}
            imageDescription='Our equipment'
            className='object-cover w-auto h-auto'
          />
        </div>
      </div>
    </div>
  );
}
