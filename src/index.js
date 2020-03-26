import React from 'react';
import ReactDOM from 'react-dom';
import Page1 from './pages'
import Demo from './pages/demo'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Page1</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
            <li>
              <Link to="/app">App</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/app">
            <div></div>
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
          <Route path="/">
            <Page1 />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
