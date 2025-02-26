// src/components/LandingPage.jsx
import React from 'react';
import NavigationBar from './NavigationBar';
import HeroSection from './HeroSection';
import TestimonialsSection from './TestimonialsSection';
import BenefitsSection from './BenefitsSection';
import StatsSection from './StatsSection';


const LandingPage = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <TestimonialsSection />
      <BenefitsSection />
      <StatsSection />
    </div>
  );
};

export default LandingPage;
