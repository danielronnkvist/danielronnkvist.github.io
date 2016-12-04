import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import {
  createEpicMiddleware,
  combineEpics,
} from 'redux-observable';

// Epics
import {getPhotosEpic} from './containers/photos/actions.js';

export const rootEpic = combineEpics(
  getPhotosEpic,
);
const epicMiddleware = createEpicMiddleware(rootEpic);

// Reducers
import project from './reducers/project.js';
import photos from './reducers/photos.js';
import tab from './reducers/tab.js';

const rootReducer = combineReducers({
  project,
  photos,
  tab,
});

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(epicMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
