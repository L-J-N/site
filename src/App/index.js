import React, { Component } from 'react';
import './index.css';

import Menu from '../fragments/Menu';
import Footer from '../fragments/Footer';
import Slider from '../components/Slider';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-head" >
            <div className="container">
              <Menu />
            </div>
          </div>
        </section>
        {location && location.pathname === "/" ? <Slider /> : null}
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
