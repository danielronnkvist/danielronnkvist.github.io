import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {

  displayBody(body) {
    if(body && typeof body === 'string') {
      return (
        <span dangerouslySetInnerHTML={{__html: body}}></span>
      );
    }
  }

  render() {
    const {
      image,
      title,
      ingress,
      body,
    } = this.props.project;
    let headerStyle = {
      "backgroundImage": `url(${image})`
    };

    return (
      <div className="header" style={headerStyle}>
        <h1>{title}</h1>
        <h4>{ingress}</h4>
        { this.displayBody(body) }
      </div>
    );
  }
}
