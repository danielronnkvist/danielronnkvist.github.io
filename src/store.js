import {createStore, combineReducers} from "redux";

// Reducers
import project from './reducers/project.js';

const rootReducer = combineReducers({
  project,
});

export default createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
