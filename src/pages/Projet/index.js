import React, { Component } from 'react';
import Projet from './projet';

import { getProjet } from '../../service';

export default class ProjetContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const { projectId } = this.props.params;
    getProjet(projectId).then((data) => {
      this.setState({
        projet: data
      });
    });
  }
  render() {
    return <div>{ this.state.projet ? <Projet {...this.state.projet} /> : null }</div>;
  }
}
