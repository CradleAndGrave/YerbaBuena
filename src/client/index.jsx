import { render } from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Root } from './components/Root';
import todoApp from './models/index';

const store = createStore(todoApp);

render(
  <Root store={store} />,
  document.getElementById('app'),
);
