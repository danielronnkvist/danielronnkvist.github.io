import React, { Component } from 'react';
import './Project.scss';

export default class Project extends Component {
  render() {
    const {
      title,
      id,
      onProjectClick,
    } = this.props;

    return (
      <div className="project" onClick={() => onProjectClick(id) }>
        <span className="title">
          {title}
        </span>
      </div>
    );
  }
}
