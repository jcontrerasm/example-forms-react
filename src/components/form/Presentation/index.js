import React, { Component } from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import FormPresentation from './FormPresentation';

export default class PresentationContainer extends Component {

  initialValuesForm = {
    socialLink: ''
  }

  schemaValidation = object({
    socialLink: string()
                .required('Este campo es requerido'),
  });

  constructor(props) {
    super(props);
    this.state = { schemaValidation: this.schemaValidation };
    this.updateSchema = this.updateSchema.bind(this);
  }

  executeSend = (values, actions) => {
    console.log(values);
    actions.resetForm();
  }

  updateSchema(newSchema) {
    this.setState({ schemaValidation: newSchema }, () => {
      console.log(this.state.schemaValidation);
    });
  }

  render() {
    const { schemaValidation } = this.state;
    const { updateSchema } = this;
    const propsSchema = {
      schemaValidation,
      updateSchema
    };

    return (
      <div>
        <h1>Datos personales</h1>
        <Formik
          initialValues={ this.initialValuesForm }
          onSubmit={ this.executeSend }
          validationSchema={ schemaValidation }
          render={ props => <FormPresentation {...props} {...propsSchema } /> } />
      </div>
    );
  }

}