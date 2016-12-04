import React, { Component } from 'react';
import { connect } from "react-redux";
import './Tabs.scss';
import { changeTab } from './../../actions';

class Tabs extends Component {
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
            {t}
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
