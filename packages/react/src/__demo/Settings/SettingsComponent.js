import React from 'react';
import { withStyles } from '@material-ui/core';

let passedDownTheme;
const styles = (theme) => {
  passedDownTheme = theme;
  return {
    root: {}
  };
};

const Settings = (props) => {
  console.info(passedDownTheme);
  return (
    <div id="settings">
      Settings
    </div>
  );
};

export default withStyles(styles)(Settings);
