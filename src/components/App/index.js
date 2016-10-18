import React, { Component } from 'react';
import './index.css';

import Menu from '../Menu';
import Footer from '../Footer';

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
          <div className="container">
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <Footer />
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
