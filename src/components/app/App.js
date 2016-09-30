import React, { Component } from 'react';
import './App.scss';

// Components
import Header from './../header/Header.js';
import Project from './../project/Project.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header title="trevligheten" ingress="daniel rönnkvist"/>
        <div className="projects">
          <Project title="Stereoscopic Snow Simulation"/>
          <Project title="Stereoscopic Snow Simulation"/>
          <Project title="Stereoscopic Snow Simulation"/>
          <Project title="Stereoscopic Snow Simulation"/>
        </div>
      </div>
    );
  }
}
