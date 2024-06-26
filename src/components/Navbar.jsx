import React, { useState, useEffect } from 'react';
import { MenuItem } from './MenuItem';
import { Hamburger } from './Hamburger';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 ${isScrolled ? 'bg-gradient-to-r from-green-600 to-red-600' : 'bg-gradient-to-r from-green-500 to-red-500'} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div className="flex-1 flex flex-row gap-[10px] items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 mt-2">
                <MenuItem href="#home" label="Home" />
                <MenuItem href="#about" label="About" />
                <MenuItem href="#services" label="Services" />
                <MenuItem href="#contact" label="Contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MenuItem href="#home" label="Home" />
            <MenuItem href="#about" label="About" />
            <MenuItem href="#services" label="Services" />
            <MenuItem href="#contact" label="Contact" />
          </div>
        </div>
      )}
    </nav>
  );
};