import { createAction } from 'redux-actions';

// REDUX ACTION TYPES

export const CHANGE_PROJECT = 'CHANGE_PROJECT';

// REDUX ACTIONS

export const changeProject = createAction(CHANGE_PROJECT, (id) => {
  return {
    id,
    body: require.context('./../data/', true, /\.md$/)(id),
  }
});
