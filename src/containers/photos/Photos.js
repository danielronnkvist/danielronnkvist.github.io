import React, { Component } from 'react';
import { connect } from "react-redux";
import './Photos.scss';
import Flickr from './Flickr.js';
import { getPhotos } from './actions.js';

class Photos extends Component {
  componentWillMount() {
    if(this.props.photos.length === 0) {
      this.props.getPhotos();
    }
  }

  render() {
    const {
      photos,
      loading,
    } = this.props;

    return (
      <div className="photos container">
        {loading ? <span>loading..</span> : photos.map(photo => (
          <img key={photo} src={photo} />
        ))}
      </div>
    );
  }
}

export default connect((state) => ({
  photos: state.photos.data,
  loading: state.photos.loading,
}), (dispatch) => ({
  getPhotos: state => dispatch(getPhotos(state)),
}))(Photos);
