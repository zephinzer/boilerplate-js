import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: 24,
    maxWidth: '100%',
  },
  input: {
    padding: 8,
  },
  rightAlign: {
    textAlign: 'right',
  },
  submitDivider: {
    marginTop: 8,
    marginBottom: 16,
  },
});

/**
 * ProfileComponent
 *
 * @param {*} props
 *
 * @return {String}
 */
function Profile(props) {
  const {classes} = props;
  const {
    bio,
    name,
    password,
    email,
    username,
  } = props.store;
  const {
    saveBio,
    saveName,
    savePassword,
    saveUsername,
    saveEmail,
  } = props.dispatch;
  return (
    <Grid
      container
      spacing={0}
      className={classes.root}
    >
      <Grid
        item
        xs={12}
      >
        <Typography>
          This page demonstrates linking up a global state via
          <code> connect()</code> from the <code>react-redux</code> library.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        className={classes.input}
      >
        <TextField
          fullWidth
          label='Full Name'
          helperText="Your real name please"
          value={name}
          onChange={(e) => saveName(e.target.value)}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        className={classes.input}
      >
        <TextField
          fullWidth
          multiline
          label="Bio"
          helperText="A few lines about yourself"
          value={bio}
          onChange={(e) => saveBio(e.target.value)}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        className={classes.input}
      >
        <TextField
          fullWidth
          label="Username"
          helperText="Your 1337 name (if you'd like)"
          value={username}
          onChange={(e) => saveUsername(e.target.value)}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        className={classes.input}
      >
        <TextField
          fullWidth
          label="Email Address"
          helperText="Your email address"
          value={email}
          onChange={(e) => saveEmail(e.target.value)}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        className={classes.input}
      >
        <TextField
          fullWidth
          label="Password"
          type="password"
          helperText="We'll keep it a secret, promise"
          value={password}
          onChange={(e) => {
            console.info(e.target.value);
            savePassword(e.target.value);
            }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        className={[classes.input, classes.rightAlign].join(' ')}
      >
        <Divider className={classes.submitDivider} />
        <Button
          color="primary"
          size="large"
          variant="contained"
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Profile);
