'use client';

import { projects } from '../../lib/data';
import { useState, useEffect } from 'react';

// Define the type directly here for now
interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  tags: string[];
  link?: string;
  featured?: boolean;
  year: string;
  duration: string;
  role: string;
  challenge: string;
  solution: string;
  impact: string;
  client?: string;
}

export default function ProjectsSection() {
  const featuredProjects = projects.filter((project: Project) => project.featured);
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 3);
    }, 4000);
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

    const element = document.getElementById('projects-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const images = ['/images/image1.png', '/images/image2.png', '/images/image3.png'];

  return (
    <section id="projects-section" className="py-20 px-4 relative overflow-hidden">
  {/* Enhanced Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/20"></div>
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
  <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"></div>
  
  {/* Content Container */}
  <div className="relative z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            UX/UI Projects
          </h2>
          <p className="text-xl text-slate-400">Mobile App Design</p>
        </div>

         {/* Animated Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block p-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full mb-4">
            <span className="text-emerald-400 text-sm font-semibold px-4 py-2 bg-slate-800 rounded-full">
              Featured Project #1
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Project Details with staggered animations */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Project Title with hover effect */}
            <div className="group">
              <h3 className="text-4xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                Saat Business App
              </h3>
              <div className="flex gap-4 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-sm hover:scale-105 transition-transform cursor-pointer">
                  Mobile Design
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full text-sm hover:scale-105 transition-transform cursor-pointer">
                  iOS/Android
                </span>
              </div>
              <p className="text-slate-400 mb-8">
                Duration: 3 months • Role: Lead UX/UI Designer
              </p>
            </div>

            {/* Animated Cards for Challenge, Solution, Impact */}
            <div className="space-y-6">
              {[
                {
                  title: "Challenge:",
                  content: "Design a mobile app for Saat business owners to monitor machines and manage operations efficiently.",
                  icon: "🎯",
                  color: "border-red-500/30 hover:border-red-400"
                },
                {
                  title: "Solution:",
                  content: "Created an intuitive dashboard with real-time monitoring, financial tracking, and streamlined business management tools.",
                  icon: "💡",
                  color: "border-yellow-500/30 hover:border-yellow-400"
                },
                {
                  title: "Impact:",
                  content: "Improved operational efficiency and simplified daily tasks, resulting in increased profitability.",
                  icon: "📈",
                  color: "border-green-500/30 hover:border-green-400"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`border-l-4 ${item.color} pl-6 py-4 bg-slate-800/30 rounded-r-lg hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-2 cursor-pointer group`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                    <h4 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">{item.title}</h4>
                  </div>
                  <p className="text-slate-300 group-hover:text-white transition-colors">{item.content}</p>
                </div>
              ))}
            </div>

            {/* Call to Action Button
            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-white font-semibold">
              View Full Case Study →
            </button> */}
          </div>

          {/* Right side - Interactive Phone Gallery */}
          <div className={`flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Image Display */}
              <div className="relative w-80 h-[500px] rounded-3xl overflow-hidden bg-slate-800 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                <img 
                  src={images[activeImage]}
                  alt={`Saat Business App Screen ${activeImage + 1}`}
                  className="w-full h-full object-contain transition-all duration-700"
                />
                
                {/* Image overlay with subtle animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Image Thumbnails */}
              <div className="flex gap-4 mt-6 justify-center">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                      activeImage === index 
                        ? 'ring-2 ring-blue-500 scale-110 shadow-lg' 
                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-contain bg-slate-700"
                    />
                  </button>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="flex gap-2 mt-4 justify-center">
                {images.map((_, index) => (
                  <div 
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      activeImage === index ? 'w-8 bg-blue-500' : 'w-3 bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                3 Screens
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}