import { createAction } from 'redux-actions';
import { requireProject, animateScrollTo } from './helpers.js';

// REDUX ACTION TYPES

export const CHANGE_PROJECT = 'CHANGE_PROJECT';
export const RESET_PROJECT = 'RESET_PROJECT';

// REDUX ACTIONS

export const changeProject = createAction(CHANGE_PROJECT, (id) => {
  animateScrollTo(500);
  return requireProject(id);
});

export const resetProject = createAction(RESET_PROJECT);
