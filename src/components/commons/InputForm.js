import React from 'react';

const InputForm = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    name,
    type,
    text } = props;

  return (
    <fieldset className={ errors[name] && touched[name] && 'error' }>
      <label htmlFor={ name }>{ text }</label>
      <input
        id={ name }
        name={ name }
        type={ type }
        onBlur={ handleBlur }
        onChange={ handleChange }
        value={ values[name] } />
    </fieldset>
  );
}

InputForm.defaultProps = {
  name: "",
  text: "",
  type: "text",
  value: ""
}

export default InputForm;
