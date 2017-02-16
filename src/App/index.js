import React, { Component } from 'react';

import App from 'grommet/components/App';

import Menu from '../components/Menu';
import Footer from '../components/Footer';

class Site extends Component {
  render() {
    const style = {
      minHeight: "100vh"
    };

    return (
      <App centered={false}>
        <div style={style}>
        {React.cloneElement(this.props.children, this.props)}
        </div>
      </App>);
  }
}

export default Site;
