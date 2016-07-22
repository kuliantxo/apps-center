import React from 'react';
import AppCardBoxComp from '../components/cards/Cards.js';

let CategoryTitle = React.createClass({
  getInitialState: function() {
    return {data: ''};
  },
  componentDidMount: function() {
    $.ajax({
      url: "../../json/categories.json",
      dataType: 'json',
      cache: false,
      success: function(data) {
console.log('CategoryTitle ajax', this.props.cat);
console.log('CategoryTitle ajax', data);
        this.setState({data: data[this.props.cat].name});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render() {
//    console.log('CategoryTitle', this.props.cat);
//    console.log('CategoryTitle', this.state.data);
    return(
      <h1>{ this.state.data }</h1>
//      <h1>{ this.state.data[this.props.cat].name }</h1>
    );
  }
});

let Category = React.createClass({
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
    console.log('Category', this.props);
    return(
      <div>
        <CategoryTitle cat={ this.props.params.cat } />
        <AppCardBoxComp data={ this.state.data } />
      </div>
    );
  }
});

export default Category;
