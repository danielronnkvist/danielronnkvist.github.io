import { createAction } from 'redux-actions';
import { requireProject } from './helpers.js';

// REDUX ACTION TYPES

export const CHANGE_PROJECT = 'CHANGE_PROJECT';

// REDUX ACTIONS

export const changeProject = createAction(CHANGE_PROJECT, (id) => {
  return requireProject(id);
});
