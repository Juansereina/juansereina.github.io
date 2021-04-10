import React from 'react';
import { Helmet } from 'react-helmet';

const Links = () => (
  <Helmet>
    <link rel="preconnect stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
    <link rel="manifest" href="manifest.json" />
    <link rel="alternate" hreflang="en" href="https://juansereina.github.io" />
    <link rel="canonical" href="https://juansereina.github.io"/>
  </Helmet>
);

export default Links;
