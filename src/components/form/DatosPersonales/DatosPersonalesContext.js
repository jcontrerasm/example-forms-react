import React, { Component, createContext  } from 'react';
import axios from 'axios';

const DatosPersonalesContext = React.createContext();

export class DatosPersonalesProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      document: '',
      numberdoc: '',
      email: ''
    }
  }

  componentDidMount() {
    axios.get('https://next.json-generator.com/api/json/get/NJUqLJiKE')
    .then((response) => {
      const {
        firstname,
        document,
        numberdoc,
        email } = response.data;
      this.setState({
        firstname,
        document,
        numberdoc,
        email
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <DatosPersonalesContext.Provider value={ this.state }>
        { this.props.children }
      </DatosPersonalesContext.Provider>
    );
  }
};

export const DatosPersonalesConsumer = DatosPersonalesContext.Consumer;