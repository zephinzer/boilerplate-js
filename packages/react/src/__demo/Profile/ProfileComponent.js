import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  CircularProgress,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: 24,
    maxWidth: '100%',
  },
  centerAlign: {
    textAlign: 'center',
  },
  fadedText: {
    color: '#777',
  },
  loaderBackdrop: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    boxShadow: 'none',
  },
  paperRoot: {
    margin: '0 24',
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
    loaded,
    confirmation,
  } = props.store;
  const {
    loadData,
    saveBio,
    saveName,
    savePassword,
    saveUsername,
    saveEmail,
    toggleConfirmation,
  } = props.dispatch;

  if (!loaded) {
    loadData();
  }

  const backgroundTransparent = {
    className: classes.loaderBackdrop,
  };
  const circularSpinnerProps = {
    className: classes.fadedText,
    thickness: 4,
  };
  const spinnerCaptionProps = {
    className: classes.fadedText,
    variant: 'button',
    style: {marginTop: 8},
  };
  const pageLoadSpinner = (
    <Dialog
      open={!loaded}
      PaperProps={backgroundTransparent}
      BackdropProps={backgroundTransparent}
      {...backgroundTransparent}
    >
      <DialogContent className={classes.centerAlign}>
        <CircularProgress {...circularSpinnerProps} />
        <DialogContentText>
          <Typography {...spinnerCaptionProps}>
            Loading
          </Typography>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );

  const sectionHeading = ({classes, text}) => (
    <Grid
      container
      spacing={0}
      className={classes}
    >
      <Typography
        variant="title"
        spacing={16}
      >
        {text}
      </Typography>
    </Grid>
  );

  const nameField = (
    <TextField
      fullWidth
      label='Full Name'
      helperText="Your real name please"
      value={name}
      onChange={(e) => saveName(e.target.value)}
    />
  );

  const bioField = (
    <TextField
      fullWidth
      multiline
      label="Bio"
      helperText="A few lines about yourself"
      value={bio}
      onChange={(e) => saveBio(e.target.value)}
    />
  );

  const usernameField = (
    <TextField
      fullWidth
      label="Username"
      helperText="Your 1337 name (if you'd like)"
      value={username}
      onChange={(e) => saveUsername(e.target.value)}
    />
  );

  const emailField = (
    <TextField
      fullWidth
      label="Email Address"
      helperText="Your email address"
      value={email}
      onChange={(e) => saveEmail(e.target.value)}
    />
  );

  const passwordField = (
    <TextField
      fullWidth
      label="Password"
      type="password"
      helperText="We'll keep it a secret, promise"
      value={password}
      onChange={(e) => savePassword(e.target.value)}
    />
  );

  return (
    <div id="page-profile">
      {pageLoadSpinner}
      <Fade in={loaded}>
        <div id="page-profile-loaded">
          <Grid container spacing={0} className={classes.root}>
            <Grid
              item
              xs={12}
            >
              <Typography>
                This page demonstrates linking up a global state via
                <code> connect()</code> from the <code>react-redux</code>
                library.
              </Typography>
              <br />
              <Typography>
                This page draws information from a mock API that can be
                found at <code>~/__demo/__server_static/profile.json</code>.
                A timeout is also provided to demonstrate how to create a
                loader overlay.
              </Typography>
            </Grid>
          </Grid>
          {sectionHeading({text: 'Profile Information', classes: classes.root})}
          <Paper
            className={classes.paperRoot}
          >
            <Grid container spacing={0} className={classes.root}>
              <Grid item xs={12} sm={4} className={classes.input}>
                {nameField}
              </Grid>
              <Grid item xs={12} sm={8} className={classes.input}>
                {bioField}
              </Grid>
            </Grid>
          </Paper>
          {sectionHeading({text: 'Account Information', classes: classes.root})}
          <Paper
            className={classes.paperRoot}
          >
            <Grid container spacing={0} className={classes.root}>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                className={classes.input}
              >
                {usernameField}
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                className={classes.input}
              >
                {emailField}
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                className={classes.input}
              >
                {passwordField}
              </Grid>
            </Grid>
          </Paper>
          <Grid container spacing={0} className={classes.root}>
            <Grid
              item
              xs={12}
              className={[classes.input, classes.rightAlign].join(' ')}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="I confirm that the above information provided by me is correct and true"
              />
              <Divider className={classes.submitDivider} />
              {renderSubmitButton.bind(this)({
                toggleConfirmation,
                confirmation,
                action: {
                  cancel: () => toggleConfirmation(false),
                  submit: () => toggleConfirmation(false),
                },
              })}
            </Grid>
          </Grid>
        </div>
      </Fade>
    </div>
  );
};

function renderSubmitButton({
  toggleConfirmation,
  confirmation,
  action: {
    cancel,
    submit,
  },
}) {
  const onClick = () => {
    toggleConfirmation(true);
  };

  return (
    <div id="demo-page-submit-button">
      <Dialog
        open={confirmation}
      >
        <DialogTitle>
          Confirm Profile Save
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your profile is important to us. Are you sure you wish to change it?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={cancel}
          >
            Cancel
          </Button>
          <Button
            autoFocus
            color="primary"
            onClick={submit}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        color="primary"
        onClick={onClick}
        size="large"
        variant="contained"
      >
        Submit
      </Button>
    </div>
  )
};

export default withStyles(styles)(Profile);
