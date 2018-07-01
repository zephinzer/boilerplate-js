import actions from './actions';
import {initialState} from './reducers';

const {
  loadData,
  saveName,
  saveBio,
  saveEmail,
  saveUsername,
  savePassword,
  toggleConfirmation,
} = actions.actions;

export default {
  loadData: () => {
    return function(dispatch) {
      (new Promise((resolve, reject) => {
        fetch('/profile.json')
          .then((r) => {
            if (r.status === 200) {
              return r.json();
            } else {
              throw r;
            }
          })
          .then((response) => {
            setTimeout(() => {
              // simulate network latency
              resolve(response);
            }, 800);
          })
          .catch((err) => {
            if (err.status && err.url) {
              console.error(`HTTP ${err.status} on "${err.url}"`);
            } else {
              console.error('> unknown error follows');
              console.error(err);
              console.error('< unknown error follows');
            }
            reject(err);
          });
      })).then((results) => {
        dispatch(loadData({
          ...results,
          error: false,
        }));
      }).catch((err) => {
        // on error, we load initial state
        dispatch(loadData({
          ...initialState,
          error: err,
        }));
      });
    };
  },
  saveName,
  saveBio,
  saveEmail,
  saveUsername,
  savePassword,
  toggleConfirmation,
};
