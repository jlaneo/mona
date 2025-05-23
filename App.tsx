
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ManifestoSection from './components/ManifestoSection';
import RitualSection from './components/RitualSection';
import PhilosophySection from './components/PhilosophySection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-mona-ivory text-mona-soft-black antialiased overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ManifestoSection />
        <RitualSection />
        <PhilosophySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;