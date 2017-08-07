import { render } from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Root } from './components/Root';
import todoApp from './models/index';
import { APP_CONTAINER_SELECTOR } from '../shared/config';

const store = createStore(todoApp);

render(<Root store={store} />, document.getElementById(APP_CONTAINER_SELECTOR));
