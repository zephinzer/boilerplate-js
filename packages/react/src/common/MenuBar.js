import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';

const styles = {
  titleText: {
    color: 'white',
  },
};

/**
 * MenuBar
 */
class MenuBar extends React.Component {
  state = {
    menuOpen: false,
    menuAnchor: null,
  }

  /**
   * Construtor
   */
  constructor() {
    super();
    this.handleMenu = this.handleMenu.bind(this);
    this.handleNavigateTo = this.handleNavigateTo.bind(this);
  }

  /**
   * @param {Object} event
   */
  handleMenu(event) {
    this.setState({
      menuOpen: !this.state.menuOpen,
      menuAnchor: this.state.menuOpen ? null : event.currentTarget,
    });
  }

  /**
   * Handles navigation to :location.
   *
   * @param {String} location
   * @return {Function}
   */
  handleNavigateTo(location) {
    return (event) => {
      this.handleMenu(event);
      this.props.history.push(location);
    };
  }

  /**
   * Renders
   * @return {String}
   */
  render() {
    const {classes} = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar>
          <div>
            <IconButton
              color="inherit"
              onClick={this.handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={this.state.menuAnchor}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={this.state.menuOpen}
            >
              <MenuItem
                onClick={this.handleNavigateTo('/')}
              >
                Home
              </MenuItem>
              <MenuItem
                onClick={this.handleNavigateTo('/profile')}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={this.handleNavigateTo('/search')}
              >
                Search
              </MenuItem>
              <MenuItem
                onClick={this.handleNavigateTo('/settings')}
              >
                Settings
              </MenuItem>
              <MenuItem
                onClick={this.handleNavigateTo('/user')}
              >
                Users
              </MenuItem>
            </Menu>
          </div>
          <Typography
            variant="title"
            className={classes.titleText}
          >
            Boilerplate-React
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
};

export default
  withRouter(
    withStyles(styles)(MenuBar)
  );
