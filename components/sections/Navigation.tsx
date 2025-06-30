'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../../lib/data';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'about', label: 'About Me', href: '#about-section' },
    { id: 'projects', label: 'Projects', href: '#projects-section' },
    { id: 'contact', label: 'Contact', href: '#contact-section' }
  ];

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Better active section detection
      const scrollPosition = window.scrollY + 150; // Increased offset
      
      // Check if we're at the very top
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // Get all sections and their positions
      const sections = [
        { id: 'about', element: document.getElementById('about-section') },
        { id: 'projects', element: document.getElementById('projects-section') },
        { id: 'contact', element: document.getElementById('contact-section') }
      ];

      let currentSection = 'home';

      // Find which section we're currently in
      for (const section of sections) {
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          const sectionBottom = sectionTop + section.element.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home'); // Manually set to home
    } else {
      // Try multiple ways to find the element
      let element = document.getElementById(`${sectionId}-section`);
      
      // If not found, try without the '-section' suffix
      if (!element) {
        element = document.getElementById(sectionId);
      }
      
      // If still not found, try with querySelector
      if (!element) {
        element = document.querySelector(`#${sectionId}-section`);
      }
      
      if (element) {
        // Add offset for fixed navbar
        const navHeight = 80;
        const elementPosition = element.offsetTop - navHeight;
        
        window.scrollTo({ 
          top: elementPosition, 
          behavior: 'smooth' 
        });
        
        // Manually set active section after a delay
        setTimeout(() => {
          setActiveSection(sectionId);
        }, 100);
      } else {
        console.log(`Element not found: ${sectionId}`);
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg' 
        : 'bg-slate-900/90 backdrop-blur-sm border-b border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name with hover effect */}
          <div 
            className="text-xl font-bold cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
              My Portfolio
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  activeSection === item.id 
                    ? 'text-blue-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                
                {/* Active indicator */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform transition-all duration-300 ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
                
                {/* Hover glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </button>
            ))}
            
            {/* CTA Button */}
            <Link 
              href="/achievements"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-white font-semibold"
            >
              Achievements
            </Link>
          </div>

          {/* Mobile menu button with animation */}
          <button
            className="md:hidden relative w-8 h-8 flex items-center justify-center group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {isMenuOpen ? (
              <X size={24} className="transform transition-transform duration-300 rotate-90" />
            ) : (
              <Menu size={24} className="transform transition-transform duration-300 group-hover:scale-110" />
            )}
          </button>
        </div>

        {/* Mobile Navigation with smooth animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-slate-700/50">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 transform ${
                    activeSection === item.id 
                      ? 'text-blue-400 bg-blue-500/10 translate-x-2' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50 hover:translate-x-2'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                      activeSection === item.id ? 'bg-blue-400' : 'bg-slate-600'
                    }`}></span>
                    {item.label}
                  </span>
                </button>
              ))}
              
              {/* Mobile CTA - Fixed to link to achievements */}
              <Link 
                href="/achievements"
                className="block w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all duration-300 text-white font-semibold transform hover:scale-105 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Achievements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;