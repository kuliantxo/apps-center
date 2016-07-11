import React from 'react';

var appCards = {
  header: 'React Integration',
  cards: [
    {id: 1, appName: "Pete Hunt", vendorName: "This is one comment", tagline: "This is the tagline is one comment"},
    {id: 2, appName: "Jordan Walke", vendorName: "This is another comment", tagline: "This is the tagline is one comment"},
    {id: 3, appName: "Pete Hunt Pepe", vendorName: "This is vendor name", tagline: "This is the tagline is one comment"},
    {id: 4, appName: "Jordan Walke Maria", vendorName: "This is vendorname", tagline: "This is the tagline is one comment 2"},
    {id: 5, appName: "Jordan Walke", vendorName: "This is another comment", tagline: "This is the tagline is one comment"},
    {id: 6, appName: "Jordan Walke Maria", vendorName: "This is vendorname", tagline: "This is the tagline is one comment 2"},
    {id: 7, appName: "Pete Hunt", vendorName: "This is one comment", tagline: "This is the tagline is one comment"},
    {id: 8, appName: "Pete Hunt Pepe", vendorName: "This is vendor name", tagline: "This is the tagline is one comment"}
  ]
};

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

var AppCardItemComp = React.createClass({
  onClickHandler: function(){
    event.preventDefault();
    openAppCardDetails('app-b7p7hm22cm');
  },
  render: function() {
    console.log('AppCardItemComp', this.props);
    return (
      <a href="" onClick={ this.onClickHandler }>
        <div>
          { this.props.item.appName }
        </div>
        <div>
          by { this.props.item.vendorName }
        </div>
        <div>
          { this.props.item.tagline }
        </div>
        <AppCardRatingsComp />
      </a>
    );
  }
});

var AppCardItemList = React.createClass({
  render: function() {
    console.log('AppCardItemList', this.props);
    var cardNode = this.props.card.map(function(card) {
      return (
        React.createElement(AppCardItemComp, {item: card, key: card.id})
      );
    });
    return (
      React.createElement('li', {},
        cardNode
      )
    );
  }
});

var AppCardComp = React.createClass({
  render: function() {
    console.log('AppCardComp', this.props);
    var cardNode = this.props.data.map(function(card) {
      return (
        React.createElement(AppCardItemList, {card: card})
      );
    });
    return (
      React.createElement('ul',
        cardNode
      )
    );
  }
});

var AppCardBoxComp = React.createClass({
  render: function() {
    console.log('AppCardBoxComp', this.props);
    return (
      <div>{ this.props.data.header }</div>
        <div>
          <AppCardComp data={ this.props.data.cards } />
        </div>
      </div>
    );
  }
});

let Home = React.createClass({
  render() {
    return(
      <AppCardBoxComp data={ appCards } />
    );
  }
});

export default Home;
