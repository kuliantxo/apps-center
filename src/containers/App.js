import React from 'react';
import { Link } from 'react-router';
import SearchBar from '../components/SearchBar.js';
// https://github.com/webpack/less-loader
require("../../file.less");

var App = React.createClass({
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
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="dropdown">
                  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Dropdown
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-8">
                <SearchBar />
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          { this.props.children }
        </section>
      </div>
    );
  }
});

export default App;
