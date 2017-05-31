import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {css} from 'glamor'

const style = css({
  height: '64px',
  border: 'solid 2px red',
});

export default class NavBar extends Component {
  render() {
    return (
      <div className={style}>
        <Link to="/decouvrir" >Découvrir</Link>
        <Link to="/demarrer" >Démarrer</Link>
        <Link to="/" >Home</Link>
      </div>
    );
  }
}
