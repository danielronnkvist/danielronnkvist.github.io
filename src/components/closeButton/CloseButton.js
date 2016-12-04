import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetProject } from './../../actions';
import './CloseButton.scss';

class CloseButton extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
        this.props.resetProject();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.close);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.close);
  }

  render() {
    return (
      <span className="close-button" onClick={this.props.resetProject}></span>
    );
  }
}

export default connect(() => ({}), {
  resetProject
})(CloseButton)
