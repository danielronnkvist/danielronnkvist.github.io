import React, { Component } from 'react';
import './App.scss';

// Components
import Header from './../header/Header.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header title="trevligheten" ingress="daniel rönnkvist"/>
      </div>
    );
  }
}
