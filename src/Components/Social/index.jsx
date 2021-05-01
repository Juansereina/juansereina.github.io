import React from "react";
import { FormattedMessage } from 'react-intl';
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
  <FormattedMessage id="nav.contact">
    {
      text => <ul className={`${styles.root} ${className}`} aria-label={text}>
                {iconsData.map((icon, index) => <SocialIcon key={index + icon.name} {...icon} styles={styles.icon} />)}
             </ul>
    }
  </FormattedMessage>
);

export default Social;
