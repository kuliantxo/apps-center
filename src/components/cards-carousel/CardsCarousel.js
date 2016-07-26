import React from 'react';
import { Link } from 'react-router';
import AppCardComp from '../cards/Cards.js';
require("./carousel.less");

var CardsCarousel = React.createClass({
  render: function() {
    var rating = [], tmp = [], isActive = 'item active';
    for(var i = 0, l = this.props.data.length; i < l; i++) {
      if ((i > 0) && (i % 4 == 0)) {
        rating.push(<div className={ isActive }><AppCardComp data={ tmp } /></div>);
        isActive = 'item';
        tmp = [];
      }
      tmp.push(this.props.data[i]);
    }
    if (tmp.length > 0) {
      rating.push(<div className='item'><AppCardComp data={ tmp } /></div>);
    }
    return (
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
            { rating }
        </div>

        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
});

export default CardsCarousel;
