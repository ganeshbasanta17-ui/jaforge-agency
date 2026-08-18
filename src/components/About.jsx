import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { 
  ArrowRight, Target, Eye, Award, ShieldCheck, Zap, 
  TrendingUp, Search, Layout, PenTool, Code, Rocket,
  MessageCircle, Mail // <-- Removed Instagram from here
} from 'lucide-react';

// ==========================================
// CUSTOM INSTAGRAM ICON (Matches Lucide style perfectly)
// ==========================================
const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

//// ==========================================
// CONTACT CONFIGURATION
// ==========================================
const contactInfo = {
  instagram: "jaforge.in", 
  whatsapp: "919395868085",  
  email: "jaforge14@gmail.com"      
}; 
// 
// ===================================

// Subtle floating particle effect for the Hero
const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <div 
        key={i}
        className="absolute rounded-full bg-[#E10600] animate-pulse"
        style={{
          width: Math.random() * 4 + 1 + 'px',
          height: Math.random() * 4 + 1 + 'px',
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          opacity: Math.random() * 0.3,
          animationDuration: `${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 2}s`
        }}
      ></div>
    ))}
  </div>
);

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#E10600] selection:text-white pb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-40 px-6 lg:px-12 max-w-[1600px] mx-auto text-center border-b border-white/[0.02]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E10600]/15 blur-[150px] rounded-full pointer-events-none"></div>
        <Particles />
        
        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-out">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md text-xs font-semibold tracking-[0.2em] text-[#E10600] uppercase mb-10 shadow-[0_0_20px_rgba(225,6,0,0.1)]">
            About JAForge
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-bold mb-8 tracking-tighter max-w-5xl mx-auto leading-[1.1]">
            We Don't Just Build.<br />
            We <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-[#E10600] drop-shadow-[0_0_40px_rgba(225,6,0,0.3)]">Forge Reality.</span>
          </h1>
          <p className="text-[#888888] text-lg lg:text-2xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            JAForge is a high-end digital agency focused on crafting fast, cinematic, and meaningful web experiences for those who refuse to blend in.
          </p>
          <a href="/estimator" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] text-sm">
            Start a Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8 tracking-tight">
              Why JAForge Exists.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E10600] to-transparent rounded-full mb-8"></div>
          </div>
          
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-[#E10600]/20 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             
            <div className="relative space-y-8 text-[#A0A0A0] text-lg leading-relaxed bg-[#050505]/80 backdrop-blur-2xl p-10 lg:p-14 rounded-[2rem] border border-white/5 shadow-2xl transition-all duration-700">
              <p className="text-2xl text-white font-display font-medium leading-snug">
                A website should be more than a URL. It should be a digital asset that commands authority.
              </p>
              <p>
                We realized the web was full of generic templates that failed to capture the true identity of ambitious brands. We wanted to change that. 
              </p>
              <p>
                Our singular goal is to combine cinematic design, seamless user experience, and robust engineering to forge platforms that dominate their space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto border-t border-white/[0.02]">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6 tracking-tight">Core Values.</h2>
          <p className="text-[#888888] text-xl font-light">The absolute standards we refuse to compromise.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: '01', title: 'Quality First', desc: 'If it isn\'t premium, it doesn\'t launch.', icon: Award },
            { id: '02', title: 'Radical Honesty', desc: 'Total transparency from estimate to deployment.', icon: ShieldCheck },
            { id: '03', title: 'Elite Performance', desc: 'Engineered for speed, built for scale.', icon: Zap },
            { id: '04', title: 'Relentless Polish', desc: 'Obsessing over the micro-interactions.', icon: TrendingUp }
          ].map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.id} className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-white/5 p-10 rounded-[2rem] relative overflow-hidden group hover:border-white/20 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#E10600]/10 group-hover:border-[#E10600]/30 group-hover:text-[#E10600] transition-all duration-500 shadow-inner">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <span className="text-[#333333] font-mono text-sm group-hover:text-[#E10600] transition-colors duration-500">{value.id}</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-white tracking-wide">{value.title}</h3>
                <p className="text-[#888888] leading-relaxed font-light">{value.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 4. THE JAFORGE APPROACH */}
      <section className="py-32 relative border-y border-white/[0.02] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111111] via-[#000000] to-[#000000] pointer-events-none -z-10"></div>
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="mb-24 text-center">
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6 tracking-tight">How We Work.</h2>
            <p className="text-[#888888] text-xl font-light">A precision-engineered process for digital dominance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
            
            {[
              { num: '01', title: 'Discover', desc: 'Strategy & Architecture.', icon: Search },
              { num: '02', title: 'Plan', desc: 'Wireframing & UX.', icon: Layout },
              { num: '03', title: 'Design', desc: 'Cinematic UI Crafting.', icon: PenTool },
              { num: '04', title: 'Develop', desc: 'High-Performance Code.', icon: Code },
              { num: '05', title: 'Launch', desc: 'Deployment & Scale.', icon: Rocket }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative z-10 flex flex-col md:items-center md:text-center group">
                  <div className="w-16 h-16 bg-[#000000] border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:border-[#E10600] group-hover:shadow-[0_0_30px_rgba(225,6,0,0.2)] transition-all duration-500 transform group-hover:-translate-y-2 backdrop-blur-md">
                    <Icon size={24} className="text-[#555555] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-white font-bold mb-3 flex items-center gap-3 md:justify-center text-lg tracking-wide">
                    <span className="text-[#E10600] text-xs font-mono">{step.num}</span> {step.title}
                  </h4>
                  <p className="text-[#777777] text-sm leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. FOUNDER MESSAGE */}
      <section className="py-32 px-6 lg:px-12 max-w-[1200px] mx-auto">
        <div className="bg-gradient-to-br from-[#0a0a0a] to-[#020202] border border-white/[0.05] rounded-[3rem] p-10 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#E10600] to-transparent opacity-50"></div>
          
          <h2 className="text-[#E10600] font-mono text-xs uppercase tracking-[0.3em] mb-12">A Message From The Founder</h2>
          
          <blockquote className="text-2xl lg:text-4xl text-white leading-[1.4] font-display mb-16 tracking-tight">
            JAForge began with a singular obsession: creating digital experiences that feel purposeful, cinematic, and impossible to ignore.<br/><br/>
            Whether you are launching a new vision or elevating an existing legacy, our standard remains the same: we build platforms that represent your ambition with absolute clarity.
          </blockquote>
          
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#111111] rounded-full flex items-center justify-center border border-white/10 text-white font-bold font-display text-xl shadow-inner">
              BG
            </div>
            <div>
              <p className="text-white font-bold text-lg tracking-wide">Basanta Ganesh</p>
              <p className="text-[#888888]">Founder, JAForge</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONNECT WITH JAFORGE */}
      <section className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto relative">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6 tracking-tight">Let's Connect.</h2>
          <p className="text-[#888888] text-xl font-light max-w-2xl mx-auto">
            Have a project in mind? Reach out and let's build something exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Instagram Card */}
          <a 
            href={contactInfo.instagram ? `https://instagram.com/${contactInfo.instagram}` : '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-[#050505]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#E10600]/50 hover:bg-[#0a0a0a]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#E10600]/0 to-[#E10600]/0 group-hover:to-[#E10600]/10 rounded-[2rem] transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#E10600] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              {/* USING OUR CUSTOM SVG ICON HERE */}
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:text-[#E10600] group-hover:border-[#E10600]/30 transition-all duration-500">
                <InstagramIcon size={24} />
              </div>
              <p className="text-[#888888] text-sm uppercase tracking-widest font-semibold mb-2">Follow JAForge</p>
              <h3 className="text-2xl font-display font-bold text-white mb-8">@{contactInfo.instagram || 'your_instagram'}</h3>
              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#E10600] transition-colors">
                Visit Instagram <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a 
            href={contactInfo.whatsapp ? `https://wa.me/${contactInfo.whatsapp}` : '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-[#050505]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#E10600]/50 hover:bg-[#0a0a0a]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#E10600]/0 to-[#E10600]/0 group-hover:to-[#E10600]/10 rounded-[2rem] transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#E10600] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:text-[#E10600] group-hover:border-[#E10600]/30 transition-all duration-500">
                <MessageCircle size={24} strokeWidth={1.5} />
              </div>
              <p className="text-[#888888] text-sm uppercase tracking-widest font-semibold mb-2">Message JAForge</p>
              <h3 className="text-2xl font-display font-bold text-white mb-8">
                {contactInfo.whatsapp ? `+${contactInfo.whatsapp.slice(0,2)} ${contactInfo.whatsapp.slice(2,7)} ${contactInfo.whatsapp.slice(7)}` : '+91 XXXXX XXXXX'}
              </h3>
              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#E10600] transition-colors">
                Chat on WhatsApp <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

          {/* Email Card */}
          <a 
            href={contactInfo.email ? `mailto:${contactInfo.email}` : '#'}
            className="group relative bg-[#050505]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#E10600]/50 hover:bg-[#0a0a0a]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#E10600]/0 to-[#E10600]/0 group-hover:to-[#E10600]/10 rounded-[2rem] transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#E10600] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:text-[#E10600] group-hover:border-[#E10600]/30 transition-all duration-500">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <p className="text-[#888888] text-sm uppercase tracking-widest font-semibold mb-2">Send an Email</p>
              <h3 className="text-2xl font-display font-bold text-white mb-8 truncate">{contactInfo.email || 'hello@jaforge.com'}</h3>
              <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#E10600] transition-colors">
                Email JAForge <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-40 px-6 lg:px-12 text-center relative overflow-hidden border-t border-white/[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E10600]/10 via-[#000000] to-[#000000] pointer-events-none -z-10"></div>
        <div className="relative z-10">
          <h2 className="text-5xl lg:text-7xl font-display font-bold mb-8 tracking-tighter">Ready to Forge?</h2>
          <p className="text-[#888888] text-xl lg:text-2xl mb-12 font-light max-w-2xl mx-auto">Step into the future of your brand. Let's engineer a digital experience that drives real growth.</p>
          <a href="/estimator" className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#E10600] text-white font-bold rounded-full transition-all duration-500 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]">
            Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}