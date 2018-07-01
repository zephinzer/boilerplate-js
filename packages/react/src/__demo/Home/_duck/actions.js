import {createActions} from 'reduxsauce';

const {
  Creators,
  Types,
} = createActions({
  nextText: ['max'],
});

export default {
  actions: Creators,
  types: Types,
};
