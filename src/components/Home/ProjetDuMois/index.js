import React, { Component } from 'react';

import './index.css';

export default class ProjetDuMois extends Component {
  render() {
    return (
      <div>
        <h1>Projet Du Mois</h1>
        <div>
          <img src="http://placehold.it/512x512?text=projet du mois" alt="projet du mois" />
          <div>
            <span>le nom</span>
            <div>
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
