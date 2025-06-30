"use client";

import { useState, useEffect } from "react";

export default function Project2Section() {
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 3);
    }, 5000);
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

    const element = document.getElementById("project2-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const images = [
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
  ];
  const imageDescriptions = [
    "Main Dashboard - Service Overview",
    "Wallet & Transactions",
    "Member Profile & Status",
  ];

  return (
    <section id="project2-section" className="py-20 px-4 relative overflow-hidden">
  {/* Enhanced Background */}
  <div className="absolute inset-0 bg-gradient-to-bl from-slate-900 via-emerald-900/20 to-slate-800"></div>
  <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
  <div className="absolute top-1/3 right-0 w-72 h-72 bg-green-500/8 rounded-full blur-2xl animate-pulse delay-500"></div>
  <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-cyan-500/8 rounded-full blur-2xl animate-pulse delay-1500"></div>
  
  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 opacity-[0.02]" 
       style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
  
  {/* Content Container */}
  <div className="relative z-10"></div>
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block p-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full mb-4">
            <span className="text-emerald-400 text-sm font-semibold px-4 py-2 bg-slate-800 rounded-full">
              Featured Project #2
            </span>
          </div>
        </div>

        {/* Reverse layout: Images on left, content on right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Interactive Phone Gallery */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 -translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Floating Background Elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>

              {/* Main Image Display with 3D Tilt Effect */}
              <div className="relative w-80 h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group">
                <img
                  src={images[activeImage]}
                  alt={imageDescriptions[activeImage]}
                  className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                />

                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Image Description Tooltip */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {imageDescriptions[activeImage]}
                </div>
              </div>

              {/* Enhanced Thumbnails with Hover Effects */}
              <div className="flex gap-4 mt-6 justify-center">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`relative w-20 h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                      activeImage === index
                        ? "ring-2 ring-emerald-500 scale-110 shadow-lg shadow-emerald-500/25"
                        : "opacity-60 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-contain bg-slate-700"
                    />
                    {/* Thumbnail Hover Effect */}
                    {hoveredCard === index && (
                      <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          View
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Interactive Progress Ring */}
              <div className="flex gap-2 mt-4 justify-center">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`relative h-2 rounded-full transition-all duration-500 cursor-pointer ${
                      activeImage === index
                        ? "w-8 bg-emerald-500"
                        : "w-2 bg-slate-600 hover:bg-slate-500"
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    {activeImage === index && (
                      <div className="absolute inset-0 bg-emerald-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Floating Project Stats */}
              <div className="absolute -top-6 -right-6 space-y-2">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-bounce">
                  3 Screens
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Project Details with Enhanced Animations */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Project Header */}
            <div className="group">
              <h3 className="text-4xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                Saat App
              </h3>
              <div className="flex gap-3 mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full text-sm hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-emerald-500/25">
                  Mobile Design
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-sm hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-blue-500/25">
                  iOS/Android
                </span>
              </div>
              <p className="text-slate-400 mb-8 group-hover:text-slate-300 transition-colors">
                Duration: 3 months • Role: UX/UI Designer
              </p>
            </div>

            {/* Consistent Challenge/Solution/Impact Cards */}
            <div className="space-y-6">
              {[
                {
                  title: "Challenge:",
                  content:
                    "Design an accessible mobile app for Saat customers to manage laundry services, payments, and profiles across all skill levels.",
                  icon: "🎯",
                  color: "border-red-500/30 hover:border-red-400",
                },
                {
                  title: "Solution:",
                  content:
                    "Created a simplified interface with clear navigation and visual cues, making essential functions easy to find and use.",
                  icon: "💡",
                  color: "border-yellow-500/30 hover:border-yellow-400",
                },
                {
                  title: "Impact:",
                  content:
                    "Increased customer satisfaction and app adoption while reducing support requests.",
                  icon: "📈",
                  color: "border-green-500/30 hover:border-green-400",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`border-l-4 ${item.color} pl-6 py-4 bg-slate-800/30 rounded-r-lg hover:bg-slate-800/50 transition-all duration-300 hover:translate-x-2 cursor-pointer group`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <h4 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-slate-300 group-hover:text-white transition-colors">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex gap-4 mt-8">
              {/* <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl hover:from-emerald-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 text-white font-semibold group">
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  View Case Study →
                </span>
              </button> */}
              {/* <button className="px-8 py-4 border-2 border-emerald-500/50 rounded-xl hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105 text-emerald-400 font-semibold hover:text-emerald-300">
                Download App
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
