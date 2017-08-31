// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './pages/Home';
import Decouvrir from './pages/Decouvrir';
import Demarrer from './pages/Demarrer';
import Admin from './pages/Admin';
import NouveauProjet from './pages/NouveauProjet';
import Projet from './pages/Projet';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
        <IndexRoute component={Home} ></IndexRoute>
        <Route path="/decouvrir" component={Decouvrir}></Route>
        <Route path="/demarrer" component={Demarrer}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/nouveau" component={NouveauProjet}></Route>
        <Route path="/projet/:idProjet" component={Projet}></Route>
    </Route>
  </Router>
);

export default Routes;
