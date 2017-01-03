import React from 'react';
import { Link as RouterLink, IndexLink } from 'react-router';

const Link = ({ to, index, children }) => {
  if (index) {
    return (<IndexLink className="button is-primary" activeClassName="is-active" to={to} >
      {children}
    </IndexLink>);
  }
  return (
    <RouterLink className="button is-primary" activeClassName="is-active" to={to} >
      {children}
    </RouterLink>);
};

export default Link;
