import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CapabilitiesStrip from './components/CapabilitiesStrip';
import ServicesSection from './components/ServicesSection';
import MaterialsSection from './components/MaterialsSection';
import BoilerExpertiseSection from './components/BoilerExpertiseSection';
import FuelsSection from './components/FuelsSection';
import ProjectGallerySection from './components/ProjectGallerySection';
import RfqSection from './components/RfqSection';
import EmergencyCallBar from './components/EmergencyCallBar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased flex flex-col">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="w-full pt-28 bg-surface flex-grow">
        <div className="flex flex-col w-full">
          <HeroSection />
          <CapabilitiesStrip />
          <ServicesSection />
          <MaterialsSection />
          <BoilerExpertiseSection />
          <FuelsSection />
          <ProjectGallerySection />
          <RfqSection />
        </div>
      </main>

      {/* Floating 24/7 Breakdown Hotline Badge */}
      <EmergencyCallBar />

      {/* Comprehensive Industrial Footer */}
      <Footer />
    </div>
  );
}
