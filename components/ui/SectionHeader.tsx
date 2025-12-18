import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function SectionHeader({ title, subtitle, children }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-slate max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}


