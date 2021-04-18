import React from "react";
import FontAwesome from "react-fontawesome";

const SocialIcon = ({ name, styles, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" title={name}>
    <FontAwesome name={name} className={styles} />
  </a>
);

export default SocialIcon;
