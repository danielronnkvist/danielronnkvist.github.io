import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/App';
import store from './store.js';

// Styles
import 'normalize.scss/normalize.scss';
import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
