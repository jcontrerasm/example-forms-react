import React, { Component } from 'react';
import { Formik } from 'formik';
import { object, shape, string, boolean } from 'yup';
import FormStudies from './FormStudies';

export default class StudiesContainer extends Component {

  constructor(props) {
    super(props);
  }

  initialValuesForm = {
    initialMonth: '',
    initialYear: '',
    endMonth: '',
    endYear: '',
    currentlyStudying: false
  }
  
  schemaValidation = object().shape({
    initialMonth: string()
                  .required('Este campo es requerido'),
    initialYear : string()
                  .required('Este campo es requerido'),
    endMonth    : string()
                  .when(['currentlyStudying'], {
                    is: false,
                    then: string().required('Este campo es requerido'),
                    otherwise: string().notRequired()
                  }),
    endYear     : string()
                  .when(['currentlyStudying'], {
                    is: false,
                    then: string().required('Este campo es requerido'),
                    otherwise: string().notRequired()
                  }),
    currentlyStudying: boolean()
  });

  executeSend = (values, actions) => {
    console.log(values);
    actions.resetForm();
  }

  render() {
    const { initialValuesForm, executeSend, schemaValidation } = this;

    return (
      <div>
        <h1>Datos personales</h1>
        <Formik
          initialValues={ initialValuesForm }
          onSubmit={ executeSend }
          validationSchema={ schemaValidation }
          render={ props => <FormStudies {...props} /> } />
      </div>
    );
  }
  
}
