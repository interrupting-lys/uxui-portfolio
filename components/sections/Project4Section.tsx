'use client';

import { useState, useEffect } from 'react';

export default function Project4Section() {
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Auto-rotate images every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 5);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('project4-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const images = ['/images/capstone1.png', '/images/capstone2.png', '/images/capstone3.png', '/images/capstone4.png', '/images/capstone5.png'];
  
  const imageDescriptions = [
    'Book Discovery & Search Interface',
    'User Dashboard & Library Management',
    'Lending & Borrowing Workflow',
    'System Architecture Overview',
    'Complete Platform Features'
  ];

  return (
    <section id="project4-section" className="py-20 px-4 bg-gradient-to-br from-emerald-900/20 to-blue-900/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block p-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full mb-4">
            <span className="text-emerald-400 text-sm font-semibold px-4 py-2 bg-slate-800 rounded-full">
              Capstone Project
            </span>
          </div>
        </div>

        {/* Standard layout: Content on left, images on right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Project Details */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Project Header */}
            <div className="group">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-blue-300 transition-all duration-300">
                Book Lending Platform
              </h3>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full text-sm hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-emerald-500/25">
                  Web Application
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-sm hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/25">
                  System Architecture
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full text-sm hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-indigo-500/25">
                  Academic Project
                </span>
              </div>
              <p className="text-slate-400 mb-8 group-hover:text-slate-300 transition-colors">
                Timeline: October 2024 - Present
              </p>
            </div>

            {/* Two-column layout for Challenge and Impact */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Challenge */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-emerald-400">Challenge</h4>
                <p className="text-slate-300 leading-relaxed">
                  Design a comprehensive web-based book borrowing and lending platform that combines 
                  UX principles with robust system architecture and UML diagrams.
                </p>
              </div>

              {/* Impact */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-blue-400">Impact</h4>
                <p className="text-slate-300 leading-relaxed">
                  Applied theoretical frameworks to ensure scalable and maintainable 
                  web solution while optimizing user interaction and system performance.
                </p>
              </div>
            </div>

            {/* Solution - Full width */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💡</span>
                <h4 className="text-xl font-semibold text-emerald-400">Solution:</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Developed a complete web platform integrating user-centered design with system architecture. 
                Conducted usability testing to optimize user workflows while ensuring technical scalability 
                through comprehensive UML modeling and database design for web deployment.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl hover:from-emerald-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 text-white font-semibold group">
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  View Documentation →
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-emerald-500/50 rounded-xl hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105 text-emerald-400 font-semibold hover:text-emerald-300">
                System Architecture
              </button>
            </div> */}

            {/* Academic Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 px-6 py-3 rounded-full border border-emerald-500/30">
              <span className="text-2xl">🎓</span>
              <span className="text-emerald-400 font-semibold">Senior Capstone Project - Computer Science</span>
            </div>
          </div>

          {/* Right side - Interactive Desktop Gallery */}
          <div className={`flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Floating Background Elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>

              {/* Main Desktop Display */}
              <div className="relative w-[550px] h-[350px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group">
                {/* Desktop Frame */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-slate-700 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="flex-1 text-center text-slate-400 text-xs">Book Lending Platform</div>
                </div>
                
                {/* Main Content Area */}
                <div className="mt-8 h-[310px] overflow-hidden">
                  <img 
                    src={images[activeImage]}
                    alt={imageDescriptions[activeImage]}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Image Description Tooltip */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {imageDescriptions[activeImage]}
                </div>
              </div>

              {/* Enhanced Thumbnails Grid */}
              <div className="grid grid-cols-5 gap-3 mt-6 justify-center">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`relative w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                      activeImage === index 
                        ? 'ring-2 ring-emerald-500 scale-110 shadow-lg shadow-emerald-500/25' 
                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    {/* Mini Desktop Frame */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-slate-600 flex items-center px-1 gap-0.5">
                      <div className="w-1 h-1 rounded-full bg-red-400"></div>
                      <div className="w-1 h-1 rounded-full bg-yellow-400"></div>
                      <div className="w-1 h-1 rounded-full bg-green-400"></div>
                    </div>
                    
                    <div className="mt-2 h-10 overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Screen ${index + 1}`}
                        className="w-full h-full object-cover bg-slate-700"
                      />
                    </div>
                    
                    {/* Thumbnail Number */}
                    <div className="absolute top-0.5 right-0.5 bg-emerald-500 text-white text-xs w-3 h-3 rounded-full flex items-center justify-center font-bold text-[10px]">
                      {index + 1}
                    </div>
                    
                    {/* Thumbnail Hover Effect */}
                    {hoveredCard === index && (
                      <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">View</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Enhanced Progress Dots */}
              <div className="flex gap-2 mt-4 justify-center">
                {images.map((_, index) => (
                  <div 
                    key={index}
                    className={`relative h-2 rounded-full transition-all duration-500 cursor-pointer ${
                      activeImage === index ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-600 hover:bg-slate-500'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    {activeImage === index && (
                      <div className="absolute inset-0 bg-emerald-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -left-6 space-y-2">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-bounce">
                  Web App
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-bounce delay-200">
                  5 Pages
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}