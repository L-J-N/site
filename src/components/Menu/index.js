import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Auth, uiConfig, AuthUI } from '../../config/firebaseConfig.js';
import Login from './Login';


export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <nav className="nav">
        <div className="nav-left">
          <span className="nav-item">
            <Link className="button is-primary" activeClassName="is-active" to="/decouvrir" >
              Découvrir
            </Link>
          </span>
          <span className="nav-item">
            <Link className="button is-primary" activeClassName="is-active" to="/demarrer" >
              Démarrer
            </Link>
          </span>
        </div>
        <div className="nav-center">
          <span className="nav-item">
            <IndexLink className="button is-primary" activeClassName="is-active" to="/" >
              Home
            </IndexLink>
          </span>
        </div>
          <Login />
      </nav>
    );
  }
}
