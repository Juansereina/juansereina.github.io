import React from "react";
import photo from "../../assets/Images/photo.png";
import styles from './about.scss'
import { Animated } from "react-animated-css";

const About = () => (
  <div className={styles.root}>
  <Animated  animationIn="zoomInDown" animationOut="fadeOut" isVisible={true}>
    <img className={styles.photo} src={photo} alt="Juasereina" />
    </Animated>
    <Animated  animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
    <p className={styles.text} >Hello, 
    <strong className={styles.strongText} > how are you</strong>? 
    I want to tell you that I´m <strong className={styles.strongText} >doing new things </strong> 
    and <strong className={styles.strongText} >creating with technology</strong>. 
    <a href="http://nbviewer.jupyter.org/github/Juansereina/juansereina.github.io/blob/development/src/assets/cv.pdf" 
    className={styles.link} target="_blank" rel="noopener noreferrer" > Here </a>
    is my cv if you want to know me a little bit more. 
    If something has <strong className={styles.strongText} >interested </strong> 
    you or if you have an <strong className={styles.strongText} >idea</strong>, 
    write me!</p>
  </Animated>
  
  </div>
);

export default About;
