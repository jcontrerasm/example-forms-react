import React, { Component } from 'react';
import InputForm from './InputForm';
import CustomTooltip from './CustomTooltip';
import { object, shape, string, boolean, mixed } from 'yup';

export default class AddInputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      arrayNames: [this.props.defaultname]
    };
  }

  addElement = (e) => {
    const newKey = `${this.state.arrayNames[0] + this.state.counter}`;
    this.props.initialValues[newKey] = '';
    this.createNewSchema(newKey);
    this.updateArrayNames(newKey);
    this.hideButton(e);
    this.setState({ counter: this.state.counter + 1 });
  }

  createNewSchema(newKey) {
    let newObjSchema = {};
    newObjSchema[newKey] = string()
                           .required('Este campo es requerido');
    const newSchema = object(newObjSchema)
                      .concat(this.props.schemaValidation);
    this.props.updateSchema(newSchema);
  }

  updateArrayNames(nameItem) {
    const newArrayNames = this.state.arrayNames.slice();
    newArrayNames.push(nameItem);
    this.setState({ arrayNames: newArrayNames });
  }

  hideButton(e) {
    const element = e.target;
    element.style.display = 'none';
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
      this.state.arrayNames.map( element => (
        <CustomTooltip {...propsTooltip} item={ element } key={element} >
          <InputForm {...propsForm} name={ element } type={ this.props.type } />
          <button type="button" onClick={ this.addElement }>+</button>
        </CustomTooltip>
      ))
    );
  }
}