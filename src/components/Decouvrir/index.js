import React, { Component } from 'react';
import ApercuCategorie from './ApercuCategorie';

import { getCategories } from '../../service/';

import './index.css';

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
      <div className="categorie-container" >
        {this.state.categories.map((cat, i) => {
          return <ApercuCategorie key={i} {...cat} />;
        }
        )}
      </div>
    );
  }
}
