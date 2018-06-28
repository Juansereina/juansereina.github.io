import React from "react";
import styles from "./social.scss";
import SocialIcon from "./icon";

const iconsData = [
  {
    href: "https://www.linkedin.com/in/Juansereina",
    name: "linkedin"
  },
  {
    href: "https://www.behance.net/Juansereina",
    name: "behance"
  },
  {
    href: "https://github.com/Juansereina",
    name: "github"
  },
  {
    href: "https://twitter.com/Juanse_reina",
    name: "twitter"
  }
];

const Social = () => (
  <div className={styles.root}>
    {iconsData.map((icon, index) => <SocialIcon key={index + icon.name} {...icon} styles={`${styles.icon} hvr-forward`} />)}
  </div>
);

export default Social;
