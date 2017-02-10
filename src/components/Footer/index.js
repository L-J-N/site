import React, { Component } from 'react';

import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import FaceBookIcon from 'grommet/components/icons/base/SocialFacebook';

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
                  <Anchor href="#" primary={true} icon={<TwitterIcon />}/>
                  <Anchor href="#" primary={true} icon={<FaceBookIcon />}/>
                </Box>
          </Box>
      </Footer>
    );
  }
}
