
import React, { Component } from 'react';

import Home from './Home.js';
import { getProjets } from '../../service';

export default class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    getProjets('PUBLIE').then((data) => {
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
