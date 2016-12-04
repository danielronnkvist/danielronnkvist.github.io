import {
  CHANGE_TAB,
} from './../actions';
import {
  PROJECTS,
  PHOTOS,
} from './../components/tabs/constants';

let defaultState = PROJECTS;

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_TAB:
      return action.payload;
    default:
      return state;
  }
}
