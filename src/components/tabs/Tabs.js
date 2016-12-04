import React, { Component } from 'react';
import { connect } from "react-redux";
import './Tabs.scss';
import {
  PROJECTS,
  PHOTOS,
} from './constants.js';
import { changeTab } from './../../actions';

class Tabs extends Component {
  getName(t) {
    switch (t) {
      case PHOTOS:
        return 'Photos'
      case PROJECTS:
      default:
        return 'Projects'
    }
  }

  render() {
    const {
      tabs,
      currentTab,
      changeTab,
    } = this.props;

    return (
      <div className="tabs">
        {tabs.map(t => (
          <div key={t} onClick={() => changeTab(t)} className={`tab ${currentTab === t ? 'active' : ''}`}>
            {this.getName(t)}
          </div>
        ))}
      </div>
    );
  }
}

export default connect((state) => ({
}), (dispatch) => ({
  changeTab: (state) => dispatch(changeTab(state)),
}))(Tabs);
