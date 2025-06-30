'use client';

import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Track mouse position for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('about-section')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 100,
          y: (e.clientY - rect.top - rect.height / 2) / 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: "1+", label: "Years Experience", color: "from-blue-500 to-cyan-500", icon: "⏱️" },
    { value: "3", label: "Apps Launched", color: "from-green-500 to-emerald-500", icon: "🚀" },
    { value: "75%", label: "Scholarship", color: "from-yellow-500 to-orange-500", icon: "🎓" },
    { value: "3.34", label: "GPA", color: "from-purple-500 to-pink-500", icon: "📊" }
  ];

  return (
    <section id="about-section" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-900/20"></div>
      
      {/* Dynamic Background Elements with Parallax */}
      <div 
        className="absolute top-1/4 right-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"
        style={{
          transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      ></div>
      <div 
        className="absolute top-0 left-0 w-72 h-72 bg-purple-500/8 rounded-full blur-2xl animate-pulse delay-500"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/8 rounded-full blur-2xl animate-pulse delay-1500"
        style={{
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      ></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/40 rounded-full animate-pulse"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + i * 8}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + i}s`
            }}
          ></div>
        ))}
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{backgroundImage: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)', backgroundSize: '20px 20px'}}></div>
      
      {/* Content Container */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Animated Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-purple-300 transition-all duration-500">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Enhanced Text with Animation */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Main Content Card */}
              <div className="relative group">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative border-2 border-blue-500/50 rounded-3xl p-8 bg-slate-800/40 backdrop-blur-sm group-hover:bg-slate-800/60 transition-all duration-500 group-hover:border-blue-400/70">
                  <div className="space-y-6 text-slate-300">
                    <p className="group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                      I'm a passionate UX/UI Designer currently pursuing my Bachelor's in 
                      Computer Science at Paragon International University. With a 75% 
                      scholarship and strong academic record, I combine technical 
                      knowledge with creative design thinking.
                    </p>
                    <p className="group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                      My focus is on creating intuitive digital experiences that solve real 
                      user problems. I specialize in user research, interface design, and 
                      turning complex challenges into simple, elegant solutions through 
                      user-centered design principles.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
              <div className="absolute -top-2 -left-8 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse delay-300 shadow-md shadow-blue-400/50"></div>
              <div className="absolute -top-8 -left-2 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full animate-pulse delay-600 shadow-lg shadow-blue-600/50"></div>
              
              {/* Floating Skills Icons */}
              <div className="absolute -right-4 top-1/4 bg-gradient-to-r from-purple-600 to-purple-700 p-3 rounded-full shadow-lg animate-bounce">
                <span className="text-white text-lg">🎨</span>
              </div>
              <div className="absolute -right-8 bottom-1/4 bg-gradient-to-r from-indigo-600 to-indigo-700 p-3 rounded-full shadow-lg animate-bounce delay-1000">
                <span className="text-white text-lg">💡</span>
              </div>
            </div>

            {/* Right side - Enhanced Interactive Stats Grid */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="group relative cursor-pointer"
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                    
                    {/* Card Content */}
                    <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-700/50 group-hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      {/* Icon */}
                      <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      
                      {/* Value with Gradient */}
                      <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                        {stat.value}
                      </div>
                      
                      {/* Label */}
                      <div className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 font-medium">
                        {stat.label}
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ${
                            hoveredStat === index ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>
                    </div>
                    
                    {/* Floating Number */}
                    {hoveredStat === index && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-bounce">
                        {index + 1}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Additional Info Cards */}
              {/* <div className="mt-8 space-y-4">
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-xl border border-blue-500/20 hover:border-blue-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🏫</span>
                    <div>
                      <h4 className="font-semibold text-blue-400">Education</h4>
                      <p className="text-sm text-slate-400">Senior, Computer Science, Paragon International University</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 p-4 rounded-xl border border-purple-500/20 hover:border-purple-400/30 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🎯</span>
                    <div>
                      <h4 className="font-semibold text-purple-400">Focus</h4>
                      <p className="text-sm text-slate-400">User-Centered Design & Interface Development</p>
                    </div>
                  </div>
                </div> 
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}