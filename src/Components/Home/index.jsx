import React from "react";
import Nav from "../Nav";
import Hero from "../Hero";
import About from "../About";
import Footer from "../Footer";
import Work from "../Work";

const Home = () => (
  <>
    <Nav />
    <Hero id="hero" />
    <main>
      <About id="about" />
      <Work id="work" />
    </main>
    <Footer id="contact" />
  </>
);

export default Home;
