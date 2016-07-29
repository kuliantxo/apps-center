import React from 'react';
import AppCardBoxComp from '../components/cards/Cards.js';

let CategoryTitle = React.createClass({
  getInitialState: function() {
console.log('CategoryTitle getInitialState', this.props);
    return {title: ''};
  },
  updateTitle: function(prop) {
console.log('CategoryTitle updateTitle', prop);
    $.ajax({
      url: "../../json/categories.json",
      dataType: 'json',
      cache: false,
      success: function(data) {
    console.log('CategoryTitle ajax', prop);
    console.log('CategoryTitle ajax', data);
        this.setState({title: data[prop].name});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentWillReceiveProps: function(nextProps) {
console.log('CategoryTitle componentWillReceiveProps', nextProps);
    this.updateTitle(nextProps.cat);
  },
  componentDidMount: function() {
console.log('CategoryTitle componentDidMount', this.props);
    this.updateTitle(this.props.cat);
  },
  render() {
console.log('CategoryTitle', this.props);
    return(
      <h1>{ this.state.title }</h1>
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
