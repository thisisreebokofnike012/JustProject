import React, { useState } from 'react';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

interface HeaderProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeFilter, setActiveFilter }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  const navLinks = [
    { name: 'Главная', filter: 'all' },
    { name: 'Технологии', filter: 'tech' },
    { name: 'Дизайн', filter: 'design' },
    { name: 'О нас', filter: 'about', disabled: true },
    { name: 'Контакты', filter: 'contact', disabled: true }
  ];

  const getLinkClassName = (filter: string, disabled?: boolean, isMobile: boolean = false) => {
    const baseClasses = isMobile 
      ? "block px-3 py-2 rounded-md text-base font-medium transition-colors"
      : "px-3 py-2 rounded-md text-sm font-medium transition-colors";

    if (disabled) {
      return `${baseClasses} text-gray-400 dark:text-gray-500 cursor-not-allowed`;
    }
    
    if (activeFilter === filter) {
      return `${baseClasses} bg-indigo-100 text-indigo-700 dark:bg-gray-700 dark:text-white`;
    }
    
    return `${baseClasses} text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white`;
  };

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">Innovate Insights</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!link.disabled) setActiveFilter(link.filter);
                  }}
                  className={getLinkClassName(link.filter, link.disabled)}
                  aria-current={activeFilter === link.filter ? 'page' : undefined}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-indigo-500"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Открыть главное меню</span>
                <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
             <a 
              key={link.name} 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (!link.disabled) {
                  setActiveFilter(link.filter);
                  setIsMenuOpen(false);
                }
              }}
              className={getLinkClassName(link.filter, link.disabled, true)}
              aria-current={activeFilter === link.filter ? 'page' : undefined}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};