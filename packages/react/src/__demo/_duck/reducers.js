import {combineReducers} from 'redux';
import profileReducer from '../Profile/_duck/reducers';
import searchReducer from '../Search/_duck/reducers';
import homeReducer from '../Home/_duck/reducers';

const reducer = combineReducers({
  profile: profileReducer,
  search: searchReducer,
  home: homeReducer,
});

export default reducer;
