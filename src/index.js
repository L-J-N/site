import React from 'react';
import ReactDOM from 'react-dom';
// A modifier quand il y aura un vrai hosting
// import { browserHistory } from 'react-router';
import { HashHistory } from 'react-router';

import '../node_modules/bulma/css/bulma.css';

import Routes from './routes';

import './index.css';

ReactDOM.render(
  <Routes history={HashHistory} />,
  document.getElementById('root')
);
