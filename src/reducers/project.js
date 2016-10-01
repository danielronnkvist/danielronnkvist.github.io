import { CHANGE_PROJECT } from './../actions';

let defaultState = {
  id: undefined,
  attributes: {
    title: "trevligheten",
    ingress: "daniel rönnkvist",
    image: "https://pbs.twimg.com/media/B_5YAYNUQAAjgTA.png",
  },
  html: undefined,
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_PROJECT:
      return action.payload;
    default:
      return state;
  }
}
