import React from 'react';
import { Link } from 'react-router';

var AppCardIconComp = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div>
        <img src="https://vm-appcenter.intuit.com/Content/Static/images/appIcon_placeholder.png" />
      </div>
    );
  }
});

var AppCardRatingsComp = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div className="ratings">
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star-half"></span>
        <span className="fa fa-star grey-star"></span>
        <span className="review">
          <span className="reviews">(2)</span>
        </span>
      </div>
    );
  }
});

var AppCard = React.createClass({
  onClickHandler: function(){
    event.preventDefault();
    openAppCardDetails('app-b7p7hm22cm');
  },
  render: function() {
    console.log('AppCardItemComp', this.props);
    return (
      <Link to="/app/peperoni" onClick={ this.onClickHandler }>
        <div className="col-sm-4">
          <div className="thumbnail" src="/assets/thumbnaildiv.png" alt="242x200">
            <h3>
              { this.props.item.appName }
            </h3>
            <div>
              by { this.props.item.vendorName }
            </div>
            <div>
              { this.props.item.tagline }
            </div>
            <AppCardRatingsComp />
          </div>
        </div>
      </Link>
    );
  }
});

var AppCardComp = React.createClass({
  render: function() {
    console.log('AppCardComp', this.props);
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
    console.log('AppCardBoxComp', this.props);
    return (
      <div>
        <h1>{ this.props.data.header }</h1>
        <AppCardComp data={ this.props.data.cards } />
      </div>
    );
  }
});

export default AppCardBoxComp;
