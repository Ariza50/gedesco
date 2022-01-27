import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store"

const app = (
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

const container = document.getElementById('root');

ReactDOM.render(app, container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
