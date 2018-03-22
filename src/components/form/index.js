import React, { Component } from 'react';
import { DatosPersonalesContainer } from './DatosPersonales';
//import StudiesContainer from './Studies';
//import PresentationContainer from './Presentation';
import './styles.css';

export class FormMain extends Component {
  render() {
    return (
      <div>
        <DatosPersonalesContainer />
        { /* <StudiesContainer /> */ }
        { /* <PresentationContainer /> */ }
      </div>
    );
  }
}