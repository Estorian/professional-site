'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, setDarkMode }) => {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', isHash: false },
    { href: '/#about', label: 'About', isHash: true },
    { href: '/#projects', label: 'Projects', isHash: true },
    { href: '/resume', label: 'Resume', isHash: false },
    { href: '/#contact', label: 'Contact', isHash: true },
  ];

  const isActive = (href: string, isHash: boolean) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (isHash) {
      return pathname === '/' && typeof window !== 'undefined' && window.location.hash === href.split('#')[1];
    }
    return pathname === href;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md transition-colors duration-300 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} relative`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Portfolio
        </Link>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          {navItems.map((item) => {
            // Handle hash links differently from regular routes
            if (item.isHash) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`hover:text-blue-600 transition-colors ${
                    isActive(item.href, item.isHash) ? 'text-blue-600 font-medium' : ''
                  }`}
                >
                  {item.label}
                </a>
              );
            }
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-blue-600 transition-colors ${
                  isActive(item.href, item.isHash) ? 'text-blue-600 font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;