import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {css} from 'glamor';

import { a, primaryColor, secondaryColor } from '../global-css';

const style = css({
  height: '64px',
  backgroundColor: primaryColor,
  display: 'flex',
});

const link = css(a, {
  alignItems: 'center',
  display: 'flex',
  flexGrow: 0,
  flexShrink: 0,
  fontsize: '1rem',
  justifyContent: 'center',
  lineHeight: 1.5,
  padding: '0.5rem 0.75rem',
  color: secondaryColor
});

export default class NavBar extends Component {
  render() {
    return (
      <div className={style}>
        <NavLink {...link} activeStyle={{ color: secondaryColor }} to="/decouvrir">Découvrir</NavLink>
        <NavLink {...link} activeStyle={{ color: secondaryColor }} to="/demarrer">Démarrer</NavLink>
        <NavLink {...link} activeStyle={{ color: secondaryColor }} to="/Home">Home</NavLink>
      </div>
    );
  }
}
