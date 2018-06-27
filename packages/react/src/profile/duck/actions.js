import {createActions} from 'reduxsauce';

const {Creators, Types} = createActions({
  saveName: ['value'],
  saveBio: ['value'],
  saveEmail: ['value'],
  saveUsername: ['value'],
  savePassword: ['value'],
});

export default {
  actions: Creators,
  types: Types,
};
