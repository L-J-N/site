import React, { Component } from 'react';

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
      index: index === 0 ? 5 : --index
    });
  }
  suivant() {
    let { index } = this.state;
    this.setState({
      index: index === 5 ? 0 : ++index
    });
  }
  selectRadio(e) {
    this.setState({
      index: e.target.value
    });
  }
  render() {
    const url = "http://placehold.it/128x128?text=" + this.state.index;

    return (
      <div className="slider-container">
        <a className="button is-large button-precedent" onClick={this.precedent} >
          <i className="fa fa-arrow-left"></i>
        </a>
        <div className="slider-content">
          <figure  className="slider-figure image is-128x128">
            <img key={1} className="slider-image" src={url} />
          </figure>
          <div>
            {
              [0, 1, 2, 3, 4, 5].map((i) => {
                return (
                  <input type="radio"
                        key={ i }
                        value={ i }
                        checked={ this.state.index === i }
                        onClick={this.selectRadio} />
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
