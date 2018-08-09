import React, { Component } from 'react';
import axios from 'axios';

const POETRYDB_API_KEY = `${process.env.REACT_APP_POETRYDB_API_KEY}`;

class AllAuthors extends Component {
  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://thundercomb-poetry-db-v1.p.mashape.com/author',
      headers: {
        'X-Mashape-Key': POETRYDB_API_KEY
      }
    })
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}
export default AllAuthors;
