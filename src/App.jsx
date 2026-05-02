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
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <TopBar />
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="stats"><Stats /></section>
        <section id="about"><About /></section>
        <section id="tours"><Tours /></section>
        <section id="offers"><Offers /></section>
        <section id="features"><Features /></section>
        <section id="counters"><Counters /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="blogs"><Blogs /></section>
        <section id="instagram"><InstagramFeed /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
