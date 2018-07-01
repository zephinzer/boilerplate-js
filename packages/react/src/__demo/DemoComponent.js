import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core';

import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Settings from './Settings';
import User, {UserId} from './User';

import MenuBar from './common/MenuBar';
import theme from './common/theme';

export default (props) => {
  return (
    <div id="demo">
      <MuiThemeProvider theme={theme}>
        <MenuBar />
        <Switch>
          <Route exact path="/__demo" component={Home} />
          {/* demonstrates custom path */}
          <Route path="/__demo/profile" component={Profile} />
          {/* demonstrates sub routing */}
          <Route path="/__demo/settings" component={Settings} />
          {/* demonstrates query parameter search */}
          <Route path="/__demo/search" component={Search} />
          {/* demonstrates url parameter search */}
          <Route path="/__demo/user/:id" component={UserId} />
          <Route exact path="/__demo/user" component={User} />
        </Switch>
      </MuiThemeProvider>
    </div>
  );
};
