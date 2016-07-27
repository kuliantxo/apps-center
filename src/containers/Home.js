import React from 'react';
import CardsPagination from '../components/cards-pagination/CardsPagination.js';

let Home = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: "../../json/all.json",
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
      <div>
        <h1>All Apps</h1>
        <CardsPagination data={ this.state.data } />
      </div>
    );
  }
});

export default Home;
