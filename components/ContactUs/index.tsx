'use client';

import { Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/button';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <div className='container mx-auto px-4'>
      <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-12'>
        <div>
          <h2 className='text-3xl font-bold mb-8'>{t('contactUs')}</h2>
          <div className='space-y-8'>
            <div className='flex items-center gap-4'>
              <div className='bg-primary/10 p-3 rounded-full'>
                <Mail className='h-6 w-6 text-primary' />
              </div>
              <div>
                <h3 className='font-medium'>{t('contactEmail')}</h3>
                <p className='text-muted-foreground'>
                  topographypolitis@gmail.com
                </p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='bg-primary/10 p-3 rounded-full'>
                <Phone className='h-6 w-6 text-primary' />
              </div>
              <div>
                <h3 className='font-medium'>{t('contactPhone')}</h3>
                <p className='text-muted-foreground'>+30 6975518942</p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-card p-8 rounded-lg shadow-lg'>
          <form className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  {t('contactFirstName')}
                </label>
                <input
                  type='text'
                  className='w-full px-4 py-2 rounded-md border bg-background'
                  placeholder='John'
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  {t('contactLastName')}
                </label>
                <input
                  type='text'
                  className='w-full px-4 py-2 rounded-md border bg-background'
                  placeholder='Doe'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium mb-2'>
                {t('contactEmail')}
              </label>
              <input
                type='email'
                className='w-full px-4 py-2 rounded-md border bg-background'
                placeholder='john@example.com'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-2'>
                {t('contactMessage')}
              </label>
              <textarea
                placeholder='Το μήνυμά σας...'
                className='w-full px-4 py-2 rounded-md border bg-background h-32'
              />
            </div>

            <Button aria-label='Send Message' className='w-full' size='lg'>
              <Send className='mr-2 h-4 w-4' /> {t('contactSend')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
