import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import MenuBar from './common/MenuBar';
import Home from './home';
import Profile from './profile';
import Settings from './settings';
import Search from './search';
import User, {UserId} from './user';

/**
 * Main application
 */
export default class App extends React.Component {
  /**
   * Renders the main application
   * @return {String}
   */
  render() {
    return (
      <div id="app">
        <CssBaseline />
        <Router>
          <div>
            <MenuBar />
            <Route exact path="/" component={Home} />
            {/* demonstrates custom path */}
            <Route path="/profile" component={Profile} />
            {/* demonstrates sub routing */}
            <Route path="/settings" component={Settings} />
            {/* demonstrates query parameter search */}
            <Route path="/search" component={Search} />
            {/* demonstrates url parameter search */}
            <Route path="/user/:id" component={UserId} />
            <Route exact path="/user" component={User} />
          </div>
        </Router>
      </div>
    );
  }
};

(module.hot) && module.hot.accept();
const applicationEntrypoint = document.getElementById('app-entrypoint');
applicationEntrypoint ? ReactDOM.render(<App />, applicationEntrypoint) : false;
