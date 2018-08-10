import axios from 'axios';

const POETRYDB_API_KEY = `${process.env.REACT_APP_POETRYDB_API_KEY}`;

const GET_AUTHORS = 'GET_AUTHORS';
const GET_AUTHOR = 'GET_AUTHOR';

const authors = [];

export const getAuthors = authors => {
  return {
    type: GET_AUTHORS,
    authors
  };
};

export const fetchAuthors = () => {
  return dispatch =>
    axios({
      method: 'get',
      url: 'https://thundercomb-poetry-db-v1.p.mashape.com/author',
      headers: {
        'X-Mashape-Key': POETRYDB_API_KEY
      }
    })
      .then(res => res.data)
      .then(authors => {
        dispatch(getAuthors(authors));
      })
      .catch(function(error) {
        console.log(error);
      });
};

export default function(state = authors, action) {
  switch (action.type) {
    case GET_AUTHORS:
      return action.authors;
    case GET_AUTHOR:
      return [action.authors];

    default:
      return state;
  }
}
