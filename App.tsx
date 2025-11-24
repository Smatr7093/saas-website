
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import FeatureShowcase from './components/FeatureShowcase';
import Footer from './components/Footer';
import ChromeExtensionPage from './components/ChromeExtensionPage';

type Page = 'home' | 'chrome-extension';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-lilac selection:text-brand-primary">
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <ValueProps />
            <FeatureShowcase />
          </>
        ) : (
          <ChromeExtensionPage />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
