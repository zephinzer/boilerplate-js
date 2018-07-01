import React from 'react';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';

/**
 * User page
 */
class User extends React.Component {
  /**
   * Constructor
   */
  constructor() {
    super();
    this.handleGotoUser = this.handleGotoUser.bind(this);
  }

  /**
   * @param {String|Number} userId
   * @return {Function}
   */
  handleGotoUser(userId) {
    return () => {
      this.props.history.push(`/user/${userId}`);
    };
  }

  /**
   * @return {String}
   */
  render() {
    return (
      <div id="user">
        User
        <Button
          onClick={this.handleGotoUser(1)}
        >
          Go to User
        </Button>
      </div>
    );
  }
};

export default withRouter(User);
