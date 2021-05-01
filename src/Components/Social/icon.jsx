import React from "react";
import FontAwesome from "react-fontawesome";

const SocialIcon = ({ name, styles, href }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer" title={name}>
      <FontAwesome name={name} className={styles} />
    </a>
  </li>
);

export default SocialIcon;
