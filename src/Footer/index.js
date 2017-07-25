import React, {Component} from 'react';
import {css} from 'glamor';

import {desktopSize} from '../global-css';

const style = css({
  height: '64px',
});

const container = css({
  display: 'flex',
  maxWidth: desktopSize,
  width: desktopSize,
  marginRight: 'auto',
  marginLeft: 'auto'
});

export default class Footer extends Component {
  render() {
    return (
      <div className={style}>
        <div className={container}>
          Footer
        </div>
      </div>
    );
  }
}
