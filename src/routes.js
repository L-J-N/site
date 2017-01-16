// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import NotFound from './pages/NotFound';
import App from './App';
import Home from './pages/Home';
import Decouvrir from './pages/Decouvrir';
import Demarrer from './pages/Demarrer';
import Projet from './pages/Projet';
import Admin from './pages/Admin';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
        <IndexRoute component={Home} ></IndexRoute>
        <Route path="/decouvrir" component={Decouvrir}></Route>
        <Route path="/demarrer" component={Demarrer}></Route>
        <Route path="/projet/:projectId" component={Projet}></Route>
        <Route path="/admin" component={Admin}></Route>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
