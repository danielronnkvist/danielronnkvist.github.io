import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {

  displayBody(body) {
    if(body && typeof body === 'string') {
      return (
        <p>
          {body}
        </p>
      );
    }
  }

  render() {
    const {
      title,
      ingress,
      body,
    } = this.props;

    return (
      <div className="header">
        <h1>{title}</h1>
        <h4>{ingress}</h4>
        { this.displayBody(body) }
      </div>
    );
  }
}
