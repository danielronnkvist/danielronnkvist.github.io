import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.scss';

// Components
import CloseButton from './../../components/closeButton/CloseButton.js';
import Header from './../../components/header/Header.js';
import Projects from './../projects/Projects.js';
import Photos from './../photos/Photos.js';
import Tabs from './../../components/tabs/Tabs.js';

// Constants
import * as availableTabs from './../../components/tabs/constants.js'

class App extends Component {

  getCloseButton(project) {
    return project.id ? <CloseButton/> : '';
  }

  getTabComponent(tab) {
    switch (tab) {
      case availableTabs.PHOTOS:
        return <Photos/>;
      case availableTabs.PROJECTS:
      default:
        return <Projects/>;
    }
  }

  render() {
    const {
      project,
      onProjectClick,
      tab,
    } = this.props;

    return (
      <div>
        <Header project={project}/>
        { this.getCloseButton(project) }
        <Tabs tabs={Object.values(availableTabs)} currentTab={tab}/>
        { this.getTabComponent(this.props.tab) }
      </div>
    );
  }
}

export default connect((state) => ({
  project: state.project,
  tab: state.tab,
}))(App);
