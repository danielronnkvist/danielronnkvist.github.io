import React, { Component } from 'react';
import './Project.scss';

export default class Project extends Component {
  render() {
    const {
      title,
    } = this.props;

    return (
      <div className="project">
        <span className="title">
          {title}
        </span>
      </div>
    );
  }
}
