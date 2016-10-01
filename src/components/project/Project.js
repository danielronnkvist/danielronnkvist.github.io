import React, { Component } from 'react';
import './Project.scss';

export default class Project extends Component {
  render() {
    const {
      title,
      id,
      image,
      onProjectClick,
    } = this.props;
    let projectStyle = {
      "backgroundImage": 'url('+require(`./../../data/${image}`) + ')',
    };

    return (
      <div style={projectStyle} className="project" onClick={() => onProjectClick(id) }>
        <span className="title">
          {title}
        </span>
      </div>
    );
  }
}
