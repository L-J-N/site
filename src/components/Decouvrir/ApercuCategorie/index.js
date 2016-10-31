import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import ApercuProjet from '../../ApercuProjet';

import './index.css';

export default class ApercuCategorie extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.refs.slider.slickNext();
  }
  previous() {
    this.refs.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      className: 'apercu-categorie-liste',
    };
    return (
      <div className="apercu-categorie">
        <div className="apercu-categorie-header">
          <h1 className="title is-1" >
            {this.props.nom}
          </h1>
          <Link className="button is-info" to={`/categorie/${this.props.id}`} >
            Tout voir
          </Link>
        </div>
        <div className="apercu-categorie-liste">
          <a className="button is-large" onClick={this.previous} >
            <i className="fa fa-arrow-left"></i>
          </a>
          <Slider ref="slider" {...settings}>
            {
              this.props.listeProjet.map((projet, i) => {
                return (
                  <div key={i} >
                    <ApercuProjet {...projet} />
                  </div>
                );
              })
            }
          </Slider>
          <a className="button is-large" onClick={this.next} >
            <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
    );
  }
}
