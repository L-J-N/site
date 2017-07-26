import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {css} from 'glamor';

import {a, primaryColor, secondaryColor, secondaryColorHover, desktopSize} from '../global-css';

const style = css({
  height: '64px',
  backgroundColor: primaryColor,
});

const container = css({
  display: 'flex',
  maxWidth: desktopSize,
  width: desktopSize,
  marginRight: 'auto',
  marginLeft: 'auto',
  height:'100%'
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
        <div className={container}>
          <NavLink {...link} activeStyle={{ color: secondaryColorHover }} to="/decouvrir">Découvrir</NavLink>
          <NavLink {...link} activeStyle={{ color: secondaryColorHover }} to="/demarrer">Démarrer</NavLink>
          <NavLink {...link} activeStyle={{ color: secondaryColorHover }} to="/Home">Home</NavLink>
        </div>
      </div>
    );
  }
}
