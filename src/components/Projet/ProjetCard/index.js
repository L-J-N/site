import React, { Component, PropTypes } from 'react';

import { Card, Image, Paragraph } from '../../index.js';

import ProgressBar from '../../ProgressBar/index';

export default class ProjetCard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick (e) {
     this.context.router.push(`/projet/${this.props.id}`);
  }
  render() {

    const image = <Image src={this.props.imageAffichage} />;

    const description = (
      <div>
      <Paragraph>{this.props.descriptionCourte}</Paragraph>
      <ProgressBar {...this.props} size="medium" />
      </div>
    );

    return (
      <Card style={ {margin : "25px"} }
        contentPad="medium"
        textSize="small"
        heading={this.props.nom}
        description={description}
        thumbnail={image}
        onClick={this.onClick} />
    );
  }
}

ProjetCard.contextTypes = {
  router: PropTypes.object,
};
