import actions from './actions';

const {
  CLEAR,
  SEARCH,
  TOGGLE_LOADING,
  UPDATE_QUERY,
} = actions.types;

export const initialState = {
  currentQuery: '',
  loading: false,
  loadedQuery: '',
  results: [],
};

/**
 * @param {Object} state
 * @param {Object} action
 *
 * @return {Object}
 */
export default function searchReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SEARCH:
      newState = {
        ...state,
        loadedQuery: action.query,
        results: action.results,
      };
      return newState;
    case TOGGLE_LOADING:
      newState = {
        ...state,
        loading: !state.loading,
      };
      return newState;
    case UPDATE_QUERY:
      newState = {
        ...state,
        currentQuery: action.query,
      };
      return newState;
    case CLEAR:
      newState = {
        ...state,
        curentQuery: '',
        loadedQuery: '',
        results: [],
      };
      return newState;
    default:
      return state;
  }
};
