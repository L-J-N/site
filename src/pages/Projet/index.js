import React, { Component } from 'react';
import Projet from './Projet';

import { getProjet} from '../../service/projet/index';
import { getPublication} from '../../service/publication/index';

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
    getPublication(idProjet).then((data) => {
        this.setState({
          publication: data
        });
    });
  }
  render() {
    return <div>{ this.state.projet ? <Projet projet={this.state.projet} publication={this.state.publication} url={this.props.location.pathname} /> : null }</div>;
  }
}
