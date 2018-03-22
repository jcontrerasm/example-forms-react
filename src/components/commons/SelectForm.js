import React from 'react';

const SelectForm = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    name,
    text,
    data
    } = props;

  const selectOption = (data) => (
    data.length
    ?
      data.map( element => (
        <option
          key={ element.value }
          value={ element.value } >
          { element.text }
        </option>
      ))
    :
      <option value>Seleccionar</option>
  );

  return (
    <fieldset className={ errors[name] && touched[name] && 'error' }>
      <label htmlFor={ name }>{ text }</label>
      <select
        id={ name }
        name={ name }
        onBlur={ handleBlur }
        onChange={ handleChange }
        value={ values[name] } >
        { selectOption(data) }
      </select>
    </fieldset>
  );
}

SelectForm.defaultProps = {
  data: [],
  name: "",
  text: "",
  value: ""
}

export default SelectForm;