import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Header;
