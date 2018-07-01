import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import {withStyles, Typography, Divider, Card, CardContent, CardHeader, CardActions, List, ListItem, Avatar, ListItemText, Tooltip} from '@material-ui/core';
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
  searchDebounce = null

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
  handleSearch(event) {
    (event) && event.preventDefault();
    const searchQuery = encodeURIComponent(this.props.store.currentQuery);
    if (searchQuery.length > 0) {
      this.props.dispatch.search(searchQuery);
      this.props.history.replace({
        pathname: '/__demo/search',
        search: `?query=${searchQuery}`,
      });
    } else {
      this.props.dispatch.clear();
      this.props.history.replace({
        pathname: '/__demo/search',
      });
    }
  }

  /**
   * handleSearchChange
   * @param {Object} event
   */
  handleSearchChange(event) {
    clearTimeout(this.searchDebounce);
    this.props.dispatch.updateQuery(event.target.value);
    this.searchDebounce = setTimeout(this.handleSearch, 800);
  }

  /**
   * componentWillMount
   */
  componentWillMount() {
    const query = qs.parse(this.props.location.search);
    if (query
      && (typeof query.query === 'string')
      && (query.query !== this.props.store.currentQuery)
    ) {
      this.handleSearchChange({target: {value: query.query}});
      this.props.dispatch.search(query.query);
    } else if (
      this.props.store.currentQuery && !query.query
    ) {
      this.props.history.replace({
        pathname: '/__demo/search',
        search: `?query=${this.props.store.currentQuery}`,
      });
    }
  }

  /**
   * @return {String}
   */
  render() {
    const {classes, store} = this.props;
    const {
      currentQuery,
      loadedQuery,
      results,
    } = store;
    return (
      <div id="page-search">
        <Grid container alignItems="flex-end" spacing={0} style={{padding: 24}}>
          <Grid item xs={12} style={{paddingBottom: 24}}>
            <Typography>
              This page demonstrates retrieving the URL query parameters and using it in the component.
            </Typography>
          </Grid>
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item xs>
            <TextField
              label="Search Term"
              fullWidth
              onChange={this.handleSearchChange}
              onKeyDown={(e) => (e.keyCode === 13) && this.handleSearch()}
              value={currentQuery}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider style={{margin: '24 0'}} />
          </Grid>
          <Grid item xs={12}>
          {loadedQuery ? (
            <Typography variant="title">
              Showing search results for: <b>{loadedQuery}</b> (<i>{results.length}</i> matches found)
            </Typography>
          ) : (
            <Typography variant="title">
              Enter a search above!
            </Typography>
          )}
          </Grid>
          <Grid item xs={12}>
            <Divider style={{margin: '24 0'}} />
          </Grid>
        </Grid>
        <List>
          {results.map((match) => {
            const {name, bio, email} = match.original;
            return (
              <ListItem key={name}>
                <Tooltip title={email}>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </Tooltip>
                <ListItemText primary={(<div dangerouslySetInnerHTML={{__html: match.string}}></div>)} secondary={bio} />
              </ListItem>
            )
          })}
        </List>
      </div>
    );
  }
};

export default withStyles(styles)(withRouter(Search));
