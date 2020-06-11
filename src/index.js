import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import { Provider } from "react-redux"
import {BrowserRouter} from "react-router-dom"

import data from "./store/data"

const rootReducer = combineReducers({ //combine all the state reducers into one root reducer

  data: data,

})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider >
  </React.StrictMode>,
  document.getElementById('root')
);
