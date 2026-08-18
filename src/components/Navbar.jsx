import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // UPDATED: "Contact" now points to the new /contact page
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Estimator', path: '/estimator' }, 
    { name: 'About Us', path: '/about' }, 
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' } // <-- Updated this line!
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1600px] z-50 transition-all duration-300 rounded-2xl border ${
      scrolled ? 'bg-brand-deep/80 backdrop-blur-lg border-white/10 shadow-lg' : 'bg-transparent border-transparent'
    }`}>
      <div className="px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <a href="/" className="text-2xl font-display font-bold tracking-tighter flex items-center">
            <span className="text-brand-red mr-[2px] transform -skew-x-12">J</span>
            <span className="text-white transform skew-x-12">A</span>
            <span className="text-white ml-2">Forge</span>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} className="text-sm font-medium text-brand-gray hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a href="/estimator">
            <button className="bg-brand-red text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-[0_0_15px_rgba(225,6,0,0.3)] hover:shadow-[0_0_25px_rgba(255,26,26,0.6)] hover:bg-brand-neon transition-all duration-300 flex items-center gap-2">
              Start a Project <span>→</span>
            </button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-deep/95 backdrop-blur-xl border-t border-white/10 p-6 rounded-b-2xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path} 
              className="text-brand-gray hover:text-white font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="/estimator" className="w-full">
            <button className="mt-4 bg-brand-red text-white px-6 py-3 rounded-full text-sm font-medium shadow-[0_0_15px_rgba(225,6,0,0.3)] w-full flex justify-center items-center gap-2">
              Start a Project <span>→</span>
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}