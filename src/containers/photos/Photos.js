import React, { Component } from 'react';
import { connect } from "react-redux";
import './Photos.scss';
import Flickr from './Flickr.js';
import { getPhotos } from './actions.js';

class Photos extends Component {
  componentWillMount() {
    this.props.getPhotos();
  }

  render() {
    const {
      photos,
    } = this.props;

    return (
      <div className="photos container">
        {photos.map(photo => (
          <img key={photo} src={photo} />
        ))}
      </div>
    );
  }
}

export default connect((state) => ({
  photos: state.photos,
}), (dispatch) => ({
  getPhotos: state => dispatch(getPhotos(state)),
}))(Photos);
