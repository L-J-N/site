import React, { Component } from 'react';
import './index.css';

import Menu from '../Menu';

class App extends Component {
  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-head" >
            <div className="container">
              <Menu />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container app">
            { React.cloneElement(this.props.children, this.props) }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
