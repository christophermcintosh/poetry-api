import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleChange = async event => {
    await this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return <input type="text" name="value" onChange={this.handleChange} />;
  }
}

export default SearchBar;
