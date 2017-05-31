import React, {Component} from 'react';

import { getProjets } from '../../service';

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
      <div >
        Decouvrir
        { JSON.stringify(this.state.projets)}
      </div>
    );
  }
}
