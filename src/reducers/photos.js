import {
  GET_PHOTOS_FULLFILLED,
} from './../containers/photos/actions';

let defaultState = [];

export default (state = defaultState, action) => {
  switch(action.type) {
    case GET_PHOTOS_FULLFILLED:
      return action.payload;
    default:
      return state;
  }
}
