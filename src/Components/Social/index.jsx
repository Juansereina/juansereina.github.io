import React from "react";
import styles from "./social.scss";
import SocialIcon from "./icon";

const iconsData = [
  {
    href: "https://www.linkedin.com/in/Juansereina",
    name: "linkedin"
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

const Social = ({ className }) => (
  <div className={`${styles.root} ${className}`}>
    {iconsData.map((icon, index) => <SocialIcon key={index + icon.name} {...icon} styles={styles.icon} />)}
  </div>
);

export default Social;
