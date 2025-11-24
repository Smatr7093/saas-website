import React from 'react';

// Icon Components
const GoogleDriveLogo = () => (
  <svg viewBox="0 0 87.3 78" className="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.6 66.85l25.3-43.8H82.7l-25.3 43.8H6.6z" fill="#0066DA"/>
    <path d="M23.1 23.05l24.9 43.05h-49.8L18.2 31.55l4.9-8.5z" fill="#00AC47"/>
    <path d="M57.4 66.1H23.1l25.4-43.05h29.9L57.4 66.1z" fill="#EA4335"/>
    <path d="M23.1 23.05L48.5 66.1H57.4L32 23.05H23.1z" fill="#2684FC"/>
    <path d="M6.6 66.85L23.1 66.1l-2.45-4.3L18.2 66.85H6.6z" fill="#00832D"/>
    <path d="M82.7 23.05L57.4 66.1l4.9 8.45 33.1-51.5H82.7z" fill="#FFBA00"/>
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.042 15.123a2.52 2.52 0 1 0 0-5.04 2.52 2.52 0 0 0 0 5.04zM5.042 16.596a2.52 2.52 0 1 0 5.04 0v6.034a2.52 2.52 0 1 0-5.04 0v-6.034zM8.609 5.042a2.52 2.52 0 1 0 5.04 0 2.52 2.52 0 0 0-5.04 0zM7.134 5.042a2.52 2.52 0 1 0 0 5.04h-6.034a2.52 2.52 0 1 0 0-5.04h6.034z" fill="#E01E5A"/>
    <path d="M18.958 8.877a2.52 2.52 0 1 0 0 5.04 2.52 2.52 0 0 0 0-5.04zM18.958 7.404a2.52 2.52 0 1 0-5.04 0V1.37a2.52 2.52 0 1 0 5.04 0v6.034zM15.391 18.958a2.52 2.52 0 1 0-5.04 0 2.52 2.52 0 0 0 5.04 0zM16.866 18.958a2.52 2.52 0 1 0 0-5.04h6.034a2.52 2.52 0 1 0 0 5.04h-6.034z" fill="#36C5F0"/>
    <path d="M8.609 5.042a2.52 2.52 0 1 0 5.04 0 2.52 2.52 0 0 0-5.04 0z" fill="#2EB67D"/>
    <path d="M18.958 8.877a2.52 2.52 0 1 0 0 5.04 2.52 2.52 0 0 0 0-5.04z" fill="#ECB22E"/>
  </svg>
);

const SalesforceLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M16.6 5.4C16 3.3 14.1 1.8 11.9 1.8C9.5 1.8 7.5 3.5 7.1 5.8C4.2 6.1 2 8.6 2 11.6C2 14.9 4.7 17.6 8 17.6H16.5C19.5 17.6 22 15.1 22 12.1C22 9.1 19.6 6.6 16.6 6.6V5.4Z" fill="#00A1E0"/>
  </svg>
);

const ZoomLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg">
    <path fill="#2D8CFF" d="M5 8C3.34315 8 2 9.34315 2 11V17C2 18.6569 3.34315 20 5 20H13C14.6569 20 16 18.6569 16 17V11C16 9.34315 14.6569 8 13 8H5Z"/>
    <path fill="#2D8CFF" d="M22 10L17 12V16L22 18V10Z"/>
  </svg>
);

const TeamsLogo = () => (
   <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg">
     <rect x="2" y="6" width="14" height="12" rx="1" fill="#5059C9"/>
     <path d="M11.5 11.5H7.5V14.5H5.5V11.5H1.5V9.5H5.5V6.5H7.5V9.5H11.5V11.5Z" fill="white"/>
     <path d="M16 8C16 6.89543 16.8954 6 18 6C19.1046 6 20 6.89543 20 8V16C20 17.1046 19.1046 18 18 18C16.8954 18 16 17.1046 16 16V8Z" fill="#5059C9"/>
     <circle cx="18" cy="9" r="2" fill="white" opacity="0.8"/>
   </svg>
);

const JiraLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.1 2.1L2.3 10.9C1.4 11.8 1.4 13.2 2.3 14.1L11.1 22.9C11.5 23.3 12.2 23.3 12.6 22.9L13.4 22.1C13.8 21.7 13.8 21 13.4 20.6L6.4 13.6H20.9C21.5 13.6 21.9 13.2 21.9 12.6V11.4C21.9 10.8 21.5 10.4 20.9 10.4H6.4L13.4 3.4C13.8 3 13.8 2.3 13.4 1.9L12.6 1.1C12.2 0.7 11.5 0.7 11.1 1.1V2.1Z" fill="#0052CC" display="none"/>
    <path d="M11.57 0.89L5.84 6.62C5.31 7.15 5.31 8.01 5.84 8.54L11.57 14.27V0.89Z" fill="#2684FF"/>
    <path d="M12.55 13.05L6.82 18.78C6.29 19.31 6.29 20.17 6.82 20.7L12.55 26.43V13.05Z" fill="#0052CC" transform="translate(0 -2.43)"/>
    <path d="M12.55 0.89L18.28 6.62C18.81 7.15 18.81 8.01 18.28 8.54L12.55 14.27V0.89Z" fill="#0052CC"/>
  </svg>
);

