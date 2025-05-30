"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/qhse', label: 'Our Motto' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">VA</span>
              </div>
              <div className="hidden xs:flex flex-col">
                <span className="text-base sm:text-lg font-bold text-primary">Vel Amrith</span>
                
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    isActivePath(item.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-neutral-700 hover:bg-neutral-100 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-3 sm:px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary whitespace-nowrap"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`xl:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActivePath(item.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-neutral-700 hover:bg-neutral-100 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 sm:hidden">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-3 py-2 text-center text-white bg-primary hover:bg-primary-dark rounded-md font-medium transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 