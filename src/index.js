import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';
ReactDOM.render(
  <div>
    <App />,
  </div>,
  document.getElementById('root')
);
reportWebVitals();
