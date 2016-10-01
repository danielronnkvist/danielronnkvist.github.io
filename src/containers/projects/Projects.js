import React, { Component } from 'react';
import { connect } from "react-redux";
import Project from './../../components/project/Project.js';
import { changeProject } from './../../actions';
import { requireProject } from './../../actions/helpers.js';
import './Projects.scss';

class Projects extends Component {

  getProjects() {
    function requireAll(r) {
      return r.keys().reduce((o,f) => {
        o[f] = requireProject(f);
        return o;
      }, {});
    }
    return requireAll(require.context('./../../data/', true, /\.md$/));
  }

  displayProjects(projects) {
    return Object.keys(projects).map((k) => {
      return <Project
        key={k}
        id={k}
        image={projects[k].attributes.image}
        title={projects[k].attributes.title}
        body={projects[k].html}
        onProjectClick={this.props.onProjectClick}
      />;
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
