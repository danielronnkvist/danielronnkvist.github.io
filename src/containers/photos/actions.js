import Flickr from './Flickr.js';

export const GET_PHOTOS = 'get_photos';
export const GET_PHOTOS_FULLFILLED = 'get_photos_fullfilled';

export const getPhotos = (payload) => ({ type: GET_PHOTOS, payload });
export const getPhotosFullfilled = (payload) => ({type: GET_PHOTOS_FULLFILLED, payload});

// Epics
export const getPhotosEpic = (action$) =>
  action$.ofType(GET_PHOTOS)
    .mergeMap(action =>
    Flickr.photos().map(getPhotosFullfilled)
    )
