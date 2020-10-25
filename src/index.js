import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './store'
import World from './worldContainer'




ReactDOM.render(
  <Provider store={store}>
    <World />
  </Provider>,
  document.getElementById('root')
);
