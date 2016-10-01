import React, { Component } from 'react';
import { connect } from "react-redux";
import Project from './../../components/project/Project.js';
import { changeProject } from './../../actions';
import './Projects.scss';

class Projects extends Component {

  getProjects() {
    function requireAll(r) {
      return r.keys().reduce((o,f) => {
        o[f] = r(f);
        return o;
      }, {});
    }
    return requireAll(require.context('./../../data/', true, /\.md$/));
  }

  displayProjects(projects) {
    return Object.keys(projects).map((k) => {
      return <Project key={k} id={k} body={projects[k]} onProjectClick={this.props.onProjectClick} />;
    });
  }

  render() {
    return (
      <div className="projects">
        { this.displayProjects(this.getProjects()) }
      </div>
    );
  }
}

export default connect((state) => ({
}), {
  onProjectClick: changeProject,
})(Projects);
