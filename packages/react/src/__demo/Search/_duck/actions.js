import {createActions} from 'reduxsauce';

const {Creators, Types} = createActions({
  search: ['query', 'results'],
  toggleLoading: [],
  updateQuery: ['query'],
  clear: [],
});

export default {
  actions: Creators,
  types: Types,
};
