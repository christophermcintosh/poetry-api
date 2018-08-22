import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="text-right" id="header">
        <div>
          <button onClick={this.props.toggleDrawer('left', true)}>
            All Poets
          </button>
        </div>
        <div id="header-title" className="dancing-script">
          <Link to="/">
            <p>Poetry</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
