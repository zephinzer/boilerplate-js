import actions from './actions';

const {
  SAVE_NAME,
  SAVE_BIO,
  SAVE_EMAIL,
  SAVE_USERNAME,
  SAVE_PASSWORD,
} = actions.types;

const initialState = {
  name: '',
  bio: '',
  email: '',
  username: '',
  password: '',
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
  switch (action.type) {
    case SAVE_NAME:
      return ({...state, name: action.value});
    case SAVE_BIO:
      return ({...state, bio: action.value});
    case SAVE_EMAIL:
      return ({...state, email: action.value});
    case SAVE_USERNAME:
      return ({...state, username: action.value});
    case SAVE_PASSWORD:
      return ({...state, password: action.value});
    default:
      return state;
  }
};
