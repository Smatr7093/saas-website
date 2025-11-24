import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white pt-12 pb-8 border-t border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section inside Footer */}
        <div className="bg-brand-secondary/10 rounded-3xl p-8 flex flex-col items-center text-center mb-16 border border-white/10 backdrop-blur-sm">
           <h3 className="text-2xl font-bold text-white mb-4">Ready to get started?</h3>
           <button className="px-6 py-3 bg-white text-brand-primary font-semibold rounded-full shadow-lg hover:bg-brand-lilac transition-all hover:-translate-y-0.5">
             Book a Demo
           </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                   <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      {/* Right Solid Sector */}
                      <path d="M22 8V32C28.6274 32 34 26.6274 34 20C34 13.3726 28.6274 8 22 8Z" fill="currentColor" />
                      {/* Inner Arc */}
                      <path d="M17 12C12.5817 12 9 15.5817 9 20C9 24.4183 12.5817 28 17 28" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                      {/* Outer Arc */}
                      <path d="M17 4C8.16344 4 1 11.1634 1 20C1 28.8366 8.16344 36 17 36" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                   </svg>
                </div>
                <span className="font-display font-bold text-xl tracking-tight">SMATR</span>
            </div>
            <p className="text-brand-lilac text-sm mb-6 max-w-xs leading-relaxed">
              Actionable intelligence for modern teams. Connected, secure, and context-aware.
            </p>
            <div className="flex gap-4">
               <a href="#" className="text-brand-lilac hover:text-white transition-colors"><Twitter size={20} /></a>
               <a href="#" className="text-brand-lilac hover:text-white transition-colors"><Linkedin size={20} /></a>
               <a href="#" className="text-brand-lilac hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Platform</h4>
            <ul className="space-y-2 text-sm text-brand-lilac">
              <li><a href="#" className="hover:text-white transition-colors">Drive Business</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pro-active AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Learn more</h4>
            <ul className="space-y-2 text-sm text-brand-lilac">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Support</h4>
            <ul className="space-y-2 text-sm text-brand-lilac">
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center md:text-left text-xs text-brand-lilac/60">
          &copy; {new Date().getFullYear()} Smatr Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;