import React from 'react';
import { Link } from 'react-router';
import AppCardComp from '../cards/Cards.js';


var Pagination = React.createClass({
  handleClick: function(e, i) {
    e.preventDefault();
console.log(e);
console.log(e.target);
console.log(i);
    // var author = this.state.author.trim();
    // var text = this.state.text.trim();
    // if (!text || !author) {
    //   return;
    // }
    // // TODO: send request to the server
    // this.setState({author: '', text: ''});
  },
  render: function() {
console.log('Pagination', this.props);
    var pages = [];
    var activeClass = '';
    pages.push(<li><a href="#" onClick={ this.handleClick } aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>);
    for(var i = 1; i < this.props.pages; i++){
      activeClass = (i == this.props.page) ? 'active' : '';
//      var boundClick = function(e) { this.handleClick.bind(this, e, i); };
      pages.push(<li className={ activeClass }><a href="#" onClick={ function(e) { this.handleClick.bind(this, e, i); } }>{ i }</a></li>);
    }
    pages.push(<li><a href="#" onClick={ this.handleClick } aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>);
    return (
      <nav aria-label="Cards navigation">
        <ul className="pagination">
          { pages }
        </ul>
      </nav>
    );
  }
});

var CardsPagination = React.createClass({
  getInitialState: function() {
    return {
      page: 1
    };
  },
  componentDidMount: function() {
  },
  handleClick: function(e) {
    e.preventDefault();
    // var author = this.state.author.trim();
    // var text = this.state.text.trim();
    // if (!text || !author) {
    //   return;
    // }
    // // TODO: send request to the server
    // this.setState({author: '', text: ''});
  },
  render: function() {
    console.log('CardsPagination', this.props);
    console.log('CardsPagination', this.state);
    var pages = this.props.data.length / 8;
    var paginated = this.props.data.slice(0, 8);
    return (
      <div>
        <AppCardComp data={ paginated } />
        <Pagination page={ this.state.page } pages={ pages } />
      </div>
    );
  }
});

export default CardsPagination;
