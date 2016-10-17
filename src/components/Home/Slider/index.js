import React, { Component } from 'react';
import TransitionGroup from 'react-addons-transition-group';

import Carrousel from '../Carrousel';

import './index.css';


export default class Slider extends Component {
  constructor() {
    super();

    this.state = {
      index: 0
    };

    this.precedent = this.precedent.bind(this);
    this.suivant = this.suivant.bind(this);
    this.selectRadio = this.selectRadio.bind(this);
  }
  precedent() {
    let { index } = this.state;
    this.setState({
      index: parseInt(index, 10) === 0 ? 5 : --index,
      direction: 'left'
    });
  }
  suivant() {
    let { index } = this.state;
    this.setState({
      index: parseInt(index, 10) === 5 ? 0 : ++index,
      direction: 'right'
    });
  }
  selectRadio(e) {
    this.setState({
      index: e.target.value
    });
  }
  render() {

    const image = {
      index: this.state.index,
      url: "http://placehold.it/128x128?text=" + this.state.index,
      class: "border-" + this.state.index,
      direction : this.state.direction
    };

    return (
      <div className="slider-container">
        <a className="button is-large button-precedent" onClick={this.precedent} >
          <i className="fa fa-arrow-left"></i>
        </a>
        <div className="slider-content">
          <TransitionGroup style={{display: 'flex'}}>
            <Carrousel key={this.state.index} {...image}/>
          </TransitionGroup>
          <div>
            {
              [0, 1, 2, 3, 4, 5].map((i) => {
                return (
                  <input type="radio"
                    key={ i }
                    value={ i }
                    checked={ parseInt(this.state.index, 10) === i }
                    onChange={this.selectRadio} />
                );
              })
            }
          </div>
        </div>
        <a className="button is-large button-suivant" onClick={this.suivant} >
          <i className="fa fa-arrow-right"></i>
        </a>
      </div>
    );
  }
}
