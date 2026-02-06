import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Bio } from './components/Bio';
import { Stats } from './components/Stats';
import { SkillsGrid } from './components/SkillsGrid';
import { FeaturedVisual } from './components/FeaturedVisual';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Bio />
        <Stats />
        <SkillsGrid />
        <FeaturedVisual />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;