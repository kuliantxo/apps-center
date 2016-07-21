import React from 'react';
import { Link } from 'react-router';

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
    var dropDownItem = this.state.data.map(function(item) {
      return (
        <li>
          <Link to={ '/category/' + item.id }>
            { item.name }
          </Link>
        </li>
      );
    });
    return (
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="categroyDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Browse apps by category
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="categoryDropdownropdown">
          { dropDownItem }
        </ul>
      </div>
    );
  }
});

export default CategoryDropdown;
