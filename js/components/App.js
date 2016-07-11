import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
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

    <section className="container">
      { children }
    </section>
  </div>
);

// App.propTypes = { children: React.PropTypes.object };

export default App;
