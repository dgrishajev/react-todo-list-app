import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';
import { GetTodos } from './actions';
import Routes from './routes';

import './styles/main.scss';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
);

store.dispatch(GetTodos());

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
