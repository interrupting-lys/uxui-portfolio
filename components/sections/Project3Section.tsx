'use client';

import { useState, useEffect } from 'react';

export default function Project3Section() {
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

    const element = document.getElementById('project3-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

const images = ['/images/image7.png', '/images/image8.png', '/images/image9.png', '/images/image10.png', '/images/image15.png'];  const imageDescriptions = [
    'Doctor Discovery & Categories',
    'Doctor Profile & Booking',
    'Search & Filter Doctors',
    'Calendar & Tracking',
    'Complete App Flow'
  ];

  return (
    <section id="project3-section" className="py-20 px-4 bg-gradient-to-br from-pink-900/20 to-purple-900/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block p-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full mb-4">
            <span className="text-pink-400 text-sm font-semibold px-4 py-2 bg-slate-800 rounded-full">
              Healthcare Innovation
            </span>
          </div>
        </div>

        {/* Standard layout: Content on left, images on right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Project Details */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Project Header */}
            <div className="group">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:to-purple-300 transition-all duration-300">
                Pikrous App
              </h3>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full text-sm hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-pink-500/25">
                  Mobile Design
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full text-sm hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/25">
                  iOS/Android
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full text-sm hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-indigo-500/25">
                  Competition Project
                </span>
              </div>
              <p className="text-slate-400 mb-8 group-hover:text-slate-300 transition-colors">
                Competition: Camtech Innovation Challenge
              </p>
            </div>

            {/* Two-column layout for Challenge and Impact */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Challenge */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-pink-400">Challenge</h4>
                <p className="text-slate-300 leading-relaxed">
                  Design a mobile healthcare app that simplifies doctor discovery and appointment 
                  booking for patients seeking specialized medical care.
                </p>
              </div>

              {/* Impact */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-purple-400">Impact</h4>
                <p className="text-slate-300 leading-relaxed">
                  Delivered a comprehensive solution during a 6-month competition, earning 
                  recognition among top 10 teams for innovative healthcare UX design.
                </p>
              </div>
            </div>

            {/* Solution - Full width */}
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-6 rounded-2xl border border-pink-500/20 hover:border-pink-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💡</span>
                <h4 className="text-xl font-semibold text-pink-400">Solution:</h4>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Created an intuitive healthcare platform with advanced search filters, detailed doctor profiles, 
                seamless appointment booking, and integrated calendar tracking for a complete patient experience.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 text-white font-semibold group">
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  View Full Case Study →
                </span>
              </button> */}
              <button className="px-8 py-4 border-2 border-pink-500/50 rounded-xl hover:bg-pink-500/10 transition-all duration-300 hover:scale-105 text-pink-400 font-semibold hover:text-pink-300">
                Competition Details
              </button>
            </div>

            {/* Award Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-6 py-3 rounded-full border border-yellow-500/30">
              <span className="text-2xl">🏆</span>
              <span className="text-yellow-400 font-semibold">Top 10 Teams - Camtech Innovation Challenge</span>
            </div>
          </div>

          {/* Right side - Interactive Phone Gallery */}
          <div className={`flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Floating Background Elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>

              {/* Main Image Display */}
              <div className="relative w-80 h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 group">
                <img 
                  src={images[activeImage]}
                  alt={imageDescriptions[activeImage]}
                  className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Image Description Tooltip */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {imageDescriptions[activeImage]}
                </div>
              </div>

              {/* Enhanced Thumbnails Grid */}
              <div className="grid grid-cols-5 gap-2 mt-6 justify-center">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`relative w-16 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      activeImage === index 
                        ? 'ring-2 ring-pink-500 scale-110 shadow-lg shadow-pink-500/25' 
                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Screen ${index + 1}`}
                      className="w-full h-full object-contain bg-slate-700"
                    />
                    {/* Thumbnail Number */}
                    <div className="absolute top-1 right-1 bg-pink-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {/* Thumbnail Hover Effect */}
                    {hoveredCard === index && (
                      <div className="absolute inset-0 bg-pink-500/20 flex items-center justify-center">
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
                      activeImage === index ? 'w-8 bg-pink-500' : 'w-2 bg-slate-600 hover:bg-slate-500'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    {activeImage === index && (
                      <div className="absolute inset-0 bg-pink-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -left-6 space-y-2">
                <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-bounce">
                  Healthcare
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-bounce delay-200">
                  5 Screens
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}