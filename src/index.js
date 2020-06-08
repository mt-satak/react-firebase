import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './helpers/initializeApp.js'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// https://developer.mozilla.org/ja/docs/Web/API/Service_Worker_API
serviceWorker.unregister();
// serviceWorker.register({
//   onUpdate() {
//     window.location.reload()
//   }
// })

if (module.hot) {
  module.hot.accept()
}