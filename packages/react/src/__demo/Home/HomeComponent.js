import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/KeyboardArrowDown';
import { withStyles, IconButton, Button, Zoom, Grow, Paper, Hidden } from '@material-ui/core';
import './HomeComponent.css';

const styles = (theme) => ({
  splash: {
    backgroundImage: 'url(/images/home.jpg)',
    backgroundSize: 'cover',
    height: '90%',
    minHeight: '400px',
    position: 'fixed',
    zIndex: 0,
  },
  splashPlacebo: {
    height: '90%',
    minHeight: '400px',
  },
  splashTextContainer: {
    textAlign: 'center',
  },
  splashText: {
    alignSelf: 'center',
  },
  contentContainer: {
    backgroundColor: theme.palette.background.default,
    zIndex: 1,
  },
  contentInnerContainer: {
    backgroundColor: theme.palette.background.default,
    padding: 16,
    zIndex: 1,
  },
});

const helloText = [
  'Hello',
  'Bonjour',
  'Selamat',
  '你好',
  'مرحبا',
  'হ্যালো',
  'Kamusta',
  'Hei',
  'नमस्ते',
  'Salve',
];
let lastCounter;

const HomeComponent = ({classes, dispatch, store}) => {
  setTimeout(() => {
    dispatch.nextText(helloText.length);
  }, 2000);
  const homeComponent = (
    <div id="demo-home">
      <Grid container alignItems="center" direction="row" className={classes.splash}>
        <Grid item xs={12} className={classes.splashTextContainer}>
          <Typography variant="display4" className={classes.splashText}>
            {helloText[store.counter]}
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems="center" direction="column" className={classes.splashPlacebo}>
      </Grid>
      <Grid container alignItems="center" direction="row" style={{maxHeight: 80}}>
        <Grid item xs={12} className={classes.contentContainer} style={{textAlign: 'center', paddingBottom: 24}}>
          <Button variant="fab" color="primary" style={{height: 80, width: 80, marginTop: -40}}>
            <ArrowDownwardIcon style={{fontSize: 80, marginTop: 4}} className="animate-bounce bounce" />
          </Button>
        </Grid>
      </Grid>
      <Grid container className={classes.contentContainer}>
        <Hidden only="xs">
          <Grid item sm={2} md={3} lg={3} className={classes.contentInnerContainer} />
        </Hidden>
        <Grid item xs={12} sm={8} md={6} lg={6} className={classes.contentInnerContainer}>
          <Paper style={{padding: 8}} className={classes.contentInnerContainer}>
            <Typography variant="body2">
              Hello there!
            </Typography>
          </Paper>
        </Grid>
        <Hidden only="xs">
          <Grid item sm={2} md={3} lg={3} className={classes.contentInnerContainer} />
        </Hidden>
      </Grid>
    </div>
  );
  lastCounter = store.counter;
  return homeComponent;
};

export default withStyles(styles)(HomeComponent);
