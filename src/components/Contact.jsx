import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { ArrowRight, MessageCircle, Mail, Send } from 'lucide-react';

// ==========================================
// CUSTOM INSTAGRAM ICON
// ==========================================
const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 1. STATE TO HOLD FORM DATA
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: 'Less than ₹20,000',
    details: ''
  });

  // 2. FUNCTION TO HANDLE INPUT CHANGES
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. FUNCTION TO SEND TO WHATSAPP
  const handleWhatsAppSubmit = () => {
    // Validate if name is empty
    if (!formData.name || !formData.details) {
      alert("Please fill in your name and project details before sending.");
      return;
    }

    // Format the message with bold text for WhatsApp
    const message = `*New Project Inquiry (JAForge)*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Estimated Budget:* ${formData.budget}\n\n*Project Details:*\n${formData.details}`;

    // Encode the message so it works in a URL
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp API with your number and the pre-filled message
    window.open(`https://wa.me/919395868085?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#E10600] selection:text-white pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      <Navbar />

      <section className="pt-40 lg:pt-48 px-6 lg:px-12 max-w-[1600px] mx-auto relative">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#E10600]/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* ==================================================== */}
          {/* LEFT COLUMN: CONTACT FORM                            */}
          {/* ==================================================== */}
          <div className="relative z-10">
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 tracking-tighter">
              Let's Build <br />
              <span className="text-[#E10600]">Something Great.</span>
            </h1>
            <p className="text-[#888888] text-lg mb-12 font-light max-w-lg">
              Fill out the form below or reach out directly. We're ready to forge your digital future.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#888888] uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Basanta Ganesh" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#E10600] transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#888888] uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jaforge14@gmail.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#E10600] transition-colors" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#888888] uppercase tracking-wider">Estimated Budget</label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#E10600] transition-colors"
                >
                  <option value="Less than ₹20,000">Less than ₹20,000</option>
                  <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
                  <option value="₹50,000+">₹50,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#888888] uppercase tracking-wider">Project Details</label>
                <textarea 
                  rows="4" 
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell us about your vision..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#E10600] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button Triggering WhatsApp */}
              <button 
                type="button" 
                onClick={handleWhatsAppSubmit}
                className="w-full group inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#E10600] text-white font-bold rounded-xl transition-all duration-500 hover:bg-white hover:text-black mt-4 cursor-pointer"
              >
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* ==================================================== */}
          {/* RIGHT COLUMN: CONTACT INFO & LINKS                   */}
          {/* ==================================================== */}
          <div className="relative z-10 pt-4 lg:pt-0">
            <h2 className="text-3xl font-display font-bold mb-8 tracking-tight">Connect With JAForge</h2>
            
            <div className="space-y-4">
              
              <a 
                href="https://instagram.com/jaforge.in"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E10600]/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#000000] border border-white/10 flex items-center justify-center group-hover:text-[#E10600] group-hover:border-[#E10600]/30 transition-colors">
                    <InstagramIcon size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Follow JAForge</p>
                    <p className="text-[#888888] text-sm">@jaforge.in</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-[#555555] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              <a 
                href="https://wa.me/919395868085"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-[#E10600]/50 hover:border-[#E10600] hover:bg-[#E10600]/10 transition-all duration-300 group shadow-[0_0_20px_rgba(225,6,0,0.1)]"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#000000] border border-[#E10600]/30 flex items-center justify-center text-[#E10600] transition-colors">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Message JAForge</p>
                    <p className="text-[#888888] text-sm">+919395868085</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-all" />
              </a>

              <a 
                href="mailto:jaforge14@gmail.com"
                className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E10600]/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#000000] border border-white/10 flex items-center justify-center group-hover:text-[#E10600] group-hover:border-[#E10600]/30 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">Send an Email</p>
                    <p className="text-[#888888] text-sm">jaforge14@gmail.com</p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-[#555555] group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            <div className="mt-16">
              <h3 className="text-xl font-display font-bold mb-4 tracking-tight">Before You Reach Out</h3>
              <div className="p-6 rounded-2xl bg-[#050505] border border-white/5">
                <ul className="space-y-4 text-[#888888] text-sm">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E10600] flex-shrink-0"></div>
                    <p>We typically respond to all inquiries within 24 hours.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E10600] flex-shrink-0"></div>
                    <p>For urgent project requests, reaching out via WhatsApp is the fastest method to get in touch with our team.</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}