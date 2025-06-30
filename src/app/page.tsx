import Navigation from '../../components/sections/Navigation';
import HeroSection from '../../components/sections/HeroSection';
import AboutSection from '../../components/sections/AboutSection';
import ProjectsSection from '../../components/sections/ProjectSection';
import Project2Section from '../../components/sections/Project2Section';
import Project3Section from '../../components/sections/Project3Section';
import ContactSection from '../../components/sections/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Project2Section />
      <Project3Section />
      <ContactSection />
    </div>
  );
}