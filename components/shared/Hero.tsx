import { ReactNode } from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
  height?: 'small' | 'medium' | 'large';
}

export default function Hero({ title, subtitle, image, children, height = 'medium' }: HeroProps) {
  const heights = {
    small: 'h-[300px]',
    medium: 'h-[400px] md:h-[500px]',
    large: 'h-[500px] md:h-[600px]',
  };
  
  return (
    <div className={`relative ${heights[height]} w-full rounded-3xl overflow-hidden mb-12`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/70" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}


