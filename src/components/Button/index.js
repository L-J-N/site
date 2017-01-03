import React from 'react';
import cn from 'classnames';

const Button = ({ onClick, icon, children }) => {
  return (
    <span className="nav-item" onClick={onClick}  >
      <a className="button is-primary" href="#">
        <span className="icon">
          <i className={cn("fa", icon)}></i>
        </span>
        {children}
      </a>
    </span>
  );
};

export default Button;
