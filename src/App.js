import React, {Component} from 'react';
import {css} from 'glamor'
import {BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Pages/Home';
import Demarrer from './Pages/demarrer';
import Decouvrir from './Pages/decouvrir';

const app = css({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const content = css({
  display: 'flex',
  flex: '1',
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className={app}>
          <NavBar />
          <div className={content}>
            <Route exact path="/" component={Home}/>
            <Route path="/decouvrir" component={Decouvrir}/>
            <Route path="/demarrer" component={Demarrer}/>
          </div>
          <Footer />
        </div>
      </Router>
  )
    ;
  }
}

export default App;
