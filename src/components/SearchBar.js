import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import Typeahead from 'react-bootstrap-typeahead';

var DropDownMenu = React.createClass({
  render: function() {
    var dropDownItem = this.props.data.map(function(item) {
      return (
        <li key={ item.id }>
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
  _handleChange: function(query) {
    console.log('pinch', query[0].id);
    browserHistory.push('/search/' + query[0].id);
  },
  render: function() {
    return (
      <Typeahead
        labelKey="name"
        onChange={this._handleChange}
        options={this.state.data}
      />
    );
  }
});

export default SearchBar;
