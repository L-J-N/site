import React from 'react';
import ReactDOM from 'react-dom';

// polyfill de la fonction fetch
import 'whatwg-fetch';

// TODO A modifier quand il y aura un vrai hosting
import { browserHistory } from 'react-router';
// import { HashHistory } from 'react-router';

import Routes from './routes';

import 'grommet/grommet-hpinc.min.css';
import './index.css';

const App = () => (
    <Routes history={browserHistory} />
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
