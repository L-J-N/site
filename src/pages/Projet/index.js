import React, { Component } from 'react';
import Projet from './Projet';

import { getProjet } from '../../service';

export default class ProjetContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const { idProjet } = this.props.params;
    getProjet(idProjet).then((data) => {
      this.setState({
        projet: data
      });
    });
  }
  render() {
    return <div>{ this.state.projet ? <Projet {...this.state.projet} url={this.props.location.pathname} /> : null }</div>;
  }
}
