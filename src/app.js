import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, IndexRoute } from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import App from './containers/App.js';
import Home from './containers/Home.js';
import MyApps from './containers/MyApps.js';
import AppCard from './containers/AppCard.js';
import Search from './containers/Search.js';

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/my_apps" component={MyApps} />
      <Route path="/app/:appId" component={AppCard} />
      <Route path="/search/:query" component={Search} />
    </Route>
  </Router>), document.getElementById('app')
);
