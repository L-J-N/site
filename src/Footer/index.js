import React, {Component} from 'react';
import {css} from 'glamor'

const style = css({
  height: '64px',
  border: 'solid 2px blue',
});


export default class Footer extends Component {
    render() {
        return (
          <div className={style} >
            Footer
          </div>
        );
    }
}
