import React, { Component } from 'react';
import CustomTooltip from './../../commons/CustomTooltip';
import InputForm from './../../commons/InputForm';
import SelectForm from './../../commons/SelectForm';

export default class FormStudies extends Component {

  constructor(props) {
    super(props);
    this.arrMonth = [
      { text: "Mes", value: "" },
      { text: "Enero", value: "1" },
      { text: "Febrero", value: "2" },
    ];
    this.arrYear = [
      { text: "Año", value: "" },
      { text: "2018", value: "2018" },
      { text: "2017", value: "2017" },
    ];
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
      <form onSubmit={ handleSubmit }>
        <div>
          <CustomTooltip {...propsTooltip} item="initialMonth">
            <SelectForm {...propsForm}
              name="initialMonth"
              text="Fecha de inicio: "
              data={ this.arrMonth }/>
          </CustomTooltip>
          <CustomTooltip {...propsTooltip} item="initialYear">
            <SelectForm {...propsForm}
              name="initialYear"
              data={ this.arrYear }/>
          </CustomTooltip>
        </div>
        <div>
          <CustomTooltip {...propsTooltip} item="endMonth">
            <SelectForm {...propsForm}
              name="endMonth" text="Fecha de fin: "
              data={ this.arrMonth }/>
          </CustomTooltip>
          <CustomTooltip {...propsTooltip} item="endYear">
            <SelectForm {...propsForm}
              name="endYear"
              data={ this.arrYear }/>
          </CustomTooltip>
        </div>
        <div>
          <CustomTooltip {...propsTooltip} item="currentlyStudying">
            <InputForm {...propsForm} name="currentlyStudying" type="checkbox" />
            <span>Actualmente estudiando</span>
          </CustomTooltip>
        </div>
        <p>
          <button type="button" onClick={ handleReset }>Cancelar</button>
          <button type="submit" disabled={ isSubmitting }>Guardar</button>
        </p>
      </form>
    );
  }

}