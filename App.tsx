import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { PricingAndFaq } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f2f2f0] selection:bg-black/10">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <PricingAndFaq />
      </main>
      <Footer />
    </div>
  );
}

export default App;