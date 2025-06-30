'use client';

import { useState, useEffect, useRef } from 'react';

export default function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const contactMethods = [
    {
      id: 'email',
      title: "Email",
      value: "sorkeolysa008@gmail.com",
      link: "mailto:sorkeolysa008@gmail.com",
      icon: "💌",
      color: "from-blue-600/20 to-blue-800/20",
      hoverColor: "from-blue-500/30 to-blue-700/30",
      borderColor: "border-blue-500/30",
      hoverBorderColor: "hover:border-blue-400/50",
      shadowColor: "hover:shadow-blue-500/20",
      copyable: true
    },
    {
      id: 'telegram',
      title: "Telegram", 
      value: "@interrupting_lys",
      link: "https://t.me/interrupting_lys",
      icon: "📱",
      color: "from-cyan-600/20 to-cyan-800/20",
      hoverColor: "from-cyan-500/30 to-cyan-700/30",
      borderColor: "border-cyan-500/30",
      hoverBorderColor: "hover:border-cyan-400/50",
      shadowColor: "hover:shadow-cyan-500/20",
      copyable: false
    },
    {
      id: 'phone',
      title: "Phone",
      value: "+855 12 571 613", 
      link: "tel:+85512571613",
      icon: "📞",
      color: "from-purple-600/20 to-purple-800/20",
      hoverColor: "from-purple-500/30 to-purple-700/30",
      borderColor: "border-purple-500/30",
      hoverBorderColor: "hover:border-purple-400/50",
      shadowColor: "hover:shadow-purple-500/20",
      copyable: true
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse movement tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Copy to clipboard function
  const copyToClipboard = async (text: string, methodId: string, e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(methodId);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Handle card click
  const handleCardClick = (method: any, e: React.MouseEvent) => {
    if (method.copyable) {
      copyToClipboard(method.value, method.id, e);
    } else {
      window.open(method.link, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <>
      {/* Add a scroll target div */}
      <div id="contact-section" className="h-0"></div>
      
      <section 
        ref={sectionRef}
        className="py-20 px-4 relative overflow-hidden min-h-screen flex items-center"
      >
        {/* Enhanced Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse"></div>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          {/* Header with staggered animations */}
          <div className="mb-16">
            <h2 className={`text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Let's Connect
            </h2>
            <p className={`text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Ready to bring your next project to life? I'd love to discuss how we can work together to create 
              exceptional user experiences that make a real impact.
            </p>
          </div>

          {/* Enhanced Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <div
                key={method.id}
                className={`group relative cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'
                }`}
                style={{ 
                  transitionDelay: `${600 + index * 200}ms`,
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
                }}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={(e) => handleCardClick(method, e)}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-2xl transition-all duration-300 ${
                    hoveredCard === method.id ? method.hoverColor : ''
                  }`} />
                  <div className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ${
                    hoveredCard === method.id ? 'translate-x-full' : ''
                  }`} />
                </div>

                {/* Card content */}
                <div className={`relative backdrop-blur-sm border ${method.borderColor} ${method.hoverBorderColor} rounded-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 ${method.shadowColor} hover:shadow-2xl`}>
                  
                  {/* Icon with enhanced animation */}
                  <div className={`text-4xl mb-4 transition-all duration-300 ${
                    hoveredCard === method.id ? 'scale-110 rotate-6' : ''
                  }`}>
                    {method.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {method.title}
                  </h3>
                  
                  <p className={`text-slate-300 font-medium break-all transition-colors duration-300 ${
                    hoveredCard === method.id ? 'text-white' : ''
                  }`}>
                    {method.value}
                  </p>

                  {/* Enhanced progress bar */}
                  <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-white/60 to-white rounded-full transition-all duration-500 ${
                        hoveredCard === method.id ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>

                  {/* Copy feedback */}
                  {method.copyable && (
                    <div className={`absolute inset-0 flex items-center justify-center backdrop-blur-md bg-green-500/80 rounded-2xl transition-all duration-300 ${
                      copiedItem === method.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}>
                      <div className="text-white font-semibold flex items-center gap-2 bg-green-600/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-green-400/30">
                        <span className="text-lg">✓</span>
                        <span>Copied to clipboard!</span>
                      </div>
                    </div>
                  )}

                  {/* Hover instruction */}
                  <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 transition-opacity duration-300 ${
                    hoveredCard === method.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {method.copyable ? 'Click to copy' : 'Click to open'}
                  </div>
                </div>

                {/* Active pulse effect */}
                <div className={`absolute inset-0 rounded-2xl bg-white/10 transition-opacity duration-200 ${
                  hoveredCard === method.id ? 'opacity-100 animate-ping' : 'opacity-0'
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Additional floating elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
      </section>
    </>
  );
}