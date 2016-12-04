import {
  GET_PHOTOS_FULLFILLED,
  GET_PHOTOS,
} from './../containers/photos/actions';

let defaultState = {
  data: [],
  loading: false,
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case GET_PHOTOS:
      return Object.assign({}, state, {
        loading: true,
      });
    case GET_PHOTOS_FULLFILLED:
      return {
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
