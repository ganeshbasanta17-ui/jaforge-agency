import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroText from './components/HeroText';
import Scene3D from './components/Scene3D';
import Services from './components/Services';
import Stats from './components/Stats';

// IMPORTS FOR YOUR NEW PAGES
import Portfolio from './components/Portfolio';
import XiyaShopCaseStudy from './components/XiyaShopCaseStudy';
import Estimator from './components/Estimator';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact'; // <-- IMPORTED CONTACT PAGE HERE

function App() {
  
  // ROUTE FOR THE CONTACT PAGE <-- ADDED CONTACT ROUTE HERE
  if (window.location.pathname === '/contact') {
    return <Contact />;
  }

  // ROUTE FOR THE PROCESS PAGE
  if (window.location.pathname === '/process') {
    return <Process />;
  }

  // ROUTE FOR THE ABOUT PAGE
  if (window.location.pathname === '/about') {
    return <About />;
  }

  // ROUTE FOR THE ESTIMATOR PAGE
  if (window.location.pathname === '/estimator') {
    return <Estimator />;
  }

  // ROUTE FOR THE MAIN PORTFOLIO PAGE
  if (window.location.pathname === '/portfolio') {
    return <Portfolio />;
  }

  // ROUTE FOR THE XIYASHOP CASE STUDY
  if (window.location.pathname === '/portfolio/xiyashop') {
    return <XiyaShopCaseStudy />;
  }

  // YOUR EXISTING HOMEPAGE (Loads for "/")
  return (
    <div className="min-h-screen bg-brand-deep font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <main className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between min-h-[90vh] overflow-hidden">
        
        {/* Left: Typography & CTA */}
        <div className="w-full lg:w-[45%] relative z-10">
          <HeroText />
        </div>

        {/* Right: STRICTLY ONE Cinematic 3D Scene */}
        <div className="w-full lg:w-[55%] h-[50vh] lg:h-[85vh] mt-12 lg:mt-0 relative z-0 flex items-center justify-center">
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center text-brand-red font-display animate-pulse">
              Forging 3D Environment...
            </div>
          }>
            <Scene3D />
          </Suspense>
        </div>
      </main>

      {/* Additional Sections */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-24 relative z-10">
        <Services />
        <Stats />
      </div>
    </div>
  );
}

export default App;