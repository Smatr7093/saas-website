import React from 'react';
import { Cpu, ShieldCheck, BrainCircuit } from 'lucide-react';

const ValueProps: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="text-brand-primary" size={24} />,
      title: "AI choice, not AI compromise.",
      description: "Smatr supports top-tier LLMs — including Gemini, Mistral, and Google. Select varied tools to address intelligence the way your company needs."
    },
    {
      icon: <ShieldCheck className="text-brand-teal" size={24} />,
      title: "Secure by Default.",
      description: "Smatr is built with strict data privacy, end-to-end security, and full compliance at its core — so your company's intelligence stays in your control."
    },
    {
      icon: <BrainCircuit className="text-brand-secondary" size={24} />,
      title: "Context-Aware AI",
      description: "Smatr connects with your tools, activity, and knowledge so it can respond with context — not generic outputs."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          
          {/* Left Side Text */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-charcoal mb-4 leading-tight">
              The AI your company <br/> actually needed
            </h2>
            <p className="text-neutral-slate text-lg leading-relaxed">
              Smatr records employee intent across every tool and unifies it into one intelligent layer — so your team can use work AI anytime.
            </p>
          </div>

          {/* Right Side List */}
          <div className="lg:w-2/3 flex flex-col gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-5 p-5 bg-neutral-cloud rounded-2xl border border-gray-100/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-lilac/50">
                <div className="shrink-0 mt-1">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    idx === 0 ? 'bg-brand-lilac/30' : idx === 1 ? 'bg-brand-teal/10' : 'bg-brand-secondary/10'
                  }`}>
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-charcoal mb-1 flex items-center gap-2">
                    {idx === 0 && <span className="text-brand-primary text-xs">●</span>} 
                    {idx === 1 && <span className="text-brand-teal text-xs">◆</span>}
                    {idx === 2 && <span className="text-brand-secondary text-xs">▲</span>}
                    {feature.title}
                  </h3>
                  <p className="text-neutral-slate leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProps;