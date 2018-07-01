import actions from './actions';

const {
  LOAD_DATA,
  SAVE_NAME,
  SAVE_BIO,
  SAVE_EMAIL,
  SAVE_USERNAME,
  SAVE_PASSWORD,
  TOGGLE_CONFIRMATION,
} = actions.types;

export const initialState = {
  name: '',
  bio: '',
  email: '',
  username: '',
  password: '',
  loaded: false,
  confirmation: false,
};

/**
 * profileReducer
 *
 * @param {Object} state
 * @param {Object} action
 *
 * @return {Object} - updated state
 */
export default function profileReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_DATA:
      return ({...state, ...action.data, loaded: true});
    case SAVE_NAME:
      newState = {...state, name: action.value};
      return newState;
    case SAVE_BIO:
      newState = {...state, bio: action.value};
      return newState;
    case SAVE_EMAIL:
      newState = {...state, email: action.value};
      return newState;
    case SAVE_USERNAME:
      newState = {...state, username: action.value};
      return newState;
    case SAVE_PASSWORD:
      newState = {...state, password: action.value};
      return newState;
    case TOGGLE_CONFIRMATION:
      newState = {...state, confirmation: action.to};
      return newState;
    default:
      return state;
  }
};
