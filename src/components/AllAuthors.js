import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { authorActions } from './actions/';
import { fetchAuthors } from './store';
import axios from 'axios';

const POETRYDB_API_KEY = `${process.env.REACT_APP_POETRYDB_API_KEY}`;

class AllAuthors extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchAuthors();
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAuthors: () => dispatch(fetchAuthors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllAuthors);
