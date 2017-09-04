
import React, { Component } from 'react';

import Home from './Home.js';
import { getVignettes } from '../../service/projet/index';

export default class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    getVignettes('PUBLIE').then((data) => {
      this.setState({
        projetDuMois: data[0],
        listeProjet: data
      });
    });
  }
  render() {
    return <Home projetDuMois={this.state.projetDuMois} listeProjet={this.state.listeProjet} />;
  }
}
