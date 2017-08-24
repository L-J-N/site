import React, { Component } from 'react';

import  TableauAdmin from '../../components/Projet/TableauAdmin';

import {
  Box,
  Button,
  AddCircleIcon
} from '../../components';

import { getAllProjets } from '../../service';

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    getAllProjets().then((data) => {
      this.setState({
        projets: data
      });
    });
  }
  render() {

    return (
    <div>
      <Box pad='medium'
           colorIndex='neutral-1-a' align="end">
        <Button
          icon={<AddCircleIcon />}
          label='Nouveau Projet'
          primary={false}
          secondary={false}
          accent={false}
          path='/nouveau' />
      </Box>

      <TableauAdmin projets={this.state.projets} />;
    </div>
  )}

}
