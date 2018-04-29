import React from "react";
import FontAwesome from "react-fontawesome";
import styles from "./social.scss";
import SocialIcon from "./icon";
const defaultStyleIcon = `${styles.icon} hvr-forward`;

const Social = () => (
  <div className={styles.root}>
    <SocialIcon
      href="https://www.linkedin.com/in/juansereina/"
      name="linkedin"
      styles={defaultStyleIcon}
    />
    <SocialIcon
      href="https://www.behance.net/Juansereina"
      name="behance"
      styles={defaultStyleIcon}
    />
    <SocialIcon
      href="https://github.com/Juansereina"
      name="github"
      styles={defaultStyleIcon}
    />
    <SocialIcon
      href="https://twitter.com/Juanse2296"
      name="twitter"
      styles={defaultStyleIcon}
    />
  </div>
);

export default Social;
