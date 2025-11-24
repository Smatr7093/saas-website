import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-neutral-cloud">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-60 -z-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lilac rounded-full blur-[120px] opacity-60 mix-blend-multiply animate-blob -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-secondary/20 rounded-full blur-[100px] opacity-50 mix-blend-multiply animate-blob animation-delay-2000 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal/20 rounded-full blur-[100px] opacity-50 mix-blend-multiply animate-blob animation-delay-4000 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-lilac shadow-sm mb-6 animate-fade-in-up opacity-0" 
          style={{ animationDelay: '0.1s' }}
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-secondary animate-pulse"></span>
          <span className="text-xs font-semibold text-brand-primary uppercase tracking-wide">Work that Organizes Itself</span>
        </div>
        
        <h1 
          className="text-5xl md:text-7xl font-display font-bold text-neutral-charcoal tracking-tight mb-4 leading-[1.1] animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          Actionable Intelligence<br />
          <span className="text-neutral-slate font-medium">for Modern Teams</span>
        </h1>
        
        <p 
          className="text-lg md:text-xl text-neutral-slate max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          Your company knowledge — finally connected, searchable, and intelligent.
          Capture intent across every tool and unify it into one intelligent layer.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.6s' }}
        >
          <button className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold rounded-full shadow-xl shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
            Get Early Access
            <ArrowRight size={18} />
          </button>
          
          <button className="px-8 py-4 bg-white hover:bg-gray-50 border border-gray-200 text-neutral-charcoal font-semibold rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
            <PlayCircle size={18} className="text-neutral-slate group-hover:text-brand-secondary transition-colors" />
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;