"use client";

import { personalInfo } from "../../lib/data";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Trigger animations on component mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/30"></div>

      {/* Dynamic Background Circles with Parallax */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${
            mousePosition.y * 0.5
          }px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"
        style={{
          transform: `translate(${mousePosition.x * -0.3}px, ${
            mousePosition.y * -0.3
          }px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-500"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${
            mousePosition.y * 0.4
          }px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content with Staggered Animations */}
        <div className="space-y-8">
          {/* Name Animation */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent hover:from-blue-200 hover:to-purple-200 transition-all duration-500">
              {personalInfo.name}
            </h1>
          </div>

          {/* Title Animation */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-2xl lg:text-3xl text-slate-300 mb-6 hover:text-slate-200 transition-colors duration-300">
              {personalInfo.title}
            </h2>
          </div>

          {/* Bio Animation */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl hover:text-slate-300 transition-colors duration-300">
              I create intuitive digital experiences that bridge the gap between
              user needs and business goals. As a UX/UI designer, I focus on
              crafting user-centered interfaces that are both beautiful and
              functional, turning complex problems into simple, elegant
              solutions.
            </p>
          </div>

          {/* Buttons Animation */}
<div
  className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
    isLoaded
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
  <a
    href="/Lysa-Sorkeo-CV.pdf"
    download="Lysa_Sorkeo_CV.pdf"
    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-white font-semibold inline-flex items-center justify-center"
  >
    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
      Download my CV →
    </span>
  </a>
  
  <button
    onClick={scrollToProjects}
    className="px-8 py-4 border-2 border-blue-500/50 rounded-xl hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 text-blue-400 font-semibold hover:text-blue-300 hover:border-blue-400"
  >
    View My Work
  </button>
</div>
        </div>
        {/* Right Content - Enhanced Profile Image */}
        <div
          className={`flex justify-center lg:justify-end transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative group">
            {/* Floating Ring Animation */}
            <div
              className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
            <div
              className="absolute inset-4 rounded-full border border-purple-500/20 animate-spin"
              style={{
                animationDuration: "15s",
                animationDirection: "reverse",
              }}
            ></div>

            {/* Profile Image Container */}
            <div className="relative w-100 h-100 rounded-full overflow-hidden border-4 border-slate-700 group-hover:border-blue-500/50 transition-all duration-500 group-hover:scale-105">
              {/* Default Image */}
              <img
                src="/images/profile2.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-110"
              />

              {/* Hover Image with Smooth Animation */}
              <img
                src="/images/profile.png"
                alt={`${personalInfo.name} hover`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 bg-blue-600 p-3 rounded-full shadow-lg animate-bounce">
              <span className="text-white text-lg">🎨</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-600 p-3 rounded-full shadow-lg animate-bounce delay-500">
              <span className="text-white text-lg">💻</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div
          className="flex flex-col items-center cursor-pointer group"
          onClick={scrollToProjects}
        >
          <span className="text-slate-400 text-sm mb-2 group-hover:text-slate-300 transition-colors">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center group-hover:border-slate-500 transition-colors">
            <div className="w-1 h-3 bg-slate-600 rounded-full mt-2 animate-bounce group-hover:bg-slate-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
