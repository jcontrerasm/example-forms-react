import React, { Component } from 'react';
import CustomTooltip from './../../commons/CustomTooltip';
import InputForm from './../../commons/InputForm';
import SelectForm from './../../commons/SelectForm';
import { FormConsumer } from './../../commons/Form';

export default class FormDatosPersonales extends Component {

  constructor(props) {
    super(props);
    this.arrElements = [
      { text: "Seleccionar", value: "" },
      { text: "DNI", value: "1" },
      { text: "Carnet de extranjeria", value: "2" },
    ];
  }

  render() {
    const propsFormik = this.props;
    return (
      <form onSubmit={ propsFormik.handleSubmit }>
        <div>
          <CustomTooltip {...propsFormik} item="firstname">
            <InputForm {...propsFormik} name="firstname" type="text" text="Nombre: "/>
          </CustomTooltip>
        </div>
        <div>
          <CustomTooltip {...propsFormik} item="document">
            <SelectForm {...propsFormik}
              name="document"
              text="Documento de identidad: "
              data={ this.arrElements }/>
          </CustomTooltip>
        </div>
        <div>
          <CustomTooltip {...propsFormik} item="numberdoc">
            <InputForm {...propsFormik} name="numberdoc" type="text" text="Número: "/>
          </CustomTooltip>
        </div>
        <div>
          <CustomTooltip {...propsFormik} item="email">
            <InputForm {...propsFormik} name="email" type="email" text="Email: "/>
          </CustomTooltip>
        </div>
        <p>
          <button type="button" onClick={ propsFormik.handleReset }>Cancelar</button>
          <button type="submit" disabled={ propsFormik.isSubmitting }>Guardar</button>
        </p>
      </form>
    );
  }

}