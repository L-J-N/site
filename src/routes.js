// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './pages/Home';
import Decouvrir from './pages/Decouvrir';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
        <IndexRoute component={Home} ></IndexRoute>
        <Route path="/decouvrir" component={Decouvrir}></Route>
        <Route path="/demarrer" component={Home}></Route>
    </Route>
  </Router>
);

export default Routes;
