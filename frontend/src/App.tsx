import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomizationPrompt from './components/CustomizationPrompt';

export default function App() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-snow">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />

      <CustomizationPrompt
        open={showPrompt}
        onClose={() => setShowPrompt(false)}
      />
    </div>
  );
}