interface IntegrationIconProps {
  children: React.ReactNode;
  className: string;
  delay: string;
}

const IntegrationIcon = ({ children, className, delay }: IntegrationIconProps) => (
  <div className={`absolute p-4 md:p-5 bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-brand-lilac/30 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer z-20 ${className} ${delay}`}>
    {children}
  </div>
);

const Integrations: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-neutral-cloud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
         <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-4xl font-display font-bold text-neutral-charcoal mb-4">
              Native <span className="text-brand-primary relative inline-block">
                Integrations
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-secondary opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-neutral-slate text-lg">
              Smatr connects directly with your tools — code, docs, chat, tasks, meetings — capturing intent and context without extra setup.
            </p>
         </div>

         {/* Animated Integration Graph */}
         <div className="relative h-[450px] w-full max-w-5xl mx-auto flex items-center justify-center">
            
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-lilac/10 via-brand-secondary/5 to-brand-lilac/10 rounded-full blur-3xl opacity-50 -z-10 transform scale-75"></div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid meet">
                {/* Left Side Connections */}
                <path d="M400 250 C 300 250, 200 150, 150 120" stroke="#6c7a89" strokeWidth="1.5" fill="none" strokeDasharray="5,5" className="animate-pulse" />
                <path d="M400 250 C 350 250, 100 280, 80 300" stroke="#6c7a89" strokeWidth="1.5" fill="none" strokeDasharray="5,5" />
                <path d="M400 250 C 300 350, 200 400, 180 420" stroke="#6c7a89" strokeWidth="1.5" fill="none" strokeDasharray="5,5" />
                
                {/* Right Side Connections */}
                <path d="M400 250 C 500 250, 600 150, 650 120" stroke="#6c7a89" strokeWidth="1.5" fill="none" strokeDasharray="5,5" />
                <path d="M400 250 C 500 250, 700 280, 720 300" stroke="#6c7a89" strokeWidth="1.5" fill="none" strokeDasharray="5,5" className="animate-pulse" />
                <path d="M400 250 C 500 350, 600 400, 620 420" stroke="#6c7a89" strokeWidth="1.5" fill="none" strokeDasharray="5,5" />
            </svg>

            {/* Central Hub */}
            <div className="relative z-30 w-24 h-24 bg-brand-primary rounded-3xl flex items-center justify-center shadow-2xl shadow-brand-primary/20 border-4 border-white ring-1 ring-gray-100">
               <div className="text-white font-display font-bold text-3xl tracking-tight">S</div>
               {/* Ripples */}
               <div className="absolute inset-0 rounded-3xl border border-brand-secondary/40 animate-ping" style={{ animationDuration: '3s' }}></div>
               <div className="absolute -inset-4 rounded-[2rem] border border-brand-secondary/20 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
            </div>

            {/* Orbiting Logos */}
            
            {/* Top Left */}
            <IntegrationIcon className="top-[15%] left-[15%] md:left-[20%]" delay="animate-float">
               <GoogleDriveLogo />
            </IntegrationIcon>

            {/* Mid Left */}
            <IntegrationIcon className="top-[50%] left-[5%] md:left-[10%] -translate-y-1/2" delay="animate-float-delayed">
               <JiraLogo />
            </IntegrationIcon>

            {/* Bottom Left */}
            <IntegrationIcon className="bottom-[15%] left-[15%] md:left-[20%]" delay="animate-float">
               <SalesforceLogo />
            </IntegrationIcon>

             {/* Top Right */}
             <IntegrationIcon className="top-[15%] right-[15%] md:right-[20%]" delay="animate-float-delayed">
               <SlackLogo />
            </IntegrationIcon>

            {/* Mid Right */}
            <IntegrationIcon className="top-[50%] right-[5%] md:right-[10%] -translate-y-1/2" delay="animate-float">
               <ZoomLogo />
            </IntegrationIcon>

            {/* Bottom Right */}
            <IntegrationIcon className="bottom-[15%] right-[15%] md:right-[20%]" delay="animate-float-delayed">
               <TeamsLogo />
            </IntegrationIcon>

         </div>
      </div>
    </section>
  );
};

export default Integrations;