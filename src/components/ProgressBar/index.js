import React, { Component } from 'react';
import calculPercent from '../../utils/calculPercent';
import calculRemainingDay from '../../utils/calculRemainingDay';

import { Box, Paragraph, Meter } from '../index.js';

export default class ProgessBar extends Component {
  render() {
    const percent = calculPercent(this.props.sommeRecolte, this.props.sommeDemandee);
    const nbJours = calculRemainingDay(this.props.statut.dateDebut, this.props.delaiRecolte);
    const montant = this.props.sommeRecolte || 0;

    const size = this.props.size || "large";

    return (
      <Box flex="shrink">
       <Meter type="bar" value={montant} max={this.props.sommeDemandee} responsive={true} size={size} />
         <Box direction="row" justify="between" responsive={false} >
          <Paragraph margin="small" >{percent} %</Paragraph>
          <Paragraph margin="small" >{this.props.sommeDemandee} {'\u20AC'}</Paragraph>
          <Paragraph margin="small" >{nbJours} {nbJours > 1 ? "jours restants" : "jour restant"}</Paragraph>
        </Box>
      </Box>
    );
  }
}
