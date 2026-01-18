import Image from 'next/image';

interface ResponsiveImageProps {
  fileName: string;
  alt: string;
  className?: string;
}

export default function ResponsiveImage({
  fileName,
  alt,
  className,
}: ResponsiveImageProps) {
  return (
    <Image
      src={`/images/${fileName}`}
      alt={alt ?? 'Background Image'}
      className={className}
      sizes='(max-width: 600px) 350px, 400px'
      width={400} // fallback width
      height={232} // fallback height
      priority={false} // lazy by default
    />
  );
}
