import React from 'react';
import { Helmet } from 'react-helmet';

const Links = () => (
  <Helmet>
    <link rel="apple-touch-icon" sizes="180x180" href="./assets/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="./assets/favicons/favicon-16x16.png" />
    <link rel="manifest" href="./assets/favicons/manifest.json" />
    <link rel="mask-icon" href="./assets/favicons/safari-pinned-tab.svg" color="#5bbad5" />
  </Helmet>
);

export default Links;