import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
}

export default function GlassCard({ children, className, variant = 'light' }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl p-6 transition-all duration-300',
        variant === 'light' ? 'glass hover:bg-white/50' : 'glass-dark hover:bg-navy/70',
        className
      )}
    >
      {children}
    </div>
  );
}


