
import React, { useState, useEffect } from 'react';
import { 
  Send, Search, BarChart3, Sparkles, CheckCircle2, 
  FileText, Clock, Calendar, ArrowRight, AlertCircle, 
  Zap, Mail, Link, User, Share2, Shield, Lock, Cpu
} from 'lucide-react';
import { FeatureCardProps } from '../types';
import { generateChatResponse } from '../services/geminiService';

// --- Logo Components ---
const GoogleDriveLogo = () => (
  <svg viewBox="0 0 87.3 78" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.6 66.85l25.3-43.8H82.7l-25.3 43.8H6.6z" fill="#0066DA"/>
    <path d="M23.1 23.05l24.9 43.05h-49.8L18.2 31.55l4.9-8.5z" fill="#00AC47"/>
    <path d="M57.4 66.1H23.1l25.4-43.05h29.9L57.4 66.1z" fill="#EA4335"/>
    <path d="M23.1 23.05L48.5 66.1H57.4L32 23.05H23.1z" fill="#2684FC"/>
    <path d="M6.6 66.85L23.1 66.1l-2.45-4.3L18.2 66.85H6.6z" fill="#00832D"/>
    <path d="M82.7 23.05L57.4 66.1l4.9 8.45 33.1-51.5H82.7z" fill="#FFBA00"/>
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.042 15.123a2.52 2.52 0 1 0 0-5.04 2.52 2.52 0 0 0 0 5.04zM5.042 16.596a2.52 2.52 0 1 0 5.04 0v6.034a2.52 2.52 0 1 0-5.04 0v-6.034zM8.609 5.042a2.52 2.52 0 1 0 5.04 0 2.52 2.52 0 0 0-5.04 0zM7.134 5.042a2.52 2.52 0 1 0 0 5.04h-6.034a2.52 2.52 0 1 0 0-5.04h6.034z" fill="#E01E5A"/>
    <path d="M18.958 8.877a2.52 2.52 0 1 0 0 5.04 2.52 2.52 0 0 0 0-5.04zM18.958 7.404a2.52 2.52 0 1 0-5.04 0V1.37a2.52 2.52 0 1 0 5.04 0v6.034zM15.391 18.958a2.52 2.52 0 1 0-5.04 0 2.52 2.52 0 0 0 5.04 0zM16.866 18.958a2.52 2.52 0 1 0 0-5.04h6.034a2.52 2.52 0 1 0 0 5.04h-6.034z" fill="#36C5F0"/>
    <path d="M8.609 5.042a2.52 2.52 0 1 0 5.04 0 2.52 2.52 0 0 0-5.04 0z" fill="#2EB67D"/>
    <path d="M18.958 8.877a2.52 2.52 0 1 0 0 5.04 2.52 2.52 0 0 0 0-5.04z" fill="#ECB22E"/>
  </svg>
);

const SalesforceLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M16.6 5.4C16 3.3 14.1 1.8 11.9 1.8C9.5 1.8 7.5 3.5 7.1 5.8C4.2 6.1 2 8.6 2 11.6C2 14.9 4.7 17.6 8 17.6H16.5C19.5 17.6 22 15.1 22 12.1C22 9.1 19.6 6.6 16.6 6.6V5.4Z" fill="#00A1E0"/>
  </svg>
);

const JiraLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.57 0.89L5.84 6.62C5.31 7.15 5.31 8.01 5.84 8.54L11.57 14.27V0.89Z" fill="#2684FF"/>
    <path d="M12.55 13.05L6.82 18.78C6.29 19.31 6.29 20.17 6.82 20.7L12.55 26.43V13.05Z" fill="#0052CC" transform="translate(0 -2.43)"/>
    <path d="M12.55 0.89L18.28 6.62C18.81 7.15 18.81 8.01 18.28 8.54L12.55 14.27V0.89Z" fill="#0052CC"/>
  </svg>
);

