import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Stop from 'material-ui-icons/Stop';
import Pause from 'material-ui-icons/Pause';
import SkipNext from 'material-ui-icons/SkipNext';
import PlayArrow from 'material-ui-icons/PlayArrow';

const styles = theme => ({
});

class Controller extends Component {
  render() {
    return (
      <div>
        <IconButton color="contrast">
          <Stop/>
        </IconButton>
        <IconButton color="contrast">
          <Pause/>
        </IconButton>
        <IconButton color="contrast">
          <SkipNext/>
        </IconButton>
        <IconButton color="contrast">
          <PlayArrow/>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Controller);
