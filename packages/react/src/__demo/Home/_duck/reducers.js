import actions from './actions';

const {
  NEXT_TEXT,
} = actions.types;

export const initialState = {
  counter: 0,
};

/**
 * Reducer for the HomeComponent
 *
 * @param {Object} state (previous)
 * @param {Object} action
 *
 * @return {Object} new state
 */
export default function homeReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case NEXT_TEXT:
      newState = {
        ...state,
        counter: Math.floor(Math.random() * action.max),
      };
      return newState;
    default:
      return state;
  }
};
