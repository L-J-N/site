import React, { Component } from 'react';
import Categorie from '../../components/Categorie';

import { getCategories } from '../../service/';

export default class Decouvrir extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    getCategories().then((data) => {
      this.setState({
        categories: data
      });
    });
  }
  render() {
    return (
      <div>
        {this.state.categories && this.state.categories.map((cat, i) => {
          return <Categorie key={i} liste={cat.listeProjet} title={cat.nom} />;
        }
        )}
      </div>
    );
  }
}
