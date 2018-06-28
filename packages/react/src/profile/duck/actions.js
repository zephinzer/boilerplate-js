import {createActions} from 'reduxsauce';

const {Creators, Types} = createActions({
  loadData: ['data'],
  saveName: ['value'],
  saveBio: ['value'],
  saveEmail: ['value'],
  saveUsername: ['value'],
  savePassword: ['value'],
  toggleLoaded: [],
});

export default {
  actions: Creators,
  types: Types,
};
