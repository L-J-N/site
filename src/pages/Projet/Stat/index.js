import React from 'react';
import calculPercent from '../../../utils/calculPercent';
import calculRemainingDay from '../../../utils/calculRemainingDay';

import './index.css';

export default (props) => {
  const percent = calculPercent(props.montant, props.total);
  const nbJours = calculRemainingDay(props.dateFin);
  return (
    <div className="projet-stat">
      <div>
        <span className="icon is-large">
          <i className="fa fa-money"></i>
        </span>
        {percent + ' '}%
      </div>
      <div>
        {props.montant}&#x20ac; / {props.total}&#x20ac;
      </div>
      <div>
        {nbJours} {nbJours > 1 ? "jours restants" : "jour restant"}
      </div>
      <div>
        {props.localite}
      </div>
    </div>
  );
};
