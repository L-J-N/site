import React from 'react';
import cn from 'classnames';

const Modal = ({ active, onClose, children }) => {
  return (
    <div className={cn('modal', active ? 'is-active' : '')} >
      <div className="modal-background"></div>
      <div className="modal-content">
        { children }
      </div>
      <button className="modal-close" onClick={onClose} ></button>
    </div>
  );
};

export default Modal;
