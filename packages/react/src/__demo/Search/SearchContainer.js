import {connect} from 'react-redux';
import searchOperations from './_duck/operations';
import SearchComponent from './SearchComponent';

const mapStateToProps = (state) => ({
  store: state.demo.search,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: Object.keys(searchOperations).reduce((e, operation) =>
    Object.assign({}, e, {
      [operation]: (val) => dispatch(searchOperations[operation](val)),
    }), {}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchComponent);
