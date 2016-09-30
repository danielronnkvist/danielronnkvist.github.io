import React, { Component } from 'react';
import { changeProject } from './../../actions';
import './Project.scss';

export default class Project extends Component {
  render() {
    const {
      title,
      id,
    } = this.props;

    return (
      <div className="project" onClick={() => changeProject(id) }>
        <span className="title">
          {title}
        </span>
      </div>
    );
  }
}
