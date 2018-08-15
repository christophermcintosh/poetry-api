import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="text-right" id="header">
        <div id="header-title">
          <Link to="/">
            <p>Poetry</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
