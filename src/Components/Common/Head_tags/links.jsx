import React from 'react';
import { Helmet } from 'react-helmet';

const Links = () => (
  <Helmet>
    <link rel="manifest" href="manifest.json" />
    <link rel="alternate" hreflang="en" href="https://juansereina.github.io" />
    <link rel="canonical" href="https://juansereina.github.io"/>
  </Helmet>
);

export default Links;
