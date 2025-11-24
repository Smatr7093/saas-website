
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (page: 'home' | 'chrome-extension') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (onNavigate) onNavigate('home');
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (page: 'home' | 'chrome-extension') => {
    if (onNavigate) onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2.5 cursor-pointer group" onClick={handleLogoClick}>
          <div className="w-10 h-10 flex items-center justify-center text-brand-primary group-hover:scale-105 transition-transform duration-300">
             <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Right Solid Sector */}
                <path d="M22 8V32C28.6274 32 34 26.6274 34 20C34 13.3726 28.6274 8 22 8Z" fill="currentColor" />
                {/* Inner Arc */}
                <path d="M17 12C12.5817 12 9 15.5817 9 20C9 24.4183 12.5817 28 17 28" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                {/* Outer Arc */}
                <path d="M17 4C8.16344 4 1 11.1634 1 20C1 28.8366 8.16344 36 17 36" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
             </svg>
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-neutral-charcoal">SMATR</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => handleProductClick('home')} className="text-sm font-medium text-neutral-slate hover:text-brand-primary transition-colors">Platform</button>
          
          {/* Product Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-neutral-slate hover:text-brand-primary transition-colors focus:outline-none py-2">
              Product
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
               <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col gap-1 ring-1 ring-black/5">
                 <button onClick={() => handleProductClick('home')} className="block w-full px-4 py-2 text-sm text-neutral-charcoal hover:bg-brand-lilac/20 hover:text-brand-primary rounded-lg transition-colors text-left">
                   Overview
                 </button>
                 <button onClick={() => handleProductClick('chrome-extension')} className="block w-full px-4 py-2 text-sm text-neutral-charcoal hover:bg-brand-lilac/20 hover:text-brand-primary rounded-lg transition-colors text-left whitespace-nowrap">
                   Chrome Extension
                 </button>
               </div>
            </div>
          </div>

          <a href="#pricing" className="text-sm font-medium text-neutral-slate hover:text-brand-primary transition-colors">Pricing</a>
          <a href="#resources" className="text-sm font-medium text-neutral-slate hover:text-brand-primary transition-colors">Resources</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
           <button className="px-6 py-2.5 text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primary/90 rounded-full transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:-translate-y-0.5">
             Book a Demo
           </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-neutral-charcoal" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-6 flex flex-col items-center gap-6 animate-fade-in-up">
          <button onClick={() => handleProductClick('home')} className="text-sm font-medium text-neutral-charcoal">Platform</button>
          
          {/* Mobile Product Submenu */}
          <div className="flex flex-col items-center gap-3 w-full bg-brand-lilac/10 py-4">
            <span className="text-sm font-bold text-brand-primary">Product</span>
            <button onClick={() => handleProductClick('home')} className="text-sm text-neutral-slate">Overview</button>
            <button onClick={() => handleProductClick('chrome-extension')} className="text-sm text-brand-secondary font-medium">Chrome Extension</button>
          </div>

          <a href="#pricing" className="text-sm font-medium text-neutral-charcoal" onClick={() => setMobileOpen(false)}>Pricing</a>
          <a href="#resources" className="text-sm font-medium text-neutral-charcoal" onClick={() => setMobileOpen(false)}>Resources</a>
          
          <button className="px-8 py-3 text-sm font-semibold text-white bg-brand-primary rounded-full w-3/4 shadow-lg shadow-brand-primary/20">
             Book a Demo
           </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
