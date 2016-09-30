import React, { Component } from 'react';
import './App.scss';

// Components
import Header from './../header/Header.js';
import Project from './../project/Project.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="projects">
          <Project id="1" title="Stereoscopic Snow Simulation"/>
          <Project id="2" title="Stereoscopic Snow Simulation"/>
          <Project id="3" title="Stereoscopic Snow Simulation"/>
          <Project id="4" title="Stereoscopic Snow Simulation"/>
        </div>
      </div>
    );
  }
}
