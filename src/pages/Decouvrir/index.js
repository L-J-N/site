import React, { Component } from 'react';
import  ProjetCard from '../../components/ProjetCard/';

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
        Découvrir
        { this.props.liste ?
          <Box pad={{horizontal: "large"}} full="horizontal">
            <Columns size="medium"
                     justify="center"
                     masonry={true}
                     maxCount={3}
                     responsive={true}>
              {this.props.liste.map((p, i) => <ProjetCard key={i} {...p} />)}
            </Columns>
          </Box>
          : null }
      </div>
    );
  }
}
