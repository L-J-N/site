// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Decouvrir from './components/Decouvrir';
import Categorie from './components/Decouvrir/Categorie';
import Demarrer from './components/Demarrer';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
        <IndexRoute component={Home} ></IndexRoute>
        <Route path="/decouvrir" component={Decouvrir}></Route>
        <Route path="/demarrer" component={Demarrer}></Route>
        <Route path="/categorie/:categorieId" component={Categorie}></Route>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
