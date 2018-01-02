import React from 'react';
import { Helmet } from 'react-helmet';

const description = 'Juan Sebastian interactive media designer passionate about the development of interactive elements, design and dance :)';
const Meta = () => (
  <Helmet>
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Juan Sebastian Reina" />
    <meta property="og:type" content="Interactive.WebDeveloper" />
    <meta property="og:url" content="https://juansebastianreina.herokuapp.com" />
    <meta property="og:image" content="../../assets/Images/REINA.png" />
    <meta property="og:image:width" content="500" />
    <meta property="og:image:height" content="500" />
    <meta property="og:image:alt" content="Juan Sebastian Interactive Media Designer" />
    <meta
      property="og:description"
      content={description}
    />
    <meta property="og:locale" content="es_CO" />
  </Helmet>
);

export default Meta;
