import React from 'react';

var appCard = {
  id: '1099misce-file',
  code: '4220c271-51cd-4815-807e-ca64761af8c3',
  img: '/b7nigcbq4n/Submitted15/tax1099-logo-qbapps.png',
  name: '1099 MISC e-file by Tax1099.com',
  vendor: 'by TechAtlantis, Inc',
  tagline: 'E-File your year-end forms easily and quickly!',
  rating: 5,
  reviews: 3,
  description: 'eRequisition™ uses the data from your QuickBooks Online company. Simply create a Purchase Requisition (PR) and send through a series of Approvals. Once the PR has been completely approved, a new Purchase Order will be created in QuickBooks.'
};

let AppCardTop = React.createClass({
  render: function() {
    console.log('AppCardTop', this.props);
    return (
      <div className="row">
        <div className="col-sm-8">
          <h3>
            { this.props.data.name }
          </h3>
          <div>
            { this.props.data.tagline }
          </div>
        </div>
        <div className="col-sm-4 text-right">
          <button className="btn btn-lg btn-primary">Learn More</button>
        </div>
      </div>
    );
  }
});

let AppCardDescription = React.createClass({
  render: function() {
    console.log('AppCardDescription', this.props);
    return (
      <div className="row">
        <div className="col-sm-8">
          <iframe name="player-iframe" id="appCardVideo" frameborder="0" title="YouTube video player" width="640" height="400" src="https://www.youtube.com/embed/WNxXbHQBb8w?widget_referrer=https%3A%2F%2Fqbo.intuit.com%2Fapp%2FqboAppCard%3FshortName%3Dtrxlinkerequisition&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fappcenter.intuit.com&amp;widgetid=1"></iframe>
          <h3>
            Descriptioin
          </h3>
          <div>
            { this.props.data.description }
          </div>
        </div>
        <div className="col-sm-4">
          <div className="row">
            <div className="col-sm-6">
              <div className="thumbnail">
                <img src="https://img.youtube.com/vi/WNxXbHQBb8w/0.jpg" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="thumbnail">
                <img src="https://images.appcenter.intuit.com//Content/images/AppCards/b7qvm44mnh/7/Feature1.PNG" alt="Integrated Requisition Screen" title="Integrated Requisition Screen" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="thumbnail">
                <img src="https://images.appcenter.intuit.com//Content/images/AppCards/b7qvm44mnh/7/Feature2.PNG" alt="Informative Home Screen" title="Informative Home Screen" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="thumbnail">
                <img src="https://images.appcenter.intuit.com//Content/images/AppCards/b7qvm44mnh/7/Feature3.PNG" alt="User Management" title="User Management" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="thumbnail">
                <img src="https://images.appcenter.intuit.com//Content/images/AppCards/b7qvm44mnh/7/Feature4.PNG" alt="Workflow Management" title="Workflow Management" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

let AppCard = React.createClass({
  render() {
    return(
      <div>
        <AppCardTop data={ appCard } />
        <AppCardDescription data={ appCard } />
      </div>
    );
  }
});

export default AppCard;
