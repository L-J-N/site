import React, {Component} from 'react';
import {css, fontFace} from 'glamor'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Pages/Home';
import Demarrer from './Pages/demarrer';
import Decouvrir from './Pages/decouvrir';

const app = css({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  fontFamily: fontFace({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    src: "local('Open Sans'), local('OpenSans'), url('https://fonts.googleapis.com/css?family=Roboto')",
  })
})
;

const content = css({
  display: 'flex',
  flex: '1',
  padding: '3rem 1.5rem'
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className={app}>
          <NavBar />
          <div className={content}>
            <Route exact path="/Home" component={Home}/>
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
