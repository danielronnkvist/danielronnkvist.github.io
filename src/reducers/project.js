import { CHANGE_PROJECT } from './../actions';

let defaultState = {
  id: undefined,
  title: "trevligheten",
  ingress: "daniel rönnkvist",
  body: undefined,
  image: "https://pbs.twimg.com/media/B_5YAYNUQAAjgTA.png",
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_PROJECT:
      return action.payload;
    default:
      return state;
  }
}
