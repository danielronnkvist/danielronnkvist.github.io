import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.scss';

// Components
import Header from './../../components/header/Header.js';
import Projects from './../projects/Projects.js';

class App extends Component {
  render() {
    const {
      project,
      onProjectClick,
    } = this.props;

    return (
      <div>
        <Header project={project}/>
        <Projects/>
      </div>
    );
  }
}

export default connect((state) => ({
  project: state.project,
}))(App);
