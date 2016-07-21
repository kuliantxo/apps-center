import React from 'react';

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
          <iframe name="player-iframe" id="appCardVideo" frameBorder="0" title="YouTube video player" width="640" height="400" src="https://www.youtube.com/embed/WNxXbHQBb8w?widget_referrer=https%3A%2F%2Fqbo.intuit.com%2Fapp%2FqboAppCard%3FshortName%3Dtrxlinkerequisition&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fappcenter.intuit.com&amp;widgetid=1"></iframe>
          <h3>
            Description
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
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: "../../json/description.json",
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
        <AppCardTop data={ this.state.data } />
        <AppCardDescription data={ this.state.data } />
      </div>
    );
  }
});

export default AppCard;
