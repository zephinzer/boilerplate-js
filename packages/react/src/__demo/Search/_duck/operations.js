import actions from './actions';
import fuzzy from 'fuzzy';

const {
  clear,
  search,
  toggleLoading,
  updateQuery,
} = actions.actions;

export default {
  clear,
  search: (query) => {
    return function(dispatch) {
      (new Promise((resolve, reject) => {
        fetch('/search.json')
          .then((r) => r.json())
          .then((result) => {
            resolve(
              fuzzy.filter(query, result, {
                pre: '<span style="color: #444; background-color: rgba(0, 128, 0, 0.2)">',
                post: '</span>',
                extract: (el) => el.name,
              }).map((el) => el)
            );
          });
      })).then((results) => {
        dispatch(search(
          query,
          results,
        ));
      });
    };
  },
  toggleLoading,
  updateQuery,
};