// --- Components ---

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, children, className = '', fullHeight = false }) => (
  <div className={`group bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:border-brand-lilac transition-all duration-300 overflow-hidden relative flex flex-col h-full ${className}`}>
    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-4 shrink-0">
        <h3 className="text-base font-bold text-neutral-charcoal mb-1">{title}</h3>
        <p className="text-neutral-slate text-xs leading-relaxed line-clamp-4">{description}</p>
      </div>
      <div className="flex-grow relative w-full">
        {children}
      </div>
    </div>
    {/* Soft background gradient for hover effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-lilac/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
  </div>
);

// 1. Unified Work Graph Graphic (Replaces Chat)
const UnifiedWorkGraph = () => {
  return (
    <div className="relative h-[200px] w-full bg-neutral-cloud/50 rounded-xl border border-gray-100 overflow-hidden flex items-center justify-center">
        {/* Background Graph Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #4d73ff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="50%" y1="50%" x2="25%" y2="35%" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="75%" y2="35%" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1="25%" y1="35%" x2="15%" y2="65%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="75%" y1="35%" x2="85%" y2="65%" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Animated pulse on main lines */}
            <circle r="2" fill="#4d73ff">
                 <animateMotion dur="3s" repeatCount="indefinite" path="M50% 50% L25% 35%" />
            </circle>
             <circle r="2" fill="#4d73ff">
                 <animateMotion dur="4s" repeatCount="indefinite" path="M50% 50% L75% 35%" />
            </circle>
            <circle r="2" fill="#4d73ff">
                 <animateMotion dur="3.5s" repeatCount="indefinite" path="M50% 50% L50% 80%" />
            </circle>
        </svg>

        {/* Center Node (The Intelligence) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center shadow-lg shadow-brand-primary/30 border-2 border-white ring-2 ring-brand-lilac/50">
                 <Share2 size={18} className="text-white" />
             </div>
        </div>

        {/* Surrounding Nodes */}
        
        {/* People Node */}
        <div className="absolute top-[35%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-10 animate-float" style={{ animationDelay: '0.5s' }}>
             <div className="flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                      <User size={14} className="text-brand-secondary" />
                  </div>
                  <span className="text-[9px] font-bold text-neutral-charcoal bg-white/90 px-1.5 py-0.5 rounded shadow-sm border border-gray-50">People</span>
             </div>
        </div>

        {/* Work/Docs Node */}
        <div className="absolute top-[35%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-10 animate-float" style={{ animationDelay: '1.5s' }}>
             <div className="flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                      <FileText size={14} className="text-brand-teal" />
                  </div>
                   <span className="text-[9px] font-bold text-neutral-charcoal bg-white/90 px-1.5 py-0.5 rounded shadow-sm border border-gray-50">Work</span>
             </div>
        </div>

        {/* Activity/Data Node */}
        <div className="absolute top-[80%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 animate-float" style={{ animationDelay: '2.5s' }}>
             <div className="flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
                      <BarChart3 size={14} className="text-brand-coral" />
                  </div>
                   <span className="text-[9px] font-bold text-neutral-charcoal bg-white/90 px-1.5 py-0.5 rounded shadow-sm border border-gray-50">Activity</span>
             </div>
        </div>

        {/* Floating periphery particles */}
        <div className="absolute top-[65%] left-[15%] w-2 h-2 bg-brand-secondary/40 rounded-full animate-pulse"></div>
        <div className="absolute top-[65%] right-[15%] w-2 h-2 bg-brand-teal/40 rounded-full animate-pulse delay-1000"></div>
    </div>
  );
};

