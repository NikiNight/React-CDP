import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './index';
import configureStore from './store/configureStore';
import './css/main.scss';

const store = configureStore(window.PRELOADED_STATE);

const root = (
    <Root
      Router={BrowserRouter}
      store={store}
    />
);

hydrate(root, document.getElementById('root'));