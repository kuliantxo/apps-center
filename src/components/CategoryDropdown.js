import React from 'react';
import { Link } from 'react-router';
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
        <MenuItem key={ key }>
          <Link to={ '/category/' + key }>
            { data[key].name }
          </Link>
        </MenuItem>
      );
    });
    return (
      <DropdownButton title="Browse apps by category" id="browse-apps-category">
        { dropDownItem }
      </DropdownButton>
    );
  }
});

export default CategoryDropdown;
