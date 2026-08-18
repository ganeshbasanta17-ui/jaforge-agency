import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { 
  ArrowRight, ArrowLeft, CheckCircle, LayoutTemplate, Briefcase, 
  ShoppingCart, Code, Send, MessageSquare 
} from 'lucide-react';

// ==========================================
// 1. CENTRALIZED PRICING CONFIGURATION
// ==========================================
const PRICING = {
  projectTypes: [
    { id: 'landing', title: 'Landing Page', desc: 'Focused page designed around one goal.', price: 3000, icon: LayoutTemplate },
    { id: 'business', title: 'Business Website', desc: 'A professional multi-page website for your business.', price: 8000, icon: Briefcase },
    { id: 'ecommerce', title: 'E-Commerce Website', desc: 'An online store for selling products or services.', price: 15000, icon: ShoppingCart },
    { id: 'custom', title: 'Custom Web Experience', desc: 'Advanced websites with custom functionality.', price: 20000, icon: Code }
  ],
  pages: [
    { id: '1', title: '1 Page', desc: 'Single scrolling experience.', price: 0 },
    { id: '2-5', title: '2–5 Pages', desc: 'Standard business setup.', price: 3000 },
    { id: '6-10', title: '6–10 Pages', desc: 'Extended content structure.', price: 6000 },
    { id: '10+', title: '10+ Pages', desc: 'Large scale platform.', price: 9000 }
  ],
  features: [
    { id: 'contact', title: 'Contact Form', price: 1000 },
    { id: 'booking', title: 'Booking System', price: 2000 },
    { id: 'auth', title: 'User Authentication', price: 3000 },
    { id: 'payment', title: 'Payment Integration', price: 2000 },
    { id: 'cms', title: 'Content Management (CMS)', price: 3000 },
    { id: 'ecom', title: 'E-Commerce System', price: 7000 },
    { id: 'animations', title: 'Advanced Animations', price: 4000 },
    { id: 'custom', title: 'Custom Functionality', price: 5000 }
  ],
  design: [
    { id: 'essential', title: 'Essential', desc: 'Clean, professional and focused.', price: 0 },
    { id: 'custom', title: 'Custom', desc: 'Custom UI/UX designed specifically for your brand.', price: 5000 },
    { id: 'premium', title: 'Premium Experience', desc: 'Highly polished interfaces with advanced interactions and visual effects.', price: 10000 }
  ],
  addons: [
    { id: 'seo', title: 'SEO Setup', price: 3000, isMonthly: false },
    { id: 'perf', title: 'Performance Optimization', price: 2000, isMonthly: false },
    { id: 'deploy', title: 'Deployment & Hosting Setup', price: 2000, isMonthly: false },
    { id: 'content', title: 'Content Assistance', price: 3000, isMonthly: false },
    { id: 'maintenance', title: 'Monthly Maintenance', price: 2500, isMonthly: true }
  ]
};

// ==========================================
// 2. INTEGRATION SETTINGS
// ==========================================
// Your JAForge WhatsApp Number
const WHATSAPP_NUMBER = "919395868085"; 

// Helper to format currency
const formatInr = (amount) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
};

// Animated Number Component
const AnimatedPrice = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = displayValue;
    const end = value;
    if (start === end) return;
    
    const duration = 500;
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const stepValue = (end - start) / steps;
    
    let current = start;
    const timer = setInterval(() => {
      current += stepValue;
      if ((stepValue > 0 && current >= end) || (stepValue < 0 && current <= end)) {
        clearInterval(timer);
        setDisplayValue(end);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value]);

  return <span>{formatInr(displayValue)}</span>;
};

