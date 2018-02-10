import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import NewIcon from 'material-ui-icons/InsertDriveFile';
import SaveIcon from 'material-ui-icons/Save';
import LoadButton from "./LoadButton";

const styles = theme => ({
});

class Project extends Component {
  render() {
    return (
      <div>
        <List>
          <ListItem button>
            <ListItemIcon>
              <NewIcon />
            </ListItemIcon>
            <ListItemText primary="New" />
          </ListItem>
          <LoadButton/>
          <ListItem button>
            <ListItemIcon>
              <SaveIcon />
            </ListItemIcon>
            <ListItemText primary="Save" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Project);
