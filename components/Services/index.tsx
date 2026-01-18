// components/Services.tsx
import { ChevronRight } from 'lucide-react';
import ResponsiveImage from '../ResponsiveImage';

export interface ServiceItem {
  title: string;
  image: string;
  longDescription: string;
  subServices?: string[];
}

interface ServicesProps {
  data: ServiceItem[];
  header?: string;
  subtitle?: string;
  disclaimer?: string;
}

export default function Services({
  data,
  header,
  subtitle,
  disclaimer,
}: ServicesProps) {
  return (
    <>
      {header && (
        <h2 className='text-xl font-bold mb-4 text-center'>{header}</h2>
      )}

      {subtitle && (
        <p className='text-muted-foreground text-center max-w-2xl mx-auto'>
          {subtitle}
        </p>
      )}

      {disclaimer && (
        <div className='relative px-4 text-center my-8 p-6 rounded-lg bg-[cornsilk] max-w-4xl mx-auto'>
          <p className='text-xs md:text-sm text-muted-foreground max-w-4xl mx-auto'>
            {disclaimer}
          </p>
        </div>
      )}

      <div className='grid lg:grid-cols-3 gap-8 text-center max-w-7xl mx-auto py-8 mb-4'>
        {data.map((service, index) => (
          <div
            key={index}
            className='rounded-lg overflow-hidden transition-all hover:shadow-lg bg-card border border-gray-150'
          >
            <div className='aspect-video overflow-hidden border-b border-border/50'>
              <ResponsiveImage
                fileName={service.image} // Use path directly from JSON
                alt='Background Image'
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 bg-muted'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-semibold mb-4'>{service.title}</h3>
              <p className='text-muted-foreground mb-6'>
                {service.longDescription}
              </p>
              {service.subServices && service.subServices?.length > 0 && (
                <ul className='space-y-2 mt-6'>
                  {service.subServices.map((subService, idx) => (
                    <li key={idx} className='flex items-start gap-2'>
                      <ChevronRight className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                      <span className='text-left'>{subService}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
