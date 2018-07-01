import {createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import common from '@material-ui/core/colors/common';

export default createMuiTheme({
  palette: {
    primary: {
      light: purple[700],
      main: purple[400],
      dark: purple[200],
      contrastText: common.white,
    },
    secondary: {
      light: blue[700],
      main: blue[400],
      dark: blue[100],
      contrastText: common.black,
    },
  },
});
