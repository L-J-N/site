// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './pages/Home';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
        <IndexRoute component={Home} ></IndexRoute>
        <Route path="/decouvrir" component={Home}></Route>
        <Route path="/demarrer" component={Home}></Route>
    </Route>
  </Router>
);

export default Routes;