// 2. Actionable Intel Graphic
const ActionableIntelGraphic = () => {
  return (
    <div className="relative h-[200px] w-full bg-neutral-cloud/50 rounded-xl border border-gray-100 flex items-center justify-between px-3 overflow-hidden group/graphic">
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-40" 
             style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
        </div>

        {/* Left: Raw Activity Stream (The Noise) */}
        <div className="w-[35%] flex flex-col gap-1.5 opacity-60 relative z-0">
             <div className="absolute inset-0 backdrop-blur-[0.5px] z-10"></div>
             {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="flex items-center gap-2 transform translate-x-0 transition-transform duration-700 group-hover/graphic:translate-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${[ 'bg-blue-400', 'bg-red-400', 'bg-amber-400', 'bg-emerald-400'][i % 4]}`}></div>
                    <div className="h-4 bg-white border border-gray-200 rounded-sm shadow-sm w-full opacity-80"></div>
                 </div>
             ))}
        </div>

        {/* Center: Processing Arrow */}
        <div className="relative z-10 text-brand-primary/40 flex flex-col items-center gap-1">
             <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent"></div>
             <ArrowRight size={14} className="animate-pulse" />
             <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent"></div>
        </div>

        {/* Right: Structured Intel (The Signal) */}
        <div className="w-[50%] relative z-10 animate-float" style={{ animationDuration: '4s' }}>
            <div className="bg-white rounded-lg shadow-lg border border-brand-lilac/60 overflow-hidden ring-1 ring-black/5">
                {/* Card Header */}
                <div className="bg-neutral-charcoal px-3 py-2 flex justify-between items-center">
                    <div>
                        <div className="text-[7px] font-bold text-brand-lilac uppercase tracking-wider mb-px">Daily Brief</div>
                        <div className="text-[9px] font-bold text-white leading-none">Product Team</div>
                    </div>
                    <div className="w-4 h-4 rounded bg-white/10 flex items-center justify-center">
                        <Zap size={8} className="text-brand-yellow" fill="currentColor" />
                    </div>
                </div>
                
                {/* Card Body */}
                <div className="p-2 space-y-2">
                    {/* Awareness Section */}
                    <div className="relative pl-2 border-l border-brand-secondary/20">
                        <div className="text-[8px] font-bold text-neutral-slate mb-0.5">Yesterday's Pulse</div>
                        <div className="text-[8px] text-neutral-charcoal leading-tight">
                            <span className="font-semibold text-brand-primary">4 Blockers</span> cleared. <br/> Design sync completed.
                        </div>
                    </div>
                    
                    {/* Action Section */}
                    <div className="relative">
                        <div className="text-[8px] font-bold text-neutral-slate mb-1">Today's Focus</div>
                         <div className="flex items-center justify-between bg-brand-lilac/10 p-1.5 rounded border border-brand-lilac/20 hover:bg-brand-lilac/20 transition-colors cursor-pointer">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full border border-brand-primary bg-white"></div>
                                <span className="text-[8px] font-semibold text-brand-primary">Approve Q3 Budget</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* Depth Card */}
             <div className="absolute top-1 -right-1 w-full h-full bg-gray-50 rounded-lg border border-gray-100 -z-10 shadow-sm"></div>
        </div>

    </div>
  );
};

// 3. Smart Context Search
const SmartContextSearch = () => {
  return (
    <div className="relative h-[200px] w-full bg-neutral-cloud/50 rounded-xl border border-gray-100 flex flex-col items-center p-3 overflow-hidden">
        
        {/* Unified Search Bar */}
        <div className="w-full relative z-20 mb-3 animate-fade-in-up">
             <div className="bg-white border border-brand-lilac/60 rounded-lg shadow-sm flex items-center px-3 py-2 gap-2">
                 <Search size={12} className="text-brand-primary" />
                 <div className="text-[10px] font-medium text-neutral-charcoal">Q3 Roadmap Assets</div>
                 {/* Source Filters / AI Badge */}
                 <div className="ml-auto px-1.5 py-0.5 bg-brand-lilac/20 rounded text-[8px] font-bold text-brand-primary">AI</div>
             </div>
        </div>

        {/* Connection Line / Flow */}
        <div className="absolute left-1/2 top-12 bottom-0 w-px bg-brand-lilac/30 border-l border-dashed border-brand-lilac/50 z-0"></div>

        {/* The Result Card */}
        <div className="w-full relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <div className="bg-white rounded-lg border border-gray-200 shadow-md p-2 hover:border-brand-primary/30 transition-all cursor-pointer group mx-auto max-w-[95%]">
                 {/* Header: File & Source */}
                 <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                           <div className="w-7 h-7 bg-blue-50 text-blue-600 rounded flex items-center justify-center border border-blue-100">
                               <FileText size={14} />
                           </div>
                           <div>
                               <div className="text-[10px] font-bold text-neutral-charcoal group-hover:text-brand-primary transition-colors">Q3_Roadmap.pdf</div>
                               <div className="text-[8px] text-neutral-slate">Updated 2h ago</div>
                           </div>
                      </div>
                      {/* Source Badge */}
                      <div className="flex items-center gap-1 bg-neutral-cloud px-1.5 py-0.5 rounded border border-gray-100">
                          <div className="w-2.5 h-2.5"><GoogleDriveLogo /></div>
                          <span className="text-[8px] font-medium text-neutral-charcoal">Drive</span>
                      </div>
                 </div>

                 {/* Context Section (The "Why") */}
                 <div className="bg-brand-lilac/10 rounded p-1.5 border border-brand-lilac/10">
                      <div className="flex items-center gap-1 mb-0.5">
                          <Sparkles size={8} className="text-brand-primary" />
                          <span className="text-[8px] font-bold text-brand-primary">Context Found</span>
                      </div>
                      <p className="text-[8px] text-neutral-slate leading-tight">
                          Referenced in <span className="font-medium text-neutral-charcoal">#product-strategy</span> Slack channel regarding budget approval.
                      </p>
                 </div>
             </div>
        </div>
        
        {/* Background Elements - Other Sources */}
        <div className="absolute top-14 left-4 opacity-20 scale-75 blur-[1px]"><SlackLogo /></div>
        <div className="absolute top-16 right-4 opacity-20 scale-75 blur-[1px]"><JiraLogo /></div>
    </div>
  );
};

