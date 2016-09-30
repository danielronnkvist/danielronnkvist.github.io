import { CHANGE_PROJECT } from './../actions';

export default (state = {
  id: undefined,
}, action) => {
  switch(action.type) {
    case CHANGE_PROJECT:
      return {
        id: action.payload,
      };
    default:
      return state;
  }
}
