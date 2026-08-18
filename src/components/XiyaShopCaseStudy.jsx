import React, { useEffect } from 'react';
import { ArrowRight, ExternalLink, ShieldCheck, Zap, Clock, Star, Layout, Smartphone, MousePointer2, Gamepad2, PlaySquare } from 'lucide-react';

// 1. IMPORT THE IMAGES DIRECTLY HERE
import heroImg from '../assets/hero.jpeg';
import gamesImg from '../assets/games.jpeg';
import subsImg from '../assets/subs.jpeg';

export default function XiyaShopCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#E10600] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <header className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 lg:px-12 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E10600]/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#E10600] uppercase mb-6 shadow-[0_0_15px_rgba(225,6,0,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse"></span>
            JAForge Project
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold font-display tracking-tight mb-6">XiyaShop</h1>
          
          <h2 className="text-2xl lg:text-4xl font-light text-[#A0A0A0] mb-8">
            Digital Commerce, <span className="text-white font-medium">Forged for Gamers.</span>
          </h2>
          
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto mb-10 leading-relaxed">
            A modern digital storefront designed to make discovering and purchasing digital products simple, fast and engaging.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-4xl mx-auto mb-12 text-left bg-[#050505]/80 p-6 lg:p-8 rounded-2xl border border-white/10 backdrop-blur-md">
            <div><p className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-1">Project</p><p className="font-semibold">XiyaShop</p></div>
            <div><p className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-1">Type</p><p className="font-semibold">JAForge Project</p></div>
            <div><p className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-1">Category</p><p className="font-semibold">Digital Commerce</p></div>
            <div><p className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-1">Role</p><p className="font-semibold">Design & Dev</p></div>
            <div>
              <p className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-1">Status</p>
              <p className="font-semibold text-[#E10600] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span> Live
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://xiyashop-xiyashop1.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#E10600] hover:bg-white hover:text-black text-white font-bold rounded-full transition-all flex items-center gap-2">
              Visit Live Website <ExternalLink size={18} />
            </a>
            <a href="/portfolio" className="px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white font-medium rounded-full transition-all">
              Back to Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* HERO MOCKUP */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 -mt-20 relative z-20 mb-32">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(225,6,0,0.15)] bg-[#050505]">
          <div className="h-10 bg-[#111] border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <div className="ml-4 px-3 py-1 bg-white/5 rounded text-xs text-[#A0A0A0] font-mono">xiyashop-xiyashop1.vercel.app</div>
          </div>
          <div className="flex justify-center bg-[#0a0a0a] p-4 lg:p-12">
            {/* 2. WE USE THE IMPORTED HERO IMAGE HERE */}
            <img src={heroImg} alt="XiyaShop Homepage Interface" className="w-full max-w-[400px] h-auto rounded-xl border border-white/5 shadow-2xl opacity-90 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-8">
            <h3 className="text-3xl lg:text-5xl font-display font-bold mb-8">Building a Better Digital Shopping Experience.</h3>
            <p className="text-[#A0A0A0] text-lg leading-relaxed mb-6">XiyaShop operates in the fast-paced digital gaming and subscription market. The primary objective was to build an interface that prioritizes rapid product discovery, making it seamless for users to navigate between game top-ups, OTT subscriptions, and digital offerings.</p>
            <p className="text-[#A0A0A0] text-lg leading-relaxed">Every design decision was centered around streamlining the path to purchase—from clear category separation to specialized input forms for gaming server IDs—resulting in a highly functional digital storefront.</p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 p-8 rounded-2xl bg-[#050505] border border-white/5 shadow-lg">
            <h4 className="text-white font-bold text-xl border-b border-white/10 pb-4">Tech Specs</h4>
            <div><p className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-1">Frontend Stack</p><p className="font-medium text-white">Not specified</p></div>
            <div><p className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-1">Styling</p><p className="font-medium text-white">Not specified</p></div>
            <div><p className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-1">Deployment Platform</p><p className="font-medium text-white flex items-center gap-2"><Zap size={14} className="text-[#E10600]"/> Vercel</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] py-24 border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-5xl font-display font-bold mb-4">Designed Around Discovery.</h3>
            <p className="text-[#A0A0A0] max-w-2xl mx-auto">Structuring digital inventory into intuitive, specialized hubs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-[#000000] border border-white/5 hover:border-[#E10600]/40 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#E10600]/10 flex items-center justify-center mb-6 text-[#E10600] group-hover:scale-110 transition-transform"><Gamepad2 size={24} /></div>
              <h4 className="text-xl font-bold text-white mb-2">Games</h4>
              <p className="text-[#A0A0A0] text-sm">A dedicated hub for exploring the gaming inventory, featuring popular titles and seamless top-up interfaces.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#000000] border border-white/5 hover:border-[#E10600]/40 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#E10600]/10 flex items-center justify-center mb-6 text-[#E10600] group-hover:scale-110 transition-transform"><PlaySquare size={24} /></div>
              <h4 className="text-xl font-bold text-white mb-2">Subscriptions & OTT</h4>
              <p className="text-[#A0A0A0] text-sm">Streamlined access to entertainment and streaming services with clear, tiered pricing selections.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h3 className="text-3xl lg:text-5xl font-display font-bold mb-4">Built With Purpose.</h3>
          <p className="text-[#A0A0A0] max-w-xl">Core features developed to ensure a smooth transaction process.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-[#050505] rounded-2xl border border-white/5"><h4 className="text-lg font-bold text-white mb-2">ID Server Integration</h4><p className="text-[#A0A0A0] text-sm">Custom input fields allowing gamers to easily recharge directly via their Player and Server IDs.</p></div>
          <div className="p-8 bg-[#050505] rounded-2xl border border-white/5"><h4 className="text-lg font-bold text-white mb-2">Tiered Plan Selection</h4><p className="text-[#A0A0A0] text-sm">Clear breakdown of subscription durations highlighting best values and savings.</p></div>
          <div className="p-8 bg-[#050505] rounded-2xl border border-white/5"><h4 className="text-lg font-bold text-white mb-2">Secure Checkout Flow</h4><p className="text-[#A0A0A0] text-sm">A streamlined order summary and secure "Buy Now" processing for instant digital delivery.</p></div>
        </div>
      </section>

      <section className="bg-[#050505] py-24 border-y border-white/5 relative">
        <h3 className="text-3xl lg:text-5xl font-display font-bold mb-16 text-center">Product Experience Goals.</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1600px] mx-auto px-6 lg:px-12">
          {[
            { icon: Zap, title: "Instant Delivery", desc: "Delivery in minutes." },
            { icon: Star, title: "Best Deals", desc: "Cheapest deals always." },
            { icon: ShieldCheck, title: "Safe & Secure", desc: "100% secure transactions." },
            { icon: Clock, title: "3+ Years Trust", desc: "Trusted since 2022." }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-[#000000] rounded-2xl border border-white/5">
                <div className="w-16 h-16 rounded-full bg-[#E10600]/10 flex items-center justify-center mb-6 text-[#E10600]"><Icon size={28} /></div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-[#A0A0A0] text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div><h3 className="text-3xl lg:text-5xl font-display font-bold mb-4">Design Showcase.</h3><p className="text-[#A0A0A0] max-w-xl">Actual interface captures demonstrating the XiyaShop visual language.</p></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111] group relative shadow-xl">
            {/* 3. WE USE THE IMPORTED GAMES IMAGE HERE */}
            <img src={gamesImg} alt="Game Top-Up Interface" className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/80 backdrop-blur text-sm rounded-full border border-white/10 text-white">Game Top-Up Flow</div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111] group relative shadow-xl">
            {/* 4. WE USE THE IMPORTED SUBS IMAGE HERE */}
            <img src={subsImg} alt="Subscription Layout" className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/80 backdrop-blur text-sm rounded-full border border-white/10 text-white">OTT Subscriptions</div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-[#E10600] text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#050505]/40 to-transparent opacity-90"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h3 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 drop-shadow-lg">XiyaShop, Forged by JAForge.</h3>
          <p className="text-white/90 text-lg lg:text-xl mb-2">An original JAForge project.</p>
          <p className="text-white/80 text-lg mb-10">Explore the live experience.</p>
          <a href="https://xiyashop-xiyashop1.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 bg-white hover:bg-black hover:text-white text-black font-bold rounded-full transition-all text-lg shadow-2xl">
            Visit XiyaShop <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}