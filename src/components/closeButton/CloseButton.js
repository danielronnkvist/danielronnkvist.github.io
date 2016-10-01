import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetProject } from './../../actions';
import './CloseButton.scss';

class CloseButton extends Component {
  render() {
    return (
      <span className="close-button" onClick={this.props.resetProject}></span>
    );
  }
}

export default connect(() => ({}), {
  resetProject
})(CloseButton)
