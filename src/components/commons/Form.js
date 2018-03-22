import React, { Component, createContext  } from 'react';
import { Formik } from 'formik';

export class Form extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const Form = this.props.form;

    return (
      <Formik
        initialValues={ this.props.initialValuesForm }
        onSubmit={ this.props.onSubmitForm }
        validationSchema={ this.props.schemaValidation }
        enableReinitialize={ true }
        render={ (props) => <Form { ...props }/> }
        { ...this.props } />
    );
  }
}
