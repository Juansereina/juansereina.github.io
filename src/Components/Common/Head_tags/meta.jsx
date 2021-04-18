import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = () => (
  <Helmet>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta property="og:title" content="Juan Sebastián Reina" />
    <meta property="og:type" content="Portfolio" />
    <meta property="og:url" content="https://juansereina.com" />
    <meta property="og:image" content="" />
    <meta property="og:image:width" content="500" />
    <meta property="og:image:height" content="500" />
    <meta property="og:image:alt" content="Juan Sebastian - FrontEnd developer" />
    <meta property="og:description" content="Juansereina interactive media designer and FrontEnd developer" />
    <meta property="og:locale" content="es-CO" />
    <meta name="theme-color" content="#5439dc"/>
  </Helmet>
);

export default Meta;
