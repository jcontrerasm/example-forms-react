import React, { Component } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

export class CustomTooltip extends Component {

  constructor(props) {
    super(props);
    this.state = { openTooltip: false };
    this.timeOut = null;
  }

  static defaultProps = {
    duration: 500,
    open    : false,
    position: 'top',
    title   : 'Mensaje de validación'
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors[nextProps.item] && nextProps.touched[nextProps.item]) {
      this.setState({ openTooltip: true });
      this.timeOut = setTimeout(() => this.setState({ openTooltip: false }), 2000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  render() {
    const {
      errors,
      duration,
      open,
      position,
      title,
      children,
      item } = this.props;

    return (
      <Tooltip
        duration = { duration }
        open={ this.state.openTooltip }
        position={ position }
        title={ errors[item] }
        arrow={ true }
        >
        { children }
      </Tooltip>
    );
  }
  
}