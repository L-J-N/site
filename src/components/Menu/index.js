import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import LoginIcon from 'grommet/components/icons/base/User';

import Style from '../../utils/style';

export default class AppMenu extends Component {
  render() {
    return (
      <Header justify="center" colorIndex={Style.primaryColor} >
        <Box size={{ width: { max: 'xxlarge' } }}
             direction="row"
             responsive={false}
             justify="start"
             align="center"
             pad={{ horizontal: 'medium' }}
             flex="grow">
          <Menu label="Menu" inline={true} direction="row" flex="grow">
            <Anchor label="Démarrer" path="/demarrer" />
            <Anchor label="Découvrir" path="/decouvrir" />
            <Anchor label="Home" path="/" />
          </Menu>
          <Box pad="small" flex="grow" >
            <Search />
          </Box>
          <Box pad="small" />
          <Box flex="grow" align="end">
            <Anchor label="Login" icon={<LoginIcon />} ></Anchor>
          </Box>
        </Box>
      </Header>
    );
  }
}
