import React from 'react';
import ReactDOM from 'react-dom';
import Login from './index';

jest.mock('../../../config/firebaseConfig.js');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});
