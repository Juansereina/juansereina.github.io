import React from 'react';
import Nav from '../Nav';
import Hero from '../Hero';
import About from '../About';
import Footer from '../Footer';
import Work from '../Work';

const Home = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <About />
      <Work />
    </main>
    <Footer />
  </>
);

export default Home;
