import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Tours from './components/Tours';
import Offers from './components/Offers';
import Features from './components/Features';
import Counters from './components/Counters';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Tours />
        <Offers />
        <Features />
        <Counters />
        <Testimonials />
        <Blogs />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}

export default App;
