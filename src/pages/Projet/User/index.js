import React from 'react';

import './index.css';

export default (props) => {
  return (
    <div>
      <div className="projet-user-info">
        <div>
          <p>Jean Bon</p>
          <p>2 projets créés</p>
          <p>www.jean-bon.com</p>
        </div>
        <a className="icon is-large" href="">
          <i className="fa fa-male"></i>
        </a>
      </div>
      <div>
        <a className="icon" href="">
          <i className="fa fa-user"></i>
        </a>
        <a className="icon" href="">
          <i className="fa fa-plus"></i>
        </a>
        <a className="icon" href="">
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

