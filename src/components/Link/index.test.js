import React from 'react';
import ReactDOM from 'react-dom';
import Link from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Link />, div);
});

it('renders without crashing index', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Link index={true} />, div);
});
