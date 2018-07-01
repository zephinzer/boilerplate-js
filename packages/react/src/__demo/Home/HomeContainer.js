import HomeComponent from './HomeComponent';
import homeOperations from './_duck/operations';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  store: state.demo.home,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: Object.keys(homeOperations).reduce((e, operation) =>
    Object.assign({}, e, {
      [operation]: (val) => dispatch(homeOperations[operation](val)),
    }), {}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent);
