import React from 'react';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Keys from './components/Keys';
import Navbar from './components/Navbar';
import Process from './components/Process';
import Services from './components/Services';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Keys />
      <Process />

      <Services />
      <ContactForm />
      <Footer />
    </>
  );
}
