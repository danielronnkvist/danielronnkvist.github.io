import React, { Component } from 'react';
import { connect } from "react-redux";
import './Tabs.scss';
import { changeTab } from './../../actions';

class Tabs extends Component {
  render() {
    return (
      <div className="tabs">
        {this.props.tabs.map(t => (
          <button key={t} onClick={() => this.props.changeTab(t)}>
            {t}
          </button>
        ))}
      </div>
    );
  }
}

export default connect((state) => ({
  tab: state.tab,
}), (dispatch) => ({
  changeTab: (state) => dispatch(changeTab(state)),
}))(Tabs);
