import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = () => (
  <div>
    <Helmet>
      <link rel="apple-touch-icon" sizes="180x180" href="./assets/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./assets/favicons/favicon-16x16.png" />
      <link rel="manifest" href="./assets/favicons/manifest.json" />
      <link rel="mask-icon" href="./assets/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      <meta charSet="UTF-8" />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:title" content="Juan Sebastian Reina" />
      <meta property="og:type" content="Interactive.WebDeveloper" />
      <meta property="og:url" content="https://juansebastianreina.herokuapp.com" />
      <meta property="og:image" content="../../assets/Images/REINA.png" />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      <meta property="og:image:alt" content="Juan Sebastian Interactive Media Designer" />
      <meta
        property="og:description"
        content=" Juan Sebastian interactive media designer
                  passionate about the development of interactive
                  elements, design and dance :)"
      />
      <meta property="og:locale" content="es_CO" />
    </Helmet>
  </div>
);

export default Meta;
