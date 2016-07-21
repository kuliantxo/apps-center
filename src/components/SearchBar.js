import React from 'react';
import { Link } from 'react-router';

var DropDownMenu = React.createClass({
  render: function() {
    var dropDownItem = this.props.data.map(function(item) {
      return (
        <li>
          <Link to={ '/app/' + item.id }>
            <div className="media">
              <div className="media-left media-middle">
                <img height="50" className="media-object" src={ 'https://images.appcenter.intuit.com/Content/images/AppCards' + item.img } />
              </div>
              <div className="media-body">
                <h4 className="media-heading">{ item.name }</h4>
                <div>{ item.tagline }</div>
              </div>
            </div>
          </Link>
        </li>
      );
    });
    return (
      <ul className="dropdown-menu hide" role="menu">
        { dropDownItem }
      </ul>
    );
  }
});

var SearchBar = React.createClass({
  getInitialState: function() {
    return {query: '', data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: "../../json/my.json",
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
  handleQueryChange: function(e) {
    this.setState({query: e.target.value});
    if (e.target.value.length > 3) {
      $('.search-bar-form .dropdown-menu').removeClass('hide');
    } else {
      $('.search-bar-form .dropdown-menu').addClass('hide');
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var query = this.state.query.trim();
    if (!query) {
      return;
    }
    // TODO: send request to the server
    this.setState({query: ''});
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit} className="search-bar-form">
        <div className="input-group">
          <input type="text" className="dropdown-toggle form-control" data-toggle="dropdown"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
          <DropDownMenu data={this.state.data} />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button">
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>
      </form>
    );
  }
});

export default SearchBar;
