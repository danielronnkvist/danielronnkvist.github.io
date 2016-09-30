import React, { Component } from 'react';
import { connect } from "react-redux";
import './Header.scss';

class Header extends Component {

  displayBody(body) {
    if(body && typeof body === 'string') {
      return (
        <p>
          {body}
        </p>
      );
    }
  }

  render() {
    const { project } = this.props;
    let headerStyle = {
      "backgroundImage": `url(${project.image})`
    };

    return (
      <div className="header" style={headerStyle}>
        <h1>{project.title}</h1>
        <h4>{project.ingress}</h4>
        { this.displayBody(project.body) }
      </div>
    );
  }
}

export default connect((state) => ({
  project: state.project,
}))(Header);
