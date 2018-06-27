import {connect} from 'react-redux';
import profileOperations from './duck/operations';
import ProfileComponent from './ProfileComponent';

const mapStateToProps = (state) => ({store: state.profile});
const mapDispatchToProps = (dispatch) => ({
  dispatch:
    Object.keys(profileOperations).reduce((e, operation) =>
      Object.assign(
        {}, e,
        {
          [operation]: (val) => dispatch(profileOperations[operation](val)),
        }), {}
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileComponent);
