import React from "react";
import { IntlProvider, FormattedMessage } from 'react-intl';
import Home from /* webpackPreload: true */ "../Components/Home";
import Meta from "../Components/Common/Head_tags";
import locale_en from "../translations/en.json";
import locale_es from "../translations/es.json";
import './styles.scss';

const data = {
  'es': locale_es,
  'en': locale_en
};


const App = () => {
  const language = navigator.language.split(/[-_]/)[0];

  return  (
    <IntlProvider locale={language} messages={data[language]}>
      <Meta />
      <Home />
    </IntlProvider>
  );
};

export default App;
