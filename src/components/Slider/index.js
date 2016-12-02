import React, { Component } from 'react';
import Carrousel from 'react-slick';

import './index.css';


export default class Slider extends Component {
  constructor() {
    super();
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
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3500
    };

    return (
      <div className="slider-container">
        <Carrousel ref="slider" {...settings}>
          {
            [1, 2, 3, 4, 5, 6].map((i) => {
              return (
                <figure className="slider-image" key={i}>
                  <img src={`${process.env.PUBLIC_URL}/image/slider-${i}.jpg`} alt={i} width="100%" />
                </figure>);
            })
          }
        </Carrousel>
      </div>
    );
  }
}
