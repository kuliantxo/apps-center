import React from 'react';
require("./thumbnails.less");

let DescriptionThumbnails = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },
  updateProps: function(prop) {
    this.setState({ data: prop.data });
  },
  componentWillReceiveProps: function(nextProps) {
    this.updateProps(nextProps);
  },
  handleClick: function(i, e) {
    this.props.onImageClick(i);
  },
  render: function() {
    console.log('AppCardImages', this.props);
    var imageNodes = this.state.data.map(function(image, index) {
      return (
        <div key={ index } className="col-sm-6">
          <div className="thumbnail thumbnail-description" onClick={ this.handleClick.bind(this, index) }>
            <img src={ image.url } alt={ image.title } title={ image.title } />
          </div>
        </div>
      );
    }, this);
    return (
      <div className="row">
        <div className="col-sm-4">
          { imageNodes }
        </div>
      </div>
    );
  }
});

export default DescriptionThumbnails;
