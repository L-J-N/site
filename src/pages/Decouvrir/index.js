import React, { Component } from 'react';
import  ProjetCard from '../../components/Projet/ProjetCard';

import { getProjets } from '../../service/';

export default class Decouvrir extends Component {
  constructor() {
    super();
    this.state = {
      projets: []
    };
  }

  componentDidMount() {
    getProjets('PUBLIE').then((data) => {
      this.setState({
        projets: data
      });
    });
  }

  render() {
    return (
          <div>
            {this.state.projets && this.state.projets.map((projet, i) => {
              return <ProjetCard key={i} {...projet} />
              }
            )}
          </div>
    );
  }
}
