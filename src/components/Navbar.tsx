'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[rgba(13,15,23,0.97)] backdrop-blur-md shadow-lg' 
        : 'bg-[rgba(13,15,23,0.95)]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src="/images/round-logo.png"
                  alt="SSA Logo"
                  width={48}
                  height={48}
                  className="rounded-full border border-blue-500/30"
                />
              </div>
              <span className="font-bold text-base sm:text-lg text-white drop-shadow-sm group-hover:text-blue-200 transition-colors duration-200 truncate">
                Sikh Students Association
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block relative">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group
                    ${pathname === item.href 
                      ? 'text-white bg-blue-600/20 border border-blue-500/30 shadow-sm shadow-blue-500/20' 
                      : 'text-gray-100 hover:text-white hover:bg-blue-600/10'
                    }`}
                >
                  <span className="relative z-10 drop-shadow-sm">{item.name}</span>
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    pathname === item.href ? 'opacity-50' : ''
                  }`}></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-100 hover:text-white hover:bg-blue-600/10 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-blue-900/30 bg-[rgba(13,15,23,0.98)] backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200
                ${pathname === item.href 
                  ? 'text-white bg-blue-600/20 border border-blue-500/30 shadow-sm shadow-blue-500/20' 
                  : 'text-gray-100 hover:text-white hover:bg-blue-600/10'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="drop-shadow-sm">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 