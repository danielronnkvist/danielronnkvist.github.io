import {createStore, combineReducers} from "redux";

// Reducers
import project from './reducers/project.js';
import tab from './reducers/tab.js';

const rootReducer = combineReducers({
  project,
  tab,
});

export default createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
