import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/App.scss';
import "./styles/Login.scss";
import './fonts/lato/Lato-Bold.ttf';
import './fonts/lato/Lato-Regular.ttf';
import './fonts/Roboto/Roboto-Regular.ttf';

ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
