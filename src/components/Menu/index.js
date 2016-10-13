import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Menu extends React.Component {
  constructor() {
    super();
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
            <IndexLink className="button is-primary" activeClassName="is-active"  to="/" >
              Home
            </IndexLink>
          </span>
        </div>
        <div className="nav-right nav-menu">
          <span className="nav-item">
            <a className="button is-primary" href="#">
              <span className="icon">
                <i className="fa fa-user"></i>
              </span>
              <span>Log in</span>
            </a>
          </span>
        </div>
      </nav>
    );
  }
}
