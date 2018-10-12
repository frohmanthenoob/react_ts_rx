import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import pingEpic from './epics';
import pingReducer from './reducers';

const epicMiddleware = createEpicMiddleware();


const store = createStore(pingReducer,applyMiddleware(epicMiddleware));

epicMiddleware.run(pingEpic);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
