import React, { Component } from 'react';

import App from 'grommet/components/App';
import Hero from 'grommet/components/Hero';

import Menu from '../components/Menu';
import Footer from '../components/Footer';

class Site extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <App centered={false}>
        <Menu />
        <Hero size="small" backgroundImage={`${process.env.PUBLIC_URL}/image/slider-1.jpg`} />
        {React.cloneElement(this.props.children, this.props)}
        <Footer />
      </App>);

  }
}

export default Site;
