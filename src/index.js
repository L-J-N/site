import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'whatwg-fetch';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
