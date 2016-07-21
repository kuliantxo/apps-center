import React from 'react';
import AppCardBoxComp from '../components/Cards.js';

let Search = React.createClass({
  getInitialState: function() {
    return {data: []};
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
  render() {
    return(
      <AppCardBoxComp data={ this.state.data } />
    );
  }
});

export default Search;
