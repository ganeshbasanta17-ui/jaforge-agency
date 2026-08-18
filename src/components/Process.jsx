import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { 
  ArrowRight, Search, Layout, PenTool, Code, CheckCircle, 
  Rocket, Layers, Zap, Shield, TrendingUp, ChevronDown 
} from 'lucide-react';

// Reusing the particle effect for cinematic continuity
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

export default function Process() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTimeline = () => {
    document.getElementById('process-timeline').scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      id: '01', title: 'Discover', heading: 'Understanding The Vision',
      desc: 'We begin by understanding your business, goals, audience, and project requirements.',
      deliverables: ['Project discussion', 'Goal identification', 'Audience understanding', 'Requirement gathering'],
      icon: Search
    },
    {
      id: '02', title: 'Strategy', heading: 'Creating The Blueprint',
      desc: 'Before design begins, we plan the structure, user experience, and overall direction of the project.',
      deliverables: ['Sitemap', 'User journey', 'Content structure', 'Project planning'],
      icon: Layout
    },
    {
      id: '03', title: 'Design', heading: 'Crafting The Experience',
      desc: 'We create a modern, visually engaging experience that reflects the brand and communicates effectively.',
      deliverables: ['UI design', 'UX improvements', 'Visual hierarchy', 'Responsive layouts'],
      icon: PenTool
    },
    {
      id: '04', title: 'Development', heading: 'Turning Design Into Reality',
      desc: 'We transform the design into a fast, responsive, and fully functional website.',
      deliverables: ['Frontend development', 'Responsive implementation', 'Performance optimization', 'Functionality integration'],
      icon: Code
    },
    {
      id: '05', title: 'Testing', heading: 'Refining Every Detail',
      desc: 'We test, optimize, and ensure everything works smoothly across devices and browsers.',
      deliverables: ['Performance checks', 'Mobile testing', 'Bug fixes', 'Quality assurance'],
      icon: CheckCircle
    },
    {
      id: '06', title: 'Launch', heading: 'Going Live',
      desc: 'After final approval, we deploy the project and prepare it for the world.',
      deliverables: ['Deployment', 'Domain setup', 'Final review', 'Launch support'],
      icon: Rocket
    }
  ];

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
            Our Process
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-bold mb-8 tracking-tighter max-w-5xl mx-auto leading-[1.1]">
            From Idea <br />
            To <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-[#E10600] drop-shadow-[0_0_40px_rgba(225,6,0,0.3)]">Digital Reality.</span>
          </h1>
          <p className="text-[#888888] text-lg lg:text-2xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            Every project follows a structured process designed to transform ideas into powerful digital experiences.
          </p>
          <button onClick={scrollToTimeline} className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-[#E10600]/50 hover:bg-[#E10600]/10 text-white font-bold rounded-full transition-all duration-500 hover:shadow-[0_0_30px_rgba(225,6,0,0.2)] text-sm backdrop-blur-md">
            Explore The Process <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* 2. INTERACTIVE TIMELINE */}
      <section id="process-timeline" className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto relative">
        <div className="max-w-6xl mx-auto relative">
          
          {/* Desktop Center Line & Mobile Left Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2"></div>
          {/* Glowing Progress Line (Simulated 60% scroll for effect) */}
          <div className="absolute left-[39px] md:left-1/2 top-0 h-[60%] w-[2px] bg-gradient-to-b from-[#E10600] via-[#FF1A1A] to-transparent -translate-x-1/2 shadow-[0_0_15px_#E10600]"></div>

          <div className="space-y-24 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              
              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for desktop grid balancing */}
                  <div className="hidden md:block w-1/2"></div>
                  
                  {/* Center Node */}
                  <div className="absolute left-6 md:left-1/2 w-12 h-12 bg-[#050505] border-2 border-[#E10600] rounded-full -translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(225,6,0,0.4)] z-20">
                    <span className="text-white font-mono text-sm font-bold">{step.id}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 pt-2 md:pt-0 ${isEven ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}>
                    <div className="group bg-[#050505]/80 backdrop-blur-xl border border-white/5 p-8 lg:p-10 rounded-[2rem] hover:border-[#E10600]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(225,6,0,0.1)] relative overflow-hidden">
                      {/* Ambient card glow */}
                      <div className="absolute -inset-2 bg-gradient-to-br from-[#E10600]/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#A0A0A0] group-hover:text-[#E10600] group-hover:bg-[#E10600]/10 transition-colors">
                            <Icon size={20} />
                          </div>
                          <span className="text-[#E10600] font-mono text-sm tracking-widest uppercase font-semibold">{step.title}</span>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4 leading-tight">{step.heading}</h3>
                        <p className="text-[#888888] leading-relaxed mb-8">{step.desc}</p>
                        
                        <div className="bg-[#000000] border border-white/5 rounded-2xl p-6">
                          <p className="text-xs uppercase tracking-widest text-[#555555] font-bold mb-4">Deliverables</p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {step.deliverables.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-[#A0A0A0]">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#E10600]/50"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. HORIZONTAL PROJECT JOURNEY */}
      <section className="py-24 bg-gradient-to-b from-transparent via-[#E10600]/5 to-transparent border-y border-white/[0.02]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 overflow-x-auto pb-8 hide-scrollbar">
          <div className="min-w-[800px] flex items-center justify-between relative">
            {/* Connecting background line */}
            <div className="absolute top-1/2 left-8 right-8 h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>
            
            {['Idea', 'Planning', 'Design', 'Development', 'Testing', 'Launch'].map((stage, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4 group">
                <div className="w-4 h-4 rounded-full bg-[#050505] border-2 border-white/20 group-hover:border-[#E10600] group-hover:shadow-[0_0_15px_rgba(225,6,0,0.5)] transition-all duration-300"></div>
                <span className="text-sm font-mono text-[#888888] group-hover:text-white transition-colors">{stage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS OVERVIEW */}
      <section className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">Why This Process Works</h2>
          <p className="text-[#888888] text-xl font-light">Engineered to eliminate friction and ensure excellence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: '01', title: 'Clarity', desc: 'We eliminate confusion before development begins.', icon: Search },
            { id: '02', title: 'Efficiency', desc: 'A structured workflow keeps projects moving.', icon: Zap },
            { id: '03', title: 'Quality', desc: 'Every stage receives focused attention.', icon: Shield },
            { id: '04', title: 'Growth', desc: 'The final website is built to support long-term goals.', icon: TrendingUp }
          ].map((val) => {
            const Icon = val.icon;
            return (
              <div key={val.id} className="bg-gradient-to-b from-[#0a0a0a] to-[#020202] border border-white/5 p-10 rounded-[2rem] relative overflow-hidden group hover:border-[#E10600]/30 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Icon size={24} className="text-[#E10600] mb-6" />
                <h3 className="text-2xl font-display font-bold mb-4 text-white">{val.title}</h3>
                <p className="text-[#888888] leading-relaxed font-light">{val.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-32 px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Process FAQ</h2>
          <p className="text-[#888888]">Transparent answers regarding our workflow.</p>
        </div>

        <div className="space-y-4">
          {[
            { q: "How long does a website project take?", a: "Timelines vary based on scope. A standard landing page may take 2 weeks, while a complex multi-page platform can take 4-8 weeks. We provide exact timelines during the Discovery phase." },
            { q: "Can I request revisions?", a: "Yes. We include specific revision rounds during the Design phase to ensure the aesthetic aligns perfectly with your vision before development begins." },
            { q: "Will my website be mobile friendly?", a: "Absolutely. Every digital experience we forge is built with a responsive, mobile-first approach to ensure flawless performance on all devices." },
            { q: "Can you redesign an existing website?", a: "Yes. We can evaluate your current platform and forge a completely new, modernized digital experience based on your existing brand." },
            { q: "What happens after launch?", a: "We provide post-launch support to ensure everything is running perfectly, along with training on how to use your new digital asset." }
          ].map((faq, i) => (
            <div key={i} className="bg-[#050505] border border-white/5 rounded-2xl p-6 lg:p-8 hover:bg-[#0a0a0a] hover:border-white/10 transition-colors">
              <h4 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                <span className="text-[#E10600] mt-1"><CheckCircle size={16} /></span> {faq.q}
              </h4>
              <p className="text-[#888888] text-sm md:text-base leading-relaxed pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONNECT STRIP */}
      <section className="py-16 px-6 lg:px-12 max-w-[1600px] mx-auto border-t border-white/5">
        <div className="bg-gradient-to-r from-[#050505] to-[#110000] border border-white/10 rounded-[2rem] p-10 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready To Start Your Project?</h2>
            <p className="text-[#888888]">Get an instant estimate or reach out to discuss your vision.</p>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
            <a href="/estimator" className="whitespace-nowrap px-8 py-4 bg-[#E10600] text-white font-bold rounded-full transition-all hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center">
              Use Project Estimator →
            </a>
            <a href="/about" className="whitespace-nowrap px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full transition-all hover:bg-white/10 text-center">
              Contact Us →
            </a>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-40 px-6 lg:px-12 text-center relative overflow-hidden border-t border-white/[0.02] mt-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E10600]/10 via-[#000000] to-[#000000] pointer-events-none -z-10"></div>
        <div className="relative z-10">
          <h2 className="text-5xl lg:text-7xl font-display font-bold mb-8 tracking-tighter">
            Every Great Website<br/>Starts With A Process.
          </h2>
          <p className="text-[#888888] text-xl lg:text-2xl mb-12 font-light max-w-2xl mx-auto">
            Let's build something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <a href="/estimator" className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] w-full sm:w-auto">
              Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/portfolio" className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-full transition-all duration-500 hover:bg-white/5 w-full sm:w-auto">
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}