import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {withStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {MenuList, ListItemIcon, ListItemText} from '@material-ui/core';
import common from '@material-ui/core/colors/common';

const styles = (theme) => {
  return {
    appBar: {
      backgroundColor: theme.palette.background.default,
      boxShadow: 'none',
    },
    titleText: {
      color: common.black,
      fontWeight: 100,
    },
  };
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
    this.closeMenu = this.closeMenu.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleNavigateTo = this.handleNavigateTo.bind(this);
  }

  /**
   * Closes the menu
   *
   * @param {Object} event
   */
  closeMenu(event) {
    (this.state.menuOpen) && this.setState({
      menuOpen: false,
    });
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
      this.props.history.push(`/__demo${location}`);
      this.closeMenu();
    };
  }

  /**
   * Renders
   * @return {String}
   */
  render() {
    const {classes} = this.props;
    const {menuAnchor, menuOpen} = this.state;
    return (
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={this.handleMenu}
            style={{color: common.black}}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={menuOpen}
          >
            <ClickAwayListener onClickAway={this.closeMenu}>
              <MenuList>
                <MenuItem
                  onClick={this.handleNavigateTo('/')}
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </MenuItem>
                <MenuItem
                  onClick={this.handleNavigateTo('/profile')}
                >
                  <ListItemIcon>
                    <FaceIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </MenuItem>
                <MenuItem
                  onClick={this.handleNavigateTo('/search')}
                >
                  <ListItemIcon>
                    <SearchIcon />
                  </ListItemIcon>
                  <ListItemText primary="Search" />
                </MenuItem>
                <MenuItem
                  onClick={this.handleNavigateTo('/settings')}
                >
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </MenuItem>
                <MenuItem
                  onClick={this.handleNavigateTo('/user')}
                >
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Users" />
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Menu>
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
