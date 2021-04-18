import React from "react";
import { IntlProvider, FormattedMessage } from 'react-intl';
import Home from /* webpackPreload: true */ "../Components/Home";
import Meta from "../Components/Common/Head_tags";
import locale_en from "../translations/en.json";
import locale_es from "../translations/es.json";
import './styles.scss';

const App = () => {
  const language = navigator.language.split(/[-_]/)[0];
  const isSpanish = language === 'es';
  const locale = isSpanish ? language : 'en';
  const messages = isSpanish ? locale_es : locale_en;

  return  (
    <IntlProvider locale={locale} messages={messages}>
      <Meta />
      <Home />
    </IntlProvider>
  );
};

export default App;
