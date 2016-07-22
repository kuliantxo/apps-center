import React from 'react';
import { Link } from 'react-router';
require("./cards.less");

var AppCardRatingsComp = React.createClass({
  render: function() {
    var rating = [];
    for(var i = 0; i < 5; i++) {
      if (this.props.rating > i) {
        if (this.props.rating > i && this.props.rating < (i+1)) {
          rating.push(<span key={ i } className="rating"><span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span><span className="glyphicon glyphicon-star glyphicon-star-half" aria-hidden="true"></span></span>);
        } else {
          rating.push(<span key={ i } className="rating"><span className="glyphicon glyphicon-star" aria-hidden="true"></span></span>);
        }
      } else {
        rating.push(<span key={ i } className="rating"><span className="glyphicon glyphicon-star-empty" aria-hidden="true"></span></span>);
      }
    }
    return (
      <div className="ratings">
        { rating }
        <span className="reviews">({ this.props.reviews })</span>
      </div>
    );
  }
});

var AppCard = React.createClass({
  render: function() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <Link to="/app/peperoni">
          <div className="thumbnail thumbnail-card">
            <img src={ 'https://images.appcenter.intuit.com/Content/images/AppCards' + this.props.item.img } />
            <div className="caption">
              <h3>
                { this.props.item.name }
              </h3>
              <h4>
                by { this.props.item.vendor }
              </h4>
              <div>
                { this.props.item.tagline }
              </div>
              <AppCardRatingsComp key={ this.props.item.id } rating={ this.props.item.rating } reviews={ this.props.item.reviews } />
            </div>
          </div>
        </Link>
      </div>
    );
  }
});

var AppCardComp = React.createClass({
  render: function() {
    var cardNode = this.props.data.map(function(card) {
      return (
        React.createElement(AppCard, {item: card, key: card.id})
      );
    });
    return (
      <div className="row">
        { cardNode }
      </div>
    );
  }
});

var AppCardBoxComp = React.createClass({
  render: function() {
    return (
      <div>
        <AppCardComp data={ this.props.data } />
      </div>
    );
  }
});

export default AppCardBoxComp;
