import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Button, DropdownButton, MenuItem, FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
// https://github.com/webpack/less-loader
require("../../file.less");

var App = React.createClass({
  getInitialState: function() {
    return {query: ''};
  },
  handleQueryChange: function(e) {
    this.setState({query: e.target.value});
    if(document.querySelector('#search-form').className.indexOf(' open') == -1) {
      document.querySelector('#search-form').className += " open";
    }
    document.querySelector('#search-form .form-control').addEventListener('blur', function() {
      document.querySelector('#search-form').className = document.querySelector('#search-form').className.replace(' open', '');
    });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var query = this.state.query.trim();
    if (!query) {
      return;
    }
    // TODO: send request to the server
    this.setState({query: ''});
  },
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/">All Apps</Link></li>
                <li><Link to="/my_apps">My Apps</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <section>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} sm={4}>
                <DropdownButton title="Dropdown" id="bg-nested-dropdown">
                  <MenuItem eventKey="1">Dropdown link</MenuItem>
                  <MenuItem eventKey="2">Dropdown link</MenuItem>
                </DropdownButton>
              </Col>
              <Col xs={12} sm={8}>
                <form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <InputGroup id="search-form">
                      <FormControl type="text"
                        value={this.state.query}
                        onChange={this.handleQueryChange}
                      />
                      <ul className="dropdown-menu" role="menu" aria-labelledby="bg-nested-dropdown">
                        <MenuItem eventKey="1">Dropdown link</MenuItem>
                        <MenuItem eventKey="2">Dropdown link</MenuItem>
                      </ul>
                      <InputGroup.Button>
                        <Button><Glyphicon glyph="search" /></Button>
                      </InputGroup.Button>
                    </InputGroup>
                  </FormGroup>
                </form>
              </Col>
            </Row>
          </Grid>
        </section>

        <section className="container">
          { this.props.children }
        </section>
      </div>
    );
  }
});

export default App;
