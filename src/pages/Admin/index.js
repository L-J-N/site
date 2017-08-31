import React, { Component } from 'react';

import  TableauAdmin from '../../components/Projet/TableauAdmin';

import {
  Box,
  Button,
  AddCircleIcon
} from '../../components';

import { getAllProjets, createProjetTest } from '../../service';

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    getAllProjets().then((data) => {
      this.setState({
        projets: data,
        nombreProjets: data.length,
      });
    });
  }

  nouveauProjet(e) {
    e.preventDefault();
    createProjetTest();
  }


    render() {

    return (
    <div>
      <Box pad='medium'
           colorIndex='neutral-1-a' align="end">
        Nombre de projets : {this.state.nombreProjets}
        <Button
          icon={<AddCircleIcon />}
          label='Nouveau projet de test'
          primary={false}
          secondary={false}
          accent={false}
          onClick={this.nouveauProjet} />
      </Box>

      <TableauAdmin projets={this.state.projets} />;
    </div>
  )}

}
