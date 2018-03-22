import React, { Component } from 'react';
import AddInputForm from './../../commons/AddInputForm';

export default class FormPresentation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
      initialValues,
      schemaValidation,
      updateSchema
    } = this.props;

    const propsForm = {
      values,
      errors,
      touched,
      handleChange,
      handleBlur
    };

    const propsTooltip = { touched, errors };

    return (
      <form onSubmit={ handleSubmit }>
        <AddInputForm {...this.props} defaultname="socialLink" />
        <p>
          <button type="button" onClick={ handleReset }>Cancelar</button>
          <button type="submit" disabled={ isSubmitting }>Guardar</button>
        </p>
      </form>
    );
  }

}
/*
const data = {
  name: ['socialLink'],
  type: 'text'
}

const template = (data = [], callback) => {
  data.map( element => (
    <CustomTooltip { ...propsTooltip } item={ element.data.name } key={ element.index }>
      <InputForm { ...propsForm } name={ element.data.name } type={ element.data.type } />
      <button type="button" onClick={ callback }>+</button>
    </CustomTooltip>
  ));
};
*/