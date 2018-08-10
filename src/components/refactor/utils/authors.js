import axios from 'axios';

const POETRYDB_API_KEY = `${process.env.REACT_APP_POETRYDB_API_KEY}`;

export function getAuthors() {
  axios({
    method: 'get',
    url: 'https://thundercomb-poetry-db-v1.p.mashape.com/author',
    headers: {
      'X-Mashape-Key': POETRYDB_API_KEY
    }
  })
    .then(res => res.data)
    .then(authors => {
      this.setState({
        authors
      });
    })
    .catch(function(error) {
      console.log(error);
    });
}
