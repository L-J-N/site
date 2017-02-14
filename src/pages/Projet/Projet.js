import React, { Component } from 'react';

import calculPercent from '../../utils/calculPercent';
import calculRemainingDay from '../../utils/calculRemainingDay';

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
  render() {

    const link = `${process.env.PUBLIC_URL}/${this.props.url}`;
    const percent = calculPercent(this.props.montant, this.props.total);
    const nbJours = calculRemainingDay(this.props.dateFin);
    const labelJours = nbJours > 1 ? " jours restants" : " jour restant";

    const margin = { margin: "10px" };

    return (
      <Box>
        <Box direction="row" justify='center' align='start' pad="large" colorIndex='light-2' >
          <Box pad="large"  >

            <Image src={this.props.imageUrl} size="large" />

            <Heading>{this.props.descriptionCourte}</Heading>

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
              <Value value={percent} icon={<MoneyIcon size='large' />} units='%' size='large' style={margin} />

              <Value value={nbJours} units={labelJours} size='large' style={margin} />

              <Value value={this.props.localite} size='large' style={margin} />

              <Button label='Faire un don' primary={true} fill={true} style={margin} />
            </Box>
            <Box pad="small" >
              <Value value="Jean Bon" size="small" trendIcon={<LoginIcon />} style={margin} />
              <Value value="2 projets créés" size="small" style={margin} />
              <Value value="www.jean-bon.com" size="small" style={margin} />
            </Box>
          </Box>
        </Box>
         <Box pad="large" size="xxlarge">
          <Tabs justify='start'
            activeIndex={this.state.currentTab} onActive={this.clickTab}  >
            <Tab title='Description'>
              test
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
