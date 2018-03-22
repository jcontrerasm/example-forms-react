import React, { Component, Fragment } from 'react';
import { Formik } from 'formik';
import { object, shape, string } from 'yup';
import FormDatosPersonales from './FormDatosPersonales';
import { Form } from './../../commons/Form';
import { DatosPersonalesConsumer, DatosPersonalesProvider } from './DatosPersonalesContext';

export default class DatosPersonalesContainer extends Component {

  constructor(props) {
    super(props);
  }

  schemaValidation = object().shape({
    firstname: string()
               .matches(/^[a-zA-Z]+$/, { message: "Solo letras" })
               .required('Este campo es requerido'),
    document: string()
              .required('Este campo es requerido'),
    numberdoc: string()
               .matches(/^[0-9]*$/, { message: "Solo números" })
               .required('Este campo es requerido'),
    email: string()
           .email('El email no es válido')
           .required('Este campo es requerido')
  });

  onSubmitForm = (values, actions) => {
    console.log(values);
    actions.resetForm();
  }

  render() {
    const { handleButton, schemaValidation } = this;
    return (
      <DatosPersonalesProvider>
        <DatosPersonalesConsumer>
          { (initialValuesForm) => {
            return (
              <Fragment>
                <h1>Datos personales</h1>
                <Form
                  initialValuesForm={ initialValuesForm }
                  onSubmitForm={ this.onSubmitForm }
                  schemaValidation={ this.schemaValidation }
                  form={ FormDatosPersonales } />
              </Fragment>
            );
            }
          }
        </DatosPersonalesConsumer>
      </DatosPersonalesProvider>
    );
  }
  
}
