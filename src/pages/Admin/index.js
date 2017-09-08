import React, { Component } from 'react';

import  TableauAdmin from '../../components/Projet/TableauAdmin';

import {
  Box,
  Tabs,
  Tab,
  Button,
  AddCircleIcon
} from '../../components';

import { getAllProjets, getProjets, createProjetTest } from '../../service/projet/index';

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: 0
    };
    this.clickTab = this.clickTab.bind(this);
  }
  componentDidMount() {
    getAllProjets().then((data) => {
      this.setState({
        projets: data,
        nombreProjets: data.length
      });
    });
    getProjets('CREE').then((data) => {
      this.setState({
        projetsCrees: data,
      });
    });
    getProjets('EN_ATTENTE_RDV').then((data) => {
      this.setState({
        projetsRdv: data,
      });
    });
    getProjets('EN_ATTENTE_PUBLICATION').then((data) => {
      this.setState({
        projetsPublication: data,
      });
    });
    getProjets('PUBLIE').then((data) => {
      this.setState({
        projetsPublies: data,
      });
    });
    getProjets('FINANCE').then((data) => {
      this.setState({
        projetsFinances: data,
      });
    });
  }

  clickTab(i) {
    this.setState({
      currentTab: i
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
      <Tabs justify='start'
            activeIndex={this.state.currentTab} onActive={this.clickTab}  >
        <Tab title='Tous les projets'>
          <TableauAdmin projets={this.state.projets} />;
        </Tab>
        <Tab title='A étudier'>
          <TableauAdmin projets={this.state.projetsCrees} />;
        </Tab>
        <Tab title='En attente de rendez-vous'>
          <TableauAdmin projets={this.state.projetsRdv} />;
        </Tab>
        <Tab title='Campagne à valider'>
          <TableauAdmin projets={this.state.projetsPublication} />;
        </Tab>
        <Tab title='Campagne en cours'>
          <TableauAdmin projets={this.state.projetsPublies} />;
        </Tab>
        <Tab title='Campagne terminée'>
          <TableauAdmin projets={this.state.projetsFinances} />;
        </Tab>
      </Tabs>
    </div>
  )}

}
