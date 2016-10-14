import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

import './index.css';

const Carroussel = (props) => (
  <ReactCSSTransitionGroup
    transitionName="slide"
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500} >
    <img key={props.index}
         className={props.class}
         src={props.url} alt="" />
  </ReactCSSTransitionGroup>
);

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
      index: parseInt(index, 10) === 0 ? 5 : --index
    });
  }
  suivant() {
    let { index } = this.state;
    this.setState({
      index: parseInt(index, 10) === 5 ? 0 : ++index
    });
  }
  selectRadio(e) {
    this.setState({
      index: e.target.value
    });
  }
  render() {

    const image  = {
      index : this.state.index,
      url: "http://placehold.it/128x128?text=" + this.state.index,
      class: "border-" + this.state.index
    };

    return (
      <div className="slider-container">
        <a className="button is-large button-precedent" onClick={this.precedent} >
          <i className="fa fa-arrow-left"></i>
        </a>
        <div className="slider-content">
          <figure className="slider-figure image is-128x128">
              <Carroussel {...image} />
          </figure>
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
