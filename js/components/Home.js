import React from 'react';
import AppCardBoxComp from './Cards.js';

var appCards = {
  header: 'All Apps',
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

let Home = React.createClass({
  render() {
    return(
      <AppCardBoxComp data={ appCards } />
    );
  }
});

export default Home;
