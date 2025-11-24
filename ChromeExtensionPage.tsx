{/* --- HERO SECTION --- */}
  <header className="relative overflow-hidden pt-16 pb-24 text-center">
    {/* Background Accents */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lilac/30 rounded-full blur-[120px] -z-10"></div>
    
    <div className="max-w-4xl mx-auto px-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white border border-brand-lilac shadow-sm">
        <Chrome size={14} className="text-brand-primary" />
        <span className="text-xs font-bold text-brand-primary uppercase tracking-wide">New Release 2.0</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-display font-bold text-neutral-charcoal mb-6 leading-tight tracking-tight">
        Your AI Workspace <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Inside the Browser</span>
      </h1>
      
      <p className="text-xl text-neutral-slate max-w-2xl mx-auto mb-10 leading-relaxed">
        Integrate leading LLMs, work across your apps, and get automatic session summaries—without leaving your tabs.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <button className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold rounded-full shadow-xl shadow-brand-primary/20 transition-all hover:-translate-y-1 flex items-center gap-2">
          <Chrome size={20} />
          Add to Chrome
        </button>
        <button className="px-8 py-4 bg-white hover:bg-gray-50 border border-gray-200 text-neutral-charcoal font-semibold rounded-full shadow-sm transition-all hover:-translate-y-1 flex items-center gap-2">
          <Zap size={20} className="text-brand-secondary" />
          Watch 60-sec Demo
        </button>
      </div>

      <div className="pt-8 border-t border-gray-200/60">
        <p className="text-xs font-bold text-neutral-slate uppercase tracking-widest mb-4">Loved by teams and makers at</p>
        <div className="flex justify-center gap-8 opacity-50 grayscale">
           {/* Placeholder Logos */}
           <div className="h-6 w-20 bg-neutral-slate/20 rounded"></div>
           <div className="h-6 w-20 bg-neutral-slate/20 rounded"></div>
           <div className="h-6 w-20 bg-neutral-slate/20 rounded"></div>
           <div className="h-6 w-20 bg-neutral-slate/20 rounded"></div>
        </div>
      </div>
    </div>
  </header>

  {/* --- CORE VALUE PROPS (Bento Grid) --- */}
  <Section>
    <h2 className="text-3xl font-display font-bold text-center mb-16">
      Why move to Smatr?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* 1. LLMs */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
        <div className="w-12 h-12 bg-brand-lilac/20 rounded-xl flex items-center justify-center mb-6 text-brand-primary">
          <BrainCircuit size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">Best-in-Class LLMs</h3>
        <p className="text-neutral-slate mb-4 text-sm leading-relaxed">
          Choose GPT-4, Claude 3, Gemini, or Grok per task. One-click switch, saved preferences, and unified prompt history.
        </p>
        <div className="flex gap-2 mt-auto pt-4 border-t border-gray-50">
           <span className="text-[10px] font-mono bg-gray-100 px-2 py-1 rounded">GPT-4</span>
           <span className="text-[10px] font-mono bg-gray-100 px-2 py-1 rounded">Claude</span>
           <span className="text-[10px] font-mono bg-gray-100 px-2 py-1 rounded">Gemini</span>
        </div>
      </div>

      {/* 2. Integrations */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
        <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-6 text-brand-teal">
          <Layers size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">Native App Integrations</h3>
        <p className="text-neutral-slate mb-4 text-sm leading-relaxed">
          Connect Slack, Notion, and GitHub to read, write, and act directly from the browser sidebar. No context switching.
        </p>
        <div className="flex gap-3 text-neutral-slate/60">
           <Slack size={16} /> <Layout size={16} /> <Github size={16} />
        </div>
      </div>

      {/* 3. Analytics */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
        <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center mb-6 text-brand-secondary">
          <Database size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">Private Analytics</h3>
        <p className="text-neutral-slate mb-4 text-sm leading-relaxed">
          On-device insights on your browsing habits. View usage patterns, time on sites, and get optional focus nudges.
        </p>
      </div>

      {/* 4. Smatr Mode (Wide) */}
      <div className="md:col-span-2 bg-gradient-to-br from-brand-primary to-[#00124a] p-8 rounded-3xl shadow-lg text-white relative overflow-hidden">
         <div className="relative z-10 max-w-md">
            <div className="flex items-center gap-2 mb-4 text-brand-lilac">
               <Zap size={20} />
               <span className="font-bold tracking-wider text-xs uppercase">Smatr Mode</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Background Session Summaries</h3>
            <p className="text-brand-lilac/80 mb-6 leading-relaxed">
               Runs in the background while you research. Produces a hierarchical summary at session end; instantly export to Notion or auto-convert to slides.
            </p>
            <button className="text-xs font-bold bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg transition-colors">
               Try Smatr Mode
            </button>
         </div>
         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-48 bg-white/10 backdrop-blur-sm rounded-l-xl border-l border-t border-b border-white/10 p-4 transform translate-x-8 hover:translate-x-4 transition-transform duration-500">
            <div className="h-2 w-1/3 bg-white/20 rounded mb-3"></div>
            <div className="space-y-2">
               <div className="h-1.5 w-full bg-white/10 rounded"></div>
               <div className="h-1.5 w-5/6 bg-white/10 rounded"></div>
               <div className="h-1.5 w-4/5 bg-white/10 rounded"></div>
            </div>
         </div>
      </div>

      {/* 5. Smatr Plan */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
        <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center mb-6 text-yellow-600">
          <StickyNote size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3">Smatr Plan</h3>
        <p className="text-neutral-slate text-sm leading-relaxed">
          Minimal sticky notes. Pin to window, drag anywhere, and turn notes into Jira tasks instantly.
        </p>
      </div>
    </div>
  </Section>

  {/* --- HOW IT WORKS --- */}
  <Section className="bg-white rounded-3xl my-12">
    <div className="text-center mb-12">
       <h2 className="text-3xl font-display font-bold text-neutral-charcoal">How it works</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
       <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10"></div>
       
       {[
         { title: "Install & Pick LLM", desc: "Add to Chrome and select your preferred model (GPT, Claude, etc)." },
         { title: "Connect Apps", desc: "Auth with Slack, Notion, or GitHub to enable sidebar actions." },
         { title: "Start Session", desc: "Activate Smatr Mode. Browse normally. We summarize everything." }
       ].map((step, idx) => (
         <div key={idx} className="flex flex-col items-center">
            <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg shadow-brand-primary/20">
              {idx + 1}
            </div>
            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
            <p className="text-neutral-slate text-sm max-w-xs">{step.desc}</p>
         </div>
       ))}
    </div>
  </Section>

  {/* --- SECURITY --- */}
  <Section>
     <div className="bg-neutral-cloud border border-gray-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
           <div className="flex items-center gap-2 mb-4 text-brand-teal">
              <Lock size={20} />
              <span className="font-bold uppercase tracking-wide text-xs">Security First</span>
           </div>
           <h2 className="text-3xl font-display font-bold mb-4">Your data stays yours.</h2>
           <p className="text-neutral-slate leading-relaxed mb-6">
              We utilize encryption in transit and at rest. OAuth ensures we never see your passwords. Granular permissions allow you to control exactly what Smatr sees. Disconnect anytime.
           </p>
           <a href="#" className="text-brand-primary font-bold text-sm hover:underline">Read Security Whitepaper &rarr;</a>
        </div>
        <div className="w-full md:w-1/3 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
           <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
              <span className="text-xs font-bold text-neutral-charcoal">Permissions</span>
              <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Active</span>
           </div>
           <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-neutral-slate">
                 <Check size={12} className="text-brand-teal" /> Summarize active tab
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-slate">
                 <Check size={12} className="text-brand-teal" /> Read Slack context
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-slate">
                 <Check size={12} className="text-brand-teal" /> Write to Notion
              </div>
           </div>
        </div>
     </div>
  </Section>

  {/* --- PRICING --- */}
  <Section id="pricing">
     <div className="text-center mb-12">
        <h2 className="text-4xl font-display font-bold text-neutral-charcoal mb-4">Simple Pricing</h2>
        <p className="text-neutral-slate">Flexible plans that scale with your workflow.</p>
     </div>
     
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        
        {/* Free */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col hover:shadow-md transition-all">
           <div className="mb-6">
              <h3 className="text-lg font-bold text-neutral-charcoal">Free</h3>
              <div className="text-3xl font-bold mt-2">$0 <span className="text-sm font-normal text-neutral-slate">/mo</span></div>
           </div>
           
           <div className="flex-grow space-y-4 mb-8">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-wide">Core Features</div>
              <ul className="space-y-2">
                 <li className="text-xs text-neutral-slate flex items-center gap-2"><Check size={12} /> Smatr Tabs</li>
                 <li className="text-xs text-neutral-slate flex items-center gap-2"><Check size={12} /> 1 Integration</li>
                 <li className="text-xs text-neutral-slate flex items-center gap-2"><Check size={12} /> 1 Smatr Slide/mo</li>
                 <li className="text-xs text-neutral-slate flex items-center gap-2"><Check size={12} /> 1 Smatr Mode/mo</li>
              </ul>

              <div className="h-px bg-gray-100 my-4"></div>

              <div className="text-xs font-bold text-brand-secondary uppercase tracking-wide">Credits</div>
              <ul className="space-y-2">
                 <li className="text-xs text-neutral-charcoal font-bold">50 Basic Credits</li>
                 <li className="text-[10px] text-neutral-slate pl-1">GPT 5-mini, Claude Haiku, Gemini Flash</li>
              </ul>
           </div>
           
           <button className="w-full py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-neutral-charcoal hover:bg-gray-50 transition-colors">Add to Chrome</button>
        </div>

        {/* Smatr ($8) */}
        <div className="bg-brand-primary p-6 rounded-2xl border border-brand-primary shadow-xl text-white relative flex flex-col overflow-hidden transform lg:-translate-y-4">
           <div className="absolute top-0 right-0 bg-brand-secondary text-[9px] font-bold px-2 py-1 rounded-bl-lg">POPULAR</div>
           <div className="mb-6">
              <h3 className="text-lg font-bold">Smatr</h3>
              <div className="text-3xl font-bold mt-2">$8 <span className="text-sm font-normal text-brand-lilac">/mo</span></div>
           </div>
           
           <div className="flex-grow space-y-4 mb-8">
              <div className="text-xs font-bold text-brand-lilac uppercase tracking-wide">Everything in Free +</div>
              <ul className="space-y-2">
                 <li className="text-xs text-brand-lilac/90 flex items-center gap-2"><Check size={12} /> 4 Integrations</li>
                 <li className="text-xs text-brand-lilac/90 flex items-center gap-2"><Check size={12} /> Basic Analytics</li>
              </ul>

              <div className="h-px bg-white/10 my-4"></div>

              <div className="text-xs font-bold text-brand-secondary uppercase tracking-wide">Credits</div>
              <ul className="space-y-3">
                 <li>
                    <div className="text-xs font-bold text-white">3K Basic Credits</div>
                    <div className="text-[10px] text-brand-lilac/70">GPT 5-mini, Haiku...</div>
                 </li>
                 <li>
                    <div className="text-xs font-bold text-brand-teal">200 Smatr Credits</div>
                    <div className="text-[10px] text-brand-lilac/70">Gemini 2.5 Pro, GPT 5.1</div>
                 </li>
                 <li>
                    <div className="text-xs font-bold text-brand-coral">50 Plus Credits</div>
                    <div className="text-[10px] text-brand-lilac/70">For Smatr Mode & Slides</div>
                 </li>
              </ul>
           </div>
           
           <button className="w-full py-2.5 bg-white text-brand-primary rounded-xl text-sm font-bold hover:bg-brand-lilac transition-colors">Start Free Trial</button>
        </div>

        {/* Smatr+ ($28) */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col hover:shadow-md transition-all">
           <div className="mb-6">
              <h3 className="text-lg font-bold text-neutral-charcoal">Smatr+</h3>
              <div className="text-3xl font-bold mt-2">$28 <span className="text-sm font-normal text-neutral-slate">/mo</span></div>
           </div>
           
           <div className="flex-grow space-y-4 mb-8">
              <div className="text-xs font-bold text-brand-primary uppercase tracking-wide">Power Features</div>
              <ul className="space-y-2">
                 <li className="text-xs text-neutral-slate flex items-center gap-2"><Check size={12} /> 10 Integrations</li>
                 <li className="text-xs text-neutral-slate flex items-center gap-2"><Check size={12} /> Advanced Analytics</li>
              </ul>

              <div className="h-px bg-gray-100 my-4"></div>

              <div className="text-xs font-bold text-brand-secondary uppercase tracking-wide">Credits</div>
              <ul className="space-y-3">
                 <li className="text-xs text-neutral-charcoal font-bold flex items-center gap-1"><Star size={10} className="fill-brand-yellow text-brand-yellow" /> Unlimited Basic</li>
                 <li className="text-xs text-neutral-charcoal font-bold flex items-center gap-1"><Star size={10} className="fill-brand-teal text-brand-teal" /> Unlimited Smatr</li>
                 <li>
                    <div className="text-xs font-bold text-brand-coral">150 Plus Credits</div>
                    <div className="text-[10px] text-neutral-slate">Heavy Smatr Mode Usage</div>
                 </li>
              </ul>
           </div>
           
           <button className="w-full py-2.5 border border-brand-secondary text-brand-secondary rounded-xl text-sm font-bold hover:bg-brand-secondary/5 transition-colors">Upgrade to Plus</button>
        </div>

        {/* Smatr Pro */}
        <div className="bg-neutral-charcoal p-6 rounded-2xl border border-neutral-charcoal shadow-lg flex flex-col text-white hover:shadow-xl transition-all">
           <div className="mb-6">
              <h3 className="text-lg font-bold text-white">Smatr Pro</h3>
              <div className="text-xl font-bold mt-2 pt-2">Contact Us</div>
           </div>
           
           <div className="flex-grow space-y-4 mb-8">
              <div className="text-xs font-bold text-brand-lilac uppercase tracking-wide">Enterprise Grade</div>
              <ul className="space-y-2">
                 <li className="text-xs text-gray-300 flex items-center gap-2"><ShieldCheck size={12} /> Unlimited Integrations</li>
                 <li className="text-xs text-gray-300 flex items-center gap-2"><ShieldCheck size={12} /> Enterprise Support</li>
                 <li className="text-xs text-gray-300 flex items-center gap-2"><ShieldCheck size={12} /> Compliances (SSO/SOC2)</li>
              </ul>

              <div className="h-px bg-white/10 my-4"></div>

              <div className="text-xs font-bold text-brand-secondary uppercase tracking-wide">Credits</div>
              <ul className="space-y-3">
                 <li className="text-xs text-white font-bold">Unlimited Everything</li>
                 <li>
                    <div className="text-xs font-bold text-brand-coral">1000 Plus Credits</div>
                    <div className="text-[10px] text-gray-400">Massive Scale Mode/Slides</div>
                 </li>
              </ul>
           </div>
           
           <button className="w-full py-2.5 bg-white/10 border border-white/20 text-white rounded-xl text-sm font-bold hover:bg-white/20 transition-colors">Contact Sales</button>
        </div>

     </div>
  </Section>

  {/* --- SOCIAL PROOF --- */}
  <Section className="text-center">
     <h2 className="text-2xl font-display font-bold mb-10">Used by founders and operators</h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { quote: "Cuts my tab-hopping by 40%. Being able to answer Slack from the browser sidebar is a game changer.", name: "Alex R.", role: "Product Manager" },
          { quote: "Smatr Mode summaries saved me hours during my last thesis research sprint.", name: "Sarah K.", role: "PhD Candidate" },
          { quote: "Finally, I can use Claude contextually without copy-pasting entire webpages.", name: "David L.", role: "Founder" },
        ].map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left">
             <p className="text-neutral-slate text-sm mb-4">"{t.quote}"</p>
             <div>
                <div className="font-bold text-neutral-charcoal text-sm">{t.name}</div>
                <div className="text-xs text-brand-secondary">{t.role}</div>
             </div>
          </div>
        ))}
     </div>
  </Section>

  {/* --- FAQ --- */}
  <Section>
     <h2 className="text-2xl font-display font-bold text-center mb-8">Frequently Asked Questions</h2>
     <div className="max-w-2xl mx-auto space-y-4">
        {[
           "Which LLMs are supported?",
           "Do I need accounts for each LLM?",
           "How does Smatr Mode handle sensitive pages?",
           "Is there a team/enterprise plan?"
        ].map((q, i) => (
           <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 cursor-pointer flex justify-between items-center group hover:border-brand-lilac">
              <span className="font-medium text-sm">{q}</span>
              <ChevronDown size={16} className="text-gray-400 group-hover:text-brand-primary" />
           </div>
        ))}
     </div>
  </Section>

  {/* --- FOOTER CTA --- */}
  <Section className="text-center pb-32">
     <h2 className="text-3xl font-display font-bold mb-6">Ready to organize your browser?</h2>
     <button className="px-8 py-4 bg-brand-primary text-white font-semibold rounded-full shadow-xl hover:-translate-y-1 transition-all inline-flex items-center gap-2">
        <Chrome size={20} /> Add to Chrome
     </button>
  </Section>

</div>