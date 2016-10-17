import React, { Component } from 'react';

import './index.css';

export default class ProjetDuMois extends Component {
  render() {
    return (
      <div className="box" >
        <h1 className="title is-1 has-text-centered" >Projet du mois</h1>
        <div className="container-projet-mois">
            <img src="http://placehold.it/640x360?text=projet du mois" alt="projet du mois" />
          <div className="descrition-projet-mois">
            <span className ="title is-3">le nom</span>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque risus mi, tempus quis placerat ut, porta nec
                  nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
                  gravida purus diam, et dictum felis venenatis efficitur.
                  Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
                  arcu et sollicitudin porttitor, tortor urna tempor ligula,
                  id porttitor mi magna a neque. Donec dui urna, vehicula et
                  sem eget, facilisis sodales sem.
              </div>
          </div>
        </div>
      </div>
    );
  }
}
