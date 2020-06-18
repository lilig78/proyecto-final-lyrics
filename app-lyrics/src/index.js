import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; /*el index.css no me sirve, ni la importación */
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css' /* importando bootstrap */
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
