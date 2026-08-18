import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { ArrowRight } from 'lucide-react';

// 1. IMPORT THE HERO IMAGE HERE
import heroImg from '../assets/hero.jpeg';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-deep text-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main className="pt-32 pb-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h4 className="text-brand-red text-sm font-semibold tracking-wider uppercase mb-2">Our Work</h4>
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-white relative inline-block">
            Featured Projects<span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-red rounded-full"></span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="/portfolio/xiyashop" className="group block bg-[#050505] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-red/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(225,6,0,0.15)]">
            
            {/* FULL WIDTH IMAGE CONTAINER */}
            <div className="aspect-video bg-[#111] overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              
              {/* IMAGE SET TO FILL WIDTH AND ANCHOR TO THE TOP */}
              <img 
                src={heroImg} 
                alt="XiyaShop" 
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
            </div>
            
            <div className="p-8">
              <div className="text-brand-red text-xs font-bold uppercase tracking-widest mb-3">Digital Commerce</div>
              <h2 className="text-2xl font-bold mb-3 font-display">XiyaShop</h2>
              <p className="text-[#A0A0A0] mb-6 text-sm leading-relaxed">A modern digital storefront designed to make discovering and purchasing digital products simple, fast and engaging.</p>
              <div className="flex items-center gap-2 text-white font-medium group-hover:text-brand-red transition-colors text-sm">
                View Case Study <ArrowRight size={16} />
              </div>
            </div>
          </a>
          
          <div className="group flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 border-dashed rounded-2xl aspect-[4/3] md:aspect-auto hover:bg-white/[0.04] transition-colors">
            <p className="text-[#A0A0A0] font-medium mb-2">More projects coming soon</p>
            <p className="text-sm text-[#555]">Forging the next digital experience...</p>
          </div>
        </div>
      </main>
    </div>
  );
}