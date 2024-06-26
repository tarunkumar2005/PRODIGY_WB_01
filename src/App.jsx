import React from 'react';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <section id="home" className="h-screen bg-green-100 flex items-center justify-center">
          <h2 className="text-4xl">Home Section</h2>
        </section>
        <section id="about" className="h-screen bg-red-100 flex items-center justify-center">
          <h2 className="text-4xl">About Section</h2>
        </section>
        <section id="services" className="h-screen bg-green-100 flex items-center justify-center">
          <h2 className="text-4xl">Services Section</h2>
        </section>
        <section id="contact" className="h-screen bg-red-100 flex items-center justify-center">
          <h2 className="text-4xl">Contact Section</h2>
        </section>
      </div>
    </div>
  );
}

export default App;