import React, { Component } from 'react';
import calculPercent from '../../utils/calculPercent';
import calculRemainingDay from '../../utils/calculRemainingDay';

import { updateSomme } from '../../service/projet/index';

import {
  Box,
  Image,
  Heading,
  SocialShare,
  Value,
  Button,
  Tabs,
  Tab,
  MoneyIcon,
  LoginIcon,
} from '../../components';

export default class Projet extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: 0
    };
    this.clickTab = this.clickTab.bind(this);
  }
  clickTab(i) {
    this.setState({
      currentTab: i
    });
  }

  soutenirProjet(e) {
    e.preventDefault();
    var somme = prompt('De combien voulez-vous soutenir le projet ?');

    if (somme > 0 && somme < 100000) {
      updateSomme(this, somme);
    } else {
      alert('Veuillez entrer un nombre correct ou raisonable.')
    }
  }
  render() {

    const projet = this.props.projet;
    const publication = this.props.publication;
    const createur = projet.createur;

    const link = `${process.env.PUBLIC_URL}/${this.props.url}`;
    const percent = calculPercent(projet.sommeRecolte, projet.sommeDemandee);
    const nbJours = calculRemainingDay(projet.statut.dateDebut, projet.delaiRecolte);
    const labelJours = nbJours > 1 ? " jours restants" : " jour restant";

    const margin = { margin: "10px" };

    return (
      <Box>
        <Box direction="row" justify='center' align='start' pad="large" colorIndex='light-2' >
          <Box pad="large"  >

            <Image src={publication.imageAffichage} size="large" />

            <Heading>{projet.descriptionCourte}</Heading>

            <Box direction="row" responsive={false} >
              <SocialShare link={link} type="email" />
              <SocialShare link={link} type="facebook" />
              <SocialShare link={link} type="twitter" />
              <SocialShare link={link} type="linkedin" />
              <SocialShare link={link} type="google" />
            </Box>
          </Box>
          <Box pad="large">
            <Box  >
              <Value value={projet.sommeRecolte + "/" + projet.sommeDemandee + "€"} size='large' style={margin} />
              <Value value={percent} icon={<MoneyIcon size='large' />} units='%' size='large' style={margin} />

              <Value value={nbJours} units={labelJours} size='large' style={margin} />

              <Value value={projet.localite} size='large' style={margin} />

              <Button label='Soutenir le projet' primary={true} fill={true} style={margin} onClick={this.soutenirProjet.bind(projet.id)} />
            </Box>
            <Box pad="small" >
              <Value value={createur.nom + " " + createur.prenom} size="small" trendIcon={<LoginIcon />} style={margin} />
              <Value value="2 projets créés" size="small" style={margin} />
              <Value value="www.jean-bon.com" size="small" style={margin} />
            </Box>
          </Box>
        </Box>
         <Box pad="large" size="xxlarge">
          <Tabs justify='start'
            activeIndex={this.state.currentTab} onActive={this.clickTab}  >
            <Tab title='Description'>
              <div dangerouslySetInnerHTML={{__html: publication.descriptionLongue}}></div>
            </Tab>
            <Tab title='Evolution'>
              test 2
            </Tab>
            <Tab title='Commentaire'>
              test 3
            </Tab>
          </Tabs>
        </Box>
      </Box>
    );
  }
}
