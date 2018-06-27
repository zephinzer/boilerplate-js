import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import qs from 'query-string';

const styles = (theme) => ({
  margins: {
    margin: theme.spacing.unit,
  },
});

/**
 * Search page
 */
class Search extends React.Component {
  state = {
    searchTerm: '',
  }

  /**
   * Constructor
   */
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  /**
   * handleSearch
   */
  handleSearch() {
    const searchQuery = encodeURIComponent(this.state.searchTerm);
    this.props.history.push({
      pathname: '/search',
      search: `?query=${searchQuery}`,
    });
  }

  /**
   * handleSearchChange
   * @param {Object} event
   */
  handleSearchChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  /**
   * @return {String}
   */
  render() {
    const query = qs.parse(this.props.location.search);
    const {classes} = this.props;
    const {searchTerm} = this.state;
    console.info(query);
    return (
      <div id="page-search">
        <form
          className={classes.margins}
          noValidate
          onSubmit={this.handleSearch}
        >
          <Grid
            alignItems="flex-end"
            container
            spacing={8}
          >
            <Grid item>
              <SearchIcon />
            </Grid>
            <Grid item xs>
              <TextField
                label="Search Term"
                fullWidth
                onChange={this.handleSearchChange}
                value={searchTerm}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                fullWidth
                onClick={this.handleSearch}
              >
                GO
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
};

export default withStyles(styles)(withRouter(Search));
