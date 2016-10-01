import {
  CHANGE_PROJECT,
  RESET_PROJECT,
} from './../actions';

let defaultState = {
  id: undefined,
  attributes: {
    title: "trevligheten",
    ingress: "daniel rönnkvist",
    image: "home.jpg",
  },
  html: undefined,
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_PROJECT:
      return action.payload;
    case RESET_PROJECT:
      return defaultState;
    default:
      return state;
  }
}
