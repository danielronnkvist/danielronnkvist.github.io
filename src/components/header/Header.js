import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {

  displayBody(html) {
    if(html && typeof html === 'string') {
      return (
        <span dangerouslySetInnerHTML={{__html: html}}></span>
      );
    }
  }

  render() {
    const {
      attributes: {
        image,
        title,
        ingress,
      },
      html,
    } = this.props.project;
    let headerStyle = {
      "backgroundImage": `url(${image})`
    };

    return (
      <div className="header" style={headerStyle}>
        <h1>{title}</h1>
        <h4>{ingress}</h4>
        { this.displayBody(html) }
      </div>
    );
  }
}
