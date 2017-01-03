import React from 'react';
import ReactDOM from 'react-dom';
import Categorie from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const params = {};
  ReactDOM.render(<Categorie params={params}/>, div);
});
