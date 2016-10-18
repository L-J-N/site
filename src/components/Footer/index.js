import React from 'react';

import './index.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <a className="button is-primary is-inverted">Contact</a>
        <a className="button is-primary is-inverted">Partenaire</a>
        <a className="button is-primary is-inverted">A propos</a>
        <a className="button is-primary is-inverted">Mention légales</a>
        <p>
        <a className="icon" href="">
          <i className="fa fa-twitter"></i>
        </a>
        <a className="icon" href="">
          <i className="fa fa-facebook-official"></i>
        </a>
        </p>
      </div>
    );
  }
}
