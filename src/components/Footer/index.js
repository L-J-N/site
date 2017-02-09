import React, { Component } from 'react';

import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import SocialShare from 'grommet/components/SocialShare';

import Style from '../../utils/style';

export default class AppFooter extends Component {
  render() {
    return (
      <Footer >
        <Box colorIndex={Style.primaryColor} direction="row" pad="large" align="center" full="horizontal" >
                <Anchor href="#" primary={true}>Contact</Anchor>
                <Box pad="small" />
                <Anchor href="#" primary={true}>Partenaire</Anchor>
                <Box pad="small" />
                <Anchor href="#" primary={true}>A propos</Anchor>
                <Box pad="small" />
                <Anchor href="#" primary={true}>Mention legal</Anchor>
                <Box pad="small" />
                <Box flex="grow" direction="row" justify="end">
                  <SocialShare type="twitter" />
                  <SocialShare type="facebook" />
                  <SocialShare type="email" />
                </Box>
          </Box>
      </Footer>
    );
  }
}
