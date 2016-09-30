import React, { Component } from 'react';
import { connect } from "react-redux";
import Project from './../../components/project/Project.js';
import { changeProject } from './../../actions';
import './Projects.scss';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Project onProjectClick={this.props.onProjectClick} id="1" title="Stereoscopic Snow Simulation"/>
        <Project onProjectClick={this.props.onProjectClick} id="2" title="Stereoscopic Snow Simulation"/>
        <Project onProjectClick={this.props.onProjectClick} id="3" title="Stereoscopic Snow Simulation"/>
        <Project onProjectClick={this.props.onProjectClick} id="4" title="Stereoscopic Snow Simulation"/>
      </div>
    );
  }
}

export default connect((state) => ({
}), {
  onProjectClick: changeProject,
})(Projects);