export default function Estimator() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    type: null,
    pages: null,
    features: [],
    design: null,
    addons: []
  });
  
  const [leadForm, setLeadForm] = useState({ name: '', email: '', business: '', phone: '', desc: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const calculateTotal = () => {
    let base = 0;
    let monthly = 0;

    if (selections.type) base += PRICING.projectTypes.find(p => p.id === selections.type)?.price || 0;
    if (selections.pages) base += PRICING.pages.find(p => p.id === selections.pages)?.price || 0;
    if (selections.design) base += PRICING.design.find(p => p.id === selections.design)?.price || 0;
    
    selections.features.forEach(fId => {
      base += PRICING.features.find(f => f.id === fId)?.price || 0;
    });
    
    selections.addons.forEach(aId => {
      const addon = PRICING.addons.find(a => a.id === aId);
      if (addon) {
        if (addon.isMonthly) monthly += addon.price;
        else base += addon.price;
      }
    });

    return { base, monthly, highEnd: Math.round(base * 1.25) }; 
  };

  const totals = calculateTotal();

  const handleNext = () => {
    if (step < 6) setStep(step + 1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleToggleMultiple = (category, id) => {
    setSelections(prev => {
      const exists = prev[category].includes(id);
      return {
        ...prev,
        [category]: exists ? prev[category].filter(i => i !== id) : [...prev[category], id]
      };
    });
  };

  // ==============================================================
  // MAGIC HAPPENS HERE: Sending Data directly to WhatsApp
  // ==============================================================
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // 1. Convert IDs to readable text for the message
    const typeTitle = selections.type ? PRICING.projectTypes.find(p => p.id === selections.type)?.title : 'None';
    const pagesTitle = selections.pages ? PRICING.pages.find(p => p.id === selections.pages)?.title : 'None';
    const designTitle = selections.design ? PRICING.design.find(p => p.id === selections.design)?.title : 'None';
    
    const featuresTitles = selections.features.length > 0 
      ? selections.features.map(fId => PRICING.features.find(f => f.id === fId)?.title).join(', ') 
      : 'None';
      
    const addonsTitles = selections.addons.length > 0 
      ? selections.addons.map(aId => PRICING.addons.find(a => a.id === aId)?.title).join(', ') 
      : 'None';

    // 2. Format the WhatsApp message with bolding
    const message = `*🔥 New Project Estimate (JAForge)*\n\n*👤 Client Details:*\n*Name:* ${leadForm.name}\n*Email:* ${leadForm.email}\n*Business:* ${leadForm.business || 'N/A'}\n*Phone:* ${leadForm.phone || 'N/A'}\n\n*💻 Project Scope:*\n*Type:* ${typeTitle}\n*Pages:* ${pagesTitle}\n*Design:* ${designTitle}\n*Features:* ${featuresTitles}\n*Add-ons:* ${addonsTitles}\n\n*💰 Estimated Price:*\n*Range:* ${formatInr(totals.base)} - ${formatInr(totals.highEnd)}${totals.monthly > 0 ? `\n*Recurring:* ${formatInr(totals.monthly)} / month` : ''}\n\n*📝 Additional Notes:*\n${leadForm.desc || 'None'}`;

    // 3. Open WhatsApp in a new tab
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // 4. Still show the success screen on the website
    setIsSubmitted(true);
    setStep(7); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const canProceed = () => {
    if (step === 1) return selections.type !== null;
    if (step === 2) return selections.pages !== null;
    if (step === 4) return selections.design !== null;
    return true; 
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#E10600] selection:text-white pb-24">
      <Navbar />

      {/* HERO */}
      <div className="relative pt-32 lg:pt-48 pb-16 px-6 lg:px-12 max-w-[1600px] mx-auto text-center border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E10600]/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[#E10600] uppercase mb-6">
            Project Estimator
          </div>
          <h1 className="text-4xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            Let's Estimate <span className="text-[#E10600] drop-shadow-[0_0_20px_rgba(225,6,0,0.5)]">Your Project.</span>
          </h1>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us what you're building and get an instant estimated project range. No commitment required.
          </p>
          {step === 1 && (
            <button onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })} className="text-sm font-bold text-white hover:text-[#E10600] transition-colors flex items-center justify-center gap-2 mx-auto">
              Start Estimating <ArrowRight size={16} className="rotate-90" />
            </button>
          )}
        </div>
      </div>

      {/* ESTIMATOR GRID */}
      {!isSubmitted ? (
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* LEFT: QUESTIONNAIRE */}
          <div className="lg:col-span-7 xl:col-span-8">
            
            {/* Step Indicators */}
            {step < 6 && (
              <div className="flex items-center gap-4 lg:gap-8 mb-12 overflow-x-auto pb-4 scrollbar-hide text-sm">
                {['Project', 'Pages', 'Features', 'Design', 'Add-ons'].map((label, idx) => {
                  const s = idx + 1;
                  const isActive = step === s;
                  const isPassed = step > s;
                  return (
                    <div key={label} className={`flex items-center gap-2 flex-shrink-0 ${isActive ? 'text-[#E10600] font-bold' : isPassed ? 'text-white' : 'text-[#A0A0A0]'}`}>
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${isActive ? 'border-[#E10600] bg-[#E10600]/10' : isPassed ? 'border-white bg-white/10' : 'border-[#A0A0A0] bg-transparent'}`}>
                        {isPassed ? <CheckCircle size={12} /> : `0${s}`}
                      </span>
                      {label}
                    </div>
                  );
                })}
              </div>
            )}

            <div className="bg-[#000000] border border-white/5 rounded-3xl p-6 lg:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E10600]/5 blur-[80px] rounded-full pointer-events-none"></div>
              
              {/* STEPS CONTENT */}
              <div className="relative z-10 min-h-[400px]">
                
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <h2 className="text-2xl lg:text-3xl font-display font-bold mb-8">What are you looking to build?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {PRICING.projectTypes.map(item => {
                        const Icon = item.icon;
                        const isSelected = selections.type === item.id;
                        return (
                          <div 
                            key={item.id} 
                            onClick={() => setSelections({...selections, type: item.id})}
                            className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden ${isSelected ? 'border-[#E10600] bg-[#E10600]/5 shadow-[0_0_20px_rgba(225,6,0,0.15)] -translate-y-1' : 'border-white/10 bg-[#050505] hover:border-white/30 hover:bg-[#111]'}`}
                          >
                            {isSelected && <CheckCircle size={18} className="absolute top-4 right-4 text-[#E10600]" />}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${isSelected ? 'bg-[#E10600] text-white' : 'bg-white/5 text-[#A0A0A0]'}`}>
                              <Icon size={20} />
                            </div>
                            <h3 className={`text-lg font-bold mb-2 ${isSelected ? 'text-white' : 'text-gray-200'}`}>{item.title}</h3>
                            <p className="text-sm text-[#A0A0A0]">{item.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <h2 className="text-2xl lg:text-3xl font-display font-bold mb-2">How large is your website?</h2>
                    <p className="text-[#A0A0A0] mb-8">Select the estimated number of unique pages you'll need.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {PRICING.pages.map(item => {
                        const isSelected = selections.pages === item.id;
                        return (
                          <div 
                            key={item.id} 
                            onClick={() => setSelections({...selections, pages: item.id})}
                            className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 relative ${isSelected ? 'border-[#E10600] bg-[#E10600]/5 shadow-[0_0_20px_rgba(225,6,0,0.15)] -translate-y-1' : 'border-white/10 bg-[#050505] hover:border-white/30 hover:bg-[#111]'}`}
                          >
                            {isSelected && <CheckCircle size={18} className="absolute top-4 right-4 text-[#E10600]" />}
                            <h3 className={`text-xl font-bold mb-2 ${isSelected ? 'text-white' : 'text-gray-200'}`}>{item.title}</h3>
                            <p className="text-sm text-[#A0A0A0]">{item.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <h2 className="text-2xl lg:text-3xl font-display font-bold mb-2">What features do you need?</h2>
                    <p className="text-[#A0A0A0] mb-8">Select all functionalities that apply to your project.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {PRICING.features.map(item => {
                        const isSelected = selections.features.includes(item.id);
                        return (
                          <div 
                            key={item.id} 
                            onClick={() => handleToggleMultiple('features', item.id)}
                            className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all duration-300 ${isSelected ? 'border-[#E10600] bg-[#E10600]/5' : 'border-white/10 bg-[#050505] hover:border-white/30 hover:bg-[#111]'}`}
                          >
                            <span className={`font-medium ${isSelected ? 'text-white' : 'text-gray-300'}`}>{item.title}</span>
                            <div className={`w-5 h-5 rounded border flex items-center justify-center ${isSelected ? 'border-[#E10600] bg-[#E10600]' : 'border-[#A0A0A0] bg-transparent'}`}>
                              {isSelected && <CheckCircle size={12} className="text-white" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <h2 className="text-2xl lg:text-3xl font-display font-bold mb-2">How custom should the design be?</h2>
                    <p className="text-[#A0A0A0] mb-8">Choose the level of visual polish and interaction design.</p>
                    <div className="grid grid-cols-1 gap-4">
                      {PRICING.design.map(item => {
                        const isSelected = selections.design === item.id;
                        return (
                          <div 
                            key={item.id} 
                            onClick={() => setSelections({...selections, design: item.id})}
                            className={`p-6 rounded-2xl border flex items-start gap-4 cursor-pointer transition-all duration-300 relative ${isSelected ? 'border-[#E10600] bg-[#E10600]/5 shadow-[0_0_20px_rgba(225,6,0,0.15)] -translate-y-1' : 'border-white/10 bg-[#050505] hover:border-white/30 hover:bg-[#111]'}`}
                          >
                            <div className={`w-6 h-6 rounded-full border-2 mt-1 flex-shrink-0 flex items-center justify-center ${isSelected ? 'border-[#E10600] bg-transparent' : 'border-[#A0A0A0] bg-transparent'}`}>
                              {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#E10600]"></div>}
                            </div>
                            <div>
                              <h3 className={`text-xl font-bold mb-1 ${isSelected ? 'text-white' : 'text-gray-200'}`}>{item.title}</h3>
                              <p className="text-sm text-[#A0A0A0] leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <h2 className="text-2xl lg:text-3xl font-display font-bold mb-2">Would you like any additional services?</h2>
                    <p className="text-[#A0A0A0] mb-8">Select optional add-ons to enhance your project.</p>
                    <div className="grid grid-cols-1 gap-3">
                      {PRICING.addons.map(item => {
                        const isSelected = selections.addons.includes(item.id);
                        return (
                          <div 
                            key={item.id} 
                            onClick={() => handleToggleMultiple('addons', item.id)}
                            className={`p-5 rounded-xl border flex items-center justify-between cursor-pointer transition-all duration-300 ${isSelected ? 'border-[#E10600] bg-[#E10600]/5' : 'border-white/10 bg-[#050505] hover:border-white/30 hover:bg-[#111]'}`}
                          >
                            <div>
                              <span className={`block font-medium mb-1 ${isSelected ? 'text-white' : 'text-gray-300'}`}>{item.title}</span>
                              <span className="text-xs text-[#A0A0A0] font-mono">{formatInr(item.price)}{item.isMonthly ? ' / month' : ''}</span>
                            </div>
                            <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${isSelected ? 'border-[#E10600] bg-[#E10600]' : 'border-[#A0A0A0] bg-transparent'}`}>
                              {isSelected && <CheckCircle size={12} className="text-white" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 6 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <h2 className="text-2xl lg:text-3xl font-display font-bold mb-2">Your estimate is ready.</h2>
                    <p className="text-[#A0A0A0] mb-8">Enter your details below to save this estimate and discuss your project with JAForge.</p>
                    
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-2 font-semibold">Name *</label>
                          <input required type="text" value={leadForm.name} onChange={e => setLeadForm({...leadForm, name: e.target.value})} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E10600] transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-2 font-semibold">Email *</label>
                          <input required type="email" value={leadForm.email} onChange={e => setLeadForm({...leadForm, email: e.target.value})} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E10600] transition-colors" placeholder="john@example.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-2 font-semibold">Business / Brand</label>
                          <input type="text" value={leadForm.business} onChange={e => setLeadForm({...leadForm, business: e.target.value})} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E10600] transition-colors" placeholder="Company Name" />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-2 font-semibold">Phone (Optional)</label>
                          <input type="tel" value={leadForm.phone} onChange={e => setLeadForm({...leadForm, phone: e.target.value})} className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E10600] transition-colors" placeholder="+91 00000 00000" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-2 font-semibold">Project Details (Optional)</label>
                        <textarea value={leadForm.desc} onChange={e => setLeadForm({...leadForm, desc: e.target.value})} rows="4" className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#E10600] transition-colors resize-none" placeholder="Tell us a bit more about what you want to build..."></textarea>
                      </div>
                      <button type="submit" className="mt-4 w-full bg-[#E10600] hover:bg-white hover:text-black text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(225,6,0,0.3)] hover:shadow-white/20 flex justify-center items-center gap-2 cursor-pointer">
                        Send Project Inquiry <Send size={18} />
                      </button>
                    </form>
                  </div>
                )}
              </div>

              {/* BOTTOM CONTROLS (Only show on steps 1-5) */}
              {step < 6 && (
                <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between">
                  {step > 1 ? (
                    <button onClick={() => setStep(step - 1)} className="text-[#A0A0A0] hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
                      <ArrowLeft size={16} /> Back
                    </button>
                  ) : <div></div>}

                  <button 
                    onClick={handleNext} 
                    disabled={!canProceed()}
                    className={`px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${canProceed() ? 'bg-white text-black hover:bg-[#E10600] hover:text-white shadow-lg' : 'bg-white/5 text-[#A0A0A0] cursor-not-allowed'}`}
                  >
                    {step === 5 ? 'Get My Estimate' : 'Next'} <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
            
            <p className="text-[#A0A0A0] text-xs text-center mt-6 max-w-2xl mx-auto leading-relaxed opacity-70">
              This calculator provides an approximate project estimate based on the options selected. It is not a final quotation. Final pricing may change after reviewing the complete project requirements.
            </p>
          </div>

          {/* RIGHT: STICKY SUMMARY */}
          <div className="lg:col-span-5 xl:col-span-4 relative">
            <div className="sticky top-32 bg-[#000000] border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse"></span> Your Estimate
              </h3>
              
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-[#A0A0A0]">Project Type</span>
                  <span className="font-medium text-white text-right max-w-[150px]">
                    {selections.type ? PRICING.projectTypes.find(p => p.id === selections.type)?.title : '-'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-[#A0A0A0]">Pages</span>
                  <span className="font-medium text-white text-right max-w-[150px]">
                    {selections.pages ? PRICING.pages.find(p => p.id === selections.pages)?.title : '-'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-[#A0A0A0]">Design Level</span>
                  <span className="font-medium text-white text-right max-w-[150px]">
                    {selections.design ? PRICING.design.find(p => p.id === selections.design)?.title : '-'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-[#A0A0A0]">Features</span>
                  <span className="font-medium text-white text-right max-w-[150px]">
                    {selections.features.length > 0 ? `${selections.features.length} Selected` : '-'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0A0]">Add-ons</span>
                  <span className="font-medium text-white text-right max-w-[150px]">
                    {selections.addons.length > 0 ? `${selections.addons.length} Selected` : '-'}
                  </span>
                </div>
              </div>

              <div className="bg-[#050505] rounded-2xl p-6 border border-white/5 relative overflow-hidden transition-all duration-300">
                {/* Subtle red glow that triggers when price updates */}
                <div key={totals.base} className="absolute inset-0 bg-[#E10600]/10 opacity-0 animate-[ping_0.5s_ease-out_1] pointer-events-none"></div>
                
                <p className="text-xs uppercase tracking-wider text-[#A0A0A0] font-semibold mb-2">Estimated Project Cost</p>
                
                {totals.base === 0 ? (
                  <p className="text-3xl font-display font-bold text-white">Let's start</p>
                ) : (
                  <div>
                    <div className="text-2xl xl:text-3xl font-display font-bold text-white text-wrap leading-tight">
                      <AnimatedPrice value={totals.base} /> <span className="text-[#A0A0A0] font-normal mx-1">–</span> <AnimatedPrice value={totals.highEnd} />
                    </div>
                    {totals.monthly > 0 && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-[#A0A0A0] text-xs uppercase tracking-wider mb-1">Plus Recurring</p>
                        <p className="text-[#E10600] font-mono font-bold text-lg">{formatInr(totals.monthly)} / mo</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <p className="text-[10px] text-[#A0A0A0] mt-4 text-center">Estimate only — final pricing depends on confirmed project scope.</p>
            </div>
          </div>
        </div>
      ) : (
        /* SUCCESS SCREEN */
        <div className="max-w-[800px] mx-auto px-6 lg:px-12 mt-16 animate-in fade-in zoom-in-95 duration-500">
          <div className="bg-[#000000] border border-[#E10600]/30 shadow-[0_0_50px_rgba(225,6,0,0.15)] rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="w-20 h-20 bg-[#E10600]/10 border border-[#E10600]/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={40} className="text-[#E10600]" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">Project estimated.</h2>
            <p className="text-[#A0A0A0] text-lg mb-10 max-w-xl mx-auto">
              Your inquiry has been formulated. We will review your requirements and reach out shortly to discuss the final details.
            </p>

            <div className="bg-[#050505] border border-white/5 rounded-2xl p-6 lg:p-8 max-w-md mx-auto mb-10">
              <p className="text-[#A0A0A0] text-sm uppercase tracking-wider font-semibold mb-2">Your Estimate Range</p>
              <div className="text-3xl font-display font-bold text-white mb-2">
                {formatInr(totals.base)} - {formatInr(totals.highEnd)}
              </div>
              {totals.monthly > 0 && (
                <p className="text-[#E10600] font-mono font-medium">+ {formatInr(totals.monthly)} / month</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/" className="px-8 py-4 bg-white hover:bg-gray-200 text-black font-bold rounded-full transition-all text-sm flex items-center gap-2">
                Return to JAForge <ArrowRight size={16} />
              </a>
              
              {WHATSAPP_NUMBER && (
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi JAForge, I just used your project estimator and my range was ${formatInr(totals.base)} - ${formatInr(totals.highEnd)}. Let's discuss!`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border border-white/20 hover:border-white text-white font-bold rounded-full transition-all text-sm flex items-center gap-2"
                >
                  <MessageSquare size={16} /> Discuss on WhatsApp
                </a>
              )}
            </div>

            <button 
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                setSelections({ type: null, pages: null, features: [], design: null, addons: [] });
              }} 
              className="mt-12 text-sm text-[#A0A0A0] hover:text-white underline decoration-white/30 underline-offset-4"
            >
              Calculate another project
            </button>
          </div>
        </div>
      )}
    </div>
  );
}