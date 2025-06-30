'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function AchievementsPage() {
  const achievements = [
    {
      id: 1,
      title: "Techo Start Up - Turing Hackathon Cycle 7",
      subtitle: "Third Place • October 2023",
      project: "Saat Menu",
      description: "Achieved 3rd place in this prestigious hackathon competition, demonstrating innovation in food service technology and exceptional user experience design.",
      date: "October 11-12 & 18-20, 2023",
      icon: "🥉",
      color: "from-blue-600 to-blue-800",
      photos: [
        "/images/techo-1.png",
        "/images/techo-2.png",
        "/images/techo-3.png"
      ]
    },
    {
      id: 2,
      title: "Camtech - Innovation Tech Challenge",
      subtitle: "Runner-Up (Top 10) • 2023",
      project: "Pikrous Healthcare App",
      description: "Reached top 10 teams in this innovation challenge, focusing on improving healthcare accessibility through innovative UX/UI design.",
      date: "June - August 2023",
      icon: "🏆",
      color: "from-purple-600 to-purple-800",
      photos: [
        "/images/camtech-1.png",
        "/images/camtech-2.png",
        "/images/camtech-3.png"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 mb-8 text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              My journey in UX/UI design, technology competitions, and professional accomplishments showcasing innovation, creativity, and technical excellence.
            </p>
          </div>

          {/* Competition Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Competition Highlights
            </h2>
            
            <div className="space-y-12">
              {achievements.map((achievement) => (
                <div 
                  key={achievement.id}
                  className={`bg-gradient-to-r ${achievement.color}/20 rounded-2xl p-8 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300`}
                >
                  {/* Achievement Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{achievement.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{achievement.title}</h3>
                      <p className="text-slate-300">{achievement.subtitle}</p>
                    </div>
                  </div>

                  {/* Project and Description */}
                  <div className="mb-6">
                    <p className="text-lg mb-3">
                      <span className="font-semibold text-blue-400">Project:</span> {achievement.project}
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Photo Gallery */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {achievement.photos.map((photo, index) => (
                      <div 
                        key={index}
                        className="aspect-video bg-slate-700 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                      >
                        <img 
                          src={photo} 
                          alt={`${achievement.title} photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Date */}
                  <div className="text-sm text-slate-400">
                    📅 {achievement.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Ready to Create New Achievements Together?</h3>
              <p className="text-slate-300 mb-6">
                Let's collaborate and add your project to my list of successful accomplishments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact-section"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl transition-all duration-300 hover:scale-105 text-white font-semibold"
                >
                  Start a Project
                </Link>
                <Link
                  href="/"
                  className="px-8 py-4 border-2 border-blue-500/50 rounded-xl hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 text-blue-400 font-semibold"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}