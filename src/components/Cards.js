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
  render: function() {
    console.log('AppCardItemComp', this.props);
    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <Link to="/app/peperoni">
          <div className="thumbnail">
            <img src={ 'https://images.appcenter.intuit.com/Content/images/AppCards' + this.props.item.img } />
            <div className="caption">
              <h3>
                { this.props.item.name }
              </h3>
              <div>
                by { this.props.item.vendor }
              </div>
              <div>
                { this.props.item.tagline }
              </div>
              <AppCardRatingsComp />
            </div>
          </div>
        </Link>
      </div>
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
        <AppCardComp data={ this.props.data } />
      </div>
    );
  }
});

export default AppCardBoxComp;
