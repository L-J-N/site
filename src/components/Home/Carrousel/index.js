import React, { Component } from 'react';
import { TweenLite } from "gsap";
import { findDOMNode } from 'react-dom';

export default class Carrousel extends Component {
  componentWillEnter(callback) {
    const el = findDOMNode(this);
    TweenLite.fromTo(el, 0.5, { x: -400, opacity: 1 }, { x: 0, opacity: 1 ,onComplete: callback });
  }
  componentWillLeave(callback) {
    const el = findDOMNode(this);
    TweenLite.fromTo(el, 0.5, { x:0, opacity: 1 }, { x: 400, opacity: 0, onComplete: callback });
  }
  render() {
    return (
      <figure className="slider-figure image is-128x128">
        <img key={this.props.index} className={this.props.class}  src={this.props.url} alt="" />
      </figure>
    );
  }
}
