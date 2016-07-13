import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, IndexRoute } from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import App from './components/App.js';
import Home from './components/Home.js';
import MyApps from './components/MyApps.js';

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/my_apps" component={MyApps} />
    </Route>
  </Router>), document.getElementById('app')
);
