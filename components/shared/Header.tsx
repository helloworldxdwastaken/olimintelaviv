'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const mainNavItems = [
  { label: 'Dating', href: '/dating' },
  { label: 'Renting', href: '/renting' },
  { label: 'University', href: '/university' },
  { label: 'Eats', href: '/eats' },
  { label: 'Local', href: '/local' },
  { label: 'Partnerships', href: '/partnerships' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isActive = (href: string) => {
    if (href === '/dating') {
      return pathname?.startsWith('/dating');
    }
    return pathname === href;
  };
  
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="glass border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-navy">Olim in TLV</span>
            </Link>
            
            {/* Desktop Navigation - Pill Style */}
            <nav className="hidden md:flex items-center gap-2 glass pill px-2 py-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'pill px-5 py-2 text-sm font-medium transition-all duration-200',
                    isActive(item.href)
                      ? 'bg-primary text-white shadow-md'
                      : 'text-navy hover:bg-white/40'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'pill px-5 py-3 text-sm font-medium transition-all duration-200 text-center',
                    isActive(item.href)
                      ? 'bg-primary text-white shadow-md'
                      : 'glass text-navy hover:bg-white/60'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}


