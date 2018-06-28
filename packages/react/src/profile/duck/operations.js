import actions from './actions';
import {initialState} from './reducers';

const LOCAL_STORAGE_KEY = 'profile';

const {
  loadData,
  saveName,
  saveBio,
  saveEmail,
  saveUsername,
  savePassword,
  toggleLoaded,
} = actions.actions;

export default {
  loadData: () => {
    return function(dispatch) {
      (new Promise((resolve, reject) => {
        setTimeout(() => {
          const savedProfileData = localStorage.getItem(LOCAL_STORAGE_KEY);
          if (savedProfileData !== null) {
            resolve(JSON.parse(savedProfileData));
          } else {
            const initialProfileData = JSON.stringify(initialState);
            localStorage.setItem(LOCAL_STORAGE_KEY, initialProfileData);
            resolve(initialState);
          }
        }, 1000);
      })).then((results) => {
        dispatch(loadData(results));
      });
    };
  },
  saveName,
  saveBio,
  saveEmail,
  saveUsername,
  savePassword,
  toggleLoaded,
};
