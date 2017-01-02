import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

jest.mock('../../config/firebaseConfig.js');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App ><div>app</div></App>, div);
});
