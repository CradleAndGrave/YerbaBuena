import 'babel-polyfill';

import { render } from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';

import Root from './components/Root';

import { APP_CONTAINER_SELECTOR } from '../shared/config';

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = AppComponent =>
  (<AppContainer>
    <AppComponent />
  </AppContainer>);


// render(<Root store={store} />, document.getElementById(APP_CONTAINER_SELECTOR));
render(wrapApp(Root), rootEl);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./components/Root', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/Root').default;
    render(wrapApp(NextApp), rootEl);
  });
}
