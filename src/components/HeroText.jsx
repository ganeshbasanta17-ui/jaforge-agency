import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroText() {
  return (
    <div className="space-y-8">
      {/* Small Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
        <Sparkles size={16} className="text-brand-red animate-pulse" />
        <span className="text-xs font-semibold tracking-wider text-white uppercase">
          Digital Experiences, Forged for Growth
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.08]">
        We Forge <br />
        Digital <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-red via-brand-neon to-white">
          Experiences.
        </span>
      </h1>

      {/* Supporting Text */}
      <p className="text-brand-gray text-lg lg:text-xl font-light max-w-xl leading-relaxed">
        JAForge crafts modern, high-performance websites that help businesses stand out, grow, and dominate online.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
        {/* Start a Project -> Goes to Estimator */}
        <a 
          href="/estimator" 
          className="group bg-brand-red text-white px-8 py-4 rounded-full font-bold text-base shadow-[0_0_25px_rgba(225,6,0,0.4)] hover:shadow-[0_0_40px_rgba(255,26,26,0.7)] hover:bg-brand-neon transition-all duration-300 flex items-center justify-center gap-3 text-center"
        >
          Start a Project 
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>

        {/* View Our Work -> Goes to Portfolio */}
        <a 
          href="/portfolio" 
          className="group px-8 py-4 rounded-full font-bold text-base text-white bg-white/5 border border-white/10 hover:border-brand-red/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-center backdrop-blur-md"
        >
          View Our Work 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
}