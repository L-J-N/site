import React, { Component } from 'react';

import {
  Box,
  Section,
  Heading,
  Columns
} from '../index';

import  ProjetCard from '../../components/ProjetCard';

export default class Categorie extends Component {
  render() {
    return (
       <Section pad="medium">
        <Heading align="center" >{this.props.title}</Heading>
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
         </Section>
    );
  }
}
