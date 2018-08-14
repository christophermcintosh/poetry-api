import axios from 'axios';

import { POETRYDB_API_KEY } from './';

const GET_AUTHORS = 'GET_AUTHORS';
const GET_AUTHOR = 'GET_AUTHOR';
const GET_TITLE = 'GET_TITLE';

const initialState = {
  authors: [],
  author: {}
};

export const getAuthors = authors => {
  return {
    type: GET_AUTHORS,
    authors
  };
};

export const getAuthor = author => {
  return {
    type: GET_AUTHOR,
    author
  };
};

export const getTitles = author => {
  return {
    type: GET_TITLE,
    author
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
        dispatch(getAuthors(authors.authors));
      })
      .catch(function(error) {
        console.log(error);
      });
};

export const fetchAuthor = author => {
  return dispatch =>
    axios({
      method: 'get',
      url: `https://thundercomb-poetry-db-v1.p.mashape.com/author/${author}`,
      headers: {
        'X-Mashape-Key': POETRYDB_API_KEY
      }
    })
      .then(res => res.data)
      .then(author => {
        dispatch(getAuthor(author));
      })
      .catch(function(error) {
        console.log(error);
      });
};

export const fetchTitles = author => {
  return dispatch =>
    axios({
      method: 'get',
      url: `https://thundercomb-poetry-db-v1.p.mashape.com/author/${author}`,
      headers: {
        'X-Mashape-Key': POETRYDB_API_KEY
      }
    })
      .then(res => res.data)
      .then(author => {
        console.log(author);
        dispatch(getTitles(author));
      })
      .catch(function(error) {
        console.log(error);
      });
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_AUTHORS:
      return Object.assign({}, state, { authors: action.authors });
    case GET_AUTHOR:
      return Object.assign({}, state, { author: action.author });
    case GET_TITLE:
      return Object.assign({}, state, { titles: action.titles });
    default:
      return state;
  }
}
