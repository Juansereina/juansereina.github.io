import React from "react";
import Nav from "../Nav";
import Hero from "../Hero";
import About from "../About";
import Footer from "../Footer";
import Work from "../Work";
import BackToTop from "../BackToTop";
import DarkMode from "../DarkMode";
import styles from './styles.scss';

const Home = () => (
  <>
    <Nav />
    <Hero id="hero" />
    <main>
      <About id="about" />
      <Work id="work" />
    </main>
    <Footer id="contact" />
    <div className={styles.buttons}>
      <BackToTop />
      <DarkMode />
    </div>
  </>
);

export default Home;
