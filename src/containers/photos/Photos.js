import React, { Component } from 'react';
import { connect } from "react-redux";
import './Photos.scss';

class Photos extends Component {
  render() {
    const {
    } = this.props;

    return (
      <div className="photos">
        hej
      </div>
    );
  }
}

export default connect((state) => ({
}), (dispatch) => ({
}))(Photos);
