import React from 'react';
import Layout from './components/Layout.jsx';
import Hero from './components/Hero.jsx';
import Schedule from './components/Schedule.jsx';
import Showcase from './components/Showcase.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white antialiased selection:bg-cyan-500/30 selection:text-white">
      <Layout>
        <Hero />
        <Schedule />
        <Showcase />
      </Layout>
    </div>
  );
}

export default App;
