import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
  render() {
    const {
      title,
      ingress,
    } = this.props;

    return (
      <div className="header">
        <h1>{title}</h1>
        <h4>{ingress}</h4>
      </div>
    );
  }
}