// 4. Connected Hub (Refined Native Integrations)
const ConnectedHub = () => {
  return (
    <div className="relative h-[200px] w-full bg-neutral-cloud/30 rounded-xl border border-dashed border-gray-200 overflow-hidden flex items-center justify-center group-hover:bg-brand-lilac/5 transition-colors">
        
        {/* Connection Lines with flowing data particles */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 200">
             <defs>
                 <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="rgba(0, 27, 107, 0)" />
                     <stop offset="50%" stopColor="rgba(0, 27, 107, 0.1)" />
                     <stop offset="100%" stopColor="rgba(0, 27, 107, 0)" />
                 </linearGradient>
             </defs>
             {/* Lines converging to center (150, 100) */}
             <path d="M60 50 L150 100" stroke="url(#lineGrad)" strokeWidth="1" />
             <path d="M240 50 L150 100" stroke="url(#lineGrad)" strokeWidth="1" />
             <path d="M60 150 L150 100" stroke="url(#lineGrad)" strokeWidth="1" />
             <path d="M240 150 L150 100" stroke="url(#lineGrad)" strokeWidth="1" />
             
             {/* Flowing Particles */}
             <circle r="2" fill="#4d73ff">
                 <animateMotion dur="3s" repeatCount="indefinite" path="M60 50 L150 100" />
             </circle>
             <circle r="2" fill="#4d73ff">
                 <animateMotion dur="2.5s" repeatCount="indefinite" path="M240 50 L150 100" />
             </circle>
             <circle r="2" fill="#4d73ff">
                 <animateMotion dur="3.2s" repeatCount="indefinite" path="M60 150 L150 100" />
             </circle>
             <circle r="2" fill="#4d73ff">
                 <animateMotion dur="2.8s" repeatCount="indefinite" path="M240 150 L150 100" />
             </circle>
        </svg>

        {/* Center Node - Full Logo Lockup */}
        <div className="relative z-10 px-4 py-2 bg-white rounded-full flex items-center gap-2 shadow-xl shadow-brand-primary/10 border border-brand-lilac/20 ring-4 ring-white">
             <div className="w-5 h-5 text-brand-primary">
                 <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M22 8V32C28.6274 32 34 26.6274 34 20C34 13.3726 28.6274 8 22 8Z" fill="currentColor" />
                    <path d="M17 12C12.5817 12 9 15.5817 9 20C9 24.4183 12.5817 28 17 28" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M17 4C8.16344 4 1 11.1634 1 20C1 28.8366 8.16344 36 17 36" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                 </svg>
             </div>
             <span className="font-display font-bold text-xs text-neutral-charcoal">SMATR</span>
        </div>

        {/* Satellite Nodes - Orbiting */}
        <div className="absolute top-8 left-8 p-1.5 bg-white rounded-lg shadow-sm border border-gray-100 w-7 h-7 flex items-center justify-center animate-float"><GoogleDriveLogo /></div>
        <div className="absolute top-8 right-8 p-1.5 bg-white rounded-lg shadow-sm border border-gray-100 w-7 h-7 flex items-center justify-center animate-float-delayed"><SlackLogo /></div>
        <div className="absolute bottom-8 left-8 p-1.5 bg-white rounded-lg shadow-sm border border-gray-100 w-7 h-7 flex items-center justify-center animate-float-delayed"><JiraLogo /></div>
        <div className="absolute bottom-8 right-8 p-1.5 bg-white rounded-lg shadow-sm border border-gray-100 w-7 h-7 flex items-center justify-center animate-float"><SalesforceLogo /></div>
    </div>
  );
};

// 5. Enterprise AI Graphic
const EnterpriseAIGraphic = () => {
  return (
    <div className="relative h-[200px] w-full bg-neutral-cloud/50 rounded-xl border border-gray-100 flex items-center justify-center p-3 overflow-hidden">
        
        {/* Background Shield Outline */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Shield size={160} className="text-brand-lilac" strokeWidth={1} />
        </div>

        {/* Central Secure Environment */}
        <div className="relative z-20 w-14 h-14 bg-white rounded-2xl border-2 border-brand-lilac flex items-center justify-center shadow-xl shadow-brand-lilac/20">
             <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                 <Lock size={20} className="text-brand-primary" />
             </div>
             {/* Glowing Pulse */}
             <div className="absolute -inset-1 rounded-2xl bg-brand-lilac/20 -z-10 animate-pulse"></div>
        </div>

        {/* Incoming LLMs (Represented by Abstract Icons) */}
        
        {/* Gemini/Google */}
        <div className="absolute top-[25%] left-[20%] animate-float" style={{ animationDelay: '0s' }}>
             <div className="w-8 h-8 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center p-1.5">
                 <div className="w-full h-full bg-gradient-to-tr from-blue-400 to-red-400 rounded-md opacity-80"></div>
             </div>
             {/* Connection Line */}
             <div className="absolute top-full left-1/2 w-0.5 h-10 bg-brand-lilac/50 -translate-x-1/2 origin-top rotate-[135deg]"></div>
        </div>

        {/* Mistral/Open Models */}
        <div className="absolute top-[25%] right-[20%] animate-float" style={{ animationDelay: '1s' }}>
             <div className="w-8 h-8 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center p-1.5">
                 <div className="w-full h-full bg-gradient-to-tr from-yellow-400 to-orange-400 rounded-md opacity-80"></div>
             </div>
        </div>

        {/* Custom Models */}
        <div className="absolute bottom-[20%] left-[50%] -translate-x-1/2 animate-float" style={{ animationDelay: '2s' }}>
             <div className="w-8 h-8 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center">
                 <Cpu size={14} className="text-neutral-slate" />
             </div>
        </div>
        
        {/* Contextual Reasoning Waves */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-32 h-32 border border-brand-primary/10 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
             <div className="w-48 h-48 border border-brand-primary/5 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        </div>

    </div>
  );
};

const FeatureShowcase: React.FC = () => {
  return (
    <section id="platform" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Feature 1: Unified Work Graph (Replaces Chat) */}
        <FeatureCard 
          title="Unified Work Graph" 
          description="Connects activities across all tools into one intelligent graph — mapping how work, people, and data relate in real time."
        >
          <UnifiedWorkGraph />
        </FeatureCard>

        {/* Feature 2: Actionable Intelligence */}
        <FeatureCard 
          title="Actionable Intelligence" 
          description="Turns raw activity into daily, role-based and dept-based summaries and next-day plans — helping teams move from awareness to action."
        >
          <ActionableIntelGraphic />
        </FeatureCard>

        {/* Feature 3: Search */}
        <FeatureCard 
          title="Smatr Search" 
          description="Searches across all enterprise tools in one place, understanding context to deliver precise, source-linked results."
        >
          <SmartContextSearch />
        </FeatureCard>

        {/* Feature 4: Integrations */}
        <FeatureCard 
          title="Native Integrations" 
          description="Unifies your tool ecosystem."
        >
          <ConnectedHub />
        </FeatureCard>

        {/* Feature 5: Enterprise AI */}
        <FeatureCard 
          title="Enterprise AI" 
          description="Unifies best-of-class LLMs in one secure environment— enabling contextual reasoning, answers, and insights at scale."
        >
          <EnterpriseAIGraphic />
        </FeatureCard>

      </div>
    </section>
  );
};

export default FeatureShowcase;
