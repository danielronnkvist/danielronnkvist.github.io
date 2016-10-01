import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Header.scss';

export default class Header extends Component {

  displayBody(html) {
    if(html && typeof html === 'string') {
      return (
        <div className="body" dangerouslySetInnerHTML={{__html: html}}></div>
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
      "backgroundImage": 'url('+require(`./../../data/${image}`) + ')',
    };

    return (
      <div className="header">
        <ReactCSSTransitionGroup
          transitionName="header-animation"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div key={image} className="background" style={headerStyle}>
            <h1>{title}</h1>
            <h4>{ingress}</h4>
            { this.displayBody(html) }
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
