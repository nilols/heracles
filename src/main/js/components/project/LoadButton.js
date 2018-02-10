import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import LoadIcon from 'material-ui-icons/OpenInBrowser';

export default class LoadButton extends Component {

  updateInputRef = (element) => {
    this.element = element;
  };

  updateFormRef = (form) => {
    this.form = form;
  };

  openFileChooser = () => {
    this.element.value = null;
    this.element.click();
  };

  submit = () => {
    this.form.submit();
  };

  render() {
    const options = {
      accept: '.json, .graphml',
      hidden: true,
      multiple: true,
      name: 'files',
      onChange: this.submit,
      ref: this.updateInputRef,
      type: "file"
    };
    return (
      <ListItem button>
        <form ref={this.updateFormRef} method="post" encType="multipart/form-data">
          <input {...options}/>
        </form>
        <ListItemIcon>
          <LoadIcon onClick={this.openFileChooser} />
        </ListItemIcon>
        <ListItemText primary="Load" />
      </ListItem>
    );
  }
}
