import {connect} from 'react-redux';
import DemoComponent from './DemoComponent';

const mapStateToProps = (state) => ({store: state.demo});
const mapDispatchToProps = (dispatch) => ({
  dispatch: {},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoComponent);
