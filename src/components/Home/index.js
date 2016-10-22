import React, { Component } from 'react';


import Home from './home.js';
import { getCategories } from '../../service';

export default class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    getCategories().then((data) => {
      this.setState({
        projetDuMois: data[0].listeProjet[0],
        listeProjet: data[2].listeProjet
      });
    });
  }
  render() {
    return <Home projetDuMois={this.state.projetDuMois} listeProjet={this.state.listeProjet} />;
  }
}
