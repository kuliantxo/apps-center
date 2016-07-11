import React from 'react';

var appCards = {
  header: 'React Integration',
  cards: [
    [
      {id: 1, appName: "Pete Hunt", vendorName: "This is one comment", tagline: "This is the tagline is one comment"},
      {id: 2, appName: "Jordan Walke", vendorName: "This is another comment", tagline: "This is the tagline is one comment"},
      {id: 3, appName: "Pete Hunt Pepe", vendorName: "This is vendor name", tagline: "This is the tagline is one comment"},
      {id: 4, appName: "Jordan Walke Maria", vendorName: "This is vendorname", tagline: "This is the tagline is one comment 2"}
    ], [
      {id: 5, appName: "Jordan Walke", vendorName: "This is another comment", tagline: "This is the tagline is one comment"},
      {id: 6, appName: "Jordan Walke Maria", vendorName: "This is vendorname", tagline: "This is the tagline is one comment 2"},
      {id: 7, appName: "Pete Hunt", vendorName: "This is one comment", tagline: "This is the tagline is one comment"},
      {id: 8, appName: "Pete Hunt Pepe", vendorName: "This is vendor name", tagline: "This is the tagline is one comment"}
    ]
  ]
};

var AppCardIconComp = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div id="appcard-bar_181d6916-5107-4024-afe7-6e2fbc3c74d7" className="appIcon size80">
        <img id="appcard-logo_181d6916-5107-4024-afe7-6e2fbc3c74d7" src="https://vm-appcenter.intuit.com/Content/Static/images/appIcon_placeholder.png" className="themeColorAppCards" bar="appcard-bar_181d6916-5107-4024-afe7-6e2fbc3c74d7" hover-over="home-appcard-second-view_181d6916-5107-4024-afe7-6e2fbc3c74d7" />
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
      <a href="/app-b7rpigwfpu?locale=en-US" trackname="QBONewestCarousel - app-b7rpigwfpu" onClick={ this.onClickHandler }>
        <div id="home-appcard-parent-view_560704a4-576e-4ebb-b33d-fa5850c151c6" className="home-bigappcard-class">
          <div id="home-appcard-first-view_560704a4-576e-4ebb-b33d-fa5850c151c6" className="home-bigappcard-inner">
            <AppCardIconComp icon="{ this.props.item.icon }" />
            <div className="bigappcard-details">
              <div className="bigappcard-display-name">
                { this.props.item.appName }
              </div>
              <div className="bigappcard-vendor-name">
                by { this.props.item.vendorName }
              </div>
              <div className="bigappcard-tagline">
                { this.props.item.tagline }
              </div>
            </div>
            <AppCardRatingsComp />
          </div>
        </div>
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
      React.createElement('ul', {id: 'ea32b2d0-51d2-4f9b-816d-948614aa8094'},
        cardNode
      )
    );
  }
});

var AppCardBoxComp = React.createClass({
  render: function() {
    console.log('AppCardBoxComp', this.props);
    return (
      <div className="qboAppBoxesContainer">
        <div className="appsbanner_wrap">
          <div className="appsbanner">
            <div className="app-header left headinglight">{ this.props.data.header }</div>
            <div className="carousel-wrap">
              <div className="jscarousal-horizontal">
                <div id="jscarousel-slider-back" className="jscarousel-slider jscarousal-horizontal-back prev_ea32b2d0-51d2-4f9b-816d-948614aa8094 fa fa-angle-left"></div>
                <div className="carousel-viewport">
                  <AppCardComp data={ this.props.data.cards } />
                </div>
                <div id="carousel-slider-forward" className="jscarousel-slider jscarousal-horizontal-forward next_ea32b2d0-51d2-4f9b-816d-948614aa8094 fa fa-angle-right"></div>
              </div>
            </div>
          </div>
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
