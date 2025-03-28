import React, { useState } from 'react';
import { Mail, Phone, Send, TriangleAlert, CheckCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatus(data.message);
      }
    } catch (error) {
      setStatus('Error sending email. Try again.');
    }
  };

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
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  {t('contactFirstName')}
                </label>
                <input
                  type='text'
                  name='firstName'
                  className='w-full px-4 py-2 rounded-md border bg-background'
                  placeholder='John'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-medium mb-2'>
                  {t('contactLastName')}
                </label>
                <input
                  type='text'
                  name='lastName'
                  className='w-full px-4 py-2 rounded-md border bg-background'
                  placeholder='Doe'
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium mb-2'>
                {t('contactEmail')}
              </label>
              <input
                type='email'
                name='email'
                className='w-full px-4 py-2 rounded-md border bg-background'
                placeholder='john@example.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-2'>
                {t('contactMessage')}
              </label>
              <textarea
                name='message'
                placeholder={t('contactMessagePlaceholder')}
                className='w-full px-4 py-2 rounded-md border bg-background h-32'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              aria-label='Send Message'
              className='w-full bg-[black] text-white py-2'
              type='submit'
              disabled={status == 'Sending...'}
            >
              {t('contactSend')}
            </button>
            {status == 'Error sending email. Try again.' && (
              <div className='relative px-4 text-center my-8 p-6 rounded-lg bg-[cornsilk] max-w-4xl mx-auto'>
                <p className='text-xs md:text-sm text-muted-foreground max-w-4xl mx-auto justify-items-center'>
                  <TriangleAlert />
                  {t('contactStatusFail')}
                </p>
              </div>
            )}
            {status == 'Email sent successfully!' && (
              <div className='relative px-4 text-center my-8 p-6 rounded-lg bg-[green] max-w-4xl mx-auto text-white justify-items-center'>
                <p className='text-xs md:text-sm text-muted-foreground max-w-4xl mx-auto'>
                  <CheckCheck />
                  {t('contactStatusSuccess')}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
