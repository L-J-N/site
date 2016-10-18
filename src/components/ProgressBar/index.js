import React, { Component } from 'react';
import calculPercent from '../../utils/calculPercent';
import calculRemainingDay from '../../utils/calculRemainingDay';

import './index.css';

export default class ProgessBar extends Component {
  render() {
    const percent = calculPercent(this.props.montant, this.props.total);
    const nbJours = calculRemainingDay('2016-10-23');
    return (
      <div>
        <progress className="progress is-primary" value={this.props.montant} max={this.props.total} />
        <div className="progressbar-info">
          <p>{percent}%</p>
          <p>12000 {'\u20AC'}</p>
          <p>{nbJours} {nbJours > 1 ? "jours restants" : "jour restant"}</p>
        </div>
      </div>

    );
  }
}
