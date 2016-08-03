import React from 'react';
import { browserHistory } from 'react-router';
import { DropdownButton, MenuItem } from 'react-bootstrap';

var CategoryDropdown = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: "../../json/categories.json",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var data = this.state.data;
    var dropDownItem = Object.keys(data).map(function(key) {
      return (
        <MenuItem eventKey={ key }>
          { data[key].name }
        </MenuItem>
      );
    });
    return (
      <DropdownButton onSelect={ function (key) { browserHistory.push('/category/' + key) }} title="Browse apps by category" id="browse-apps-category">
        { dropDownItem }
      </DropdownButton>
    );
  }
});

export default CategoryDropdown;
