// REDUX ACTION TYPES

export const CHANGE_PROJECT = 'CHANGE_PROJECT';

// Helper methods

let createAction = (type, payloadCreator = () => undefined) => ({
  type,
  payload: typeof payloadCreator === 'function' ? payloadCreator() : undefined,
});

// REDUX ACTIONS

export const changeProject = createAction(CHANGE_PROJECT, (id) => id);
