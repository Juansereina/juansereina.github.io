import React, { Component } from "react";
import { Animated } from "react-animated-css";
import PropTypes from "prop-types";
import Styles from "./scss/logo.scss";
import Hover from "../Common/hover.scss";

const propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const Section = ({ animation, img, description }) => (
  <Animated animationIn={animation} animationOut="fadeOut" isVisible={true}>
    <img
      className={`${Styles.image} ${animation} hvr-wobble-top`}
      src={img}
      alt={description}
    />
  </Animated>
);

Section.propTypes = propTypes;

export default Section;
