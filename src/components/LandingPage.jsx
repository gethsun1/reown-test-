// src/components/LandingPage.jsx
import React from 'react';
import NavigationBar from './NavigationBar';
import HeroSection from './HeroSection';
import TestimonialsSection from './TestimonialsSection';
import BenefitsSection from './BenefitsSection';
import StatsSection from './StatsSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <TestimonialsSection />
      <BenefitsSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
