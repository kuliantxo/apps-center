import React from 'react';
import CardsCarousel from '../components/cards-carousel/CardsCarousel.js';

let MyApps = React.createClass({
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
    return(
      <div>
        <h1>My Apps</h1>
        <CardsCarousel carId='myCar' data={ this.state.data } />
      </div>
    );
  }
});

export default MyApps;
