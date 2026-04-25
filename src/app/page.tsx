'use client';
import SideNav from '../components/SideNav';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Chatbot from '../components/Chatbot';
import IntroAnimation from '../components/IntroAnimation';
import Background3D from '../components/Background3D';

export default function Home() {
  return (
    <main style={{ background: '#0a0e1a', minHeight: '100vh', position: 'relative' }}>
      {/* 3D background — always visible */}
      <Background3D />

      {/* Intro animation — only on load */}
      <IntroAnimation />

      {/* Content — above 3D background */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <SideNav />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
        <Chatbot />
      </div>
    </main>
  );
}
